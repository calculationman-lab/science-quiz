(function(root){
  'use strict';
  function create(elements,getSettings,report=()=>{}){
    let generation=0;
    function stop(){generation++;for(const audio of Object.values(elements)){try{audio.pause();audio.currentTime=0;}catch{}}}
    function play(grade){
      if(!['correct','partial','wrong'].includes(grade))return Promise.resolve(false);
      const settings=getSettings();stop();const current=generation;
      if(!settings.soundEnabled)return Promise.resolve(false);
      const audio=elements[grade==='correct'?'correct':'wrong'];
      const failed=()=>{if(current===generation)report('効果音を再生できませんでした。端末の音量と効果音のON／OFFを確認してください。');return false;};
      try{
        audio.volume=0.7;
        // Start within the answer click, preserving browser user activation.
        const pending=audio.play();
        return Promise.resolve(pending).then(()=>{if(current!==generation)return false;report('');return true;},failed);
      }catch{return Promise.resolve(failed());}
    }
    return{play,stop};
  }
  const api={create};if(typeof module==='object'&&module.exports)module.exports=api;else root.ScienceSound=api;
})(typeof window!=='undefined'?window:null);
