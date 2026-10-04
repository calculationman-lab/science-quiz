(function(){
  'use strict';
  const D=window.ScienceData,C=window.ScienceCore,G=window.ScienceDiagrams,$=id=>document.getElementById(id);
  const byId=new Map(D.allQuestions.map(q=>[q.id,q])),byUnit=new Map(D.units.map(u=>[u.id,u]));
  const cleanProgress=raw=>C.cleanProgress(raw,D.allQuestions,Date.now(),D.aliases);
  const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  let storageError=false;
  function read(key){try{return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}}
  function write(key,value){try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,JSON.stringify(value));storageError=false;}catch{storageError=true;}renderStorage();}
  function renderStorage(){ $('storage-status').textContent=storageError?'このブラウザでは記録を保存できません。バックアップを保存してください。':''; }
  let settings=C.cleanSettings(read(C.KEYS.settings)),progress=cleanProgress(read(C.KEYS.progress)),session=C.validateSession(read(C.KEYS.session),D.allQuestions),result=null,revealed=false;
  function persistSettings(){write(C.KEYS.settings,settings);}
  function persistProgress(){write(C.KEYS.progress,progress);}
  function persistSession(){write(C.KEYS.session,session);}
  function show(screen){for(const id of ['home','quiz','result'])$(id+'-screen').hidden=id!==screen;window.scrollTo({top:0});}
  function jstDay(at){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(at));}
  function dateLabel(at){return new Intl.DateTimeFormat('ja-JP',{timeZone:'Asia/Tokyo',month:'numeric',day:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(at));}
  function renderCountdown(){
    const now=new Date(),d=window.SchoolCountdown.examDays(settings.examDate,now),school=window.SchoolCountdown.schoolDays(settings.enrollmentYear,settings.examDate,now);
    $('exam-days').textContent=d===null?'—':String(d);
    $('school-days').textContent=school?`入学から${school.elapsed}日 · 全${school.total}日`:'設定で日付を確認してください';
  }
  function renderUnits(){
    $('unit-options').replaceChildren();
    for(const category of [...new Set(D.units.map(u=>u.category))]){
      const group=document.createElement('div');group.className='unit-group';
      const head=document.createElement('h3');head.textContent=category;group.append(head);
      const grid=document.createElement('div');grid.className='unit-grid';
      for(const u of D.units.filter(u=>u.category===category)){
        const q=D.questions.filter(q=>q.unit===u.id),label=document.createElement('label');label.className='unit-option';
        const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.value=u.id;checkbox.checked=settings.units.includes(u.id);checkbox.addEventListener('change',()=>{settings.units=[...document.querySelectorAll('.unit-option input:checked')].map(x=>Number(x.value));persistSettings();renderPool();});
        const info=document.createElement('span');info.innerHTML=`<strong>${u.id}. ${esc(u.name)}</strong><small>${q.length}問 · 図 ${q.filter(q=>q.diagram).length}問</small>`;label.append(checkbox,info);grid.append(label);
      }
      group.append(grid);$('unit-options').append(group);
    }
  }
  function renderPool(){
    const pool=C.pool(D.questions,settings);$('pool-count').textContent=pool.length+'問';$('unit-summary').textContent=`${settings.units.length}単元を選択`;
    $('all-count').textContent=`${pool.length}問`;$('count-note').textContent=pool.length?`選択範囲から重複なしで出題します。指定より少ない場合は${pool.length}問すべて出題します。`:'単元を選択してください。図だけの練習では、図のある問題を出題します。';
    for(const b of document.querySelectorAll('[data-count]'))b.disabled=!pool.length;
    $('today-button').disabled=!pool.length;
    for(const b of document.querySelectorAll('[data-mode]')){const active=b.dataset.mode===settings.mode;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',active);}
    for(const b of document.querySelectorAll('[data-filter]')){const active=b.dataset.filter===settings.filter;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',active);}
  }
  function renderHome(){
    progress=cleanProgress(progress);renderCountdown();renderUnits();renderPool();renderStorage();
    const today=progress.history.filter(h=>jstDay(h.at)===jstDay(Date.now()));$('today-status').textContent=today.length?`${today.length}回 · ${today.reduce((n,h)=>n+h.total,0)}問学習しました`:'まだ学習していません';
    $('content-summary').textContent=`17単元 · ${D.questions.length}問 · 図の問題 ${D.questions.filter(q=>q.diagram).length}問`;
    $('resume-box').hidden=!session;if(session)$('resume-text').textContent=`${session.mode==='choice'?'4択':'記述'} ${session.ids.length}問の${session.index+1}問目から再開できます。`;
    for(const mode of ['choice','written']){const b=$('weekly-'+mode),n=C.weekly(progress,mode,D.questions).length;b.disabled=!n;b.innerHTML=`${mode==='choice'?'4択で復習':'記述の△・×を復習'} <span>${n}問</span>`;}
    $('history-list').replaceChildren();
    if(!progress.history.length)$('history-list').innerHTML='<p class="empty">まだ記録はありません。</p>';
    else for(const h of progress.history.slice(-15).reverse()){
      const row=document.createElement('div');row.className='history-row';row.innerHTML=`<div><strong>${h.mode==='choice'?'4択':'記述'}${h.review?' · 復習':''}</strong><small>${dateLabel(h.at)}</small></div><div>○ ${h.correct}／${h.total}${h.mode==='written'?` · △ ${h.partial}`:''}</div>`;$('history-list').append(row);
    }
    $('clear-history').disabled=!progress.history.length&&!Object.keys(progress.mistakes.choice).length&&!Object.keys(progress.mistakes.written).length;
  }
  function start(count,mode=settings.mode,pool=C.pool(D.questions,settings),review=false){
    if(!pool.length){$('start-status').textContent='出題する問題がありません。単元と問題の種類を選んでください。';return;}
    if(session&&!confirm('途中の学習が保存されています。新しい学習に置き換えますか？'))return;
    const selected=C.shuffle(pool).slice(0,count==='all'?pool.length:Math.min(Number(count),pool.length));
    session={version:1,mode,ids:selected.map(q=>q.id),index:0,answers:selected.map(()=>null),optionOrder:selected.map(q=>C.shuffle(q.options)),startedAt:Date.now(),review};result=null;revealed=false;persistSession();show('quiz');renderQuestion();
  }
  function current(){return byId.get(session.ids[session.index]);}
  function renderFigure(q,target){target.innerHTML=q.diagram?G.render(q.diagram).svg:'';}
  function feedback(q,grade=null){
    $('feedback').hidden=false;$('feedback').innerHTML=`${grade?`<h2>${grade==='correct'?'正解です':grade==='partial'?'一部をもう一度確かめましょう':'答えを確かめましょう'}</h2>`:''}<p class="answer-label">答え</p><p><strong>${esc(q.answer)}</strong></p><p>${esc(q.explanation)}</p><p class="source">出典：教材PDF ${q.sourcePage}ページの内容をもとに作成</p>`;
  }
  function renderQuestion(){
    const q=current(),answer=session.answers[session.index];revealed=!!answer;
    $('quiz-mode').textContent=`${session.mode==='choice'?'4択':'記述'}${session.review?' · 復習':''}`;$('quiz-progress').textContent=`${session.index+1}／${session.ids.length}問`;$('progress-bar').style.width=`${session.index/session.ids.length*100}%`;
    $('quiz-unit').textContent=byUnit.get(q.unit).name;$('question').textContent=q.prompt;
    $('figure').hidden=!q.diagram;renderFigure(q,$('diagram'));$('choices').replaceChildren();$('choices').hidden=session.mode!=='choice';$('written-panel').hidden=session.mode!=='written';$('feedback').hidden=true;$('next-button').hidden=!answer;$('self-grade').hidden=!answer;$('reveal-button').hidden=!!answer;
    $('next-button').textContent=session.index===session.ids.length-1?'学習結果を見る':'次の問題';
    if(session.mode==='choice')session.optionOrder[session.index].forEach((option,i)=>{
      const b=document.createElement('button');b.className='choice';b.dataset.answer=option;b.innerHTML=`<span class="choice-letter">${'ABCD'[i]}</span><span>${esc(option)}</span>`;
      b.disabled=!!answer;
      if(answer&&option===q.answer){b.classList.add('correct');b.innerHTML+='<span class="choice-status">○ 正解</span>';}
      else if(answer&&option===answer.selected){b.classList.add('wrong');b.innerHTML+='<span class="choice-status">選んだ答え</span>';}
      b.addEventListener('click',()=>grade(option===q.answer?'correct':'wrong',option));$('choices').append(b);
    });
    for(const b of document.querySelectorAll('[data-grade]')){b.disabled=!!answer;b.classList.toggle('selected',answer?.grade===b.dataset.grade);}
    if(answer)feedback(q,answer.grade);$('question').focus({preventScroll:true});
  }
  function grade(value,selected=null){
    if(!session||session.answers[session.index]||session.mode==='written'&&!revealed)return;
    const q=current();session.answers[session.index]={grade:value,selected};
    if(value!=='correct'){progress=cleanProgress(progress);progress.mistakes[session.mode][D.aliases[q.id]||q.id]=Date.now();persistProgress();}
    persistSession();renderQuestion();
  }
  function next(){if(!session.answers[session.index])return;if(session.index===session.ids.length-1)finish();else{session.index++;persistSession();renderQuestion();window.scrollTo({top:0});}}
  function finish(){
    result=JSON.parse(JSON.stringify(session));const correct=result.answers.filter(a=>a.grade==='correct').length,partial=result.answers.filter(a=>a.grade==='partial').length;
    progress=cleanProgress(progress);progress.history.push({mode:result.mode,at:Date.now(),correct,partial,total:result.ids.length,review:result.review});progress.history=progress.history.slice(-100);persistProgress();session=null;persistSession();
    const wrong=result.ids.filter((id,i)=>result.answers[i].grade!=='correct');$('result-summary').textContent=result.mode==='choice'?`正解 ${correct}／${result.ids.length}問`:`○ ${correct}問 · △ ${partial}問 · × ${wrong.length-partial}問`;
    $('result-meta').textContent=`${result.mode==='choice'?'4択':'記述'}${result.review?'の復習':''} · ${result.ids.length}問学習しました。`;
    $('result-wrong').replaceChildren();
    if(wrong.length){const heading=document.createElement('h2');heading.textContent='答えをもう一度確かめる';$('result-wrong').append(heading);}
    else{const p=document.createElement('p');p.className='muted';p.textContent='今回の問題はすべて正解でした。';$('result-wrong').append(p);}
    for(const id of wrong){const q=byId.get(id),a=result.answers[result.ids.indexOf(id)],detail=document.createElement('details');detail.className='review-item';detail.innerHTML=`<summary>${esc(q.prompt)}</summary>${q.diagram?G.render(q.diagram).svg:''}${a.selected?`<p>選んだ答え：${esc(a.selected)}</p>`:''}<p class="review-answer">答え：${esc(q.answer)}</p><p>${esc(q.explanation)}</p><p class="fine">教材PDF ${q.sourcePage}ページ</p>`;$('result-wrong').append(detail);}
    $('review-button').hidden=!wrong.length;show('result');$('result-heading').focus({preventScroll:true});
  }
  function home(){show('home');renderHome();}
  function openSettings(){$('exam-date').value=settings.examDate;$('enrollment-year').value=settings.enrollmentYear;$('settings-status').textContent='';$('settings-dialog').showModal();}
  function exportData(){try{
    const payload={app:'理科マスター',formatVersion:1,exportedAt:new Date().toISOString(),progress:cleanProgress(progress),settings,session};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`理科マスター_バックアップ_${jstDay(Date.now()).replaceAll('-','')}.json`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('settings-status').textContent='バックアップを保存しました。端末のダウンロードを確認してください。';
  }catch{$('settings-status').textContent='バックアップを保存できませんでした。';}}
  async function importData(file){
    if(!file)return;
    try{
      if(file.size>2*1024*1024)throw Error('ファイルが大きすぎます。理科のバックアップを選んでください。');
      const data=C.validateBackup(JSON.parse(await file.text()),D.allQuestions,D.aliases);
      if(!confirm(`理科の学習記録${data.progress.history.length}件・設定・途中の学習を置き換えます。現在のデータはバックアップ済みですか？`))return;
      const old=Object.values(C.KEYS).map(key=>[key,localStorage.getItem(key)]);
      try{localStorage.setItem(C.KEYS.progress,JSON.stringify(data.progress));localStorage.setItem(C.KEYS.settings,JSON.stringify(data.settings));if(data.session)localStorage.setItem(C.KEYS.session,JSON.stringify(data.session));else localStorage.removeItem(C.KEYS.session);}
      catch(error){for(const [key,value] of old){try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,value);}catch{}}throw error;}
      progress=data.progress;settings=data.settings;session=data.session;result=null;home();$('exam-date').value=settings.examDate;$('enrollment-year').value=settings.enrollmentYear;$('settings-status').textContent='理科のバックアップを読み込みました。';
    }catch(error){$('settings-status').textContent=error.message==='Unexpected end of JSON input'?'ファイルを読み込めませんでした。':error.message||'ファイルを読み込めませんでした。';}finally{$('import-file').value='';}
  }
  for(const b of document.querySelectorAll('[data-mode]'))b.addEventListener('click',()=>{settings.mode=b.dataset.mode;persistSettings();renderPool();});
  for(const b of document.querySelectorAll('[data-filter]'))b.addEventListener('click',()=>{settings.filter=b.dataset.filter;persistSettings();renderPool();});
  for(const b of document.querySelectorAll('[data-count]'))b.addEventListener('click',()=>start(b.dataset.count));
  for(const b of document.querySelectorAll('[data-grade]'))b.addEventListener('click',()=>grade(b.dataset.grade));
  $('all-units').addEventListener('click',()=>{settings.units=D.units.map(u=>u.id);persistSettings();renderUnits();renderPool();});
  $('no-units').addEventListener('click',()=>{settings.units=[];persistSettings();renderUnits();renderPool();});
  $('today-button').addEventListener('click',()=>start(20));$('resume-button').addEventListener('click',()=>{if(session){show('quiz');renderQuestion();}});
  $('quit-button').addEventListener('click',()=>{if(confirm('途中の学習を保存してTOPへ戻りますか？'))home();});
  $('reveal-button').addEventListener('click',()=>{revealed=true;feedback(current());$('reveal-button').hidden=true;$('self-grade').hidden=false;});
  $('next-button').addEventListener('click',next);$('home-button').addEventListener('click',home);
  $('review-button').addEventListener('click',()=>{if(result)start('all',result.mode,result.ids.filter((id,i)=>result.answers[i].grade!=='correct').map(id=>byId.get(id)),true);});
  for(const mode of ['choice','written'])$('weekly-'+mode).addEventListener('click',()=>start('all',mode,C.weekly(progress,mode,D.questions),true));
  $('clear-history').addEventListener('click',()=>{if(confirm('理科の学習記録と7日間の誤答記録を消しますか？途中の学習は残ります。')){progress={version:1,history:[],mistakes:{choice:{},written:{}}};persistProgress();renderHome();}});
  $('settings-button').addEventListener('click',openSettings);$('close-settings').addEventListener('click',()=>$('settings-dialog').close());
  $('settings-form').addEventListener('submit',event=>{event.preventDefault();const date=$('exam-date').value,year=Number($('enrollment-year').value);if(!window.SchoolCountdown.schoolDays(year,date)){ $('settings-status').textContent='試験日は入学年度の4月1日より後にしてください。';return;}settings.examDate=date;settings.enrollmentYear=year;persistSettings();renderCountdown();$('settings-status').textContent=storageError?'設定を保存できませんでした。':'日付を保存しました。';});
  $('export-button').addEventListener('click',exportData);$('import-button').addEventListener('click',()=>$('import-file').click());$('import-file').addEventListener('change',event=>importData(event.target.files[0]));
  $('zoom-button').addEventListener('click',()=>{renderFigure(current(),$('zoom-content'));$('zoom-dialog').showModal();});$('close-zoom').addEventListener('click',()=>$('zoom-dialog').close());
  window.addEventListener('pageshow',()=>{renderCountdown();if(!$('home-screen').hidden)renderHome();});document.addEventListener('visibilitychange',()=>{if(!document.hidden){renderCountdown();if(!$('home-screen').hidden)renderHome();}});setInterval(renderCountdown,60000);
  renderHome();
  // Probe write permission without touching any other app's keys.
  try{const key='science-quiz-storage-probe';localStorage.setItem(key,'1');localStorage.removeItem(key);}catch{storageError=true;renderStorage();}
  if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
    navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(async registration=>{await navigator.serviceWorker.ready;if(registration.active)$('offline-status').textContent='オフライン学習の準備ができました。';return registration.update();}).catch(()=>{$('offline-status').textContent='オフライン準備は未完了です。インターネット接続中は学習できます。';});
  }else $('offline-status').textContent='ホーム画面への追加とオフライン保存は、HTTPSまたはlocalhostで利用できます。';
})();
