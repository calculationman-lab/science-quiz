(function(){
  'use strict';
  const $=id=>document.getElementById(id),display=window.matchMedia('(display-mode: standalone)');
  const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  let device=ios?'ios':/Android/.test(navigator.userAgent)?'android':'desktop';
  let deferred=null,busy=false,installed=false;
  const standalone=()=>display.matches||navigator.standalone===true;
  function status(message){$('install-status').textContent=message;$('install-dialog-status').textContent=message;}
  function render(){
    $('install-card').hidden=standalone()||installed;
    const native=!!deferred&&!ios;
    $('install-button').textContent=native?'アプリをインストール':ios?'ホーム画面に追加する':'アプリを追加する';
    $('install-confirm-button').hidden=!native||device==='ios';
    $('install-button').disabled=busy;$('install-confirm-button').disabled=busy;
    for(const button of document.querySelectorAll('[data-install-device]')){
      const selected=button.dataset.installDevice===device;button.setAttribute('aria-pressed',String(selected));button.classList.toggle('selected',selected);
    }
    for(const panel of document.querySelectorAll('[data-install-guide]'))panel.hidden=panel.dataset.installGuide!==device;
    if((standalone()||installed)&&$('install-dialog').open)$('install-dialog').close();
  }
  function help(){render();if(!$('install-dialog').open)$('install-dialog').showModal();}
  async function install(){
    if(busy)return;
    if(!deferred||ios){help();return;}
    const prompt=deferred;deferred=null;busy=true;render();status('ブラウザの確認画面で「インストール」を選んでください。');
    try{
      await prompt.prompt();const choice=await prompt.userChoice;
      if(!installed)status(choice.outcome==='accepted'?'追加の手続きを開始しました。アプリのアイコンを確認してください。':'インストールを見送りました。「追加方法を見る」から手順を確認できます。');
    }catch{
      status('確認画面を開けませんでした。ブラウザのメニューから追加できます。');help();
    }finally{busy=false;render();}
  }
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();if(standalone()||installed)return;deferred=event;render();});
  window.addEventListener('appinstalled',()=>{installed=true;deferred=null;status('理科マスターを追加しました。アイコンから開けます。');render();});
  display.addEventListener?.('change',render);
  window.addEventListener('pageshow',render);
  $('install-button').addEventListener('click',install);$('install-confirm-button').addEventListener('click',install);
  $('install-help-button').addEventListener('click',help);$('close-install').addEventListener('click',()=>$('install-dialog').close());
  for(const button of document.querySelectorAll('[data-install-device]'))button.addEventListener('click',()=>{device=button.dataset.installDevice;render();});
  $('copy-install-url').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText($('install-url').value);$('install-copy-status').textContent='URLをコピーしました。ブラウザのアドレス欄に貼り付けて開いてください。';}
    catch{$('install-url').focus();$('install-url').select();$('install-copy-status').textContent='コピーできませんでした。選択されたURLを長押し、または右クリックしてコピーしてください。';}
  });
  render();
})();
