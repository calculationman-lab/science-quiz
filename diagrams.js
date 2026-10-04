(function(root){
  'use strict';
  const C={ink:'#183d42',blue:'#2376a5',green:'#26876c',gold:'#ffce55',dark:'#263848',earth:'#5a9bb8'};
  const text=(x,y,s,size=19,fill=C.ink)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="middle">${s}</text>`;
  const line=(x,y,a,b,color=C.ink,w=2)=>`<path d="M${x} ${y}L${a} ${b}" fill="none" stroke="${color}" stroke-width="${w}"/>`;
  const arrow=(x,y,a,b,color=C.blue)=>`<path d="M${x} ${y}L${a} ${b}" fill="none" stroke="${color}" stroke-width="3" marker-end="url(#arr)"/>`;
  const circle=(x,y,r,fill,stroke='none')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}"/>`;
  const box=(x,y,w,h,fill='#e5f1ee')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="${fill}" stroke="#acc6c8"/>`;
  function moon(x,y,r,kind){
    let s=circle(x,y,r,C.dark);
    if(kind==='full')return circle(x,y,r,C.gold);
    if(kind==='upper')s+=`<path d="M${x} ${y-r}A${r} ${r} 0 0 1 ${x} ${y+r}Z" fill="${C.gold}"/>`;
    if(kind==='lower')s+=`<path d="M${x} ${y-r}A${r} ${r} 0 0 0 ${x} ${y+r}Z" fill="${C.gold}"/>`;
    if(kind==='crescent')s+=`<path d="M${x} ${y-r}A${r} ${r} 0 0 1 ${x} ${y+r}A${r*.72} ${r} 0 0 0 ${x} ${y-r}" fill="${C.gold}"/>`;
    return s;
  }
  const cloud=(x,y,r=27)=>`<path d="M${x-r*1.6} ${y+r*.7}C${x-r*3} ${y+r*.5} ${x-r*2.5} ${y-r*.9} ${x-r} ${y-r*.7}C${x-r} ${y-r*2} ${x+r} ${y-r*2} ${x+r*.8} ${y-r*.6}C${x+r*2.5} ${y-r} ${x+r*3} ${y+r*.7} ${x+r*1.2} ${y+r*.7}Z" fill="#d6e6ec" stroke="${C.blue}" stroke-width="2"/>`;
  const leaf=(x,y,side,color=C.green)=>`<ellipse cx="${x+side*21}" cy="${y}" rx="25" ry="11" transform="rotate(${side*20} ${x+side*21} ${y})" fill="${color}"/>`;
  function plant(x,y,weak=false){const color=weak?'#a9c681':C.green;return `<path d="M${x} ${y}Q${x+8} ${y-65} ${x} ${y-(weak?125:92)}" fill="none" stroke="${weak?'#7baa67':C.green}" stroke-width="${weak?3:5}"/>`+leaf(x,y-65,-1,color)+leaf(x,y-65,1,color)+leaf(x,y-35,1,color);}
  function wave(y,amp,cycles){let d='';for(let x=105;x<=515;x+=2)d+=`${x===105?'M':'L'}${x} ${y-Math.sin((x-105)/410*Math.PI*2*cycles)*amp}`;return `<path d="${d}" fill="none" stroke="${C.blue}" stroke-width="3"/>`;}
  function render(key){
    const [type,arg]=key.split(':');let s='',h=320;let desc='';
    if(type==='moon'){s=box(30,15,560,285,'#edf3f7')+moon(310,155,80,arg)+text(310,275,'A');desc=arg==='upper'?'Aの月は右半分が光っている。日本から南の空を見る。':'Aの月は左半分が光っている。日本から南の空を見る。';}
    else if(type==='phase-sequence'){s=text(310,40,'日本で南中する月の主な変化',20);['new','upper','full','lower','new'].forEach((k,i)=>{s+=moon(70+i*120,160,35,k)+text(70+i*120,225,['新月','上弦','満月','？','新月'][i]);if(i<4)s+=arrow(112+i*120,160,140+i*120,160);});desc='新月、右半分が明るい月、満月、左半分が明るい月、新月の順に並んでいる。';}
    else if(type==='sky'||type==='sky-path'){
      s=`<path d="M70 250Q310 -45 550 250" fill="none" stroke="#90aab5" stroke-width="3"/>`+line(50,255,570,255)+text(70,285,'東')+text(310,285,'南')+text(550,285,'西');
      if(type==='sky-path')s+=arrow(100,205,180,130)+arrow(440,130,515,215);
      else {const times=arg==='upper'?['12時ごろ','18時ごろ','0時ごろ']:arg==='lower'?['0時ごろ','6時ごろ','12時ごろ']:['18時ごろ','0時ごろ','6時ごろ'];[[70,250],[310,105],[550,250]].forEach(([x,y],i)=>s+=moon(x,y,23,arg)+text(x,y-35,times[i],17));s+=text(310,35,'教材で用いる時刻の目安',18);}
      desc='東から南の空を通って西へ向かう弧。'+(type==='sky'?'月の出、南中、月の入りの目安を表示。':'矢印は東から西へ向かう。');
    }
    else if(type==='moonrise'){s=line(60,180,560,180)+moon(310,180,65,'upper')+line(270,180,350,180,C.blue,4)+text(485,160,'地平線')+text(310,285,'月の中心が地平線上');desc='月の中心と地平線が同じ高さにある。';}
    else if(type==='orbit'){
      h=385;s=circle(290,195,110,'none','#a2b7be')+circle(290,195,34,C.earth)+text(290,200,'地球',16,'white')+circle(550,195,30,C.gold)+text(550,250,'太陽');[[400,195,'A'],[290,85,'B'],[180,195,'C'],[290,305,'D']].forEach(([x,y,l])=>{s+=moon(x,y,22,'upper')+text(x,y-32,l,20);});
      [95,145,245,295].forEach(y=>s+=arrow(570,y,465,y,'#cc922b'));s+=`<path d="M387 145Q357 93 319 86" fill="none" stroke="${C.blue}" stroke-width="3" marker-end="url(#arr)"/>`+text(290,370,'地球の北極側から見る（軌道の傾きは省略）',17);desc='太陽は右。地球の右A、上B、左C、下Dに月がある。日光は右から左へ進み、月は反時計回りに公転する。各月の右半球に日光が当たる。';
    }
    else if(type==='eclipse'){
      s=circle(90,160,45,C.gold)+text(90,245,'太陽');if(arg==='solar')s+=`<path d="M240 140L505 153L505 167L240 180Z" fill="#acb3c3" opacity=".55"/>`+moon(240,160,20,'lower')+circle(495,160,42,C.earth)+text(240,245,'月')+text(495,245,'地球');else s+=`<path d="M326 125L555 135L555 185L326 195Z" fill="#acb3c3" opacity=".55"/>`+circle(290,160,42,C.earth)+moon(495,160,20,'new')+text(290,245,'地球')+text(495,245,'月');s+=text(310,40,'大きさ・距離は実際の比率ではありません',17);desc=arg==='solar'?'左から太陽、月、地球の順に一直線。':'左から太陽、地球、月の順に一直線。地球の影が月へ伸びている。';
    }
    else if(type==='annular'){s=circle(310,155,85,C.gold)+circle(310,155,72,C.dark)+text(310,275,'太陽の縁がリング状に見える');desc='暗い月の周囲に太陽の明るい縁が輪として残る。';}
    else if(type==='north-stars'){s=box(25,10,570,300,'#203343');[60,95].forEach(r=>s+=circle(310,155,r,'none','#7695ac'));s+=circle(310,155,5,'#fff')+text(310,185,'北極星',18,'#fff')+`<path d="M405 155A95 95 0 0 0 310 60" stroke="#ffd575" stroke-width="3" fill="none" marker-end="url(#arr)"/>`+text(310,285,'北の空を正面に見る',18,'white');desc='北極星を中心とする円。右側から上側へ向かう矢印が反時計回りを示す。';}
    else if(type==='triangle'){
      s=box(25,10,570,300,'#203343');const pts=[[150,240],[310,75],[480,225]];s+=`<path d="M150 240L310 75L480 225Z" fill="none" stroke="#a9c4d4" stroke-width="2"/>`;pts.forEach(([x,y],i)=>s+=circle(x,y,6,'#ffe78a')+text(x,y-22,['A','B','C'][i],20,'white'));s+=text(310,290,arg==='summer'?'夏の星の模式図':'冬の星の模式図',17,'white');desc='3つの星が三角形に並ぶ模式図。星の名前は未表示。大きさや向きは実際の星図の尺度ではない。';}
    else if(type==='star-angle'){s=box(25,10,570,300,'#203343')+circle(220,220,6,'white')+text(200,260,'北極星',19,'white')+line(220,220,440,220,'#7997a5')+line(220,220,375,65,'#7997a5')+circle(440,220,7,C.gold)+text(465,225,'A',20,'white')+circle(375,65,7,C.gold)+text(400,60,'B',20,'white')+`<path d="M300 220A80 80 0 0 0 276.57 163.43" fill="none" stroke="#ffe78a" stroke-width="3" marker-end="url(#arr)"/>`+text(335,180,'45°',23,'white');desc='北極星を中心に右のAから左上のBへ45度、反時計回りに動く。';}
    else if(type==='polaris-finder'){s=box(25,10,570,300,'#203343');const pts=[[65,205],[105,215],[155,205],[200,230],[200,270],[260,270],[260,230]];s+=`<polyline points="${pts.map(p=>p.join(',')).join(' ')} 200,230" stroke="#a9c4d4" stroke-width="2" fill="none"/>`;pts.forEach(([x,y])=>s+=circle(x,y,4,C.gold));s+=circle(260,30,5,'white')+arrow(260,225,260,40)+text(350,40,'北極星',17,'white')+text(390,250,'2つの目印',17,'white');for(let y=70;y<=230;y+=40)s+=line(252,y,268,y,'#a9c4d4',1);desc='北斗七星のひしゃくの外側の2つの星の間隔を、上の星から図の矢印の向きに5倍延ばすと北極星がある。形は模式図。';}
    else if(type==='seed'){
      if(arg==='bean'){s=`<path d="M310 70C110 -10 90 270 285 255L310 210L335 255C530 270 510 -10 310 70Z" fill="#e8c49d" stroke="#9f6749" stroke-width="5"/>`+`<path d="M310 213Q275 165 310 120Q344 150 319 173" fill="none" stroke="${C.green}" stroke-width="8"/>`+arrow(115,125,215,140)+text(80,120,'A');desc='インゲンマメの種子の断面模式図。Aは大きな子葉を指す。中央の小さい緑の部分は芽や根になる胚の部分。';}
      else{s=`<path d="M210 260L200 110Q310 -15 420 110L410 260Z" fill="#efd36e" stroke="#9f6749" stroke-width="5"/>`+`<path d="M225 248Q205 162 257 133Q285 179 280 248Z" fill="#9fbd81" stroke="${C.green}" stroke-width="2"/>`+arrow(515,135,340,145)+text(540,135,'B');desc='トウモロコシの種子の断面模式図。Bは大きな胚乳を指す。下部片側に胚がある。';}
    }
    else if(type==='germination'){s=text(310,35,'インゲンマメの発芽の条件を考える',20);[['水',110],['空気',310],['温度',510]].forEach(([v,x])=>s+=box(x-75,90,150,130)+text(x,165,v,25));desc='水、空気、温度の3つの条件を考える模式図。';}
    else if(type==='seed-graph'){s=arrow(80,260,565,260)+arrow(80,260,80,45)+text(310,302,'発芽後の日数 →')+text(48,145,'重さ',16)+`<path d="M95 65C210 70 320 110 520 235" fill="none" stroke="#b27944" stroke-width="4"/><path d="M95 247C220 240 340 205 520 145" fill="none" stroke="${C.green}" stroke-width="4"/>`+text(495,225,'A 子葉',17,'#92572e')+text(470,120,'B 発芽した部分',17,C.green)+text(310,25,'増減を示す模式グラフ（数値の尺度なし）',17);desc='日数を横軸、重さを縦軸。子葉Aの曲線は減少し、発芽した部分Bの曲線は増加する。';}
    else if(type==='growth-experiment'){
      h=345;const data=[['A','あり','あり'],['B','なし','あり'],['C','あり','なし']];data.forEach(([n,light,fert],i)=>{const x=110+i*200;s+=text(x,32,n,24)+box(x-72,55,144,185,light==='なし'?'#d6e0e4':'#eff7f4')+box(x-45,115,90,90,'#cfe7ef')+leaf(x,140,-1)+leaf(x,140,1)+text(x,270,`日光 ${light}`,17)+text(x,298,`肥料 ${fert}`,17);});s+=text(310,330,'水・温度30℃・植物の初めの状態は同じ',17);desc='Aは日光・肥料あり。Bは日光なし・肥料あり。Cは日光あり・肥料なし。水、温度、植物の初めの状態は同じ。';
    }
    else if(type==='light-growth'){[180,440].forEach((x,i)=>s+=box(x-45,210,90,60,'#bd8465')+plant(x,210,i===1)+text(x,302,i===0?'日光あり':'日光なし'));desc='日光ありの植物は濃い緑色で茎が丈夫。日光なしは茎が細長く葉が薄い色。模式図。';}
    else if(type==='phototropism'){s=text(115,45,'光')+arrow(60,110,210,110,'#bd8c26')+arrow(60,170,210,170,'#bd8c26')+`<path d="M340 270Q370 175 280 95" fill="none" stroke="${C.green}" stroke-width="9"/>`+leaf(297,123,-1)+box(295,260,105,35,'#bd8465');desc='光は左から右へ来る。芽の先端は左へ曲がっている。';}
    else if(type==='photosynthesis'){s=box(230,105,160,100)+text(310,160,'葉',25)+text(310,35,'光')+arrow(310,48,310,95,'#bd8c26')+box(25,70,155,50)+text(103,102,'X')+arrow(181,96,221,135)+box(25,215,155,50)+text(103,247,'水')+arrow(181,235,221,184)+box(440,70,155,50)+text(517,102,'でんぷん')+arrow(400,135,430,97)+box(440,215,155,50)+text(517,247,'Y')+arrow(400,182,430,232);desc='光が葉へ入る。Xと水が葉へ入り、でんぷんと気体Yが葉から出る。';}
    else if(type==='flower'){s=box(25,10,570,300)+`<ellipse cx="310" cy="155" rx="130" ry="70" fill="#f1d867"/><path d="M310 85L310 160" stroke="${C.green}" stroke-width="13"/><ellipse cx="310" cy="198" rx="36" ry="50" fill="#96be77" stroke="${C.green}" stroke-width="3"/><path d="M245 190L240 100M375 190L380 100" stroke="#b5a23c" stroke-width="7"/>`+`<ellipse cx="240" cy="100" rx="16" ry="10" fill="#b77a39"/><ellipse cx="380" cy="100" rx="16" ry="10" fill="#b77a39"/>`+arrow(115,70,220,98)+text(90,67,'A')+text(475,200,'アブラナの模式図',16);desc='花の中央にめしべ、両側におしべ。Aの矢印はおしべの先のやくを指す。';}
    else if(type==='cloud-rise'){s=line(40,275,580,275)+text(90,302,'地面')+arrow(200,250,280,165)+arrow(280,150,350,92)+cloud(400,75,35)+text(160,180,'水蒸気を含む空気',18)+text(450,170,'上空で冷える',18)+text(400,27,'雲',20);desc='水蒸気を含む空気が地面付近から上昇し、上空で冷えて雲をつくる。';}
    else if(type==='hygrometer'){[190,425].forEach((x,i)=>{s+=box(x-25,65,50,175)+line(x,220,x,110+i*10,'#d15d4b',7)+text(x,40,i===0?'乾球':'湿球')+text(x,280,i===0?'20℃':'18℃',24);if(i===1)s+=box(x-34,208,68,30,'#afd4e6');});desc='乾湿計の乾球は20℃、湿球は18℃と示されている。';}
    else if(type==='humidity-table'){
      h=265;const rows=[['乾球＼温度差','0℃','1℃','2℃','3℃'],['20℃','100','91','81','73'],['19℃','100','90','81','72'],['18℃','100','90','80','71']];rows.forEach((r,y)=>r.forEach((v,x)=>{const xx=x===0?20:190+(x-1)*100,w=x===0?170:100;s+=box(xx,35+y*48,w,48,y===0||x===0?'#dceee8':'#fff')+text(xx+w/2,66+y*48,v,x===0&&y===0?15:19);}));desc='湿度表。乾球20℃の行、温度差0、1、2、3℃の列の値はそれぞれ100、91、81、73パーセント。19℃は100、90、81、72。18℃は100、90、80、71。';
    }
    else if(type==='cloud'){s=cloud(310,185,55)+cloud(310,105,48)+cloud(310,60,35);for(let x=220;x<=410;x+=35)s+=line(x,240,x-15,275,C.blue);s+=text(310,305,'縦に大きく発達する雲');desc='縦方向に大きく発達し、強い雨を降らせる雲の模式図。';}
    else if(type==='rain-gauge'){s=box(210,35,200,220,'#f5fbff')+`<rect x="212" y="155" width="196" height="98" fill="#bbdfef"/>`+line(212,155,408,155,C.blue,3)+arrow(470,249,470,158)+text(530,209,'12mm')+text(310,302,'口から底まで同じ断面積の容器');desc='円筒形容器の模式図。底から水面までの深さが12mm。';}
    else if(type==='water-cycle'){s=box(20,220,580,70,'#bbdfef')+text(100,265,'海')+`<path d="M360 220L460 150L575 220Z" fill="#92b58d"/>`+text(465,269,'陸')+cloud(310,70,40)+arrow(130,210,220,105)+text(115,138,'A')+arrow(405,115,470,205)+text(490,155,'B')+arrow(435,255,230,255)+text(310,302,'水の循環（模式図）');desc='海から雲へ向かう矢印A、雲から陸へ向かう矢印B、陸から海へ戻る矢印。';}
    else if(type==='pressure'){
      s=line(30,280,590,280)+text(310,35,arg==='low'?'低気圧の中心付近':'高気圧の中心付近');if(arg==='low')s+=arrow(125,260,280,260)+arrow(495,260,340,260)+arrow(310,245,310,140)+cloud(310,110,25);else s+=arrow(310,70,310,230)+arrow(285,260,120,260)+arrow(335,260,500,260);s+=text(310,308,'地面付近');desc=arg==='low'?'地面近くで中心に集まり、上空へ上がる空気の矢印。':'上空から中心へ下降し、地面近くで外へ広がる空気の矢印。';
    }
    else if(type==='sea-breeze'){s=box(30,230,280,60,'#b6dbed')+box(310,230,280,60,'#bead87')+text(160,270,'海')+text(455,270,'陸')+text(310,40,arg==='day'?'晴れた日の昼':'晴れた日の夜');if(arg==='day')s+=arrow(160,212,445,212)+arrow(455,193,455,100)+arrow(430,85,170,85)+arrow(160,103,160,190);else s+=arrow(455,212,170,212)+arrow(160,193,160,100)+arrow(175,85,430,85)+arrow(455,103,455,190);desc=arg==='day'?'昼、地面近くの風は海から陸へ。陸で上昇し、上空から海へ戻る。':'夜、地面近くの風は陸から海へ。海で上昇し、上空から陸へ戻る。';}
    else if(type==='isobars'){s=box(25,10,570,300);[85,125,165].forEach((r,i)=>{const y=150-r*.62;s+=`<ellipse cx="310" cy="150" rx="${r}" ry="${r*.62}" fill="none" stroke="${C.blue}" stroke-width="2"/><rect x="262" y="${y-10}" width="96" height="22" fill="#e5f1ee"/>`+text(310,y+6,[1000,1004,1008][i]+' hPa',16);});s+=text(310,280,'等圧線の模式図');desc='1000、1004、1008ヘクトパスカルの線が入れ子に並ぶ。';}
    else if(type==='cloud-cover'){s=text(310,40,'空全体を10として表した模式図');for(let i=0;i<10;i++){const x=70+(i%5)*120,y=90+Math.floor(i/5)*85;s+=box(x-40,y,80,60,i<Number(arg)?'#9ab2c0':'#e6f5ff');}s+=text(310,302,`雲で覆われた部分 ${arg}／10`);desc=`空を10区画に分け、そのうち${arg}区画が雲で覆われている。`;}
    else if(type==='winter-mountain'){s=box(25,240,190,50,'#b6dbed')+box(425,240,170,50,'#b6dbed')+`<path d="M210 240L320 90L430 240Z" fill="#a59177"/>`+arrow(45,130,235,160)+arrow(245,157,296,91)+arrow(345,105,455,195)+cloud(245,82,25)+text(125,276,'日本海')+text(510,276,'太平洋')+text(110,95,'北西の季節風',17)+text(310,310,'日本海側　山地　太平洋側');desc='風が大陸から日本海を渡り、山の日本海側で上昇して雲をつくり、太平洋側へ降りる。';}
    else if(type==='front'){
      s=line(30,270,590,270)+`<path d="M40 270L${arg==='warm'?440:215} 90L570 90L570 270Z" fill="#c2dce8"/>`+text(470,230,'冷たい空気')+text(135,205,'暖かい空気',17);s+=arg==='warm'?arrow(80,220,370,87):arrow(120,250,205,75);s+=cloud(arg==='warm'?385:205,65,25)+text(310,306,'断面の模式図');desc=arg==='warm'?'暖かい空気が冷たい空気のゆるい斜面を上昇する。':'冷たい空気の急な斜面によって暖かい空気が急に上昇する。';
    }
    else if(type==='string-phone'){s=box(50,100,115,115,'#dce8ec')+box(455,100,115,115,'#dce8ec')+line(165,157,455,157,C.ink,4)+text(310,132,'糸')+text(110,260,'紙コップ')+text(510,260,'紙コップ')+arrow(205,185,400,185)+text(310,302,'糸電話の模式図');desc='2つの紙コップの底を、ぴんと張った糸で結んでいる。';}
    else if(type==='waves'){
      s=text(310,25,'横軸：時間（A・Bは同じ尺度）',17)+box(70,45,500,105,'#f6fbff')+box(70,180,500,105,'#f6fbff')+line(105,97,515,97,'#bdd0d7')+line(105,232,515,232,'#bdd0d7')+wave(97,20,3)+wave(232,arg==='amplitude'?40:20,arg==='amplitude'?3:6)+text(40,105,'A',25)+text(40,240,'B',25);desc=arg==='amplitude'?'同じ時間と縦の尺度。AとBは振動回数が同じで、Bの振幅はAの2倍。':'同じ時間と縦の尺度。振幅は同じで、Bの振動回数はAの2倍。';
    }
    else if(type==='strings'){s=text(310,35,'材質・太さ・張り方は同じ');s+=line(80,120,550,120,C.ink,4)+line(80,230,330,230,C.ink,4);[80,550].forEach(x=>s+=circle(x,120,7,C.blue));[80,330].forEach(x=>s+=circle(x,230,7,C.blue));s+=text(310,95,'A 長い弦')+text(220,205,'B 短い弦');desc='Aは長い弦、Bは短い弦。両端で固定され、材質、太さ、張り方は同じ。';}
    else if(type==='tubes'||type==='cups'){
      [175,445].forEach((x,i)=>{s+=box(x-45,70,90,195,'#f8fbfe');const yy=i?125:220;s+=`<rect x="${x-43}" y="${yy}" width="86" height="${263-yy}" fill="#acd6e8"/>`+text(x,300,i?'B 水が多い':'A 水が少ない');});s+=text(310,30,type==='tubes'?'同じ試験管を口から吹く':'同じコップをたたく',20);desc='Aは水が少なく空気の柱が長い。Bは水が多く空気の柱が短い。'+(type==='tubes'?'口から吹く実験。':'容器をたたく実験。');
    }
    else if(type==='cylinder'){
      s=`<path d="M225 35L225 270L395 270L395 35" fill="#f9fcff" stroke="${C.blue}" stroke-width="3"/><path d="M227 140Q310 160 393 140L393 268L227 268Z" fill="#b9dfed"/>`;
      for(let v=40;v<=50;v++){const y=270-(v-40)*20;s+=line(245,y,v%5===0?286:269,y,C.ink);if(v%5===0)s+=text(195,y+6,String(v),19);}
      s+=line(420,150,510,150,'#b99543',2)+text(497,130,'目の高さ',16)+text(310,307,'最小目盛り1mL（模式図）',17);desc='メスシリンダーの40から50mLまでの目盛りは1mL刻み。液面の端は46.5付近、へこんだ底は46.0mL。目は液面と同じ高さ。';
    }
    else if(type==='filtration'){s=box(235,222,150,80,'#f4fbff')+`<path d="M195 65L425 65L322 175L322 229L303 229L303 175Z" fill="#d9e8ed" stroke="${C.blue}" stroke-width="3"/><path d="M211 85L409 85L313 161Z" fill="#f7f2e5" stroke="#a8a296"/>`;[255,288,330,368].forEach(x=>s+=circle(x,105,4,'#b59060'));s+=arrow(465,97,354,111)+text(506,97,'砂',18)+text(120,124,'ろ紙')+line(155,124,244,135)+text(450,276,'ろ液')+line(408,271,374,271);desc='ろうと内のろ紙に砂が残り、液体は下のビーカーへ落ちる。';}
    else if(type==='ammeter'){s=box(20,10,580,300)+`<path d="M110 70L510 70L510 245L110 245Z" fill="none" stroke="${C.ink}" stroke-width="3"/>`+circle(310,245,35,'white',C.ink)+text(310,253,'A',24)+circle(510,155,30,'#ffdc75',C.ink)+text(510,164,'豆球',16)+line(250,50,250,90,C.ink,4)+line(270,40,270,100,C.ink,4)+text(260,30,'電池',17);desc='電池、豆球、電流計Aが一つの輪に直列につながる回路の模式図。';}
    else if(type==='microscope'){s=`<path d="M265 255L385 255L355 190L340 130L345 80L300 80L295 140L310 220Z" fill="#b5ced2" stroke="${C.ink}" stroke-width="3"/><rect x="297" y="50" width="55" height="35" fill="${C.dark}"/><path d="M220 185L370 185M300 135L282 169M330 137L340 171" stroke="${C.ink}" stroke-width="8"/><ellipse cx="310" cy="285" rx="110" ry="16" fill="#8caaae"/>`+arrow(140,55,283,65)+text(110,55,'A',24)+text(462,183,'ステージ',17)+line(407,183,371,183);desc='顕微鏡の模式図。Aは鏡筒の上端にある接眼レンズを指す。下には対物レンズとステージがある。';}
    else if(type==='star-trails'){
      s=text(310,28,'日本の中緯度：同じ時間だけ観察',18);
      ['A 東','B 南','C 西'].forEach((v,i)=>{const x=30+i*195;s+=box(x,50,175,220,'#203343')+line(x+10,225,x+165,225,'#7895a6')+text(x+87,300,v);s+=i===0?arrow(x+35,200,x+130,95,'#ffcf55'):i===1?arrow(x+30,145,x+145,145,'#ffcf55'):arrow(x+35,95,x+130,200,'#ffcf55');});desc='東は斜め上、南は右、西は斜め下へ星の軌跡が進む模式図。';
    }
    else if(type==='star-radii'){
      h=355;
      s=box(25,10,570,335,'#203343')+circle(310,180,4,'white')+text(310,225,'北極星',18,'white');
      [75,145].forEach((r,i)=>{s+=circle(310,180,r,'none','#7895a6')+line(310,180,310+r,180,'#7895a6')+line(310,180,310+r*Math.cos(Math.PI/12),180-r*Math.sin(Math.PI/12),'#7895a6')+circle(310+r,180,5,C.gold)+text(330+r,185,i?'B':'A',18,'white');});s+=text(310,37,'同じ1時間の回転角を比べる',18,'white');desc='北極星から近いAと遠いBの星の円。同じ角度の扇形で、円弧の長さは異なる。';
    }
    else if(type==='embryo-parts'){
      s=box(25,10,570,300)+`<ellipse cx="260" cy="145" rx="65" ry="35" fill="#ddd69b"/><ellipse cx="390" cy="145" rx="65" ry="35" fill="#ddd69b"/><path d="M325 135Q290 78 325 60Q350 80 325 110M325 135L325 207Q335 245 308 263" fill="none" stroke="${C.green}" stroke-width="9"/>`+arrow(140,65,306,79)+text(110,65,'A')+arrow(480,188,335,188)+text(510,190,'B')+arrow(140,259,299,255)+text(110,260,'C')+text(435,112,'子葉',17);desc='種子の胚の模式図。Aは子葉の上の幼芽、Bは子葉と幼根の間の胚軸、Cは下端の幼根。';
    }
    else if(type==='leaf-veins'){
      [160,460].forEach((x,i)=>{s+=`<path d="M${x} 65Q${x-125} 160 ${x} 265Q${x+125} 160 ${x} 65Z" fill="#e4f3df" stroke="${C.green}" stroke-width="3"/>`+line(x,65,x,265,C.green);if(i){[-25,-12,12,25].forEach(d=>s+=`<path d="M${x} 65Q${x+d*2} 160 ${x} 265" fill="none" stroke="${C.green}"/>`);}else{for(let y=115;y<=225;y+=35){s+=line(x,y,x-30,y-12,C.green)+line(x,y,x+30,y-12,C.green)+line(x-18,y-7,x-18,y-23,C.green)+line(x+18,y-7,x+18,y-23,C.green);}}s+=text(x,300,i?'B':'A');});desc='Aは中央の葉脈から枝分かれする網状脈、Bは葉の長さに沿う平行脈。';
    }
    else if(type==='root-systems'){
      s=line(25,105,595,105,'#aa8c66');[160,460].forEach((x,i)=>{s+=plant(x,105)+text(x,304,i?'B':'A');if(!i){s+=line(x,108,x,265,C.green,6);for(let y=140;y<=240;y+=30)s+=line(x,y,x-45,y+25,C.green,2)+line(x,y,x+45,y+25,C.green,2);}else[-65,-35,-10,15,40,65].forEach(d=>s+=`<path d="M${x} 110Q${x+d} 150 ${x+d} 265" fill="none" stroke="${C.green}" stroke-width="3"/>`);});desc='Aは太い主根から側根が分かれる。Bはほぼ同じ太さの細いひげ根が多数伸びる。';
    }
    else if(type==='germination-test'){
      h=340;const rows=[['組','水','空気','温度'],['A','あり','あり','25℃'],['B','なし','あり','25℃'],['C','あり','なし','25℃'],['D','あり','あり','5℃']];rows.forEach((row,i)=>row.forEach((v,j)=>s+=box(30+j*140,45+i*48,140,48,i===0?'#dceee8':'white')+text(100+j*140,76+i*48,v,19)));s+=text(310,325,'種子の種類・個数などはそろえる',17);desc='発芽実験条件表。Aは水と空気あり25℃、Bは水なし空気あり25℃、Cは水あり空気なし25℃、Dは水と空気あり5℃。';
    }
    else if(type==='seed-nutrition'){
      h=310;const rows=[['種子','でんぷん','たんぱく質','しぼう','水','その他'],['イネ','74','7','3','15','1'],['ダイズ','28','35','19','13','5'],['ゴマ','18','20','52','5','5']];s=text(310,30,'教材の割合：種子全体を100とする',18);rows.forEach((row,i)=>row.forEach((v,j)=>s+=box(10+j*100,55+i*48,100,48,i===0?'#dceee8':'white')+text(60+j*100,85+i*48,v,i===0?14:19)));s+=text(310,290,'数値は教材の目安です',17);desc='種子の養分表。でんぷん、たんぱく質、脂肪、水、その他の順に、イネ74、7、3、15、1。ダイズ28、35、19、13、5。ゴマ18、20、52、5、5。';
    }
    else if(type==='gravity-growth'){
      s=box(240,135,85,75,'#bd8465')+`<path d="M285 135Q285 75 380 75Q415 75 415 40M285 210Q285 260 180 260Q150 260 150 292" fill="none" stroke="${C.green}" stroke-width="6"/>`+leaf(380,75,1)+arrow(500,65,500,245)+text(540,160,'重力',18)+text(150,235,'根',18)+text(425,30,'芽・茎',18);desc='鉢を横に置く模式図。芽や茎は上に曲がり、根は下に曲がる。重力の矢印は下向き。';
    }
    else if(type==='auxin-stem'){
      s=box(265,260,100,35,'#bd8465')+`<path d="M295 260Q335 160 250 95M317 260Q382 150 265 82" fill="none" stroke="${C.green}" stroke-width="5"/>`+leaf(255,92,-1)+arrow(65,135,215,135,'#ba8b26')+text(115,107,'光')+text(430,160,'右側',18)+text(310,315,'曲がる側と伸びる側を比べる',17);desc='光は左から来る。茎の右側の方が長く伸び、茎全体が左に曲がる模式図。';
    }
    else if(type==='flower-parts'){
      s=`<path d="M280 50Q310 25 340 50L318 70L318 180L302 180L302 70Z" fill="#9cc784" stroke="${C.green}" stroke-width="3"/><ellipse cx="310" cy="222" rx="65" ry="60" fill="#d3e6be" stroke="${C.green}" stroke-width="3"/><ellipse cx="310" cy="235" rx="15" ry="21" fill="#e5c576" stroke="#b59b55"/>`;
      [[110,50,272,50,'A'],[480,120,329,120,'B'],[110,215,236,215,'C'],[480,252,330,240,'D']].forEach(([x,y,a,b,l])=>s+=arrow(x,y,a,b)+text(x<310?x-25:x+25,y,l,23));desc='めしべの断面。Aは先端の柱頭、Bは細い花柱、Cは袋状の子房、Dは子房内の胚珠を指す。';
    }
    else if(type==='mountain-cloud'){
      s=`<path d="M80 265L340 90L550 265Z" fill="#a8bd98"/>`+arrow(70,200,210,185)+arrow(215,183,295,125)+cloud(315,70,28)+text(125,165,'湿った空気',17)+text(310,309,'山の斜面に沿う空気の流れ',18);desc='湿った空気が山の斜面に沿って上がり、上方で雲ができる。';
    }
    else if(type==='rain-two-cylinders'||type==='rain-volume'){
      if(type==='rain-volume'){s=box(210,70,200,210,'#f4fbff')+`<rect x="212" y="200" width="196" height="78" fill="#b9dfed"/>`+text(310,38,'受け口・底：100cm²')+text(310,250,'水：200cm³',20)+text(490,170,'深さ？',18);desc='断面積100平方cmが一定の容器に200立方cmの水。水の深さは未表示。';}
      else{[170,450].forEach((x,i)=>{const w=i?200:100;s+=box(x-w/2,90,w,190,'#f4fbff')+`<rect x="${x-w/2+2}" y="210" width="${w-4}" height="68" fill="#b9dfed"/>`+text(x,315,i?'大きい容器':'小さい容器',17);for(let xx=x-w/2+15;xx<x+w/2;xx+=30)s+=arrow(xx,30,xx,75);});desc='同じ雨を受ける断面積一定の大小2つの円筒。両方とも水の深さは同じ。';}
    }
    else if(type==='pressure-plan'){
      s=text(310,28,'北半球・地表近く（上から見る）',18);[170,450].forEach((x,i)=>{s+=circle(x,160,70,'none','#9bb7bc')+text(x,168,i?'低':'高',27);for(let k=0;k<4;k++){const a=k*Math.PI/2,start=a+(i?.55:-.55),end=a+(i?-.55:.55),r1=i?115:55,r2=i?55:115;s+=arrow(x+r1*Math.cos(start),160+r1*Math.sin(start),x+r2*Math.cos(end),160+r2*Math.sin(end));}s+=text(x,306,i?'B':'A');});desc='Aは高気圧で時計回りに外へ吹き出し、Bは低気圧で反時計回りに中心へ吹き込む。';
    }
    else if(type==='wind-force-table'){
      h=340;[['風力','風速（m/秒）'],['2','1.6〜3.3'],['3','3.4〜5.4'],['4','5.5〜7.9'],['5','8.0〜10.7'],['6','10.8〜13.8']].forEach((r,i)=>r.forEach((v,j)=>s+=box(80+j*220,25+i*48,220,48,i===0?'#dceee8':'white')+text(190+j*220,56+i*48,v,19)));desc='風力表。2は1.6から3.3、3は3.4から5.4、4は5.5から7.9、5は8.0から10.7、6は10.8から13.8m毎秒。';
    }
    else if(type==='weather-symbols'){
      ['A','B','C','D'].forEach((v,i)=>{const x=85+i*150;s+=circle(x,155,35,i===3?C.ink:'white',C.ink)+text(x,255,v,23);if(i===1)s+=line(x,108,x,202,C.ink,3);if(i===2)s+=circle(x,155,23,'none',C.ink);});desc='Aは白い円、Bは白い円と縦線、Cは二重の円、Dは黒く塗りつぶした円。';
    }
    else if(type==='front-symbols'){
      h=340;['A','B','C','D'].forEach((v,i)=>{const y=65+i*75,col=i===0?'#ce625a':i===1?C.blue:i===3?'#8d6db2':'#6c8194';s+=text(55,y+7,v,24)+line(105,y,555,y,col,3);for(let k=0;k<6;k++){const x=140+k*70,semi=i===0||i>1&&k%2===0;if(semi)s+=`<path d="M${x-17} ${y}A17 17 0 0 1 ${x+17} ${y}Z" fill="${i===2?'#ce625a':col}"/>`;else s+=`<path d="M${x-17} ${y}L${x} ${y+(i===2?23:-23)}L${x+17} ${y}Z" fill="${i===2?C.blue:col}"/>`;}});desc='Aは半円、Bは三角、Cは線の両側に交互の半円と三角、Dは同じ側に交互の半円と三角。';
    }
    else if(type==='typhoon-section'){
      s=line(25,270,595,270)+text(310,308,'台風の中心を通る断面（模式図）',17)+text(310,35,'A',24)+text(155,35,'B',24)+text(465,35,'B',24)+arrow(310,75,310,245);
      [155,465].forEach(x=>s+=cloud(x,110,40)+arrow(x,250,x,155)+line(x-20,200,x-35,245,C.blue)+line(x+20,200,x+5,245,C.blue));desc='Aは中央の目で下降流。両側Bは目の周囲で上昇流と発達した雲、雨がある。';
    }
    else if(type==='typhoon-plan'){
      s=text(310,28,'北半球の台風を上から見る',18)+circle(310,180,85,'none','#90b4bd')+circle(310,180,20,'#e5f1ee',C.blue)+arrow(310,150,310,55,'#a57828')+text(390,64,'進行方向',17)+arrow(405,205,405,140)+arrow(215,155,215,220)+text(500,185,'進行方向の右',17)+text(115,185,'左',17);desc='台風は上へ進み、反時計回り。進行方向の右の回転の風は上向き、左は下向き。';
    }
    else if(type==='typhoon-classes'){
      h=395;s=text(310,26,'気象庁の分類基準',19);const rows=[['強さ','最大風速（m/秒）'],['強い','33以上44未満'],['非常に強い','44以上54未満'],['猛烈な','54以上'],['大きさ','風速15m/秒以上の範囲の半径'],['大型','500km以上800km未満'],['超大型','800km以上']];rows.forEach((r,i)=>{s+=box(25,45+i*48,200,48,i===0||i===4?'#dceee8':'white')+text(125,76+i*48,r[0],18)+box(225,45+i*48,370,48,i===0||i===4?'#dceee8':'white')+text(410,76+i*48,r[1],i===4?15:18);});desc='強さ：強い33以上44未満、非常に強い44以上54未満、猛烈な54以上m毎秒。大きさ：風速15m毎秒以上の範囲の半径が500以上800未満kmで大型、800km以上で超大型。';
    }
    else if(type==='sound-compression'){
      s=text(310,35,'空気の振動が伝わる模式図',19);for(let x=60;x<=560;x+=5){const dense=Math.cos((x-60)/100*Math.PI*2)>.3;if(dense||x%15===0)s+=line(x,95,x,220,C.blue,dense?2:1);}s+=arrow(135,265,480,265)+text(310,303,'音が伝わる向き',18);desc='空気の濃い部分と薄い部分が交互に並ぶ。矢印は音が伝わる向きで、空気そのものの一方向の移動ではない。';
    }
    else if(type==='sound-reflection'){
      s=line(50,265,570,265,C.ink,5)+text(535,295,'壁',18)+`<path d="M310 60L310 265" stroke="#93a8af" stroke-dasharray="7 5" stroke-width="2"/>`+arrow(210,90,310,265)+arrow(310,265,410,90)+text(185,78,'入る音',17)+text(440,78,'反射した音',17)+text(265,194,'30°',21)+text(358,194,'？',23)+text(310,37,'垂線',17);desc='壁に垂直な線の左から音が入射する。入射角は垂線から30度。右へ反射し、その角度は未表示。';
    }
    else if(type==='timbre'){
      s=text(310,25,'同じ基本の振動数・同じ大きさの模式図',17)+box(70,45,500,105,'#f6fbff')+box(70,180,500,105,'#f6fbff')+wave(97,28,3);let d='';for(let x=105;x<=515;x+=2){const t=(x-105)/410*Math.PI*6;d+=`${x===105?'M':'L'}${x} ${232-(Math.sin(t)+.3*Math.sin(3*t))/.92022*28}`;}s+=`<path d="${d}" stroke="${C.blue}" stroke-width="3" fill="none"/>`+text(40,105,'A',23)+text(40,240,'B',23);desc='Aはなめらかな波、Bは同じ基本周期で細かい形の異なる波。音色の違いを示す模式図。';
    }
    else if(type==='frequency-count'){
      s=box(70,60,500,190,'#f6fbff')+line(105,155,515,155,'#aebfc5')+wave(155,45,4)+line(105,265,515,265)+line(105,257,105,273)+line(515,257,515,273)+text(310,305,'0.01秒',22)+text(310,30,'この時間内に4回の振動',19);desc='0.01秒間の波形で完全な4周期が描かれている。';
    }
    else if(type==='displacement'){
      [170,450].forEach((x,i)=>{s+=box(x-65,55,130,220,'#f4fbff')+`<rect x="${x-63}" y="${i?120:180}" width="126" height="${i?153:93}" fill="#b9dfed"/>`+text(x,i?102:162,i?'65mL':'40mL',22)+text(x,309,i?'石を沈めた後':'入れる前',18);if(i)s+=`<ellipse cx="${x}" cy="235" rx="35" ry="24" fill="#80979e"/>`;});desc='水面が入れる前40mL、石を完全に沈めた後65mL。漏れや気泡はない。';
    }
    else if(type==='ammeter-scale'){
      s=box(55,30,510,270,'#f6fbff')+`<path d="M120 235A190 165 0 0 1 500 235" fill="none" stroke="#a4b8c1" stroke-width="2"/>`;for(let k=0;k<=5;k++){const a=Math.PI+(k/5)*Math.PI,x=310+190*Math.cos(a),y=235+165*Math.sin(a);s+=line(x,y,310+170*Math.cos(a),235+145*Math.sin(a))+text(310+145*Math.cos(a)+(k===2?-18:0),235+118*Math.sin(a),String(k),21);}const a=Math.PI+2/5*Math.PI;s+=arrow(310,235,310+165*Math.cos(a),235+145*Math.sin(a))+text(310,283,'使用端子：500mA',20);desc='0から5までの目盛りで針は2を指す。500mA端子を使用。';
    }
    else throw new Error('Unknown diagram '+key);
    return {svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 ${h}" role="img" aria-label="${desc}" style="font-family:system-ui, sans-serif"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke"/></marker></defs>${s}</svg>`,description:desc};
  }
  const api={render};if(typeof module==='object'&&module.exports)module.exports=api;else root.ScienceDiagrams=api;
})(typeof window!=='undefined'?window:null);
