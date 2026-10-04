(function(root){
  'use strict';
  const D=typeof module==='object'&&module.exports?require('./questions.js'):root.ScienceData;
  // Explanatory pictures may illustrate an answer only after the learner answers.
  const after={
    'sci-01-07':'月の並びが次の月の形を示す',
    'sci-01-11':'矢印が問われている移動方向を示す',
    'sci-02-01':'月の出の時刻が印字されている',
    'sci-02-02':'南中の時刻が印字されている',
    'sci-02-03':'南中の時刻が印字されている',
    'sci-02-04':'南中の時刻が印字されている',
    'sci-02-09':'月の中心という答えが印字されている',
    'sci-03-08':'満月の姿が時刻の推論を省略させる',
    'sci-03-13':'矢印が公転の向きを示す',
    'sci-03-14':'照らされる側が全ての月に描かれている',
    'sci-05-03':'北極星という答えが印字されている',
    'sci-05-04':'矢印が星の回転方向を示す',
    'sci-05-07':'実際の星図ではなく知識を補足する説明図',
    'sci-05-08':'実際の星図ではなく知識を補足する説明図',
    'sci-05-17':'矢印が東の空の星の移動を示す',
    'sci-05-18':'矢印が西の空の星の移動を示す',
    'sci-06-07':'星の間隔を延ばす倍率が図から分かる',
    'sci-06-14':'同じ角度という結論が描かれている',
    'sci-07-09':'発芽の三条件がそのまま印字されている',
    'sci-08-23':'問われている軸の意味が印字されている',
    'sci-09-04':'予測する植物の姿が描かれている',
    'sci-09-07':'予測する曲がる向きが描かれている',
    'sci-09-21':'名称を問う知識問題の補足図',
    'sci-09-23':'伸びる側が図で示されている',
    'sci-10-20':'でんぷんという答えが印字されている',
    'sci-11-02':'雲ができる流れが印字されている',
    'sci-11-14':'予測する上昇と雲の形成が描かれている',
    'sci-11-31':'問われている雲の高さが描かれている',
    'sci-12-07':'上昇気流という答えが矢印で示されている',
    'sci-12-08':'下降気流という答えが矢印で示されている',
    'sci-12-09':'海風の向きが矢印で示されている',
    'sci-12-10':'陸風の向きが矢印で示されている',
    'sci-12-15':'予測する同じ水深が描かれている',
    'sci-12-24':'高気圧の風向が矢印で示されている',
    'sci-12-27':'上空の戻りの流れが矢印で示されている',
    'sci-13-02':'定義を問う知識問題の補足図',
    'sci-14-08':'台風の風の知識を補足する説明図',
    'sci-14-18':'予測する雲の姿が描かれている',
    'sci-14-23':'目と目の周りの特徴が描かれている',
    'sci-15-04':'糸を張るという結論が描かれている',
    'sci-15-17':'音の伝わる仕組みが描かれている',
    'sci-16-14':'音色を聞き分ける理由を補足する説明図',
    'sci-17-04':'砂が残る場所が印字・描画されている',
    'sci-17-07':'問われている接続方法が描かれている'
  };
  const prompts={
    'sci-03-13':'地球の北極側から見たとき、月の公転はどちら向きですか。',
    'sci-03-14':'地球と月を北極側から見て、太陽が右側にあるとして考えます。月の公転中、太陽の光が当たる側はどうなっていますか。',
    'sci-05-18':'日本の中緯度で西の空の星をしばらく観察すると、星は主にどちら向きに動いて見えますか。',
    'sci-06-07':'北斗七星の2つの目印の星の間隔を、約何倍のばすと北極星を探せますか。',
    'sci-08-23':'子葉と発芽した部分の重さを日数ごとに調べるグラフでは、横軸・縦軸を通常それぞれ何にしますか。',
    'sci-09-07':'左から光を当てると、芽や茎は通常どちらへ曲がりますか。',
    'sci-09-23':'芽や茎に左から光を当てたとき、よく伸びるのは主にどちら側ですか。',
    'sci-10-20':'光合成で、葉につくられる主な養分は何ですか。',
    'sci-11-02':'水蒸気を含む空気が上昇して雲ができるまでの正しい流れはどれですか。',
    'sci-12-27':'昼の海風では、地面近くの風は海から陸へ吹きます。上空の戻りの流れはどちら向きですか。',
    'sci-14-23':'台風の目のすぐ周りは、目の中心と比べてどのような典型的な特徴がありますか。',
    'sci-15-04':'糸電話で音がよく伝わるようにするには、糸をどうしますか。'
  };
  // Describe observable shapes and supplied data, without naming the unknown part
  // or stating the numerical reading the learner is being asked to determine.
  const descriptions={
    'seed:bean':'インゲンマメの種子の断面。Aの矢印は、内部の大きな部分を指す。中央に小さな緑の部分がある。',
    'seed:corn':'トウモロコシの種子の断面。Bの矢印は内部の大きな部分を指す。片側の下部には別の小さな部分がある。',
    'embryo-parts':'種子の胚。子葉の上の先端をA、その下から下端のCまでの間をBとして示す。',
    'leaf-veins':'Aの葉には中央から細い線が枝分かれし、Bの葉には長さの方向に並ぶ線がある。',
    'root-systems':'Aには中央の太い根とそこから分かれる細い根がある。Bには細い根が多数ある。',
    'flower':'アブラナの花。Aの矢印は中央の器官の周りにある細い器官の先端を指す。',
    'flower-parts':'花の中央の器官の断面。Aは先端、Bは細い部分、Cは下部の袋状の部分、Dはその袋の中の小さな粒を指す。',
    'microscope':'顕微鏡。Aの矢印は鏡筒の上端のレンズを指す。鏡筒の下にはレンズとステージがある。',
    'cylinder':'メスシリンダーに40、45、50mLの数字と1mL刻みの目盛りがある。水面の中央は端より低い。目の高さを水面に合わせている。'
  };
  const id=q=>D.aliases[q.id]||q.id;
  const isAfter=q=>!!after[id(q)];
  const hasQuestionFigure=q=>!!q.diagram&&!isAfter(q);
  const questionPrompt=q=>prompts[id(q)]||q.prompt;
  function figure(q,revealed,G){
    if(!q.diagram||(!revealed&&!hasQuestionFigure(q)))return '';
    return G.render(q.diagram,false,revealed?null:descriptions[q.diagram]??null).svg;
  }
  const api={after:Object.freeze(after),prompts:Object.freeze(prompts),descriptions:Object.freeze(descriptions),isAfter,hasQuestionFigure,questionPrompt,figure};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.SciencePresentation=api;
})(typeof window!=='undefined'?window:null);
