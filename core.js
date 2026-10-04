(function(root){
  'use strict';
  const KEYS={progress:'science-quiz-progress-v1',settings:'science-quiz-settings-v1',session:'science-quiz-session-v1'};
  const WEEK=7*24*60*60*1000;
  const DEFAULTS={mode:'choice',filter:'all',units:Array.from({length:17},(_,i)=>i+1),examDate:'2029-02-03',enrollmentYear:2023};
  function shuffle(items,random=Math.random){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function pool(questions,settings){return questions.filter(q=>settings.units.includes(q.unit)&&(settings.filter!=='diagram'||q.diagram));}
  function cleanProgress(raw,questions,now=Date.now()){
    const ids=new Set(questions.map(q=>q.id)),mistakes={choice:{},written:{}};
    for(const mode of ['choice','written'])for(const [id,t] of Object.entries(raw?.mistakes?.[mode]||{}))if(ids.has(id)&&Number.isFinite(t)&&t>now-WEEK&&t<=now)mistakes[mode][id]=t;
    const history=Array.isArray(raw?.history)?raw.history.filter(h=>h&&['choice','written'].includes(h.mode)&&Number.isFinite(h.at)&&h.at<=now&&Number.isInteger(h.total)&&h.total>0&&h.total<=questions.length&&Number.isInteger(h.correct)&&h.correct>=0&&h.correct<=h.total&&Number.isInteger(h.partial||0)&&(h.partial||0)>=0&&h.correct+(h.partial||0)<=h.total).slice(-100).map(h=>({mode:h.mode,at:h.at,total:h.total,correct:h.correct,partial:h.partial||0,review:h.review===true})):[];
    return{version:1,history,mistakes};
  }
  function cleanSettings(raw){const units=Array.isArray(raw?.units)?[...new Set(raw.units.filter(x=>Number.isInteger(x)&&x>=1&&x<=17))]:DEFAULTS.units.slice();return{...DEFAULTS,mode:raw?.mode==='written'?'written':'choice',filter:raw?.filter==='diagram'?'diagram':'all',units,examDate:validDate(raw?.examDate)?raw.examDate:DEFAULTS.examDate,enrollmentYear:Number.isInteger(raw?.enrollmentYear)&&raw.enrollmentYear>=1900&&raw.enrollmentYear<=2100?raw.enrollmentYear:DEFAULTS.enrollmentYear};}
  function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T00:00:00Z');return Number.isFinite(d.getTime())&&d.toISOString().slice(0,10)===s;}
  function validateSession(raw,questions){
    if(!raw||raw.version!==1||!['choice','written'].includes(raw.mode)||!Array.isArray(raw.ids)||raw.ids.length===0||raw.ids.length>questions.length||!Number.isInteger(raw.index)||raw.index<0||raw.index>=raw.ids.length||!Array.isArray(raw.answers)||raw.answers.length!==raw.ids.length)return null;
    const byId=new Map(questions.map(q=>[q.id,q]));if(new Set(raw.ids).size!==raw.ids.length||raw.ids.some(id=>!byId.has(id)))return null;
    if(!Number.isFinite(raw.startedAt)||raw.startedAt<0||raw.startedAt>Date.now())return null;
    if(!Array.isArray(raw.optionOrder)||raw.optionOrder.length!==raw.ids.length)return null;
    for(let i=0;i<raw.ids.length;i++){
      const opts=byId.get(raw.ids[i]).options,order=raw.optionOrder[i],answer=raw.answers[i];
      if(!Array.isArray(order)||order.length!==4||new Set(order).size!==4||order.some(x=>!opts.includes(x)))return null;
      if(answer!==null&&(!answer||!['correct','partial','wrong'].includes(answer.grade)||raw.mode==='choice'&&(!opts.includes(answer.selected)||answer.grade==='partial'||answer.grade!==(answer.selected===byId.get(raw.ids[i]).answer?'correct':'wrong'))))return null;
      if(i<raw.index&&answer===null||i>raw.index&&answer!==null)return null;
    }
    return{version:1,mode:raw.mode,ids:raw.ids.slice(),index:raw.index,answers:raw.answers.map(a=>a?{grade:a.grade,selected:typeof a.selected==='string'?a.selected:null}:null),optionOrder:raw.optionOrder.map(a=>a.slice()),startedAt:raw.startedAt,review:raw.review===true};
  }
  function weekly(progress,mode,questions,now=Date.now()){const p=cleanProgress(progress,questions,now);return questions.filter(q=>p.mistakes[mode][q.id]);}
  function validateBackup(data,questions){
    if(!data||data.app!=='理科マスター'||data.formatVersion!==1||!data.progress||data.progress.version!==1||!Array.isArray(data.progress.history)||!data.progress.mistakes||!data.settings||typeof data.settings!=='object'||Array.isArray(data.settings))throw Error('理科マスターのバックアップではありません。');
    const p=cleanProgress(data.progress,questions),s=cleanSettings(data.settings),session=data.session===null?null:validateSession(data.session,questions);
    if(p.history.length!==data.progress.history.length||!['choice','written'].includes(data.settings.mode)||!['all','diagram'].includes(data.settings.filter)||!validDate(data.settings.examDate)||!Number.isInteger(data.settings.enrollmentYear)||!Array.isArray(data.settings.units)||s.units.length!==data.settings.units.length||s.enrollmentYear!==data.settings.enrollmentYear||data.session!==null&&!session)throw Error('バックアップの内容が正しくありません。');
    if(root?.SchoolCountdown&&!root.SchoolCountdown.schoolDays(s.enrollmentYear,s.examDate))throw Error('入学年度と試験日の関係が正しくありません。');
    return{progress:p,settings:s,session};
  }
  const api={KEYS,WEEK,DEFAULTS,shuffle,pool,cleanProgress,cleanSettings,validDate,validateSession,weekly,validateBackup};if(typeof module==='object'&&module.exports)module.exports=api;else root.ScienceCore=api;
})(typeof window!=='undefined'?window:null);
