(function(root){
  'use strict';
  function create(elements,getSettings,report=()=>{}){
    let generation=0;
    function stop(){generation++;for(const audio of Object.values(elements)){try{audio.pause();audio.currentTime=0;}catch{}}}
    function play(grade,preview=false){
      if(!['correct','partial','wrong'].includes(grade))return Promise.resolve(false);
      const settings=getSettings();stop();const current=generation;
      if(!settings.soundEnabled||settings.soundVolume<=0){if(preview)report('効果音をオンにして、音量を上げてください。');return Promise.resolve(false);}
      const audio=elements[grade==='correct'?'correct':'wrong'];
      const failed=()=>{if(current===generation)report('効果音を再生できませんでした。端末の音量を確認し、TOPの「正解の音を確認」からもう一度試してください。');return false;};
      try{
        audio.volume=settings.soundVolume;
        // Start within the answer/preview click, preserving browser user activation.
        const pending=audio.play();
        return Promise.resolve(pending).then(()=>{if(current!==generation)return false;report(preview?`${grade==='correct'?'正解':'不正解'}の効果音を再生しました。`:'');return true;},failed);
      }catch{return Promise.resolve(failed());}
    }
    return{play,stop};
  }
  const api={create};if(typeof module==='object'&&module.exports)module.exports=api;else root.ScienceSound=api;
})(typeof window!=='undefined'?window:null);
