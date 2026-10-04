(function(root){'use strict';
const data={
  "version": 2,
  "title": "理科マスター",
  "source": "理科4下期スキャン_20261004-1023.pdf",
  "units": [
    {
      "id": 1,
      "name": "月の動きと満ち欠け1",
      "category": "月・星",
      "start": 2,
      "end": 9
    },
    {
      "id": 2,
      "name": "月の動きと満ち欠け2",
      "category": "月・星",
      "start": 10,
      "end": 17
    },
    {
      "id": 3,
      "name": "月の形と時こく・方角1",
      "category": "月・星",
      "start": 18,
      "end": 25
    },
    {
      "id": 4,
      "name": "月の形と時こく・方角2",
      "category": "月・星",
      "start": 26,
      "end": 33
    },
    {
      "id": 5,
      "name": "星の動き1",
      "category": "月・星",
      "start": 34,
      "end": 41
    },
    {
      "id": 6,
      "name": "星の動き2",
      "category": "月・星",
      "start": 42,
      "end": 49
    },
    {
      "id": 7,
      "name": "種子のつくりと発芽1",
      "category": "植物",
      "start": 50,
      "end": 57
    },
    {
      "id": 8,
      "name": "種子のつくりと発芽2",
      "category": "植物",
      "start": 58,
      "end": 65
    },
    {
      "id": 9,
      "name": "発芽や成長の条件1",
      "category": "植物",
      "start": 66,
      "end": 73
    },
    {
      "id": 10,
      "name": "発芽や成長の条件2",
      "category": "植物",
      "start": 74,
      "end": 82
    },
    {
      "id": 11,
      "name": "雲と雨1",
      "category": "天気",
      "start": 83,
      "end": 90
    },
    {
      "id": 12,
      "name": "雲と雨2",
      "category": "天気",
      "start": 91,
      "end": 98
    },
    {
      "id": 13,
      "name": "天気の変化1",
      "category": "天気",
      "start": 99,
      "end": 106
    },
    {
      "id": 14,
      "name": "天気の変化2",
      "category": "天気",
      "start": 107,
      "end": 114
    },
    {
      "id": 15,
      "name": "音1",
      "category": "音",
      "start": 115,
      "end": 122
    },
    {
      "id": 16,
      "name": "音2",
      "category": "音",
      "start": 123,
      "end": 130
    },
    {
      "id": 17,
      "name": "実験器具の使い方",
      "category": "実験器具",
      "start": 131,
      "end": 138
    }
  ],
  "questions": [
    {
      "id": "sci-01-01",
      "unit": 1,
      "sourcePage": 2,
      "prompt": "月が光って見えるのはなぜですか。",
      "answer": "太陽の光を反射するから",
      "options": [
        "太陽の光を反射するから",
        "月自身が光を出すから",
        "地球の光だけを反射するから",
        "月面の鉱物が暗い場所で発光するから"
      ],
      "explanation": "月は太陽の光を反射して光って見えます。太陽のように自ら光を出す天体ではありません。",
      "diagram": null,
      "distractorReview": "発光・反射の混同、光源の取り違え。",
      "objective": "baseline-sci-01-01"
    },
    {
      "id": "sci-01-02",
      "unit": 1,
      "sourcePage": 2,
      "prompt": "月の表面にある丸いくぼみを何といいますか。",
      "answer": "クレーター",
      "options": [
        "クレーター",
        "海",
        "山脈",
        "雲"
      ],
      "explanation": "クレーターは、主に隕石の衝突によってできた月面のくぼみです。月面の「海」は暗く見える平らな部分の名前です。",
      "diagram": null,
      "distractorReview": "月面の地形と地球の風景の混同。",
      "objective": "baseline-sci-01-02"
    },
    {
      "id": "sci-01-03",
      "unit": 1,
      "sourcePage": 2,
      "prompt": "月が地球のまわりを1周する周期は、平均で約何日ですか。",
      "answer": "27.3日",
      "options": [
        "27.3日",
        "29.5日",
        "24日",
        "365日"
      ],
      "explanation": "公転周期は約27.3日です。満ち欠けの周期の約29.5日と区別しましょう。",
      "diagram": null,
      "distractorReview": "公転周期・満ち欠け周期・地球の公転の混同。",
      "objective": "baseline-sci-01-03"
    },
    {
      "id": "sci-01-04",
      "unit": 1,
      "sourcePage": 3,
      "prompt": "満月から次の満月までの平均の期間は約何日ですか。",
      "answer": "29.5日",
      "options": [
        "29.5日",
        "27.3日",
        "7日",
        "15日"
      ],
      "explanation": "月の満ち欠けが一巡する期間は約29.5日です。満月から下弦までは約1週間です。",
      "diagram": null,
      "distractorReview": "公転周期、四分の一周期、半周期との混同。",
      "objective": "baseline-sci-01-04"
    },
    {
      "id": "sci-01-05",
      "unit": 1,
      "sourcePage": 3,
      "prompt": "図のAの月を何といいますか。日本から南の空を見ています。",
      "answer": "上弦の月",
      "options": [
        "上弦の月",
        "下弦の月",
        "満月",
        "新月"
      ],
      "explanation": "日本で南中する上弦の月は右半分が光って見えます。下弦は左半分です。",
      "diagram": "moon:upper",
      "distractorReview": "右半分と左半分、半月と満月の混同。",
      "objective": "baseline-sci-01-05"
    },
    {
      "id": "sci-01-06",
      "unit": 1,
      "sourcePage": 3,
      "prompt": "図のAの月を何といいますか。日本から南の空を見ています。",
      "answer": "下弦の月",
      "options": [
        "下弦の月",
        "上弦の月",
        "新月",
        "満月"
      ],
      "explanation": "左半分が光る半月が下弦の月です。上弦の月とは光る側が逆です。",
      "diagram": "moon:lower",
      "distractorReview": "光る側の逆転。",
      "objective": "baseline-sci-01-06"
    },
    {
      "id": "sci-01-07",
      "unit": 1,
      "sourcePage": 3,
      "prompt": "新月→上弦の月→満月の次にくる主な月の形は何ですか。",
      "answer": "下弦の月",
      "options": [
        "下弦の月",
        "上弦の月",
        "新月",
        "三日月"
      ],
      "explanation": "主な順序は新月→上弦→満月→下弦→新月です。満月の後は欠けていきます。",
      "diagram": "phase-sequence",
      "distractorReview": "満ちる時期と欠ける時期の混同。",
      "objective": "baseline-sci-01-07"
    },
    {
      "id": "sci-01-08",
      "unit": 1,
      "sourcePage": 2,
      "prompt": "月の直径は、地球の直径の約何分の1ですか。",
      "answer": "4分の1",
      "options": [
        "4分の1",
        "2分の1",
        "10分の1",
        "400分の1"
      ],
      "explanation": "月の直径は約3500km、地球は約13000kmなので、月は地球の約4分の1の直径です。",
      "diagram": null,
      "distractorReview": "半径と直径の混同、太陽との比との混同。",
      "objective": "baseline-sci-01-08"
    },
    {
      "id": "sci-01-09",
      "unit": 1,
      "sourcePage": 2,
      "prompt": "太陽と月の見かけの大きさがほぼ同じなのはなぜですか。",
      "answer": "太陽は大きいが月より遠いから",
      "options": [
        "太陽は大きいが月より遠いから",
        "太陽と月の実際の直径が同じだから",
        "太陽の方が小さく近いから",
        "月が太陽より遠いから"
      ],
      "explanation": "太陽の直径は月の約400倍ですが、地球からの距離も約400倍なので、見かけの大きさがほぼ同じです。",
      "diagram": null,
      "distractorReview": "実際の大きさと見かけ、大小と遠近の逆転。",
      "objective": "baseline-sci-01-09"
    },
    {
      "id": "sci-01-10",
      "unit": 1,
      "sourcePage": 2,
      "prompt": "月面で「海」とよばれる暗い部分について正しい説明はどれですか。",
      "answer": "水の海ではなく平らな地形",
      "options": [
        "水の海ではなく平らな地形",
        "海水がたまった場所",
        "雲でおおわれた場所",
        "地球の影が映っている場所"
      ],
      "explanation": "月面の「海」は地形の名前で、地球のような海水がある場所ではありません。",
      "diagram": null,
      "distractorReview": "月面の海を地球の海と解釈する誤解。",
      "objective": "baseline-sci-01-10"
    },
    {
      "id": "sci-01-11",
      "unit": 1,
      "sourcePage": 3,
      "prompt": "日本で、月の1日の見かけの動きの順序はどれですか。",
      "answer": "東→南→西",
      "options": [
        "東→南→西",
        "西→南→東",
        "東→北→西",
        "南→東→北"
      ],
      "explanation": "日本では月は東から昇り、南の空を通り、西へ沈むように見えます。これは地球の自転による見かけの動きです。",
      "diagram": "sky-path",
      "distractorReview": "東西逆転、南北の混同。",
      "objective": "baseline-sci-01-11"
    },
    {
      "id": "sci-01-12",
      "unit": 1,
      "sourcePage": 3,
      "prompt": "月の満ち欠けの主な原因はどれですか。",
      "answer": "太陽・地球・月の位置関係が変わること",
      "options": [
        "太陽・地球・月の位置関係が変わること",
        "毎日地球の影が月にかかること",
        "月の球そのものの形が変わること",
        "雲が月を少しずつ隠すこと"
      ],
      "explanation": "光が当たる半球のうち、地球から見える部分の割合が変わります。地球の影による月食とは別の現象です。",
      "diagram": null,
      "distractorReview": "満ち欠けと月食・雲による遮蔽の混同。",
      "objective": "baseline-sci-01-12"
    },
    {
      "id": "sci-01-13",
      "unit": 1,
      "objective": "moon-satellite",
      "sourcePage": 2,
      "prompt": "月のように、惑星のまわりを回る天体を何といいますか。",
      "answer": "衛星",
      "options": [
        "衛星",
        "恒星",
        "惑星",
        "彗星"
      ],
      "explanation": "月は地球の衛星です。惑星は太陽などの恒星のまわりを回り、恒星は自ら光を出します。",
      "diagram": null,
      "distractorReview": "衛星・惑星・恒星の回る対象の混同。"
    },
    {
      "id": "sci-01-14",
      "unit": 1,
      "objective": "moon-diameter",
      "sourcePage": 2,
      "prompt": "教材の目安で、月の直径は約何kmですか。",
      "answer": "3500km",
      "options": [
        "3500km",
        "13000km",
        "38万km",
        "140万km"
      ],
      "explanation": "月の直径は約3500kmです。13000kmは地球の直径、38万kmは地球から月までの距離の目安です。",
      "diagram": null,
      "distractorReview": "直径と距離、地球・太陽の直径の混同。"
    },
    {
      "id": "sci-01-15",
      "unit": 1,
      "objective": "moon-distance",
      "sourcePage": 2,
      "prompt": "教材の目安で、地球から月までの距離は約どのくらいですか。",
      "answer": "38万km",
      "options": [
        "38万km",
        "3500km",
        "1億5000万km",
        "13000km"
      ],
      "explanation": "地球から月までの距離は約38万kmです。月の軌道は楕円なので、実際の距離は一定ではありません。",
      "diagram": null,
      "distractorReview": "月の直径・太陽までの距離との混同。"
    },
    {
      "id": "sci-01-16",
      "unit": 1,
      "objective": "lunar-day-temperature",
      "sourcePage": 2,
      "prompt": "月面の昼夜の温度差が地球より大きい主な理由はどれですか。",
      "answer": "熱を保つ大気がほとんどないから",
      "options": [
        "熱を保つ大気がほとんどないから",
        "月が自ら強く発熱するから",
        "昼と夜で太陽までの距離が大きく変わるから",
        "夜になると月が地球の影に必ず入るから"
      ],
      "explanation": "月には大気がほとんどなく、昼は温まり、夜は熱が逃げます。教材では昼110℃以上、夜−170℃以下が目安です。",
      "diagram": null,
      "distractorReview": "大気の役割と発熱・月食・距離の混同。"
    },
    {
      "id": "sci-01-17",
      "unit": 1,
      "objective": "lunar-sky",
      "sourcePage": 2,
      "prompt": "月面で、太陽が出ていても空が青く見えない主な理由はどれですか。",
      "answer": "光を散らす大気がほとんどないから",
      "options": [
        "光を散らす大気がほとんどないから",
        "月面が太陽の光を全く反射しないから",
        "月面が常に地球の影に入るから",
        "空の青色は海の色だけで決まるから"
      ],
      "explanation": "地球の青空は大気が光を散らすことで見えます。月には大気がほとんどないため、空は黒く見えます。",
      "diagram": null,
      "distractorReview": "光の散乱と光が届かないことの混同。"
    },
    {
      "id": "sci-01-18",
      "unit": 1,
      "objective": "lunar-maria-origin",
      "sourcePage": 2,
      "prompt": "月面の「海」が平らになったと考えられる主な原因は何ですか。",
      "answer": "昔の溶岩が流れ込み固まったこと",
      "options": [
        "昔の溶岩が流れ込み固まったこと",
        "海水が岩を削ったこと",
        "毎日降る雨がくぼみを埋めたこと",
        "隕石が当たるたびに平らな地面が全て盛り上がったこと"
      ],
      "explanation": "月の海は昔の溶岩によってくぼみなどが埋まり、平らになった地形です。水の海とは異なります。",
      "diagram": null,
      "distractorReview": "地球の海・雨の作用と月面の地形形成の混同。"
    },
    {
      "id": "sci-01-19",
      "unit": 1,
      "objective": "sun-earth-size",
      "sourcePage": 2,
      "prompt": "教材の目安で、太陽の直径は地球の約何倍ですか。",
      "answer": "109倍",
      "options": [
        "109倍",
        "4倍",
        "400倍",
        "1倍"
      ],
      "explanation": "太陽の直径約140万kmを地球の約13000kmと比べると約109倍です。400倍は太陽と月の比較の目安です。",
      "diagram": null,
      "distractorReview": "太陽対地球と太陽対月の比の混同。"
    },
    {
      "id": "sci-01-20",
      "unit": 1,
      "objective": "sun-distance",
      "sourcePage": 2,
      "prompt": "教材の目安で、地球から太陽までの距離は約どのくらいですか。",
      "answer": "1億5000万km",
      "options": [
        "1億5000万km",
        "38万km",
        "140万km",
        "3500km"
      ],
      "explanation": "地球から太陽までは約1億5000万kmです。140万kmは太陽の直径で、距離とは区別します。",
      "diagram": null,
      "distractorReview": "天体の直径と地球からの距離の取り違え。"
    },
    {
      "id": "sci-01-21",
      "unit": 1,
      "objective": "moon-age-definition",
      "sourcePage": 3,
      "prompt": "月齢とは、何を0として数えた経過日数ですか。",
      "answer": "新月",
      "options": [
        "新月",
        "満月",
        "上弦の月",
        "月が昇った時刻"
      ],
      "explanation": "月齢は新月の瞬間を0として数える日数です。月が昇ってからの時間や満月からの日数ではありません。",
      "diagram": null,
      "distractorReview": "月齢の起点と月の出の時刻の混同。"
    },
    {
      "id": "sci-01-22",
      "unit": 1,
      "objective": "quarter-phase-interval",
      "sourcePage": 3,
      "prompt": "上弦の月から満月になるまでは、約どのくらいですか。",
      "answer": "1週間",
      "options": [
        "1週間",
        "1日",
        "2週間",
        "1か月"
      ],
      "explanation": "新月・上弦・満月・下弦は、約1週間ずつ隔てて現れます。形の一巡は約29.5日です。",
      "diagram": null,
      "distractorReview": "四分の一周期・半周期・全周期の混同。"
    },
    {
      "id": "sci-01-23",
      "unit": 1,
      "objective": "crescent-sun-angle",
      "sourcePage": 3,
      "prompt": "教材の目安で、三日月は太陽からどちらへ約35度離れていますか。",
      "answer": "東へ",
      "options": [
        "東へ",
        "西へ",
        "北へ",
        "南へ"
      ],
      "explanation": "三日月は新月の後なので、太陽より東側へ離れています。夕方に太陽より遅く沈みます。",
      "diagram": null,
      "distractorReview": "新月前後と太陽の東西の取り違え。"
    },
    {
      "id": "sci-01-24",
      "unit": 1,
      "objective": "upper-sun-angle",
      "sourcePage": 3,
      "prompt": "上弦の月と太陽の方向を、地球から見ると約何度離れていますか。",
      "answer": "90度",
      "options": [
        "90度",
        "0度",
        "35度",
        "180度"
      ],
      "explanation": "上弦の月は太陽の東側約90度にあります。満月は約180度、新月はほぼ同じ方向です。",
      "diagram": null,
      "distractorReview": "新月・三日月・満月の角度との混同。"
    },
    {
      "id": "sci-01-25",
      "unit": 1,
      "objective": "full-sun-angle",
      "sourcePage": 3,
      "prompt": "満月の時、地球から見た太陽と月の方向の関係はどれですか。",
      "answer": "ほぼ反対方向",
      "options": [
        "ほぼ反対方向",
        "ほぼ同じ方向",
        "東へ約35度離れる",
        "西へ約90度離れる"
      ],
      "explanation": "満月の方向は太陽と約180度離れています。日没ごろに東から昇ることともつながります。",
      "diagram": null,
      "distractorReview": "新月や三日月、下弦の位置関係との混同。"
    },
    {
      "id": "sci-01-26",
      "unit": 1,
      "objective": "lower-sun-side",
      "sourcePage": 3,
      "prompt": "下弦の月は、地球から見て太陽の約90度どちら側にありますか。",
      "answer": "西側",
      "options": [
        "西側",
        "東側",
        "北側",
        "太陽と同じ方向"
      ],
      "explanation": "下弦の月は太陽の西側約90度です。上弦の月の東側約90度とは逆になります。",
      "diagram": null,
      "distractorReview": "上弦と下弦の太陽に対する位置の逆転。"
    },
    {
      "id": "sci-01-27",
      "unit": 1,
      "objective": "phase-from-sun-direction",
      "sourcePage": 3,
      "prompt": "日本の南の空に月を見た時、月の明るい側から分かることはどれですか。",
      "answer": "太陽がある側",
      "options": [
        "太陽がある側",
        "地球の影がある側",
        "北極星がある側",
        "月の公転軌道の中心"
      ],
      "explanation": "月の明るい側は太陽の光が当たる側です。光っている側を手掛かりに太陽の方向を考えられます。",
      "diagram": null,
      "distractorReview": "光源の向きと地球の影・方位の混同。"
    },
    {
      "id": "sci-02-01",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安では、満月が東から昇るのは何時ごろですか。",
      "answer": "18時ごろ",
      "options": [
        "18時ごろ",
        "6時ごろ",
        "12時ごろ",
        "0時ごろ"
      ],
      "explanation": "満月は日没ごろ昇り、真夜中ごろ南中し、日の出ごろ沈みます。実際の時刻は日付や場所で変わります。",
      "diagram": "sky:full",
      "distractorReview": "昇る・南中・沈む時刻、太陽の時刻との混同。",
      "objective": "baseline-sci-02-01"
    },
    {
      "id": "sci-02-02",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安では、満月が南中するのは何時ごろですか。",
      "answer": "0時ごろ",
      "options": [
        "0時ごろ",
        "6時ごろ",
        "12時ごろ",
        "18時ごろ"
      ],
      "explanation": "満月の南中は真夜中ごろです。満月の出は18時ごろ、入りは6時ごろが目安です。",
      "diagram": "sky:full",
      "distractorReview": "月の出・入りとの混同。",
      "objective": "baseline-sci-02-02"
    },
    {
      "id": "sci-02-03",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安では、上弦の月が南中するのは何時ごろですか。",
      "answer": "18時ごろ",
      "options": [
        "18時ごろ",
        "0時ごろ",
        "6時ごろ",
        "12時ごろ"
      ],
      "explanation": "上弦の月は12時ごろ昇り、18時ごろ南中し、0時ごろ沈むのが目安です。",
      "diagram": "sky:upper",
      "distractorReview": "上弦と満月・下弦、出と南中の混同。",
      "objective": "baseline-sci-02-03"
    },
    {
      "id": "sci-02-04",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安では、下弦の月が南中するのは何時ごろですか。",
      "answer": "6時ごろ",
      "options": [
        "6時ごろ",
        "0時ごろ",
        "12時ごろ",
        "18時ごろ"
      ],
      "explanation": "下弦の月は0時ごろ昇り、6時ごろ南中し、12時ごろ沈むのが目安です。",
      "diagram": "sky:lower",
      "distractorReview": "下弦と上弦、出と南中の混同。",
      "objective": "baseline-sci-02-04"
    },
    {
      "id": "sci-02-05",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安では、夕方18時ごろの三日月はどの方角の空に見えますか。",
      "answer": "南西の空",
      "options": [
        "南西の空",
        "南東の空",
        "南の空で最も高い位置",
        "西の地平線に沈む位置"
      ],
      "explanation": "三日月は夕方に南西の空に見え、その後西へ沈みます。新月に近いので太陽からあまり離れていません。",
      "diagram": null,
      "distractorReview": "東西逆転、北極星との混同。",
      "objective": "baseline-sci-02-05"
    },
    {
      "id": "sci-02-06",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安では、三日月が西へ沈むのは何時ごろですか。",
      "answer": "21時ごろ",
      "options": [
        "21時ごろ",
        "6時ごろ",
        "12時ごろ",
        "0時ごろ"
      ],
      "explanation": "三日月は9時ごろ昇り、15時ごろ南中し、21時ごろ沈むのが目安です。",
      "diagram": null,
      "distractorReview": "三日月と満月・上弦の混同。",
      "objective": "baseline-sci-02-06"
    },
    {
      "id": "sci-02-07",
      "unit": 2,
      "sourcePage": 11,
      "prompt": "毎日同じ時刻に月を見ると、位置は平均してどちらへずれますか。",
      "answer": "東の方へ",
      "options": [
        "東の方へ",
        "西の方へ",
        "常に南中した位置へ",
        "同じ場所から動かない"
      ],
      "explanation": "同じ時刻の月は少しずつ東へずれます。1日の東から西への見かけの動きとは区別します。",
      "diagram": null,
      "distractorReview": "1日内の動きと日ごとの位置変化の混同。",
      "objective": "baseline-sci-02-07"
    },
    {
      "id": "sci-02-08",
      "unit": 2,
      "sourcePage": 11,
      "prompt": "月の南中時刻は、日ごとに平均で約どう変わりますか。",
      "answer": "約50分遅くなる",
      "options": [
        "約50分遅くなる",
        "約50分早くなる",
        "約4分早くなる",
        "変わらない"
      ],
      "explanation": "月の公転のため、南中時刻は平均約50分ずつ遅くなります。星の約4分早くなる変化とは逆です。",
      "diagram": null,
      "distractorReview": "星との混同、早い遅いの逆転。",
      "objective": "baseline-sci-02-08"
    },
    {
      "id": "sci-02-09",
      "unit": 2,
      "sourcePage": 11,
      "prompt": "月の出の時刻は、月のどの部分を基準にしますか。",
      "answer": "月の中心",
      "options": [
        "月の中心",
        "月の上のふち",
        "月の下のふち",
        "光る部分の先端"
      ],
      "explanation": "月の出・入りは月の中心が地平線に一致する時を基準にします。太陽の出・入りの基準とは異なります。",
      "diagram": "moonrise",
      "distractorReview": "太陽と月の基準の混同。",
      "objective": "baseline-sci-02-09"
    },
    {
      "id": "sci-02-10",
      "unit": 2,
      "sourcePage": 11,
      "prompt": "地平線近くの月が、空高くの月より大きく感じられる主な理由は何ですか。",
      "answer": "目の錯覚",
      "options": [
        "目の錯覚",
        "月が急に地球へ近づくから",
        "月の直径が夕方だけ増えるから",
        "地球の影で月がふくらむから"
      ],
      "explanation": "同じ夜に地平線近くの月が大きく感じられる主な理由は錯覚です。月の距離による別の大きさの変化と区別します。",
      "diagram": null,
      "distractorReview": "錯覚と距離・物体の変形の混同。",
      "objective": "baseline-sci-02-10"
    },
    {
      "id": "sci-02-11",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "新月がふつう見えにくいのはなぜですか。",
      "answer": "地球に向く面がほぼ暗く太陽に近い方向にあるから",
      "options": [
        "地球に向く面がほぼ暗く太陽に近い方向にあるから",
        "月が太陽に照らされる部分が全くなくなるから",
        "地球の影に毎月入るから",
        "月が地球から最も遠くなるから"
      ],
      "explanation": "新月では地球に向く面に日光がほぼ当たらず、空での方向も太陽に近いため見えにくくなります。",
      "diagram": null,
      "distractorReview": "新月と月食、距離による明るさの混同。",
      "objective": "baseline-sci-02-11"
    },
    {
      "id": "sci-02-12",
      "unit": 2,
      "sourcePage": 10,
      "prompt": "教材の目安で、0時ごろ西へ沈む半月はどれですか。",
      "answer": "上弦の月",
      "options": [
        "上弦の月",
        "下弦の月",
        "満月",
        "新月"
      ],
      "explanation": "上弦の月の入りは0時ごろです。下弦はこの時刻に昇るのが目安です。",
      "diagram": null,
      "distractorReview": "出と入り、上弦と下弦の逆転。",
      "objective": "baseline-sci-02-12"
    },
    {
      "id": "sci-02-13",
      "unit": 2,
      "objective": "crescent-rise",
      "sourcePage": 10,
      "prompt": "教材の目安では、三日月は何時ごろ東から昇っていますか。",
      "answer": "9時ごろ",
      "options": [
        "9時ごろ",
        "15時ごろ",
        "18時ごろ",
        "21時ごろ"
      ],
      "explanation": "三日月は9時ごろ昇り、15時ごろ南中し、21時ごろ沈む目安です。昼は空が明るく見つけにくくなります。",
      "diagram": null,
      "distractorReview": "三日月の出・南中・入りの時刻の混同。"
    },
    {
      "id": "sci-02-14",
      "unit": 2,
      "objective": "crescent-transit",
      "sourcePage": 10,
      "prompt": "教材の目安では、三日月が南中するのは何時ごろですか。",
      "answer": "15時ごろ",
      "options": [
        "15時ごろ",
        "9時ごろ",
        "18時ごろ",
        "21時ごろ"
      ],
      "explanation": "三日月の南中は15時ごろが目安です。夕方18時には南中を過ぎ、南西の空にあります。",
      "diagram": null,
      "distractorReview": "上弦の南中、三日月の出入りとの混同。"
    },
    {
      "id": "sci-02-15",
      "unit": 2,
      "objective": "upper-rise",
      "sourcePage": 10,
      "prompt": "教材の目安では、上弦の月が東から昇るのは何時ごろですか。",
      "answer": "12時ごろ",
      "options": [
        "12時ごろ",
        "6時ごろ",
        "18時ごろ",
        "0時ごろ"
      ],
      "explanation": "上弦の月は正午ごろ昇ります。日没ごろ南中するため、午後の明るい空にも見えることがあります。",
      "diagram": null,
      "distractorReview": "太陽の出、上弦の南中と入りの混同。"
    },
    {
      "id": "sci-02-16",
      "unit": 2,
      "objective": "lower-rise",
      "sourcePage": 10,
      "prompt": "教材の目安では、下弦の月が東から昇るのは何時ごろですか。",
      "answer": "0時ごろ",
      "options": [
        "0時ごろ",
        "6時ごろ",
        "12時ごろ",
        "18時ごろ"
      ],
      "explanation": "下弦の月は真夜中ごろ昇り、明け方ごろ南中します。上弦の月が沈む目安の時刻と同じです。",
      "diagram": null,
      "distractorReview": "上弦・満月の出、下弦の南中との混同。"
    },
    {
      "id": "sci-02-17",
      "unit": 2,
      "objective": "lower-set",
      "sourcePage": 10,
      "prompt": "教材の目安では、下弦の月が西へ沈むのは何時ごろですか。",
      "answer": "12時ごろ",
      "options": [
        "12時ごろ",
        "0時ごろ",
        "6時ごろ",
        "18時ごろ"
      ],
      "explanation": "下弦の月は正午ごろ沈む目安です。明け方から午前中の空で見つけられることがあります。",
      "diagram": null,
      "distractorReview": "下弦の出・南中、新月の入りとの混同。"
    },
    {
      "id": "sci-02-18",
      "unit": 2,
      "objective": "newmoon-motion-table",
      "sourcePage": 11,
      "prompt": "新月の出・南中・入りの時刻の目安が太陽とほぼ同じになるのはなぜですか。",
      "answer": "空で太陽とほぼ同じ方向にあるから",
      "options": [
        "空で太陽とほぼ同じ方向にあるから",
        "新月の月が地球の反対側にあるから",
        "新月の月が自転しないから",
        "新月の月は地球と一緒に公転しないから"
      ],
      "explanation": "新月は地球から見て太陽とほぼ同じ方向にあるため、太陽とほぼ一緒に昇り、南中し、沈みます。",
      "diagram": null,
      "distractorReview": "方向の一致と運動停止、回る対象の混同。"
    },
    {
      "id": "sci-02-19",
      "unit": 2,
      "objective": "daytime-moon",
      "sourcePage": 10,
      "prompt": "月は夜にしか空にないという説明は正しいですか。",
      "answer": "正しくない。形によって昼の空にもある",
      "options": [
        "正しくない。形によって昼の空にもある",
        "正しい。日の出と同時に月は必ず沈む",
        "正しい。太陽が出ると月が消える",
        "正しくない。すべての月が昼だけ空にある"
      ],
      "explanation": "月が地平線の上にいる時間帯は形によって違います。上弦は午後、下弦は午前の空にもある目安です。",
      "diagram": null,
      "distractorReview": "見つけにくいことと空に存在しないことの混同。"
    },
    {
      "id": "sci-02-20",
      "unit": 2,
      "objective": "moon-lateness-computation",
      "sourcePage": 11,
      "prompt": "月の南中が毎日50分ずつ遅れるとします。今日20時00分なら、3日後は何時何分ですか。",
      "answer": "22時30分",
      "options": [
        "22時30分",
        "17時30分",
        "20時50分",
        "23時00分"
      ],
      "explanation": "50分×3＝150分＝2時間30分です。遅くなるので20時00分に足し、22時30分になります。",
      "diagram": null,
      "distractorReview": "早い遅いの逆転、分から時間への換算の誤り。"
    },
    {
      "id": "sci-02-21",
      "unit": 2,
      "objective": "solar-rise-edge",
      "sourcePage": 11,
      "prompt": "月の出は中心を基準にしますが、日の出では太陽のどの部分を基準にしますか。",
      "answer": "上のふち",
      "options": [
        "上のふち",
        "中心",
        "下のふち",
        "最も明るい部分"
      ],
      "explanation": "日の出は太陽の上のふちが地平線に現れる時です。月の中心を用いる基準と区別しましょう。",
      "diagram": null,
      "distractorReview": "太陽と月の出入りの基準の混同。"
    },
    {
      "id": "sci-02-22",
      "unit": 2,
      "objective": "illusion-check",
      "sourcePage": 11,
      "prompt": "地平線の月が大きく感じられる理由を調べる方法として適するのはどれですか。",
      "answer": "腕を伸ばし同じ小さな穴越しに高低の月を比べる",
      "options": [
        "腕を伸ばし同じ小さな穴越しに高低の月を比べる",
        "地平線の月だけを拡大鏡で見る",
        "違う倍率の写真の月を比べる",
        "月が昇る前の空と比べる"
      ],
      "explanation": "同じ距離の小さな穴を通して比べると、周囲の建物などの影響を減らせます。比較条件をそろえることが大切です。",
      "diagram": null,
      "distractorReview": "比較条件を変えてしまう観察方法の混同。"
    },
    {
      "id": "sci-03-01",
      "unit": 3,
      "sourcePage": 18,
      "prompt": "北極側から見た模式図です。日光は右から来ます。Aの月は地球から何に見えますか。",
      "answer": "新月",
      "options": [
        "新月",
        "満月",
        "上弦の月",
        "下弦の月"
      ],
      "explanation": "Aは太陽と地球の間にあり、光っている面が地球と反対を向くため新月になります。",
      "diagram": "orbit",
      "distractorReview": "太陽側と反対側、上弦下弦の混同。",
      "objective": "baseline-sci-03-01"
    },
    {
      "id": "sci-03-02",
      "unit": 3,
      "sourcePage": 18,
      "prompt": "日光が右から来る図で、Cの月は地球から何に見えますか。",
      "answer": "満月",
      "options": [
        "満月",
        "新月",
        "上弦の月",
        "下弦の月"
      ],
      "explanation": "Cは太陽と反対側です。日光の当たる面を地球からほぼ全面見られます。図は軌道の傾きを省略した模式図です。",
      "diagram": "orbit",
      "distractorReview": "新月と満月の位置の逆転。",
      "objective": "baseline-sci-03-02"
    },
    {
      "id": "sci-03-03",
      "unit": 3,
      "sourcePage": 18,
      "prompt": "日光が右から来る北極側の図で、Bの月は地球から何に見えますか。",
      "answer": "上弦の月",
      "options": [
        "上弦の月",
        "下弦の月",
        "満月",
        "新月"
      ],
      "explanation": "北極側から見て月は反時計回りに公転します。Aの新月の次のBは上弦で、日本で南中すると右半分が光ります。",
      "diagram": "orbit",
      "distractorReview": "公転の向き、上弦下弦の混同。",
      "objective": "baseline-sci-03-03"
    },
    {
      "id": "sci-03-04",
      "unit": 3,
      "sourcePage": 18,
      "prompt": "日光が右から来る北極側の図で、Dの月は地球から何に見えますか。",
      "answer": "下弦の月",
      "options": [
        "下弦の月",
        "上弦の月",
        "新月",
        "満月"
      ],
      "explanation": "Dは満月Cの後の位置で、下弦の月になります。日本で南中すると左半分が光ります。",
      "diagram": "orbit",
      "distractorReview": "公転の順序、上弦下弦の逆転。",
      "objective": "baseline-sci-03-04"
    },
    {
      "id": "sci-03-05",
      "unit": 3,
      "sourcePage": 18,
      "prompt": "月の満ち欠けが起きても、月の球全体のうち日光が当たる割合は基本的にどのくらいですか。",
      "answer": "半分",
      "options": [
        "半分",
        "全部",
        "4分の1",
        "新月の時だけ0"
      ],
      "explanation": "月の球には基本的に半分ずつ日光が当たります。地球から見える明るい部分の割合が変わります。月食中は別に考えます。",
      "diagram": null,
      "distractorReview": "見える部分と実際に照らされる部分の混同。",
      "objective": "baseline-sci-03-05"
    },
    {
      "id": "sci-03-08",
      "unit": 3,
      "sourcePage": 19,
      "prompt": "教材の目安で、6時ごろ西の地平線近くにある月はどれですか。",
      "answer": "満月",
      "options": [
        "満月",
        "新月",
        "上弦の月",
        "下弦の月"
      ],
      "explanation": "満月は明け方ごろに西へ沈みます。下弦はこの時刻に南中するのが目安です。",
      "diagram": "sky:full",
      "distractorReview": "入りと南中、満月と下弦の混同。",
      "objective": "baseline-sci-03-08"
    },
    {
      "id": "sci-03-09",
      "unit": 3,
      "sourcePage": 19,
      "prompt": "月が地球に近い位置にある時、月の見かけの大きさはどうなりますか。",
      "answer": "大きくなる",
      "options": [
        "大きくなる",
        "小さくなる",
        "距離に関係なく同じ",
        "近いほど月の光る割合が必ず増える"
      ],
      "explanation": "実際の直径が同じなら、近い位置にあるほど見かけの大きさは大きくなります。",
      "diagram": null,
      "distractorReview": "距離と角直径の関係の逆転。",
      "objective": "baseline-sci-03-09"
    },
    {
      "id": "sci-03-10",
      "unit": 3,
      "sourcePage": 19,
      "prompt": "月と地球の距離が一定でない主な理由は何ですか。",
      "answer": "月の公転軌道が楕円だから",
      "options": [
        "月の公転軌道が楕円だから",
        "月が地球の周りを回る速さが常に一定だから",
        "地球の自転によって月の直径が変わるから",
        "月の満ち欠けで月の公転軌道が円になるから"
      ],
      "explanation": "月の公転軌道は楕円なので、地球との距離は変化します。",
      "diagram": null,
      "distractorReview": "軌道と天体の形、公転と自転の混同。",
      "objective": "baseline-sci-03-10"
    },
    {
      "id": "sci-03-12",
      "unit": 3,
      "sourcePage": 18,
      "prompt": "新月から満月へ向かう時期、日本で南中する月の主に光って見える側はどちらですか。",
      "answer": "右側",
      "options": [
        "右側",
        "左側",
        "上側だけ",
        "下側だけ"
      ],
      "explanation": "北半球の日本では、南中時の月は満ちる時期に右側から光って見えます。傾きは空の位置によって変わるので南中時に限定します。",
      "diagram": null,
      "distractorReview": "上弦下弦の左右、観察方向の混同。",
      "objective": "baseline-sci-03-12"
    },
    {
      "id": "sci-03-13",
      "unit": 3,
      "objective": "moon-orbit-direction",
      "sourcePage": 18,
      "prompt": "地球の北極側から見た図で、月の公転はどちら向きですか。",
      "answer": "反時計回り",
      "options": [
        "反時計回り",
        "時計回り",
        "新月から満月までは時計回りで後は逆",
        "地球のまわりを回らず上下運動する"
      ],
      "explanation": "月は北極側から見て反時計回りに公転します。図の矢印の向きと、地球から見た形の変化を区別します。",
      "diagram": "orbit",
      "distractorReview": "見る側を変えた回転方向と往復運動の混同。"
    },
    {
      "id": "sci-03-14",
      "unit": 3,
      "objective": "moon-lit-hemisphere-direction",
      "sourcePage": 18,
      "prompt": "図の4つの位置の月のうち、太陽の光が当たる側はどうなっていますか。",
      "answer": "どの位置でも太陽のある右側",
      "options": [
        "どの位置でも太陽のある右側",
        "どの位置でも地球を向く側",
        "上の位置だけ全体が光る",
        "左の位置だけ日光が全く当たらない"
      ],
      "explanation": "この上から見た図では日光が右から来るので、どの月も右半球が照らされます。地球からの見え方とは別です。",
      "diagram": "orbit",
      "distractorReview": "上から見た照明と地球から見える明るい部分の混同。"
    },
    {
      "id": "sci-03-15",
      "unit": 3,
      "objective": "phase-period-versus-orbit-reason",
      "sourcePage": 18,
      "prompt": "満ち欠けの周期が月の公転周期より長い主な理由はどれですか。",
      "answer": "月の公転中に地球も太陽のまわりを進むから",
      "options": [
        "月の公転中に地球も太陽のまわりを進むから",
        "月が新月で約2日止まるから",
        "月が公転中に大きくなるから",
        "地球の自転が月ごとに止まるから"
      ],
      "explanation": "月が1周する間に地球も公転しているので、太陽・地球・月が同じ位置関係になるまで追加の時間がかかります。",
      "diagram": null,
      "distractorReview": "周期の差を運動停止や天体の大きさに結びつける誤解。"
    },
    {
      "id": "sci-03-16",
      "unit": 3,
      "objective": "same-time-moon-shapes",
      "sourcePage": 19,
      "prompt": "教材の目安で、夕方南西に見えた三日月を数日後に同じ18時ごろ見ると、まずどの姿に近づきますか。",
      "answer": "南の空の上弦の月",
      "options": [
        "南の空の上弦の月",
        "西へ沈む下弦の月",
        "東の空の新月",
        "北の空の満月"
      ],
      "explanation": "新月後の月は形が満ち、同じ夕方の位置は東へ移ります。三日月から数日たつと上弦に近づきます。",
      "diagram": null,
      "distractorReview": "日ごとの位置変化と1日内の動き、満ちる欠けるの混同。"
    },
    {
      "id": "sci-03-17",
      "unit": 3,
      "objective": "lunar-visible-night-window",
      "sourcePage": 19,
      "prompt": "教材の目安で、0時から6時までの間に、満月と下弦の月はそれぞれ主にどう動きますか。",
      "answer": "満月は南から西へ、下弦は東から南へ",
      "options": [
        "満月は南から西へ、下弦は東から南へ",
        "満月は東から南へ、下弦は南から西へ",
        "両方とも西から東へ",
        "両方とも南の位置に止まる"
      ],
      "explanation": "満月は0時南中・6時入り、下弦は0時出・6時南中が目安です。2つの月の時間帯を比べて考えます。",
      "diagram": null,
      "distractorReview": "同じ夜の異なる月の形の時刻表の取り違え。"
    },
    {
      "id": "sci-03-18",
      "unit": 3,
      "objective": "lunar-distance-no-phase-rule",
      "sourcePage": 19,
      "prompt": "月が地球から近いか遠いかだけで、満月・半月などの形は決まりますか。",
      "answer": "決まらない。形は太陽・地球・月の角度で決まる",
      "options": [
        "決まらない。形は太陽・地球・月の角度で決まる",
        "決まる。最も近い時は必ず満月になる",
        "決まる。最も遠い時は必ず新月になる",
        "決まる。距離が半分なら必ず半月になる"
      ],
      "explanation": "距離は見かけの大きさに関わり、満ち欠けは日光の当たる面を見る角度に関わります。2つは別の関係です。",
      "diagram": null,
      "distractorReview": "見かけの大きさと満ち欠けの原因の混同。"
    },
    {
      "id": "sci-03-19",
      "unit": 3,
      "objective": "supermoon-meaning",
      "sourcePage": 19,
      "prompt": "教材でいうスーパームーンとは、どのような満月ですか。",
      "answer": "地球に近く大きく見える満月",
      "options": [
        "地球に近く大きく見える満月",
        "地球から遠く小さく見える満月",
        "月が自ら光を出す満月",
        "月食で暗くなった満月"
      ],
      "explanation": "スーパームーンは、教材では地球に近い位置で大きく見える満月です。月の実際の直径が増えるわけではありません。",
      "diagram": null,
      "distractorReview": "遠近と見かけの大小、月食との混同。"
    },
    {
      "id": "sci-03-20",
      "unit": 3,
      "objective": "micro-moon-meaning",
      "sourcePage": 19,
      "prompt": "教材でいうマイクロムーンに近い条件はどれですか。",
      "answer": "月が地球から遠い位置で満月になる",
      "options": [
        "月が地球から遠い位置で満月になる",
        "月が地球に近い位置で満月になる",
        "月の球の直径が小さくなる",
        "月が半月になる"
      ],
      "explanation": "地球から遠い位置の満月は小さく見え、マイクロムーンとよばれます。近い位置のスーパームーンとは逆です。",
      "diagram": null,
      "distractorReview": "実際の直径変化と距離による見かけの違いの混同。"
    },
    {
      "id": "sci-04-01",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "図の天体の並びで起こりうる現象はどれですか。",
      "answer": "日食",
      "options": [
        "日食",
        "月食",
        "上弦の月",
        "下弦の月"
      ],
      "explanation": "太陽・月・地球の順にほぼ一直線に並び、月が太陽を隠すと日食が起こります。新月のたびに必ず起こるわけではありません。",
      "diagram": "eclipse:solar",
      "distractorReview": "日食月食、一直線と単なる新月の混同。",
      "objective": "baseline-sci-04-01"
    },
    {
      "id": "sci-04-02",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "図の天体の並びで、地球の影に月が入る現象は何ですか。",
      "answer": "月食",
      "options": [
        "月食",
        "日食",
        "上弦の月",
        "新月"
      ],
      "explanation": "太陽・地球・月の順に並び、月が地球の影に入ると月食です。",
      "diagram": "eclipse:lunar",
      "distractorReview": "影をつくる天体の取り違え。",
      "objective": "baseline-sci-04-02"
    },
    {
      "id": "sci-04-03",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "日食が起こる可能性があるのは、どの月の形の時ですか。",
      "answer": "新月",
      "options": [
        "新月",
        "満月",
        "上弦の月",
        "下弦の月"
      ],
      "explanation": "日食は新月の時に起こる可能性があります。ただし月の軌道が傾いているので毎回は起きません。",
      "diagram": null,
      "distractorReview": "日食月食と月の形の対応の混同。",
      "objective": "baseline-sci-04-03"
    },
    {
      "id": "sci-04-04",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "月食が起こる可能性があるのは、どの月の形の時ですか。",
      "answer": "満月",
      "options": [
        "満月",
        "新月",
        "上弦の月",
        "三日月"
      ],
      "explanation": "満月の時、月が地球の影に入ると月食になります。満月のたびに起きるわけではありません。",
      "diagram": null,
      "distractorReview": "日食との逆転。",
      "objective": "baseline-sci-04-04"
    },
    {
      "id": "sci-04-05",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "月食が毎月起こらない主な理由は何ですか。",
      "answer": "月の軌道が地球の公転軌道に対して傾いているから",
      "options": [
        "月の軌道が地球の公転軌道に対して傾いているから",
        "月の自転周期と公転周期が同じだから",
        "満月の時は月が太陽の方向にあるから",
        "地球の影が新月の時だけできるから"
      ],
      "explanation": "軌道面が傾いているため、満月でも月が地球の影の上下を通ることが多くなります。",
      "diagram": null,
      "distractorReview": "距離・大きさと軌道面の混同。",
      "objective": "baseline-sci-04-05"
    },
    {
      "id": "sci-04-06",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "太陽の縁がリング状に残って見える日食を何といいますか。",
      "answer": "金環日食",
      "options": [
        "金環日食",
        "皆既日食",
        "皆既月食",
        "部分月食"
      ],
      "explanation": "月の見かけの直径が太陽より小さい時、太陽の縁が輪のように残る金環日食が起こります。",
      "diagram": "annular",
      "distractorReview": "皆既と金環、日食と月食の混同。",
      "objective": "baseline-sci-04-06"
    },
    {
      "id": "sci-04-07",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "地球から月のほぼ同じ面が見える理由は何ですか。",
      "answer": "月の自転周期と公転周期が等しいから",
      "options": [
        "月の自転周期と公転周期が等しいから",
        "月が自転していないから",
        "月が公転していないから",
        "地球が自転していないから"
      ],
      "explanation": "月は公転1周の間に自転も1回するため、地球にほぼ同じ面を向けています。",
      "diagram": null,
      "distractorReview": "自転しないという典型的誤解。",
      "objective": "baseline-sci-04-07"
    },
    {
      "id": "sci-04-08",
      "unit": 4,
      "sourcePage": 27,
      "prompt": "地球から満月が見える時、月の地球側から見た地球は、どの形に近いですか。",
      "answer": "新月のような形",
      "options": [
        "新月のような形",
        "満月のような形",
        "上弦のような形",
        "下弦のような形"
      ],
      "explanation": "月と地球の照らされる面の向きから、地球から満月を見る時には、月から地球の暗い面が見えます。",
      "diagram": null,
      "distractorReview": "見る場所が変わっても同じ形と思う誤解。",
      "objective": "baseline-sci-04-08"
    },
    {
      "id": "sci-04-10",
      "unit": 4,
      "sourcePage": 27,
      "prompt": "南半球の中緯度での月の主な1日の動きは、どの順序ですか。",
      "answer": "東→北→西",
      "options": [
        "東→北→西",
        "東→南→西",
        "西→北→東",
        "北→東→南"
      ],
      "explanation": "南半球の中緯度では月は東から昇り、北の空を通り、西へ沈むように見えます。日本の南の空と逆です。",
      "diagram": null,
      "distractorReview": "南北・東西の逆転。",
      "objective": "baseline-sci-04-10"
    },
    {
      "id": "sci-04-11",
      "unit": 4,
      "sourcePage": 27,
      "prompt": "地球から新月→上弦→満月へ変わる時、月から見た地球の明るい部分は主にどう変わりますか。",
      "answer": "減っていく",
      "options": [
        "減っていく",
        "増えていく",
        "ずっと全面明るい",
        "ずっと全面暗い"
      ],
      "explanation": "地球から見た月が満ちる時、月から見た地球は欠けていきます。両者の明るい部分は相補的です。",
      "diagram": null,
      "distractorReview": "月と地球の満ち欠けを同じと考える誤解。",
      "objective": "baseline-sci-04-11"
    },
    {
      "id": "sci-04-12",
      "unit": 4,
      "sourcePage": 26,
      "prompt": "日食と月食の説明として正しいのはどれですか。",
      "answer": "日食は月が太陽を隠し、月食は月が地球の影に入る",
      "options": [
        "日食は月が太陽を隠し、月食は月が地球の影に入る",
        "日食は地球の影に月が入り、月食は月が太陽を隠す",
        "日食も月食も、月が太陽を隠す",
        "日食も月食も、月が地球の影に入る"
      ],
      "explanation": "日食は月による太陽の遮蔽、月食は地球の影による月の減光です。",
      "diagram": null,
      "distractorReview": "隠す天体と影の取り違え。",
      "objective": "baseline-sci-04-12"
    },
    {
      "id": "sci-04-13",
      "unit": 4,
      "objective": "total-solar-name",
      "sourcePage": 26,
      "prompt": "月に隠されて太陽の明るい円盤全体が見えなくなる日食を何といいますか。",
      "answer": "皆既日食",
      "options": [
        "皆既日食",
        "金環日食",
        "部分月食",
        "皆既月食"
      ],
      "explanation": "皆既日食では太陽の明るい円盤全体が月に隠れます。金環日食では太陽の縁がリング状に残ります。",
      "diagram": null,
      "distractorReview": "皆既と金環、日食と月食の混同。"
    },
    {
      "id": "sci-04-14",
      "unit": 4,
      "objective": "annular-distance-condition",
      "sourcePage": 26,
      "prompt": "太陽の見かけの大きさが同じなら、金環日食になりやすい月の条件はどれですか。",
      "answer": "月が遠く、太陽より小さく見える",
      "options": [
        "月が遠く、太陽より小さく見える",
        "月が近く、太陽より大きく見える",
        "月が満月で明るく見える",
        "月の直径が突然増える"
      ],
      "explanation": "月が遠いと見かけの大きさが小さくなり、太陽の縁を隠しきれずに輪が残る条件になります。",
      "diagram": null,
      "distractorReview": "遠近による見かけの大小と月の形の混同。"
    },
    {
      "id": "sci-04-15",
      "unit": 4,
      "objective": "total-lunar-red",
      "sourcePage": 26,
      "prompt": "皆既月食で月が赤黒く見えることがある主な理由はどれですか。",
      "answer": "地球の大気を通った赤い光が月に届くから",
      "options": [
        "地球の大気を通った赤い光が月に届くから",
        "月面が高温になり赤く発光するから",
        "月の後ろに赤い惑星が来るから",
        "月面の海が赤い水で満たされるから"
      ],
      "explanation": "地球の大気を通る光のうち、赤い光が曲がって月へ届くためです。月が自ら赤く発光するわけではありません。",
      "diagram": null,
      "distractorReview": "大気を通る光と発光・別天体による照明の混同。"
    },
    {
      "id": "sci-04-16",
      "unit": 4,
      "objective": "partial-lunar-shadow",
      "sourcePage": 26,
      "prompt": "部分月食では、月のどのような状態が起きていますか。",
      "answer": "月の一部だけが地球の本影に入る",
      "options": [
        "月の一部だけが地球の本影に入る",
        "月の一部の岩がなくなる",
        "太陽の一部が月に隠れる",
        "月の一部だけが自ら光る"
      ],
      "explanation": "部分月食は月の一部が地球の本影に入った状態です。日食のように月が太陽を隠す現象ではありません。",
      "diagram": null,
      "distractorReview": "部分月食と部分日食、物体の形の変化の混同。"
    },
    {
      "id": "sci-04-17",
      "unit": 4,
      "objective": "eclipse-not-every-newmoon",
      "sourcePage": 26,
      "prompt": "新月なのに日食が起きないことが多いのはなぜですか。",
      "answer": "月の影が地球から上下に外れることが多いから",
      "options": [
        "月の影が地球から上下に外れることが多いから",
        "新月の月には日光が全く当たらないから",
        "新月では月が地球の裏へ移るから",
        "太陽の直径が毎月変わるから"
      ],
      "explanation": "月の軌道が傾いているので、新月でも太陽・月・地球がぴったりそろわず、月の影が地球から外れることが多くあります。",
      "diagram": null,
      "distractorReview": "新月と一直線の配置を常に同じだと考える誤解。"
    },
    {
      "id": "sci-04-18",
      "unit": 4,
      "objective": "nonrotating-moon-thought-experiment",
      "sourcePage": 26,
      "prompt": "仮に月が公転しても自転を全くしなかったら、地球から見える月面はどうなりますか。",
      "answer": "公転につれて別の面も見える",
      "options": [
        "公転につれて別の面も見える",
        "常に同じ面だけ見える",
        "月がいつも新月になる",
        "月が地球から見えなくなる"
      ],
      "explanation": "宇宙空間に対して同じ向きを保って公転すると、地球を向く面が変わります。同じ面を向け続けるには自転が必要です。",
      "diagram": null,
      "distractorReview": "自転していないから同じ面が見えるという誤解。"
    },
    {
      "id": "sci-04-19",
      "unit": 4,
      "objective": "moon-view-earth-position",
      "sourcePage": 27,
      "prompt": "月の地球側の同じ場所から見る地球の位置は、月から見た太陽に比べてどうなりますか。",
      "answer": "空のほぼ同じ位置にとどまる",
      "options": [
        "空のほぼ同じ位置にとどまる",
        "毎日東から昇り西へ沈む",
        "毎日北極星の周りを1周する",
        "月面のどの場所からも必ず見える"
      ],
      "explanation": "月がほぼ同じ面を地球に向けるため、その側から地球はほぼ同じ空の位置に見えます。月の裏側からは通常見えません。",
      "diagram": null,
      "distractorReview": "地球から見た月の動きを月から見た地球にそのまま当てはめる誤り。"
    },
    {
      "id": "sci-04-20",
      "unit": 4,
      "objective": "moon-view-earth-size",
      "sourcePage": 27,
      "prompt": "月から見る地球の見かけの直径は、地球から見る月よりどうなりますか。",
      "answer": "約4倍大きい",
      "options": [
        "約4倍大きい",
        "約4分の1",
        "ほぼ同じ",
        "約400倍大きい"
      ],
      "explanation": "互いの距離は同じで地球の直径は月の約4倍なので、月から見た地球の見かけの直径も約4倍です。",
      "diagram": null,
      "distractorReview": "見る側を変えた時の大小の逆転、太陽と月の比の混同。"
    },
    {
      "id": "sci-04-21",
      "unit": 4,
      "objective": "moon-view-earth-rotation",
      "sourcePage": 27,
      "prompt": "月から見た地球の空での位置があまり変わらなくても、地球の模様が変わる主な理由は何ですか。",
      "answer": "地球が自転するから",
      "options": [
        "地球が自転するから",
        "地球は自転せず、月だけが毎日1周するから",
        "地球の自転と月の公転周期が同じだから",
        "地球の模様が月の満ち欠けと同じ原因で消えるから"
      ],
      "explanation": "地球は自転しているので、見える大陸や雲の模様が変わります。空での地球の位置がほぼ同じでも模様は変わります。",
      "diagram": null,
      "distractorReview": "天体の位置と表面の自転による模様の変化の混同。"
    },
    {
      "id": "sci-04-22",
      "unit": 4,
      "objective": "southern-upper-illumination",
      "sourcePage": 27,
      "prompt": "南半球の中緯度で、北の空に南中した上弦の月は主にどちら半分が明るく見えますか。",
      "answer": "左半分",
      "options": [
        "左半分",
        "右半分",
        "上半分だけ",
        "全体"
      ],
      "explanation": "日本で南中する上弦の月とは見る向きが反対になり、南半球で北の空を見ると左半分が明るく見えます。",
      "diagram": null,
      "distractorReview": "北半球の見え方をそのまま使う誤り。"
    },
    {
      "id": "sci-04-23",
      "unit": 4,
      "objective": "solar-system-planets",
      "sourcePage": 27,
      "prompt": "太陽系の惑星は、地球を含めて何個ですか。",
      "answer": "8個",
      "options": [
        "8個",
        "9個",
        "7個",
        "1個"
      ],
      "explanation": "太陽系の惑星は8個です。月は地球の衛星であり、惑星の数には入れません。",
      "diagram": null,
      "distractorReview": "月を惑星に含める誤り、昔の9惑星との混同。"
    },
    {
      "id": "sci-04-24",
      "unit": 4,
      "objective": "earth-size-rank",
      "sourcePage": 27,
      "prompt": "太陽系の8惑星を直径の大きい順に並べると、地球は何番目ですか。",
      "answer": "5番目",
      "options": [
        "5番目",
        "1番目",
        "3番目",
        "8番目"
      ],
      "explanation": "木星・土星・天王星・海王星が地球より大きく、地球は5番目です。太陽からの順序とは区別します。",
      "diagram": null,
      "distractorReview": "太陽から3番目という位置の順序と大きさの順序の混同。"
    },
    {
      "id": "sci-04-25",
      "unit": 4,
      "objective": "largest-satellite",
      "sourcePage": 27,
      "prompt": "太陽系で最も大きい衛星はどれですか。",
      "answer": "ガニメデ",
      "options": [
        "ガニメデ",
        "月",
        "タイタン",
        "イオ"
      ],
      "explanation": "最大の衛星は木星のガニメデです。タイタンは土星の衛星で、月より大きいですが最大ではありません。",
      "diagram": null,
      "distractorReview": "月より大きい衛星同士、所属する惑星の混同。"
    },
    {
      "id": "sci-04-26",
      "unit": 4,
      "objective": "titan-primary",
      "sourcePage": 27,
      "prompt": "月より大きい衛星タイタンが回っている惑星はどれですか。",
      "answer": "土星",
      "options": [
        "土星",
        "木星",
        "地球",
        "火星"
      ],
      "explanation": "タイタンは土星の衛星です。ガニメデ・カリスト・イオは木星の衛星で、月は地球の衛星です。",
      "diagram": null,
      "distractorReview": "大型衛星の所属する惑星の混同。"
    },
    {
      "id": "sci-05-01",
      "unit": 5,
      "sourcePage": 34,
      "prompt": "星の等級は、数が小さいほどどうなりますか。",
      "answer": "明るい",
      "options": [
        "明るい",
        "暗い",
        "必ず赤い",
        "必ず大きい"
      ],
      "explanation": "等級は星の見かけの明るさを表し、数が小さいほど明るくなります。大きさや色そのものを表す数ではありません。",
      "diagram": null,
      "distractorReview": "数が大きいほど強いという思い込み、色との混同。",
      "objective": "baseline-sci-05-01"
    },
    {
      "id": "sci-05-02",
      "unit": 5,
      "sourcePage": 34,
      "prompt": "青白い星と赤い星では、一般に表面温度が高いのはどちらですか。",
      "answer": "青白い星",
      "options": [
        "青白い星",
        "赤い星",
        "色と温度は無関係",
        "必ず同じ温度"
      ],
      "explanation": "星は青白いほど表面温度が高く、赤い星は比較的低温です。",
      "diagram": null,
      "distractorReview": "赤を高温と考える日常感覚との混同。",
      "objective": "baseline-sci-05-02"
    },
    {
      "id": "sci-05-03",
      "unit": 5,
      "sourcePage": 34,
      "prompt": "北の空の星がほぼ円を描いて動く中心にある星は何ですか。",
      "answer": "北極星",
      "options": [
        "北極星",
        "シリウス",
        "ベガ",
        "アンタレス"
      ],
      "explanation": "北極星は地軸の延長方向に近いため、ほぼ動かず北の目印になります。",
      "diagram": "north-stars",
      "distractorReview": "明るい代表星との取り違え。",
      "objective": "baseline-sci-05-03"
    },
    {
      "id": "sci-05-04",
      "unit": 5,
      "sourcePage": 34,
      "prompt": "日本で北の空の星は、北極星のまわりをどちら向きに動くように見えますか。",
      "answer": "反時計回り",
      "options": [
        "反時計回り",
        "時計回り",
        "上から下への直線",
        "右から左への直線"
      ],
      "explanation": "北の空を正面に見ると、星は北極星のまわりを反時計回りに動くように見えます。",
      "diagram": "north-stars",
      "distractorReview": "見る方向と回転方向の混同。",
      "objective": "baseline-sci-05-04"
    },
    {
      "id": "sci-05-05",
      "unit": 5,
      "sourcePage": 34,
      "prompt": "星の日周運動の主な原因は何ですか。",
      "answer": "地球の自転",
      "options": [
        "地球の自転",
        "地球の公転",
        "月の公転",
        "星が1日で地球を回ること"
      ],
      "explanation": "1日の星の見かけの動きは地球の自転によって起こります。季節による変化は地球の公転です。",
      "diagram": null,
      "distractorReview": "自転と公転、見かけと実際の混同。",
      "objective": "baseline-sci-05-05"
    },
    {
      "id": "sci-05-06",
      "unit": 5,
      "sourcePage": 34,
      "prompt": "季節によって夜に見える星座が変わる主な理由は何ですか。",
      "answer": "地球が太陽のまわりを公転するから",
      "options": [
        "地球が太陽のまわりを公転するから",
        "地球の自転する向きが季節で逆になるから",
        "月の満ち欠けの周期と星座の周期が同じだから",
        "夜に向く宇宙の方向が1年中変わらないから"
      ],
      "explanation": "地球の公転によって夜に向く宇宙の方向が変わり、季節ごとに見える星座が変わります。",
      "diagram": null,
      "distractorReview": "日周と年周、月の影響との混同。",
      "objective": "baseline-sci-05-06"
    },
    {
      "id": "sci-05-07",
      "unit": 5,
      "sourcePage": 35,
      "prompt": "夏の大三角をつくる星の組み合わせはどれですか。",
      "answer": "ベガ・アルタイル・デネブ",
      "options": [
        "ベガ・アルタイル・デネブ",
        "ベテルギウス・シリウス・プロキオン",
        "デネボラ・スピカ・アークトゥルス",
        "ベガ・シリウス・アンタレス"
      ],
      "explanation": "夏の大三角は、こと座のベガ、わし座のアルタイル、はくちょう座のデネブです。",
      "diagram": "triangle:summer",
      "distractorReview": "冬・春の大三角、別の夏の明るい星との混同。",
      "objective": "baseline-sci-05-07"
    },
    {
      "id": "sci-05-08",
      "unit": 5,
      "sourcePage": 35,
      "prompt": "冬の大三角をつくる星の組み合わせはどれですか。",
      "answer": "ベテルギウス・シリウス・プロキオン",
      "options": [
        "ベテルギウス・シリウス・プロキオン",
        "ベガ・アルタイル・デネブ",
        "デネボラ・スピカ・アークトゥルス",
        "リゲル・ベガ・北極星"
      ],
      "explanation": "冬の大三角はベテルギウス、シリウス、プロキオンです。リゲルはオリオン座の星ですが、この三角の頂点ではありません。",
      "diagram": "triangle:winter",
      "distractorReview": "夏・春の三角、同じ星座の別の星との混同。",
      "objective": "baseline-sci-05-08"
    },
    {
      "id": "sci-05-09",
      "unit": 5,
      "sourcePage": 35,
      "prompt": "ベガがある星座は何ですか。",
      "answer": "こと座",
      "options": [
        "こと座",
        "わし座",
        "はくちょう座",
        "さそり座"
      ],
      "explanation": "ベガはこと座です。アルタイルはわし座、デネブははくちょう座です。",
      "diagram": null,
      "distractorReview": "夏の大三角の星と星座の対応の混同。",
      "objective": "baseline-sci-05-09"
    },
    {
      "id": "sci-05-10",
      "unit": 5,
      "sourcePage": 35,
      "prompt": "オリオン座の赤い1等星は何ですか。",
      "answer": "ベテルギウス",
      "options": [
        "ベテルギウス",
        "リゲル",
        "シリウス",
        "スピカ"
      ],
      "explanation": "ベテルギウスは赤い星で、リゲルは青白い星です。シリウスはおおいぬ座、スピカはおとめ座です。",
      "diagram": null,
      "distractorReview": "同じ星座の色違いの星、冬の隣接星との混同。",
      "objective": "baseline-sci-05-10"
    },
    {
      "id": "sci-05-11",
      "unit": 5,
      "sourcePage": 35,
      "prompt": "春の大三角の星はどれですか。",
      "answer": "スピカ",
      "options": [
        "スピカ",
        "デネブ",
        "リゲル",
        "アンタレス"
      ],
      "explanation": "春の大三角はデネボラ、スピカ、アークトゥルスです。",
      "diagram": null,
      "distractorReview": "他の季節の明るい星との混同。",
      "objective": "baseline-sci-05-11"
    },
    {
      "id": "sci-05-12",
      "unit": 5,
      "sourcePage": 35,
      "prompt": "秋の代表的な星の並びは何ですか。",
      "answer": "秋の大四辺形",
      "options": [
        "秋の大四辺形",
        "秋の大三角",
        "秋の大六角形",
        "秋の北斗七星"
      ],
      "explanation": "ペガスス座とアンドロメダ座にまたがる四辺形が秋の大四辺形です。",
      "diagram": null,
      "distractorReview": "季節と三角・四辺形の混同。",
      "objective": "baseline-sci-05-12"
    },
    {
      "id": "sci-05-13",
      "unit": 5,
      "objective": "first-sixth-magnitude",
      "sourcePage": 34,
      "prompt": "教材では、1等星は6等星の約何倍明るいとしていますか。",
      "answer": "100倍",
      "options": [
        "100倍",
        "6倍",
        "5倍",
        "10倍"
      ],
      "explanation": "1等星と6等星では5等級の差があり、明るさは約100倍です。等級の数をそのまま倍率にはしません。",
      "diagram": null,
      "distractorReview": "等級の差や数を明るさの倍率として使う誤り。"
    },
    {
      "id": "sci-05-14",
      "unit": 5,
      "objective": "star-color-order",
      "sourcePage": 34,
      "prompt": "一般的に、表面温度が高い順に星の色を並べたものはどれですか。",
      "answer": "青白→白→黄→赤",
      "options": [
        "青白→白→黄→赤",
        "赤→黄→白→青白",
        "白→赤→青白→黄",
        "黄→青白→赤→白"
      ],
      "explanation": "星の色は温度に関わり、青白い星が高温、赤い星が比較的低温です。熱い物を赤で表す日常の色分けとは区別します。",
      "diagram": null,
      "distractorReview": "日常の赤い熱表示との混同、温度の順序の逆転。"
    },
    {
      "id": "sci-05-15",
      "unit": 5,
      "objective": "rigel-star",
      "sourcePage": 35,
      "prompt": "オリオン座で青白く見える代表的な1等星はどれですか。",
      "answer": "リゲル",
      "options": [
        "リゲル",
        "ベテルギウス",
        "アンタレス",
        "アルデバラン"
      ],
      "explanation": "オリオン座のリゲルは青白い星です。同じオリオン座のベテルギウスは赤い星です。",
      "diagram": null,
      "distractorReview": "同じ星座の星、ほかの赤い1等星との混同。"
    },
    {
      "id": "sci-05-16",
      "unit": 5,
      "objective": "brightest-night-star",
      "sourcePage": 35,
      "prompt": "夜空の恒星で、地球から最も明るく見えるものはどれですか。",
      "answer": "シリウス",
      "options": [
        "シリウス",
        "北極星",
        "デネブ",
        "ベテルギウス"
      ],
      "explanation": "シリウスはおおいぬ座にあり、夜空の恒星で最も明るく見えます。太陽や惑星はこの比較には含めません。",
      "diagram": null,
      "distractorReview": "北の目印としての重要さと見かけの明るさの混同。"
    },
    {
      "id": "sci-05-17",
      "unit": 5,
      "objective": "east-star-track",
      "sourcePage": 34,
      "prompt": "日本の中緯度で東の空の星をしばらく観察すると、星は主にどう動いて見えますか。",
      "answer": "斜め上へ昇る",
      "options": [
        "斜め上へ昇る",
        "斜め下へ沈む",
        "真下へ落ちる",
        "同じ高さに止まる"
      ],
      "explanation": "東の空では星が昇る動きに見えます。西の空で沈む動きや北極星の周囲の回転とは区別します。",
      "diagram": "star-trails",
      "distractorReview": "東西の動き、北の空の動きの混同。"
    },
    {
      "id": "sci-05-18",
      "unit": 5,
      "objective": "west-star-track",
      "sourcePage": 34,
      "prompt": "図のCは日本の西の空です。星の軌跡の進む向きは主にどちらですか。",
      "answer": "斜め下へ沈む向き",
      "options": [
        "斜め下へ沈む向き",
        "斜め上へ昇る向き",
        "北極星へ近づく向き",
        "真上へ一直線の向き"
      ],
      "explanation": "西の空では星が沈む向きに動きます。東では昇り、南では東側から西側へ移るのが主な動きです。",
      "diagram": "star-trails",
      "distractorReview": "東の空の上昇と西の空の下降の逆転。"
    },
    {
      "id": "sci-05-19",
      "unit": 5,
      "objective": "polaris-stationary-reason",
      "sourcePage": 34,
      "prompt": "北極星がほとんど動かないように見えるのは、どの方向にあるからですか。",
      "answer": "地球の自転軸を北へ延長した方向",
      "options": [
        "地球の自転軸を北へ延長した方向",
        "地球の公転軌道の進行方向",
        "太陽と常に同じ方向",
        "地球の中心から真南の方向"
      ],
      "explanation": "北極星は地球の自転軸の延長に近い方向にあるため、ほかの星と比べて動きが小さく見えます。",
      "diagram": null,
      "distractorReview": "自転軸・公転の向き・太陽の方向の混同。"
    },
    {
      "id": "sci-05-20",
      "unit": 5,
      "objective": "constellation-relative-pattern",
      "sourcePage": 34,
      "prompt": "短時間の星の観察で、星座全体は動いても、星どうしの並び方はどうなりますか。",
      "answer": "ほぼ変わらない",
      "options": [
        "ほぼ変わらない",
        "1時間ごとに全く別の形になる",
        "明るい星だけが順に入れ替わる",
        "必ず三角形から四角形になる"
      ],
      "explanation": "星座の形は短時間ではほぼ変わらず、まとまって動いて見えます。星の位置そのものの移動とは区別します。",
      "diagram": null,
      "distractorReview": "星座の移動と星同士の配置の変化の混同。"
    },
    {
      "id": "sci-05-21",
      "unit": 5,
      "objective": "altair-constellation",
      "sourcePage": 35,
      "prompt": "夏の大三角のアルタイルがある星座は何ですか。",
      "answer": "わし座",
      "options": [
        "わし座",
        "こと座",
        "はくちょう座",
        "さそり座"
      ],
      "explanation": "アルタイルはわし座の星です。こと座のベガ、はくちょう座のデネブと夏の大三角をつくります。",
      "diagram": null,
      "distractorReview": "夏の大三角の3星の星座の取り違え。"
    },
    {
      "id": "sci-05-22",
      "unit": 5,
      "objective": "deneb-constellation",
      "sourcePage": 35,
      "prompt": "夏の大三角のデネブがある星座は何ですか。",
      "answer": "はくちょう座",
      "options": [
        "はくちょう座",
        "わし座",
        "こと座",
        "おおいぬ座"
      ],
      "explanation": "デネブははくちょう座の星です。アルタイルはわし座、ベガはこと座の星です。",
      "diagram": null,
      "distractorReview": "同じ季節の星と星座の組み合わせの混同。"
    },
    {
      "id": "sci-05-23",
      "unit": 5,
      "objective": "vega-tanabata",
      "sourcePage": 35,
      "prompt": "七夕のおりひめ星にあたる恒星はどれですか。",
      "answer": "ベガ",
      "options": [
        "ベガ",
        "アルタイル",
        "デネブ",
        "シリウス"
      ],
      "explanation": "おりひめ星はこと座のベガです。ひこ星はわし座のアルタイルで、別の星です。",
      "diagram": null,
      "distractorReview": "おりひめ・ひこ星と夏の大三角の星の混同。"
    },
    {
      "id": "sci-05-24",
      "unit": 5,
      "objective": "antares-constellation",
      "sourcePage": 35,
      "prompt": "夏の南の低い空に見える、さそり座の赤い1等星はどれですか。",
      "answer": "アンタレス",
      "options": [
        "アンタレス",
        "ベテルギウス",
        "リゲル",
        "スピカ"
      ],
      "explanation": "さそり座の赤い星はアンタレスです。ベテルギウスはオリオン座で、リゲルやスピカは青白い星です。",
      "diagram": null,
      "distractorReview": "季節と星座が異なる赤い星の取り違え。"
    },
    {
      "id": "sci-05-25",
      "unit": 5,
      "objective": "procyon-constellation",
      "sourcePage": 35,
      "prompt": "冬の大三角のプロキオンがある星座は何ですか。",
      "answer": "こいぬ座",
      "options": [
        "こいぬ座",
        "おおいぬ座",
        "オリオン座",
        "おうし座"
      ],
      "explanation": "プロキオンはこいぬ座にあります。おおいぬ座のシリウス、オリオン座のベテルギウスと区別します。",
      "diagram": null,
      "distractorReview": "冬の大三角の星が属する星座の混同。"
    },
    {
      "id": "sci-05-26",
      "unit": 5,
      "objective": "aldebaran-constellation",
      "sourcePage": 35,
      "prompt": "冬に見られる、おうし座の代表的な1等星はどれですか。",
      "answer": "アルデバラン",
      "options": [
        "アルデバラン",
        "カペラ",
        "ポルックス",
        "プロキオン"
      ],
      "explanation": "アルデバランはおうし座の星です。カペラはぎょしゃ座、ポルックスはふたご座、プロキオンはこいぬ座です。",
      "diagram": null,
      "distractorReview": "冬の代表的な星と星座の取り違え。"
    },
    {
      "id": "sci-05-27",
      "unit": 5,
      "objective": "capella-constellation",
      "sourcePage": 35,
      "prompt": "ぎょしゃ座の代表的な1等星はどれですか。",
      "answer": "カペラ",
      "options": [
        "カペラ",
        "アルデバラン",
        "ポルックス",
        "シリウス"
      ],
      "explanation": "カペラはぎょしゃ座の星で、冬の六角形をつくる星の1つです。ほかの冬の星の所属と区別します。",
      "diagram": null,
      "distractorReview": "冬の六角形の星同士の所属の混同。"
    },
    {
      "id": "sci-05-28",
      "unit": 5,
      "objective": "pollux-constellation",
      "sourcePage": 35,
      "prompt": "ふたご座の代表的な1等星はどれですか。",
      "answer": "ポルックス",
      "options": [
        "ポルックス",
        "カペラ",
        "リゲル",
        "スピカ"
      ],
      "explanation": "ふたご座の代表的な1等星はポルックスです。カペラはぎょしゃ座、リゲルはオリオン座、スピカはおとめ座です。",
      "diagram": null,
      "distractorReview": "季節の星の所属の取り違え。"
    },
    {
      "id": "sci-05-29",
      "unit": 5,
      "objective": "winter-hexagon-members",
      "sourcePage": 35,
      "prompt": "次のうち、冬の六角形に含まれない星はどれですか。",
      "answer": "ベテルギウス",
      "options": [
        "ベテルギウス",
        "リゲル",
        "カペラ",
        "ポルックス"
      ],
      "explanation": "冬の六角形はリゲル・アルデバラン・カペラ・ポルックス・プロキオン・シリウスです。ベテルギウスは冬の大三角の星です。",
      "diagram": null,
      "distractorReview": "冬の大三角と冬の六角形の混同。"
    },
    {
      "id": "sci-05-30",
      "unit": 5,
      "objective": "spring-denebola",
      "sourcePage": 35,
      "prompt": "春の大三角をつくるデネボラがある星座は何ですか。",
      "answer": "しし座",
      "options": [
        "しし座",
        "はくちょう座",
        "うしかい座",
        "おとめ座"
      ],
      "explanation": "デネボラはしし座の星です。名前が似たデネブははくちょう座で、夏の大三角の星です。",
      "diagram": null,
      "distractorReview": "デネブとデネボラ、春の星座の取り違え。"
    },
    {
      "id": "sci-05-31",
      "unit": 5,
      "objective": "arcturus-constellation",
      "sourcePage": 35,
      "prompt": "春の大三角のアークトゥルスがある星座は何ですか。",
      "answer": "うしかい座",
      "options": [
        "うしかい座",
        "おとめ座",
        "しし座",
        "こぐま座"
      ],
      "explanation": "アークトゥルスはうしかい座の星です。スピカはおとめ座、デネボラはしし座の星です。",
      "diagram": null,
      "distractorReview": "春の大三角の星の所属の混同。"
    },
    {
      "id": "sci-05-32",
      "unit": 5,
      "objective": "spica-constellation",
      "sourcePage": 35,
      "prompt": "春の青白い1等星スピカがある星座は何ですか。",
      "answer": "おとめ座",
      "options": [
        "おとめ座",
        "うしかい座",
        "しし座",
        "わし座"
      ],
      "explanation": "スピカはおとめ座の星です。春の大三角のほか、春の大曲線を使って探す目印にもなります。",
      "diagram": null,
      "distractorReview": "同じ季節の星座と夏の星座の取り違え。"
    },
    {
      "id": "sci-05-33",
      "unit": 5,
      "objective": "spring-great-curve",
      "sourcePage": 35,
      "prompt": "北斗七星の柄の曲線を延長する春の大曲線は、どの順に星へつながりますか。",
      "answer": "アークトゥルス→スピカ",
      "options": [
        "アークトゥルス→スピカ",
        "スピカ→アークトゥルス",
        "ベガ→アルタイル",
        "シリウス→プロキオン"
      ],
      "explanation": "北斗七星の柄の曲がりを延ばすと、まずアークトゥルス、その先にスピカを探せます。",
      "diagram": null,
      "distractorReview": "春の大曲線の順序の逆転、ほかの季節の星の混同。"
    },
    {
      "id": "sci-05-34",
      "unit": 5,
      "objective": "autumn-square-constellations",
      "sourcePage": 35,
      "prompt": "秋の大四辺形に関係する2つの星座はどれですか。",
      "answer": "ペガスス座とアンドロメダ座",
      "options": [
        "ペガスス座とアンドロメダ座",
        "こと座とわし座",
        "しし座とおとめ座",
        "オリオン座とおおいぬ座"
      ],
      "explanation": "秋の大四辺形はペガスス座とアンドロメダ座に関係します。各季節の大三角の組み合わせとは異なります。",
      "diagram": null,
      "distractorReview": "季節の代表的な星座群の取り違え。"
    },
    {
      "id": "sci-05-35",
      "unit": 5,
      "objective": "fomalhaut-constellation",
      "sourcePage": 35,
      "prompt": "秋の代表的な1等星フォーマルハウトがある星座は何ですか。",
      "answer": "みなみのうお座",
      "options": [
        "みなみのうお座",
        "おおいぬ座",
        "さそり座",
        "こと座"
      ],
      "explanation": "フォーマルハウトはみなみのうお座の星です。秋は夏や冬と比べて明るい1等星が少ないと教材で説明されています。",
      "diagram": null,
      "distractorReview": "ほかの季節の1等星の星座との混同。"
    },
    {
      "id": "sci-06-01",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "教材で星の日周運動を1時間に約15度として計算します。2時間では約何度動きますか。",
      "answer": "30度",
      "options": [
        "30度",
        "15度",
        "45度",
        "60度"
      ],
      "explanation": "15度×2時間＝30度です。時間の掛け忘れや、ほかの時間との取り違えに注意します。",
      "diagram": null,
      "distractorReview": "時間の掛け忘れ、3・4時間の計算との混同。",
      "objective": "baseline-sci-06-01"
    },
    {
      "id": "sci-06-03",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "図のAからBへ星が動く角度は45度です。Aで18時ならBは何時ですか。1時間に15度とします。",
      "answer": "21時",
      "options": [
        "21時",
        "19時",
        "20時",
        "0時"
      ],
      "explanation": "45÷15＝3時間なので、18＋3＝21時です。図は北の空を正面から見たものです。",
      "diagram": "star-angle",
      "distractorReview": "角度と時刻換算、時間数の取り違え。",
      "objective": "baseline-sci-06-03"
    },
    {
      "id": "sci-06-04",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "毎日同じ時刻に星を見ると、1か月で約何度西へずれますか。教材の近似で答えてください。",
      "answer": "30度",
      "options": [
        "30度",
        "15度",
        "60度",
        "360度"
      ],
      "explanation": "1年を12か月として、360÷12＝約30度です。",
      "diagram": null,
      "distractorReview": "1時間、2か月、1年の変化との混同。",
      "objective": "baseline-sci-06-04"
    },
    {
      "id": "sci-06-05",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "1か月後に同じ星を同じ位置で見るには、観察時刻を約どう変えますか。",
      "answer": "2時間早くする",
      "options": [
        "2時間早くする",
        "2時間遅くする",
        "30分早くする",
        "時刻を変えない"
      ],
      "explanation": "1か月の約30度は日周運動2時間分なので、約2時間早く見ると同じ位置になります。",
      "diagram": null,
      "distractorReview": "星と月の時刻の逆転、角度と分の混同。",
      "objective": "baseline-sci-06-05"
    },
    {
      "id": "sci-06-06",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "星の南中時刻は1日ごとに約どう変わりますか。",
      "answer": "4分早くなる",
      "options": [
        "4分早くなる",
        "4分遅くなる",
        "50分遅くなる",
        "50分早くなる"
      ],
      "explanation": "地球の公転によって、星の南中時刻は毎日約4分早くなります。月の約50分遅くなる変化と区別します。",
      "diagram": null,
      "distractorReview": "月との混同、早い遅いの逆転。",
      "objective": "baseline-sci-06-06"
    },
    {
      "id": "sci-06-07",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "図の北斗七星の2つの目印の星の間隔を、約何倍のばすと北極星を探せますか。",
      "answer": "5倍",
      "options": [
        "5倍",
        "2倍",
        "3倍",
        "10倍"
      ],
      "explanation": "ひしゃくの先端の2つの星を結び、図の矢印の向きに間隔を約5倍のばします。",
      "diagram": "polaris-finder",
      "distractorReview": "延長の長さの取り違え。",
      "objective": "baseline-sci-06-07"
    },
    {
      "id": "sci-06-08",
      "unit": 6,
      "sourcePage": 43,
      "prompt": "星座早見で最初に合わせるのは何ですか。",
      "answer": "日付と時刻",
      "options": [
        "日付と時刻",
        "日付だけで時刻は合わせない",
        "時刻だけで日付は合わせない",
        "北極星の等級と月齢"
      ],
      "explanation": "調べたい日付と時刻の目盛りを合わせます。その後、見る方角の文字を手前にして空へかざします。",
      "diagram": null,
      "distractorReview": "天文観察と気象観察の項目の混同。",
      "objective": "baseline-sci-06-08"
    },
    {
      "id": "sci-06-09",
      "unit": 6,
      "sourcePage": 43,
      "prompt": "星座早見を使って東の空を見る時、手前にくる方角の文字はどれですか。",
      "answer": "東",
      "options": [
        "東",
        "西",
        "南",
        "北"
      ],
      "explanation": "見たい方角の文字を手前にし、頭の上にかざして空と比べます。地図を机に置く読み方とは違います。",
      "diagram": null,
      "distractorReview": "東西逆転、持ち方の混同。",
      "objective": "baseline-sci-06-09"
    },
    {
      "id": "sci-06-10",
      "unit": 6,
      "sourcePage": 43,
      "prompt": "星座早見にふつう描かれていない天体はどれですか。",
      "answer": "金星",
      "options": [
        "金星",
        "北極星",
        "ベガ",
        "シリウス"
      ],
      "explanation": "惑星は恒星に対する位置を複雑に変えるので、固定した星座早見にはふつう描かれません。",
      "diagram": null,
      "distractorReview": "惑星と恒星の混同。",
      "objective": "baseline-sci-06-10"
    },
    {
      "id": "sci-06-11",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "北極星が属する星座は何ですか。",
      "answer": "こぐま座",
      "options": [
        "こぐま座",
        "おおぐま座",
        "カシオペヤ座",
        "オリオン座"
      ],
      "explanation": "北極星はこぐま座の星です。北斗七星はおおぐま座の一部で、北極星を探す目印になります。",
      "diagram": null,
      "distractorReview": "目印の星座と北極星自身の星座の混同。",
      "objective": "baseline-sci-06-11"
    },
    {
      "id": "sci-06-13",
      "unit": 6,
      "objective": "star-daily-hour-angle",
      "sourcePage": 42,
      "prompt": "教材では、星の日周運動の回転角は1時間あたり約何度ですか。",
      "answer": "15度",
      "options": [
        "15度",
        "1度",
        "30度",
        "360度"
      ],
      "explanation": "24時間で360度という近似から、360÷24＝15度です。同時刻で1か月後の30度とは別です。",
      "diagram": null,
      "distractorReview": "日周運動と年周運動、1日と1時間の混同。"
    },
    {
      "id": "sci-06-14",
      "unit": 6,
      "objective": "star-angular-rate-versus-distance",
      "sourcePage": 42,
      "prompt": "北極星の近くの星と遠くの星は、同じ1時間で北極星を中心に回る角度がどうなりますか。",
      "answer": "ほぼ同じ",
      "options": [
        "ほぼ同じ",
        "近い星の方が必ず2倍大きい",
        "遠い星は回らない",
        "距離に比例して角度も大きくなる"
      ],
      "explanation": "回転の角度はほぼ同じです。北極星から遠い星ほど円の半径が大きいため、軌跡の長さは長くなります。",
      "diagram": "star-radii",
      "distractorReview": "回転角と円周上の移動距離の混同。"
    },
    {
      "id": "sci-06-15",
      "unit": 6,
      "objective": "star-previous-position",
      "sourcePage": 42,
      "prompt": "図の星が今Bにあります。3時間前の位置はどこですか。教材の1時間15度の目安を使います。",
      "answer": "A",
      "options": [
        "A",
        "北極星の位置",
        "AとBの真ん中",
        "Bからさらに反時計回り45度先"
      ],
      "explanation": "AからBへ45度で3時間進みます。前の時刻を考える時は、動く向きとは逆に位置を戻します。",
      "diagram": "star-angle",
      "distractorReview": "過去と未来、回転の向きの混同。"
    },
    {
      "id": "sci-06-16",
      "unit": 6,
      "objective": "star-date-time-combined",
      "sourcePage": 43,
      "prompt": "星が1か月に30度西へ、1時間に15度西へ移る目安を使います。1か月後の1時間遅い観察では、元より何度西へずれますか。",
      "answer": "45度",
      "options": [
        "45度",
        "15度",
        "30度",
        "60度"
      ],
      "explanation": "日付による30度と、時刻が1時間遅いことによる15度を足して45度です。2つの変化が同じ向きに働きます。",
      "diagram": null,
      "distractorReview": "日付と時刻の変化を引く誤り、一方だけ計算する誤り。"
    },
    {
      "id": "sci-06-17",
      "unit": 6,
      "objective": "star-before-date-time",
      "sourcePage": 43,
      "prompt": "今月22時に南中する星を、1か月前に南中していた時刻の目安は何時ですか。",
      "answer": "翌日0時ごろ",
      "options": [
        "翌日0時ごろ",
        "20時ごろ",
        "22時ごろ",
        "18時ごろ"
      ],
      "explanation": "1か月後には約2時間早く南中するので、1か月前は約2時間遅くなります。22時の2時間後は翌日0時です。",
      "diagram": null,
      "distractorReview": "前後の逆転、日付をまたぐ時間の換算の誤り。"
    },
    {
      "id": "sci-06-18",
      "unit": 6,
      "objective": "polaris-magnitude",
      "sourcePage": 42,
      "prompt": "北極星の明るさは、教材では何等星ですか。",
      "answer": "2等星",
      "options": [
        "2等星",
        "1等星",
        "6等星",
        "0等星"
      ],
      "explanation": "北極星はこぐま座の2等星です。方位の目印として重要でも、夜空で最も明るい星ではありません。",
      "diagram": null,
      "distractorReview": "目印としての重要さと1等星・最も明るい星の混同。"
    },
    {
      "id": "sci-06-19",
      "unit": 6,
      "objective": "big-dipper-constellation",
      "sourcePage": 42,
      "prompt": "北斗七星は、どの星座の一部ですか。",
      "answer": "おおぐま座",
      "options": [
        "おおぐま座",
        "こぐま座",
        "カシオペヤ座",
        "はくちょう座"
      ],
      "explanation": "北斗七星はおおぐま座の一部の星の並びです。北極星があるこぐま座とは区別します。",
      "diagram": null,
      "distractorReview": "北極星を探す並びと北極星自身の星座の混同。"
    },
    {
      "id": "sci-06-20",
      "unit": 6,
      "objective": "cassiopeia-shape",
      "sourcePage": 42,
      "prompt": "北斗七星以外に北極星を探す時に使える、W形の星座は何ですか。",
      "answer": "カシオペヤ座",
      "options": [
        "カシオペヤ座",
        "オリオン座",
        "おおぐま座",
        "こと座"
      ],
      "explanation": "カシオペヤ座のW形の並びも、北極星を探す目印です。北斗七星のひしゃく形とは異なります。",
      "diagram": null,
      "distractorReview": "W形・ひしゃく形・三つ星などの星の並びの混同。"
    },
    {
      "id": "sci-06-21",
      "unit": 6,
      "objective": "planisphere-east-west-reason",
      "sourcePage": 43,
      "prompt": "星座早見で東西が地図と逆に見える主な理由はどれですか。",
      "answer": "空を見上げて使うから",
      "options": [
        "空を見上げて使うから",
        "南北の文字が間違っているから",
        "南半球専用だから",
        "星が西から昇るから"
      ],
      "explanation": "地図は下を見ますが、星座早見は頭上へ向けて見上げます。見る向きの違いが東西の配置に表れます。",
      "diagram": null,
      "distractorReview": "道具の見る方向と印刷誤り・星の運動の混同。"
    },
    {
      "id": "sci-06-22",
      "unit": 6,
      "objective": "planisphere-planets-reason",
      "sourcePage": 43,
      "prompt": "普通の星座早見に金星や火星の位置が固定して描かれていない主な理由は何ですか。",
      "answer": "恒星に対して位置が変わるから",
      "options": [
        "恒星に対して位置が変わるから",
        "光を反射する天体は見えないから",
        "惑星はすべて北極星の位置にあるから",
        "惑星は昼間だけ存在するから"
      ],
      "explanation": "惑星は恒星の並びに対して位置が変わります。同じ恒星を固定して描く星座早見では、位置を表しきれません。",
      "diagram": null,
      "distractorReview": "反射光は見えないという誤り、存在と観察時間の混同。"
    },
    {
      "id": "sci-06-23",
      "unit": 6,
      "objective": "year-cycle-return",
      "sourcePage": 42,
      "prompt": "教材の年周運動の目安で、1年後に同じ日付・同じ時刻で見る星座の位置はどうなりますか。",
      "answer": "ほぼ元に戻る",
      "options": [
        "ほぼ元に戻る",
        "半周先になる",
        "毎年30度ずつずれ続ける",
        "全く別の星座だけになる"
      ],
      "explanation": "地球は太陽のまわりを約1年で1周するため、同じ季節・時刻には星座の見える位置がほぼ元に戻ります。",
      "diagram": null,
      "distractorReview": "1か月・半年・1年の変化の混同。"
    },
    {
      "id": "sci-07-01",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "種子で、発芽して植物の体になる部分を何といいますか。",
      "answer": "胚",
      "options": [
        "胚",
        "種皮",
        "胚乳",
        "果皮"
      ],
      "explanation": "胚は発芽後に植物の体になる部分です。種皮は種子を守り、胚乳は養分を蓄える部分です。",
      "diagram": null,
      "distractorReview": "種子の各部分の役割の混同。",
      "objective": "baseline-sci-07-01"
    },
    {
      "id": "sci-07-04",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "図のインゲンマメのAは何ですか。",
      "answer": "子葉",
      "options": [
        "子葉",
        "種皮",
        "幼根",
        "幼芽"
      ],
      "explanation": "Aは大きな子葉です。インゲンマメの子葉には発芽に使う養分が蓄えられています。",
      "diagram": "seed:bean",
      "distractorReview": "種皮、胚の小さい部分との取り違え。",
      "objective": "baseline-sci-07-04"
    },
    {
      "id": "sci-07-05",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "図のトウモロコシのBは何ですか。",
      "answer": "胚乳",
      "options": [
        "胚乳",
        "種皮",
        "胚",
        "幼根"
      ],
      "explanation": "大きなBの部分は胚乳で、発芽や初期成長の養分が蓄えられています。",
      "diagram": "seed:corn",
      "distractorReview": "胚と胚乳、外側の種皮の混同。",
      "objective": "baseline-sci-07-05"
    },
    {
      "id": "sci-07-06",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "種皮の主な役割は何ですか。",
      "answer": "種子の内部を保護する",
      "options": [
        "種子の内部を保護する",
        "発芽後に根になる",
        "発芽後に葉になる",
        "日光から養分をつくる"
      ],
      "explanation": "種皮は種子の内部を外敵や乾燥から守る役割を持ちます。",
      "diagram": null,
      "distractorReview": "胚の役割、緑の葉の役割との混同。",
      "objective": "baseline-sci-07-06"
    },
    {
      "id": "sci-07-07",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "幼根は発芽後に主に何になりますか。",
      "answer": "根",
      "options": [
        "根",
        "葉",
        "花",
        "種皮"
      ],
      "explanation": "胚にある幼根は根、幼芽は葉や茎になる部分です。子葉は発芽に必要な養分を蓄えます。",
      "diagram": null,
      "distractorReview": "幼根と幼芽、発芽前後の構造の混同。",
      "objective": "baseline-sci-07-07"
    },
    {
      "id": "sci-07-08",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "でんぷんにヨウ素液をつけると、何色になりますか。",
      "answer": "青むらさき色",
      "options": [
        "青むらさき色",
        "赤色",
        "黄色",
        "緑色"
      ],
      "explanation": "ヨウ素液はでんぷんがあると青むらさき色になります。",
      "diagram": null,
      "distractorReview": "指示薬の反応色と葉の色の混同。",
      "objective": "baseline-sci-07-08"
    },
    {
      "id": "sci-07-09",
      "unit": 7,
      "sourcePage": 51,
      "prompt": "インゲンマメの発芽に基本的に必要な3条件はどれですか。",
      "answer": "水・空気・適当な温度",
      "options": [
        "水・空気・適当な温度",
        "水・日光・肥料",
        "日光・肥料・土",
        "水・空気・日光"
      ],
      "explanation": "インゲンマメの発芽には水、空気中の酸素、適当な温度が必要です。日光や肥料は発芽の必須条件ではありません。",
      "diagram": "germination",
      "distractorReview": "発芽と成長の条件、温度の混同。",
      "objective": "baseline-sci-07-09"
    },
    {
      "id": "sci-07-10",
      "unit": 7,
      "sourcePage": 51,
      "prompt": "インゲンマメの発芽で、通常最初に出るのは何ですか。",
      "answer": "根",
      "options": [
        "根",
        "緑色の本葉",
        "茎が伸びて子葉が出る",
        "根と子葉が同時に出る"
      ],
      "explanation": "インゲンマメは根が先に出て、その後に茎が伸び、子葉が地上に出ます。",
      "diagram": null,
      "distractorReview": "根と葉の順序の逆転、成長段階の混同。",
      "objective": "baseline-sci-07-10"
    },
    {
      "id": "sci-07-11",
      "unit": 7,
      "sourcePage": 51,
      "prompt": "水中で発芽するイネで、根より先に伸び出すのは何ですか。",
      "answer": "芽",
      "options": [
        "芽",
        "幼根",
        "緑色の本葉が完全に開いたもの",
        "芽と根が同時に伸びたもの"
      ],
      "explanation": "水中のイネでは、根より先に芽が伸びます。最初に伸びる芽と、養分を吸収する子葉を混同しないようにしましょう。",
      "diagram": null,
      "distractorReview": "インゲンマメとの順序の混同。",
      "objective": "baseline-sci-07-11"
    },
    {
      "id": "sci-07-12",
      "unit": 7,
      "sourcePage": 51,
      "prompt": "光によって発芽が促される種子の代表例はどれですか。",
      "answer": "レタス",
      "options": [
        "レタス",
        "インゲンマメ",
        "トウモロコシ",
        "エンドウ"
      ],
      "explanation": "レタスは光が発芽を促す代表的な種子です。インゲンマメなどは、日光がなくても基本3条件がそろえば発芽します。",
      "diagram": null,
      "distractorReview": "全ての種子で光は不要という一般化。",
      "objective": "baseline-sci-07-12"
    },
    {
      "id": "sci-07-13",
      "unit": 7,
      "objective": "embryo-parts",
      "sourcePage": 50,
      "prompt": "胚をつくる主な部分の組み合わせはどれですか。",
      "answer": "子葉・幼芽・胚軸・幼根",
      "options": [
        "子葉・幼芽・胚軸・幼根",
        "種皮・胚乳・花粉・子房",
        "子葉・種皮・胚乳・花びら",
        "根毛・葉脈・やく・柱頭"
      ],
      "explanation": "胚は発芽後の体になる部分で、子葉・幼芽・胚軸・幼根を含みます。種皮や胚乳とは区別します。",
      "diagram": null,
      "distractorReview": "胚の部分と保護部分・養分貯蔵部分・花の部分の混同。"
    },
    {
      "id": "sci-07-14",
      "unit": 7,
      "objective": "plumule-label",
      "sourcePage": 50,
      "prompt": "種子の胚の図で、Aが指す幼芽は、主に発芽後の何になりますか。",
      "answer": "葉や茎",
      "options": [
        "葉や茎",
        "根だけ",
        "種皮",
        "胚乳"
      ],
      "explanation": "幼芽は葉や茎になる部分です。幼根は根になり、種皮は種子の内部を保護する部分です。",
      "diagram": "embryo-parts",
      "distractorReview": "幼芽・幼根・保護部分の役割の混同。"
    },
    {
      "id": "sci-07-15",
      "unit": 7,
      "objective": "hypocotyl-label",
      "sourcePage": 50,
      "prompt": "種子の胚の図で、子葉と幼根の間にあるBは何ですか。",
      "answer": "胚軸",
      "options": [
        "胚軸",
        "幼芽",
        "胚乳",
        "種皮"
      ],
      "explanation": "Bは胚軸です。発芽後の茎の一部になる部分で、養分を蓄える胚乳や種皮とは異なります。",
      "diagram": "embryo-parts",
      "distractorReview": "位置が近い幼芽・胚軸、胚と胚乳の混同。"
    },
    {
      "id": "sci-07-16",
      "unit": 7,
      "objective": "endospermless-definition",
      "sourcePage": 50,
      "prompt": "無胚乳種子について、正しい説明はどれですか。",
      "answer": "養分を主に子葉に蓄え、成熟時に胚乳がない",
      "options": [
        "養分を主に子葉に蓄え、成熟時に胚乳がない",
        "胚そのものがなく発芽できない",
        "種皮がないので内部がむき出し",
        "養分が全くない"
      ],
      "explanation": "無胚乳種子は成熟時に胚乳がなく、インゲンマメでは子葉に養分を蓄えます。胚がない意味ではありません。",
      "diagram": null,
      "distractorReview": "無胚乳と無胚・無養分・無種皮の混同。"
    },
    {
      "id": "sci-07-17",
      "unit": 7,
      "objective": "endosperm-dicot-exception",
      "sourcePage": 50,
      "prompt": "双子葉類であっても胚乳のある種子の例はどれですか。",
      "answer": "カキ",
      "options": [
        "カキ",
        "インゲンマメ",
        "エンドウ",
        "アサガオ"
      ],
      "explanation": "カキやオシロイバナは、双子葉類でも胚乳をもつ例です。子葉の枚数と胚乳の有無を完全に同じ分類と考えないようにします。",
      "diagram": null,
      "distractorReview": "双子葉類は例外なく無胚乳という誤解。"
    },
    {
      "id": "sci-07-18",
      "unit": 7,
      "objective": "monocot-leaf-veins",
      "sourcePage": 50,
      "prompt": "図のBの葉脈の特徴と植物のなかまの組み合わせはどれですか。",
      "answer": "平行脈・単子葉類",
      "options": [
        "平行脈・単子葉類",
        "網状脈・単子葉類",
        "平行脈・双子葉類",
        "網状脈・双子葉類"
      ],
      "explanation": "Bは葉脈が並行に走る平行脈です。イネやトウモロコシなどの単子葉類の特徴です。",
      "diagram": "leaf-veins",
      "distractorReview": "葉脈の名前と子葉の枚数の分類の取り違え。"
    },
    {
      "id": "sci-07-19",
      "unit": 7,
      "objective": "dicot-leaf-veins",
      "sourcePage": 50,
      "prompt": "図のAの葉脈の特徴はどれですか。",
      "answer": "枝分かれして網目状になる",
      "options": [
        "枝分かれして網目状になる",
        "すべて同じ方向に平行に走る",
        "葉に脈が全くない",
        "太い1本だけで枝分かれしない"
      ],
      "explanation": "Aは網状脈の模式図です。インゲンマメなどの双子葉類では、葉脈が網目のように分かれます。",
      "diagram": "leaf-veins",
      "distractorReview": "網状脈と平行脈、主脈だけを見る誤り。"
    },
    {
      "id": "sci-07-20",
      "unit": 7,
      "objective": "rice-husk",
      "sourcePage": 50,
      "prompt": "イネの種子を外側から包んでいる「もみがら」を、教材では何とよんでいますか。",
      "answer": "えい",
      "options": [
        "えい",
        "胚乳",
        "幼根",
        "子葉"
      ],
      "explanation": "教材の「えい」はもみがらを指します。内部の胚乳や胚の部分とは区別します。",
      "diagram": null,
      "distractorReview": "外側を包む構造と内部の胚・胚乳の混同。"
    },
    {
      "id": "sci-07-21",
      "unit": 7,
      "objective": "seed-imbibition",
      "sourcePage": 51,
      "prompt": "乾いたインゲンマメの種子を水につけると、まず見られる変化はどれですか。",
      "answer": "水を吸ってふくらみ、やわらかくなる",
      "options": [
        "水を吸ってふくらみ、やわらかくなる",
        "水を失って小さくなる",
        "すぐに花粉をつくる",
        "種子がでんぷんを全て水に溶かす"
      ],
      "explanation": "乾いた種子は水を吸収してふくらみ、活動を始めます。花をつける成長段階とは違います。",
      "diagram": null,
      "distractorReview": "吸水と脱水、発芽と開花の混同。"
    },
    {
      "id": "sci-07-22",
      "unit": 7,
      "objective": "germination-oxygen-use",
      "sourcePage": 51,
      "prompt": "種子が発芽するとき、空気中の酸素を使う主な働きは何ですか。",
      "answer": "呼吸",
      "options": [
        "呼吸",
        "光合成",
        "受粉",
        "蒸散だけ"
      ],
      "explanation": "種子は蓄えた養分を呼吸で使い、活動するためのエネルギーを得ます。葉が育つ前から酸素を使います。",
      "diagram": null,
      "distractorReview": "酸素を使う呼吸と二酸化炭素を使う光合成の混同。"
    },
    {
      "id": "sci-07-23",
      "unit": 7,
      "objective": "germination-no-fertilizer-reason",
      "sourcePage": 51,
      "prompt": "インゲンマメの種子が肥料なしでも発芽できる主な理由はどれですか。",
      "answer": "発芽に使う養分を内部に蓄えているから",
      "options": [
        "発芽に使う養分を内部に蓄えているから",
        "土をすべて養分へ変えるから",
        "発芽直後から葉で十分に光合成できるから",
        "水そのものがでんぷんになるから"
      ],
      "explanation": "インゲンマメは子葉に養分を蓄えています。発芽の段階と、その後十分に成長する段階の条件を区別します。",
      "diagram": null,
      "distractorReview": "発芽の養分源と成長後の光合成・肥料の混同。"
    },
    {
      "id": "sci-07-24",
      "unit": 7,
      "objective": "germination-temperature-range",
      "sourcePage": 51,
      "prompt": "「適当な温度」が必要とは、どのような意味ですか。",
      "answer": "植物ごとに発芽に適した温度があり、高すぎても低すぎてもよくない",
      "options": [
        "植物ごとに発芽に適した温度があり、高すぎても低すぎてもよくない",
        "温度は高いほど必ずよい",
        "どの種子も0℃が最もよい",
        "どの種子も同じ温度でしか発芽しない"
      ],
      "explanation": "発芽に適した温度は植物ごとに違います。教材でもインゲンマメとイネでは適した温度の目安が異なります。",
      "diagram": null,
      "distractorReview": "高温ほどよいという誤解、種類による違いを無視する誤り。"
    },
    {
      "id": "sci-07-25",
      "unit": 7,
      "objective": "bean-root-system",
      "sourcePage": 51,
      "prompt": "図のAのように太い根から細い根が枝分かれする根のつくりはどれですか。",
      "answer": "主根と側根",
      "options": [
        "主根と側根",
        "ひげ根だけ",
        "地下の葉と葉脈",
        "胚乳と種皮"
      ],
      "explanation": "インゲンマメなどは太い主根と、そこから枝分かれした側根をもちます。単子葉類のひげ根と比べましょう。",
      "diagram": "root-systems",
      "distractorReview": "主根・側根とひげ根、根と葉の混同。"
    },
    {
      "id": "sci-07-26",
      "unit": 7,
      "objective": "corn-root-system",
      "sourcePage": 51,
      "prompt": "図のBのようなトウモロコシの根は、一般に何とよばれますか。",
      "answer": "ひげ根",
      "options": [
        "ひげ根",
        "主根だけ",
        "葉脈",
        "地下茎だけ"
      ],
      "explanation": "トウモロコシなどの単子葉類では、同じくらいの細い根が広がるひげ根が見られます。",
      "diagram": "root-systems",
      "distractorReview": "ひげ根と主根、根と茎・葉の混同。"
    },
    {
      "id": "sci-07-27",
      "unit": 7,
      "objective": "water-experiment-pair",
      "sourcePage": 51,
      "prompt": "図の発芽実験で、水の必要性を調べるために比べる組はどれですか。",
      "answer": "AとB",
      "options": [
        "AとB",
        "AとC",
        "AとD",
        "BとD"
      ],
      "explanation": "AとBは水だけが違い、空気と温度をそろえています。調べる条件だけを変えて比べます。",
      "diagram": "germination-test",
      "distractorReview": "空気・温度の対照実験との取り違え。"
    },
    {
      "id": "sci-07-28",
      "unit": 7,
      "objective": "air-experiment-pair",
      "sourcePage": 51,
      "prompt": "図の発芽実験で、空気の必要性を調べるために比べる組はどれですか。",
      "answer": "AとC",
      "options": [
        "AとC",
        "AとB",
        "AとD",
        "BとD"
      ],
      "explanation": "AとCは空気が届くかだけが違います。水と温度が同じなので、空気の条件を比べられます。",
      "diagram": "germination-test",
      "distractorReview": "水・温度の実験との取り違え、2条件違う組の選択。"
    },
    {
      "id": "sci-07-29",
      "unit": 7,
      "objective": "temperature-experiment-pair",
      "sourcePage": 51,
      "prompt": "図の発芽実験で、適当な温度の必要性を調べる組はどれですか。",
      "answer": "AとD",
      "options": [
        "AとD",
        "AとB",
        "AとC",
        "BとC"
      ],
      "explanation": "AとDは温度だけが違い、水と空気の条件は同じです。Aは25℃、Dは5℃という設定です。",
      "diagram": "germination-test",
      "distractorReview": "比較で変える条件とそろえる条件の混同。"
    },
    {
      "id": "sci-07-30",
      "unit": 7,
      "objective": "germination-water-overfill",
      "sourcePage": 51,
      "prompt": "インゲンマメを水に深く沈めておくと発芽しにくい主な理由はどれですか。",
      "answer": "呼吸に必要な酸素が届きにくくなるから",
      "options": [
        "呼吸に必要な酸素が届きにくくなるから",
        "水が多いと種皮が厚くなるから",
        "水中では種子の温度が必ず0℃になるから",
        "水は発芽に不要だから"
      ],
      "explanation": "水は必要ですが、深く沈めると酸素が不足しやすくなります。水が多ければよいとは限りません。",
      "diagram": null,
      "distractorReview": "水の必要性と酸素不足を混同する誤り。"
    },
    {
      "id": "sci-08-02",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "同じ条件でヨウ素液をつけた時、発芽前より成長後の子葉の色が薄いのはなぜですか。",
      "answer": "でんぷんが使われて減ったから",
      "options": [
        "でんぷんが使われて減ったから",
        "でんぷんが増えたから",
        "ヨウ素液は水の量だけに反応するから",
        "発芽すると子葉にでんぷんが新しく蓄えられるから"
      ],
      "explanation": "成長にでんぷんが使われ、ヨウ素液の反応が弱くなるためです。",
      "diagram": null,
      "distractorReview": "色の濃さと量の関係の逆転。",
      "objective": "baseline-sci-08-02"
    },
    {
      "id": "sci-08-03",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "模式グラフのAは子葉の重さです。日数とともに減る主な理由は何ですか。",
      "answer": "子葉の養分が使われるから",
      "options": [
        "子葉の養分が使われるから",
        "根が水を吸わないから",
        "葉で養分がつくられ続けるから",
        "芽が種皮へ戻るから"
      ],
      "explanation": "Aの減少は、子葉に蓄えられた養分が発芽した部分へ送られ、使われることを表します。図に数値の尺度はありません。",
      "diagram": "seed-graph",
      "distractorReview": "グラフの減少と養分の役割の混同。",
      "objective": "baseline-sci-08-03"
    },
    {
      "id": "sci-08-04",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "模式グラフのBのように、発芽した部分の重さが増える主な理由は何ですか。",
      "answer": "芽や根が成長するから",
      "options": [
        "芽や根が成長するから",
        "子葉の重さが増えているから",
        "種子の養分を使わず水だけで育つから",
        "根は伸びず種皮だけが厚くなるから"
      ],
      "explanation": "子葉などの養分を使って芽や根が成長し、発芽した部分の重さが増えます。",
      "diagram": "seed-graph",
      "distractorReview": "測っている部分と種子全体の混同。",
      "objective": "baseline-sci-08-04"
    },
    {
      "id": "sci-08-05",
      "unit": 8,
      "sourcePage": 59,
      "prompt": "子葉が地上に出ず、地中に残る植物はどれですか。",
      "answer": "エンドウ",
      "options": [
        "エンドウ",
        "インゲンマメ",
        "アサガオ",
        "ホウセンカ"
      ],
      "explanation": "エンドウは子葉が地中に残ります。インゲンマメなどは子葉が地上へ出ます。",
      "diagram": null,
      "distractorReview": "同じマメの仲間なら同じ発芽と思う誤解。",
      "objective": "baseline-sci-08-05"
    },
    {
      "id": "sci-08-06",
      "unit": 8,
      "sourcePage": 59,
      "prompt": "子葉が地上へ出る植物はどれですか。",
      "answer": "インゲンマメ",
      "options": [
        "インゲンマメ",
        "エンドウ",
        "ソラマメ",
        "アズキ"
      ],
      "explanation": "インゲンマメは子葉が地上に出ます。エンドウ、ソラマメ、アズキは地中に子葉を残す例です。",
      "diagram": null,
      "distractorReview": "マメ類の発芽様式の混同。",
      "objective": "baseline-sci-08-06"
    },
    {
      "id": "sci-08-07",
      "unit": 8,
      "sourcePage": 59,
      "prompt": "子葉が1枚の植物はどれですか。",
      "answer": "トウモロコシ",
      "options": [
        "トウモロコシ",
        "アサガオ",
        "ホウセンカ",
        "ダイズ"
      ],
      "explanation": "トウモロコシは単子葉類で、子葉は1枚です。アサガオなどは2枚です。",
      "diagram": null,
      "distractorReview": "緑の本葉の枚数と子葉の枚数の混同。",
      "objective": "baseline-sci-08-07"
    },
    {
      "id": "sci-08-08",
      "unit": 8,
      "sourcePage": 59,
      "prompt": "子葉が2枚の植物はどれですか。",
      "answer": "ホウセンカ",
      "options": [
        "ホウセンカ",
        "イネ",
        "ムギ",
        "トウモロコシ"
      ],
      "explanation": "ホウセンカは双子葉類です。イネ、ムギ、トウモロコシは単子葉類です。",
      "diagram": null,
      "distractorReview": "イネ科と双子葉類の混同。",
      "objective": "baseline-sci-08-08"
    },
    {
      "id": "sci-08-09",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "発芽直後、緑の葉が十分育つ前の種子が使う主な養分はどれですか。",
      "answer": "種子に蓄えた養分",
      "options": [
        "種子に蓄えた養分",
        "緑の葉が育つ前からの光合成だけ",
        "肥料だけ",
        "種皮に新しくつくられた養分"
      ],
      "explanation": "発芽と初期成長では子葉や胚乳に蓄えられた養分を使います。",
      "diagram": null,
      "distractorReview": "発芽と光合成・肥料の役割の混同。",
      "objective": "baseline-sci-08-09"
    },
    {
      "id": "sci-08-13",
      "unit": 8,
      "objective": "seed-main-nutrients",
      "sourcePage": 58,
      "prompt": "種子に蓄えられる主な養分の組み合わせはどれですか。",
      "answer": "でんぷん・たんぱく質・しぼう",
      "options": [
        "でんぷん・たんぱく質・しぼう",
        "水・種皮・花粉",
        "酸素・窒素・二酸化炭素",
        "日光・土・葉脈"
      ],
      "explanation": "種子にはでんぷん・たんぱく質・しぼうなどが蓄えられます。水や気体、植物の部品とは区別します。",
      "diagram": null,
      "distractorReview": "養分と水・気体・構造の名称の混同。"
    },
    {
      "id": "sci-08-14",
      "unit": 8,
      "objective": "rice-nutrition-graph",
      "sourcePage": 58,
      "prompt": "図の養分表で、イネに最も多い養分はどれですか。",
      "answer": "でんぷん",
      "options": [
        "でんぷん",
        "たんぱく質",
        "しぼう",
        "水"
      ],
      "explanation": "イネの行ではでんぷん74、たんぱく質7、しぼう3です。種子全体を100とした割合の表です。",
      "diagram": "seed-nutrition",
      "distractorReview": "隣の列・別の種子の最大値の取り違え。"
    },
    {
      "id": "sci-08-15",
      "unit": 8,
      "objective": "soy-nutrition-graph",
      "sourcePage": 58,
      "prompt": "図の養分表で、3種のうちたんぱく質の割合が最も高い種子はどれですか。",
      "answer": "ダイズ",
      "options": [
        "ダイズ",
        "イネ",
        "ゴマ",
        "3種とも同じ"
      ],
      "explanation": "たんぱく質はイネ7、ダイズ35、ゴマ20です。同じ養分の列を種子間で比べる読み取りです。",
      "diagram": "seed-nutrition",
      "distractorReview": "行内の最大値と種子間の同じ列の比較の混同。"
    },
    {
      "id": "sci-08-16",
      "unit": 8,
      "objective": "sesame-nutrition-graph",
      "sourcePage": 58,
      "prompt": "図の養分表で、しぼうの割合が半分を超える種子はどれですか。",
      "answer": "ゴマ",
      "options": [
        "ゴマ",
        "イネ",
        "ダイズ",
        "どれも半分を超えない"
      ],
      "explanation": "ゴマのしぼうは52で、全体100の半分50を超えます。イネは3、ダイズは19です。",
      "diagram": "seed-nutrition",
      "distractorReview": "しぼうの列の読み違い、半分と値の比較の誤り。"
    },
    {
      "id": "sci-08-17",
      "unit": 8,
      "objective": "iodine-original-color",
      "sourcePage": 58,
      "prompt": "でんぷんがないものにつける前の、ヨウ素液の色はどれですか。",
      "answer": "茶かっ色",
      "options": [
        "茶かっ色",
        "青むらさき色",
        "無色",
        "白色"
      ],
      "explanation": "ヨウ素液はもともと茶かっ色です。でんぷんがあると青むらさき色に変わります。",
      "diagram": null,
      "distractorReview": "薬品の元の色と反応後の色の混同。"
    },
    {
      "id": "sci-08-18",
      "unit": 8,
      "objective": "iodine-no-change-conclusion",
      "sourcePage": 58,
      "prompt": "種子の切り口にヨウ素液をつけても青むらさき色がほとんど見られません。ここから直接いえることはどれですか。",
      "answer": "調べた部分のでんぷんが少ない可能性がある",
      "options": [
        "調べた部分のでんぷんが少ない可能性がある",
        "すべての養分が全くない",
        "必ず発芽できない種子である",
        "たんぱく質もしぼうも全くない"
      ],
      "explanation": "ヨウ素液はでんぷんを調べる薬品です。反応が薄くても、別の養分までないとはいえません。",
      "diagram": null,
      "distractorReview": "でんぷん検出を全養分の検出とみなす誤り。"
    },
    {
      "id": "sci-08-19",
      "unit": 8,
      "objective": "radicle-first-function",
      "sourcePage": 58,
      "prompt": "多くの種子で芽より先に根が出ることが役立つのは、どの働きのためですか。",
      "answer": "水を吸収し、体を支える",
      "options": [
        "水を吸収し、体を支える",
        "葉がないうちから根が光合成だけで養分をつくる",
        "根で先に花粉をつくる",
        "根が子葉の代わりに種皮だけをつくる"
      ],
      "explanation": "根は水を吸収し、植物を支えます。芽や葉が伸びる前に根が出ることは、その後の成長に役立ちます。",
      "diagram": null,
      "distractorReview": "根の役割と花・葉・種子保護の役割の混同。"
    },
    {
      "id": "sci-08-20",
      "unit": 8,
      "objective": "buried-cotyledon-examples",
      "sourcePage": 59,
      "prompt": "子葉が地中に残る植物だけの組み合わせはどれですか。",
      "answer": "エンドウ・ソラマメ",
      "options": [
        "エンドウ・ソラマメ",
        "インゲンマメ・アサガオ",
        "ホウセンカ・ヘチマ",
        "ダイズ・インゲンマメ"
      ],
      "explanation": "エンドウやソラマメでは子葉は地上に出ません。インゲンマメ・アサガオなどでは子葉が地上へ出ます。",
      "diagram": null,
      "distractorReview": "同じ双子葉類でも子葉の出方が異なることの見落とし。"
    },
    {
      "id": "sci-08-21",
      "unit": 8,
      "objective": "one-cotyledon-examples",
      "sourcePage": 59,
      "prompt": "子葉が1枚の植物だけの組み合わせはどれですか。",
      "answer": "イネ・ムギ・ユリ",
      "options": [
        "イネ・ムギ・ユリ",
        "インゲンマメ・アサガオ・ヘチマ",
        "ホウセンカ・ダイズ・ヒマワリ",
        "トウモロコシ・エンドウ・ソラマメ"
      ],
      "explanation": "イネ・ムギ・ユリは単子葉類です。単子葉類と双子葉類を混ぜた組は正解になりません。",
      "diagram": null,
      "distractorReview": "子葉の枚数の分類と子葉が地上に出るかの分類の混同。"
    },
    {
      "id": "sci-08-22",
      "unit": 8,
      "objective": "cotyledon-versus-trueleaf",
      "sourcePage": 59,
      "prompt": "インゲンマメの発芽後の本葉と子葉を比べた説明として正しいのはどれですか。",
      "answer": "本葉は後から育つ葉で、子葉とは形が異なる",
      "options": [
        "本葉は後から育つ葉で、子葉とは形が異なる",
        "本葉は種皮が変わった葉である",
        "子葉は根の一部である",
        "本葉と子葉は同じ葉が大きくなったもの"
      ],
      "explanation": "子葉は種子にあった葉で、その後に幼芽から本葉が育ちます。子葉がそのまま本葉になるわけではありません。",
      "diagram": null,
      "distractorReview": "発芽時の子葉と後から育つ本葉の混同。"
    },
    {
      "id": "sci-08-23",
      "unit": 8,
      "objective": "seed-mass-graph-axes",
      "sourcePage": 58,
      "prompt": "図の子葉と発芽した部分のグラフで、横軸・縦軸はそれぞれ何を示しますか。",
      "answer": "発芽後の日数・重さ",
      "options": [
        "発芽後の日数・重さ",
        "重さ・発芽後の日数",
        "気温・葉の枚数",
        "日光の量・水の量"
      ],
      "explanation": "横軸は発芽後の日数、縦軸は重さです。量の尺度のない模式グラフなので、具体的なg数は読めません。",
      "diagram": "seed-graph",
      "distractorReview": "軸の入れ替え、模式グラフから存在しない数値を読む誤り。"
    },
    {
      "id": "sci-08-24",
      "unit": 8,
      "objective": "seed-graph-mass-sum",
      "sourcePage": 58,
      "prompt": "発芽初期に、子葉と芽・根を合わせた乾燥した重さが少し減る主な理由は何ですか。",
      "answer": "呼吸で養分が使われるから",
      "options": [
        "呼吸で養分が使われるから",
        "重さは根へ移るだけで必ず一定だから",
        "日光なしでも光合成で養分が増えるから",
        "水を吸うだけで乾燥した重さが減るから"
      ],
      "explanation": "養分の一部は芽や根の材料になり、一部は呼吸で使われます。乾燥した重さの合計が常に一定とは限りません。",
      "diagram": null,
      "distractorReview": "養分の移動だけで呼吸による消費を無視する誤り。"
    },
    {
      "id": "sci-08-25",
      "unit": 8,
      "objective": "seed-reserve-eventual-role",
      "sourcePage": 58,
      "prompt": "種子の養分が減った後、インゲンマメが成長を続けるために主に養分をつくる場所はどこですか。",
      "answer": "緑の葉",
      "options": [
        "緑の葉",
        "しぼんだ子葉の蓄えだけ",
        "根が吸った水そのもの",
        "花粉だけ"
      ],
      "explanation": "十分育った緑の葉が日光を利用して養分をつくります。発芽初期の蓄えから葉の光合成へ役割が移ります。",
      "diagram": null,
      "distractorReview": "発芽時の養分源を成長後もそのまま使い続ける誤解。"
    },
    {
      "id": "sci-09-01",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "図のAとBを比べて、成長に必要かどうか調べる条件は何ですか。",
      "answer": "日光",
      "options": [
        "日光",
        "肥料",
        "水",
        "温度"
      ],
      "explanation": "AとBでは日光だけを変え、水、肥料、温度をそろえています。変える条件は1つにします。",
      "diagram": "growth-experiment",
      "distractorReview": "複数条件を同時に変える誤解。",
      "objective": "baseline-sci-09-01"
    },
    {
      "id": "sci-09-02",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "図のAとCを比べて、成長に必要かどうか調べる条件は何ですか。",
      "answer": "肥料",
      "options": [
        "肥料",
        "日光",
        "水",
        "温度"
      ],
      "explanation": "AとCでは肥料の有無だけが異なり、日光、水、温度はそろえています。",
      "diagram": "growth-experiment",
      "distractorReview": "比較する2つの組と条件の取り違え。",
      "objective": "baseline-sci-09-02"
    },
    {
      "id": "sci-09-03",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "実験で「日光が成長に必要か」を調べるとき、正しい条件の設定はどれですか。",
      "answer": "日光だけ変え、ほかはそろえる",
      "options": [
        "日光だけ変え、ほかはそろえる",
        "日光と水を同時に変える",
        "日光と温度を同時に変える",
        "日光と肥料を同時に変える"
      ],
      "explanation": "1つの条件だけを変えると、結果の違いがその条件によるものか判断しやすくなります。",
      "diagram": null,
      "distractorReview": "対照実験の条件統制の誤解。",
      "objective": "baseline-sci-09-03"
    },
    {
      "id": "sci-09-04",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "同じインゲンマメを日光なしで育てた時、しばらくして見られやすい姿はどれですか。",
      "answer": "茎が細長く、葉の色が薄い",
      "options": [
        "茎が細長く、葉の色が薄い",
        "茎が太く、葉が濃い緑色",
        "茎が短く、葉の色が薄い",
        "茎が細長く、葉は濃い緑色"
      ],
      "explanation": "日光がないと茎が細長くなり、葉の色が薄く、弱く育ちます。一時的に背が高いことだけで良い成長とは判断できません。",
      "diagram": "light-growth",
      "distractorReview": "背が高い＝よく育つという誤解。",
      "objective": "baseline-sci-09-04"
    },
    {
      "id": "sci-09-05",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "日光を使って植物が葉で養分をつくる働きは何ですか。",
      "answer": "光合成",
      "options": [
        "光合成",
        "発芽",
        "受粉",
        "呼吸だけ"
      ],
      "explanation": "光合成は光を使って養分をつくる働きです。発芽、受粉、呼吸とは異なります。",
      "diagram": null,
      "distractorReview": "植物の各過程の混同。",
      "objective": "baseline-sci-09-05"
    },
    {
      "id": "sci-09-06",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "十分に成長する条件として、発芽の基本3条件に加えて大切なのはどれですか。",
      "answer": "日光と肥料",
      "options": [
        "日光と肥料",
        "日光と土だけで肥料成分は不要",
        "肥料だけで日光は不要",
        "日光だけで肥料成分は不要"
      ],
      "explanation": "植物の成長には水、空気、適当な温度に加え、日光と肥料成分が大切です。肥料は適量を与えます。",
      "diagram": null,
      "distractorReview": "発芽と成長の条件の混同。",
      "objective": "baseline-sci-09-06"
    },
    {
      "id": "sci-09-07",
      "unit": 9,
      "sourcePage": 67,
      "prompt": "図のように左から光が来る時、芽や茎は通常どちらへ曲がりますか。",
      "answer": "左（光が来る方）",
      "options": [
        "左（光が来る方）",
        "右（光と反対側）",
        "必ず下へ",
        "どちらへも曲がらず一定"
      ],
      "explanation": "芽や茎は光が来る方向へ曲がって伸びる性質があります。正の光屈性といいます。",
      "diagram": "phototropism",
      "distractorReview": "刺激の向きの逆転、重力反応との混同。",
      "objective": "baseline-sci-09-07"
    },
    {
      "id": "sci-09-08",
      "unit": 9,
      "sourcePage": 67,
      "prompt": "鉢を横に置くと、根は主にどちらへ伸びようとしますか。",
      "answer": "重力の向きである下",
      "options": [
        "重力の向きである下",
        "重力と反対の上",
        "必ず光の方向",
        "必ず鉢の口の方向"
      ],
      "explanation": "根は重力の向きへ伸びる正の重力屈性を持ちます。鉢の向きそのものでは決まりません。",
      "diagram": null,
      "distractorReview": "器具の方向と重力の方向の混同。",
      "objective": "baseline-sci-09-08"
    },
    {
      "id": "sci-09-09",
      "unit": 9,
      "sourcePage": 67,
      "prompt": "根が水分のある方向へ伸びる性質は何ですか。",
      "answer": "正の水分屈性",
      "options": [
        "正の水分屈性",
        "負の水分屈性",
        "正の光屈性",
        "負の重力屈性"
      ],
      "explanation": "根は水分のある方へ伸びる性質を持ち、正の水分屈性といいます。",
      "diagram": null,
      "distractorReview": "正負と刺激の種類の混同。",
      "objective": "baseline-sci-09-09"
    },
    {
      "id": "sci-09-10",
      "unit": 9,
      "sourcePage": 67,
      "prompt": "オジギソウの葉が、触れると閉じる反応はどれですか。",
      "answer": "接触傾性",
      "options": [
        "接触傾性",
        "光屈性",
        "重力屈性",
        "水分屈性"
      ],
      "explanation": "オジギソウの葉の動きは接触傾性です。刺激の向きへ成長して曲がる屈性とは異なります。",
      "diagram": null,
      "distractorReview": "傾性と屈性、刺激の種類の混同。",
      "objective": "baseline-sci-09-10"
    },
    {
      "id": "sci-09-11",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "肥料の3要素の組み合わせはどれですか。",
      "answer": "窒素・リン酸・カリウム",
      "options": [
        "窒素・リン酸・カリウム",
        "酸素・二酸化炭素・水",
        "窒素・カルシウム・鉄",
        "でんぷん・脂肪・たんぱく質"
      ],
      "explanation": "教材の肥料の3要素は窒素、リン酸、カリウムです。光合成の材料や種子の養分とは区別します。",
      "diagram": null,
      "distractorReview": "肥料・気体・養分の混同。",
      "objective": "baseline-sci-09-11"
    },
    {
      "id": "sci-09-12",
      "unit": 9,
      "sourcePage": 66,
      "prompt": "教材では、主に花や実の成長に役立つ肥料成分はどれですか。",
      "answer": "リン酸",
      "options": [
        "リン酸",
        "窒素",
        "カリウム",
        "でんぷん"
      ],
      "explanation": "教材では窒素は葉、リン酸は花や実、カリウムは根の成長に役立つと整理しています。実際には各成分は複数の働きを持ちます。",
      "diagram": null,
      "distractorReview": "3要素の役割の対応の混同。",
      "objective": "baseline-sci-09-12"
    },
    {
      "id": "sci-09-13",
      "unit": 9,
      "objective": "growth-two-condition-confound",
      "sourcePage": 66,
      "prompt": "図のBとCだけを比べて、日光だけの効果を判断できない理由はどれですか。",
      "answer": "日光と肥料の2条件が違うから",
      "options": [
        "日光と肥料の2条件が違うから",
        "水と温度が必ず違うから",
        "両方とも日光がないから",
        "Cに植物がないから"
      ],
      "explanation": "BとCは日光と肥料の両方が違います。結果の差がどちらによるものか、この比較だけでは分かりません。",
      "diagram": "growth-experiment",
      "distractorReview": "2条件変えた比較を1条件の実験だと扱う誤り。"
    },
    {
      "id": "sci-09-14",
      "unit": 9,
      "objective": "growth-count-initial-state",
      "sourcePage": 66,
      "prompt": "同じ条件でウキクサの増え方を比べる時、最初にそろえる必要があるものはどれですか。",
      "answer": "初めの個数や大きさ",
      "options": [
        "初めの個数や大きさ",
        "最後に増えた個数",
        "日光の当て方を全て違わせること",
        "比較する温度を必ず違わせること"
      ],
      "explanation": "初めの個数や大きさをそろえると、条件の違いによる増え方を比べやすくなります。結果を先にそろえるのではありません。",
      "diagram": null,
      "distractorReview": "初期条件と実験結果、そろえる条件と変える条件の混同。"
    },
    {
      "id": "sci-09-15",
      "unit": 9,
      "objective": "fertilizer-nitrogen-role",
      "sourcePage": 66,
      "prompt": "教材で、主に葉の成長に役立つ肥料成分はどれですか。",
      "answer": "窒素",
      "options": [
        "窒素",
        "リン酸",
        "カリウム",
        "食塩"
      ],
      "explanation": "教材では窒素は葉、リン酸は花や実、カリウムは根の成長に役立つと整理されています。",
      "diagram": null,
      "distractorReview": "肥料の3要素の主な役割の取り違え。"
    },
    {
      "id": "sci-09-16",
      "unit": 9,
      "objective": "fertilizer-potassium-role",
      "sourcePage": 66,
      "prompt": "教材で、主に根の成長に役立ち、体の働きも調節する肥料成分はどれですか。",
      "answer": "カリウム",
      "options": [
        "カリウム",
        "窒素",
        "リン酸",
        "砂"
      ],
      "explanation": "カリウムは教材で根の成長や植物の働きの調節に関わる成分とされています。窒素・リン酸と役割を区別します。",
      "diagram": null,
      "distractorReview": "3要素の役割と土の成分の混同。"
    },
    {
      "id": "sci-09-17",
      "unit": 9,
      "objective": "fertilizer-uptake-route",
      "sourcePage": 66,
      "prompt": "肥料の成分を植物が取り入れる主な経路はどれですか。",
      "answer": "水に溶けた成分を根から吸収する",
      "options": [
        "水に溶けた成分を根から吸収する",
        "葉の表面で肥料の粒を食べる",
        "花粉を通して空から受け取る",
        "種皮が土を丸ごと取り込む"
      ],
      "explanation": "肥料の成分は主に水に溶けた形で根から吸収されます。日光のエネルギーを取り入れることとは区別します。",
      "diagram": null,
      "distractorReview": "養分成分の吸収経路と光合成・受粉の混同。"
    },
    {
      "id": "sci-09-18",
      "unit": 9,
      "objective": "dark-growth-height-not-health",
      "sourcePage": 66,
      "prompt": "日光なしの芽生えが一時的に高く伸びました。成長の判定として適切なのはどれですか。",
      "answer": "高さだけでなく、葉の色や茎の丈夫さも見る",
      "options": [
        "高さだけでなく、葉の色や茎の丈夫さも見る",
        "高ければ必ず健康でよく育っている",
        "葉が薄いほど健康である",
        "茎が細いほど養分が多い"
      ],
      "explanation": "暗い所では茎が細長く伸びても弱くなります。高さだけでなく葉の数・色や茎の丈夫さを合わせて見ます。",
      "diagram": "light-growth",
      "distractorReview": "背の高さを健康な成長と同一視する誤り。"
    },
    {
      "id": "sci-09-19",
      "unit": 9,
      "objective": "tropism-positive-negative",
      "sourcePage": 67,
      "prompt": "刺激が来る向きに伸びる反応を「正」、反対向きに伸びる反応を「負」とする性質は何ですか。",
      "answer": "屈性",
      "options": [
        "屈性",
        "傾性",
        "他家受粉",
        "自家受粉"
      ],
      "explanation": "屈性は刺激の方向と曲がる方向に関係があります。傾性は刺激の方向に依存しない動きとして区別します。",
      "diagram": null,
      "distractorReview": "屈性と傾性、成長反応と生殖の混同。"
    },
    {
      "id": "sci-09-20",
      "unit": 9,
      "objective": "root-negative-phototropism",
      "sourcePage": 67,
      "prompt": "教材の例で、根が光が来る方向と反対に伸びる性質はどれですか。",
      "answer": "負の光屈性",
      "options": [
        "負の光屈性",
        "正の光屈性",
        "正の重力屈性",
        "接触傾性"
      ],
      "explanation": "光から遠ざかる向きへ伸びるので負の光屈性です。重力や接触の刺激による反応とは区別します。",
      "diagram": null,
      "distractorReview": "刺激の種類と正負の取り違え。"
    },
    {
      "id": "sci-09-21",
      "unit": 9,
      "objective": "stem-negative-gravitropism",
      "sourcePage": 67,
      "prompt": "鉢を横にしても、芽や茎が上へ向かって曲がる反応はどれですか。",
      "answer": "負の重力屈性",
      "options": [
        "負の重力屈性",
        "正の重力屈性",
        "正の水分屈性",
        "温度傾性"
      ],
      "explanation": "芽や茎は重力の方向と反対の上へ伸びるので、負の重力屈性です。根の下向きの反応とは逆です。",
      "diagram": "gravity-growth",
      "distractorReview": "根と茎の反応、刺激に対する正負の混同。"
    },
    {
      "id": "sci-09-22",
      "unit": 9,
      "objective": "auxin-name",
      "sourcePage": 67,
      "prompt": "教材で、芽や茎の曲がる成長に関係する物質として挙げられているのは何ですか。",
      "answer": "オーキシン",
      "options": [
        "オーキシン",
        "ヨウ素",
        "でんぷん",
        "花粉"
      ],
      "explanation": "オーキシンは植物の成長に関係する物質です。ヨウ素液はでんぷんを調べる薬品で、役割が異なります。",
      "diagram": null,
      "distractorReview": "成長に関わる物質と実験薬品・養分の混同。"
    },
    {
      "id": "sci-09-23",
      "unit": 9,
      "objective": "auxin-stem-shaded-side",
      "sourcePage": 67,
      "prompt": "芽や茎に左から光を当てた図で、よく伸びるのは主にどちら側ですか。",
      "answer": "右の光が当たりにくい側",
      "options": [
        "右の光が当たりにくい側",
        "左の光が当たる側",
        "左右とも完全に同じ",
        "根だけが伸びて茎は変わらない"
      ],
      "explanation": "芽や茎では光が当たりにくい側がよく伸びるため、全体が光の方へ曲がります。曲がる側と伸びる側を区別します。",
      "diagram": "auxin-stem",
      "distractorReview": "曲がる向きと長く伸びる側の取り違え。"
    },
    {
      "id": "sci-09-24",
      "unit": 9,
      "objective": "dandelion-light-nasty",
      "sourcePage": 67,
      "prompt": "教材で、光が当たるとタンポポの花が開く反応はどれですか。",
      "answer": "光傾性",
      "options": [
        "光傾性",
        "正の光屈性",
        "負の重力屈性",
        "水分屈性"
      ],
      "explanation": "花の開閉は光の向きへ伸びる反応ではなく、光の有無などによる傾性として扱います。",
      "diagram": null,
      "distractorReview": "光を刺激とする屈性と傾性の混同。"
    },
    {
      "id": "sci-09-25",
      "unit": 9,
      "objective": "tulip-temperature-nasty",
      "sourcePage": 67,
      "prompt": "教材で、チューリップの花が暖かくなると開く反応はどれですか。",
      "answer": "温度傾性",
      "options": [
        "温度傾性",
        "光傾性",
        "正の水分屈性",
        "負の重力屈性"
      ],
      "explanation": "温度の変化による花の開閉を温度傾性といいます。光・水分・重力の刺激とは区別します。",
      "diagram": null,
      "distractorReview": "植物の反応を引き起こす刺激の取り違え。"
    },
    {
      "id": "sci-10-01",
      "unit": 10,
      "sourcePage": 74,
      "prompt": "ジャガイモの食べる「いも」は、主に何が変化した部分ですか。",
      "answer": "茎",
      "options": [
        "茎",
        "根",
        "葉",
        "果実"
      ],
      "explanation": "ジャガイモは地下の茎が変化してできたいもです。表面のくぼみには芽が出る場所があります。",
      "diagram": null,
      "distractorReview": "サツマイモとの混同。",
      "objective": "baseline-sci-10-01"
    },
    {
      "id": "sci-10-02",
      "unit": 10,
      "sourcePage": 74,
      "prompt": "サツマイモの食べる「いも」は、主に何が変化した部分ですか。",
      "answer": "根",
      "options": [
        "根",
        "茎",
        "葉",
        "果実"
      ],
      "explanation": "サツマイモは根が太くなった部分です。ジャガイモは茎なので区別します。",
      "diagram": null,
      "distractorReview": "ジャガイモとの混同。",
      "objective": "baseline-sci-10-02"
    },
    {
      "id": "sci-10-03",
      "unit": 10,
      "sourcePage": 74,
      "prompt": "葉や茎のついたつるを植えて増やす植物はどれですか。",
      "answer": "サツマイモ",
      "options": [
        "サツマイモ",
        "イネ",
        "インゲンマメ",
        "トウモロコシ"
      ],
      "explanation": "サツマイモはつるの苗を植えると新しい根を出して育ちます。",
      "diagram": null,
      "distractorReview": "種子で増やす栽培との混同。",
      "objective": "baseline-sci-10-03"
    },
    {
      "id": "sci-10-04",
      "unit": 10,
      "sourcePage": 74,
      "prompt": "チューリップは何を植えて増やすことができますか。",
      "answer": "球根",
      "options": [
        "球根",
        "切った根の先だけ",
        "切った葉だけ",
        "花のついた茎だけ"
      ],
      "explanation": "チューリップは球根を植えて育てられます。球根には養分が蓄えられています。",
      "diagram": null,
      "distractorReview": "植物の増える部分の混同。",
      "objective": "baseline-sci-10-04"
    },
    {
      "id": "sci-10-05",
      "unit": 10,
      "sourcePage": 74,
      "prompt": "枝を切って土に挿し、根を出させて増やす方法を何といいますか。",
      "answer": "さし木",
      "options": [
        "さし木",
        "株分け",
        "種まき",
        "接ぎ木"
      ],
      "explanation": "さし木は枝などの一部を使って増やす方法です。アジサイやバラなどに使われます。",
      "diagram": null,
      "distractorReview": "栄養繁殖と種子繁殖・植物の働きの混同。",
      "objective": "baseline-sci-10-05"
    },
    {
      "id": "sci-10-06",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "図の光合成で、葉に入る材料Xは何ですか。",
      "answer": "二酸化炭素",
      "options": [
        "二酸化炭素",
        "酸素",
        "でんぷん",
        "窒素だけ"
      ],
      "explanation": "光合成は二酸化炭素と水を材料に光を使って養分をつくり、酸素を放出する働きです。",
      "diagram": "photosynthesis",
      "distractorReview": "材料と生成物、肥料成分の混同。",
      "objective": "baseline-sci-10-06"
    },
    {
      "id": "sci-10-07",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "図の光合成で、葉から出る気体Yは何ですか。",
      "answer": "酸素",
      "options": [
        "酸素",
        "二酸化炭素",
        "水素",
        "窒素"
      ],
      "explanation": "光合成によって放出される気体は酸素です。植物は呼吸も行うので、呼吸との区別が必要です。",
      "diagram": "photosynthesis",
      "distractorReview": "光合成と呼吸の気体の逆転。",
      "objective": "baseline-sci-10-07"
    },
    {
      "id": "sci-10-08",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "光合成で養分をつくる時に利用するエネルギーは何ですか。",
      "answer": "光のエネルギー",
      "options": [
        "光のエネルギー",
        "肥料そのもののエネルギーだけ",
        "根が水を吸う力だけ",
        "種子が持っていた養分だけ"
      ],
      "explanation": "葉緑体で光のエネルギーを使い、二酸化炭素と水から養分をつくります。",
      "diagram": null,
      "distractorReview": "材料とエネルギー、植物の反応の混同。",
      "objective": "baseline-sci-10-08"
    },
    {
      "id": "sci-10-09",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "アブラナの図で、Aが指す、花粉をつくる部分は何ですか。",
      "answer": "おしべのやく",
      "options": [
        "おしべのやく",
        "めしべの柱頭",
        "子房",
        "がく"
      ],
      "explanation": "花粉はおしべのやくでつくられます。柱頭は花粉がつく部分です。",
      "diagram": "flower",
      "distractorReview": "花粉をつくる部分と受け取る部分の混同。",
      "objective": "baseline-sci-10-09"
    },
    {
      "id": "sci-10-10",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "花粉がめしべの柱頭につくことを何といいますか。",
      "answer": "受粉",
      "options": [
        "受粉",
        "受精",
        "開花",
        "結実"
      ],
      "explanation": "受粉は花粉が柱頭につくことです。その後の受精とは別の段階です。",
      "diagram": null,
      "distractorReview": "植物の過程と気象用語の混同。",
      "objective": "baseline-sci-10-10"
    },
    {
      "id": "sci-10-11",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "受精後、種子になる部分は何ですか。",
      "answer": "胚珠",
      "options": [
        "胚珠",
        "子房の壁",
        "花びら",
        "柱頭"
      ],
      "explanation": "胚珠が種子になります。子房は主に果実になります。",
      "diagram": null,
      "distractorReview": "種子と果実、胚珠と子房の混同。",
      "objective": "baseline-sci-10-11"
    },
    {
      "id": "sci-10-12",
      "unit": 10,
      "sourcePage": 75,
      "prompt": "イネやトウモロコシの花粉を主に運ぶものは何ですか。",
      "answer": "風",
      "options": [
        "風",
        "ミツバチ",
        "チョウ",
        "流水"
      ],
      "explanation": "イネやトウモロコシは風媒花で、軽く多量の花粉が風で運ばれます。",
      "diagram": null,
      "distractorReview": "風媒花と虫媒花の混同。",
      "objective": "baseline-sci-10-12"
    },
    {
      "id": "sci-10-13",
      "unit": 10,
      "objective": "potato-bud-location",
      "sourcePage": 74,
      "prompt": "ジャガイモの「目」が、新しい芽を出す場所になることは、どの判断の手掛かりですか。",
      "answer": "いもが茎の変化した部分であること",
      "options": [
        "いもが茎の変化した部分であること",
        "いもが根の先だけであること",
        "いもが葉の先端であること",
        "いもが種子そのものであること"
      ],
      "explanation": "ジャガイモには茎の芽にあたる「目」があり、そこから芽が出ます。根が太ったサツマイモと区別する手掛かりです。",
      "diagram": null,
      "distractorReview": "芽のある構造を根・葉・種子の構造と混同する誤り。"
    },
    {
      "id": "sci-10-14",
      "unit": 10,
      "objective": "bulb-tulip-structure",
      "sourcePage": 74,
      "prompt": "チューリップやユリの球根で、養分を蓄える厚い部分は主に何が変化したものですか。",
      "answer": "葉",
      "options": [
        "葉",
        "根",
        "茎だけ",
        "種皮"
      ],
      "explanation": "チューリップやユリの球根では、厚くなった葉に養分を蓄えます。全ての地下の貯蔵部を根と考えないようにします。",
      "diagram": null,
      "distractorReview": "地下にある部分をすべて根とする誤解。"
    },
    {
      "id": "sci-10-15",
      "unit": 10,
      "objective": "dahlia-storage-root",
      "sourcePage": 74,
      "prompt": "教材で、根が変化した球根状の貯蔵部で増やす植物はどれですか。",
      "answer": "ダリア",
      "options": [
        "ダリア",
        "チューリップ",
        "ユリ",
        "ヒヤシンス"
      ],
      "explanation": "ダリアは根が太った部分をもちます。チューリップ・ユリ・ヒヤシンスの厚い貯蔵葉とは違います。",
      "diagram": null,
      "distractorReview": "「球根」という増やし方と器官の由来を同一視する誤り。"
    },
    {
      "id": "sci-10-16",
      "unit": 10,
      "objective": "cutting-plant-examples",
      "sourcePage": 74,
      "prompt": "さし木で増やせる植物だけの組み合わせはどれですか。",
      "answer": "アジサイ・バラ・ツツジ",
      "options": [
        "アジサイ・バラ・ツツジ",
        "イネ・ムギ・トウモロコシ",
        "チューリップ・ユリ・ヒヤシンス",
        "ジャガイモ・ダリア・ユリ"
      ],
      "explanation": "教材ではアジサイ・バラ・ツツジは枝を挿して根を出させるさし木の例です。種子や球根を使う方法と区別します。",
      "diagram": null,
      "distractorReview": "さし木・種子・球根による増やし方の混同。"
    },
    {
      "id": "sci-10-17",
      "unit": 10,
      "objective": "vegetative-propagation-general",
      "sourcePage": 74,
      "prompt": "種子を使わず、親の茎・根・葉などの一部から増えることを何といいますか。",
      "answer": "栄養生殖",
      "options": [
        "栄養生殖",
        "受粉",
        "種子発芽",
        "光合成"
      ],
      "explanation": "親の体の一部を使って増える方法を栄養生殖といいます。花粉や種子を使った増え方と区別します。",
      "diagram": null,
      "distractorReview": "増殖方法と生殖前の受粉、養分をつくる働きの混同。"
    },
    {
      "id": "sci-10-18",
      "unit": 10,
      "objective": "chloroplast",
      "sourcePage": 75,
      "prompt": "葉で光合成を行う、緑色の部分の小さなつくりは何ですか。",
      "answer": "葉緑体",
      "options": [
        "葉緑体",
        "葉脈だけ",
        "根毛",
        "子葉に蓄えられたでんぷん粒そのもの"
      ],
      "explanation": "葉緑体は葉などの緑色の部分にあり、日光を使って養分をつくります。種子や花の部品とは異なります。",
      "diagram": null,
      "distractorReview": "光合成の場所と種子・花のつくりの混同。"
    },
    {
      "id": "sci-10-19",
      "unit": 10,
      "objective": "photosynthesis-water-source",
      "sourcePage": 75,
      "prompt": "光合成に使う水を、陸上植物が主に取り入れる部分はどこですか。",
      "answer": "根",
      "options": [
        "根",
        "やく",
        "花びら",
        "種皮"
      ],
      "explanation": "水は主に根から吸収され、葉まで運ばれます。光のエネルギーや空気中の二酸化炭素とは取り入れ方が違います。",
      "diagram": null,
      "distractorReview": "水の吸収部と花・種子の部位の混同。"
    },
    {
      "id": "sci-10-20",
      "unit": 10,
      "objective": "photosynthesis-produced-nutrient",
      "sourcePage": 75,
      "prompt": "図の光合成で、葉でつくられる養分として示されているのは何ですか。",
      "answer": "でんぷん",
      "options": [
        "でんぷん",
        "水",
        "窒素肥料",
        "二酸化炭素"
      ],
      "explanation": "教材では二酸化炭素と水を材料に、日光を使ってでんぷんをつくり、酸素を出すと整理しています。",
      "diagram": "photosynthesis",
      "distractorReview": "光合成の材料・生成物・肥料の混同。"
    },
    {
      "id": "sci-10-21",
      "unit": 10,
      "objective": "photosynthesis-respiration-both",
      "sourcePage": 75,
      "prompt": "植物の呼吸と光合成について正しい説明はどれですか。",
      "answer": "植物は呼吸も行い、光合成で出す酸素の一部を呼吸で使う",
      "options": [
        "植物は呼吸も行い、光合成で出す酸素の一部を呼吸で使う",
        "植物は光合成だけを行い呼吸しない",
        "呼吸は根がなくなってから始まる",
        "日光があれば酸素を使うことは全くない"
      ],
      "explanation": "植物も呼吸を行います。光合成は日光を使って養分をつくる働きで、呼吸と別に考えます。",
      "diagram": null,
      "distractorReview": "植物は酸素を出すので呼吸しないという誤解。"
    },
    {
      "id": "sci-10-22",
      "unit": 10,
      "objective": "complete-flower-parts",
      "sourcePage": 75,
      "prompt": "教材でいう完全花がもつ4つの部分はどれですか。",
      "answer": "花びら・がく・おしべ・めしべ",
      "options": [
        "花びら・がく・おしべ・めしべ",
        "子葉・幼根・胚乳・種皮",
        "根・茎・葉・種子",
        "柱頭・花柱・子房・胚珠だけ"
      ],
      "explanation": "完全花は花びら・がく・おしべ・めしべを備えた花です。めしべの内部だけや種子の部品とは違います。",
      "diagram": null,
      "distractorReview": "花全体の4要素とめしべ内部の部位・種子の構造の混同。"
    },
    {
      "id": "sci-10-23",
      "unit": 10,
      "objective": "flower-stigma-label",
      "sourcePage": 75,
      "prompt": "花の断面図で、花粉がつくAの部分は何ですか。",
      "answer": "柱頭",
      "options": [
        "柱頭",
        "やく",
        "子房",
        "胚珠"
      ],
      "explanation": "Aはめしべの先の柱頭です。やくはおしべにあり、花粉をつくる部分です。",
      "diagram": "flower-parts",
      "distractorReview": "花粉をつくる場所と花粉がつく場所の混同。"
    },
    {
      "id": "sci-10-24",
      "unit": 10,
      "objective": "flower-ovary-label",
      "sourcePage": 75,
      "prompt": "花の断面図で、Cの袋状の部分は何ですか。",
      "answer": "子房",
      "options": [
        "子房",
        "花柱",
        "柱頭",
        "やく"
      ],
      "explanation": "Cはめしべの下部の子房で、その内部に胚珠があります。子房と中の胚珠を区別しましょう。",
      "diagram": "flower-parts",
      "distractorReview": "袋状の子房と内部の胚珠、上部の部位の取り違え。"
    },
    {
      "id": "sci-10-25",
      "unit": 10,
      "objective": "flower-style-label",
      "sourcePage": 75,
      "prompt": "花の断面図で、柱頭と子房をつなぐBは何ですか。",
      "answer": "花柱",
      "options": [
        "花柱",
        "花糸",
        "柱頭",
        "子房"
      ],
      "explanation": "Bはめしべの花柱です。おしべを支える花糸とは、属する器官が違います。",
      "diagram": "flower-parts",
      "distractorReview": "花柱と花糸、めしべとおしべの混同。"
    },
    {
      "id": "sci-10-26",
      "unit": 10,
      "objective": "fruit-ovary-origin",
      "sourcePage": 75,
      "prompt": "受精後、普通の果実になる部分は何ですか。",
      "answer": "子房",
      "options": [
        "子房",
        "胚珠",
        "やく",
        "柱頭"
      ],
      "explanation": "普通の果実は子房が成長したものです。種子になる胚珠と、果実になる子房を区別します。",
      "diagram": null,
      "distractorReview": "種子と果実の由来の逆転、めしべの部位の混同。"
    },
    {
      "id": "sci-10-27",
      "unit": 10,
      "objective": "insect-pollination-characteristics",
      "sourcePage": 75,
      "prompt": "虫媒花に多い特徴の組み合わせはどれですか。",
      "answer": "目立つ花びら・香りやみつ",
      "options": [
        "目立つ花びら・香りやみつ",
        "目立たない花・非常に多い軽い花粉",
        "花びらがなく花粉もない",
        "根だけが目立ち花をつくらない"
      ],
      "explanation": "虫を呼ぶ虫媒花には目立つ花びら、香り、みつなどが見られます。風で花粉を運ぶ花の特徴とは違います。",
      "diagram": null,
      "distractorReview": "虫媒花と風媒花の特徴の取り違え。"
    },
    {
      "id": "sci-10-28",
      "unit": 10,
      "objective": "wind-pollination-pollen",
      "sourcePage": 75,
      "prompt": "風媒花の花粉に多い特徴はどれですか。",
      "answer": "軽い花粉を多くつくる",
      "options": [
        "軽い花粉を多くつくる",
        "大きく重い花粉を少数だけつくる",
        "花粉を全くつくらない",
        "花粉を根の中にだけつくる"
      ],
      "explanation": "風に運ばれやすい軽い花粉を多くつくります。花粉がめしべに届く確率を上げる特徴です。",
      "diagram": null,
      "distractorReview": "虫で確実に運ぶ場合との混同、花粉の量・重さの逆転。"
    },
    {
      "id": "sci-10-29",
      "unit": 10,
      "objective": "self-cross-pollination",
      "sourcePage": 75,
      "prompt": "別の株の花のおしべから来た花粉がめしべにつく受粉を何といいますか。",
      "answer": "他家受粉",
      "options": [
        "他家受粉",
        "自家受粉",
        "光合成",
        "栄養生殖"
      ],
      "explanation": "別の株の花粉による受粉は他家受粉です。同じ株の花粉による自家受粉と区別します。",
      "diagram": null,
      "distractorReview": "株の違いと自家・他家、受粉と増やし方の混同。"
    },
    {
      "id": "sci-10-30",
      "unit": 10,
      "objective": "self-pollinating-examples",
      "sourcePage": 75,
      "prompt": "教材で、自家受粉を行う例として挙げられる組み合わせはどれですか。",
      "answer": "イネ・アサガオ・エンドウ",
      "options": [
        "イネ・アサガオ・エンドウ",
        "チューリップ・ユリ・ヒヤシンス",
        "アジサイ・バラ・ツツジ",
        "ダリア・ジャガイモ・サツマイモ"
      ],
      "explanation": "教材ではイネ・アサガオ・エンドウが自家受粉の例です。球根やさし木の例と分けて考えます。",
      "diagram": null,
      "distractorReview": "受粉の例と栄養生殖の例の取り違え。"
    },
    {
      "id": "sci-10-31",
      "unit": 10,
      "objective": "false-fruit-definition",
      "sourcePage": 75,
      "prompt": "リンゴやイチゴの食べる部分のように、子房以外の部分も発達してできる果実を何といいますか。",
      "answer": "偽果",
      "options": [
        "偽果",
        "真果",
        "種子",
        "胚乳"
      ],
      "explanation": "子房以外の部分も発達した果実を偽果といいます。教材ではリンゴやイチゴで花たくが発達する例を示しています。",
      "diagram": null,
      "distractorReview": "果実の由来と種子内部の部位の混同。"
    },
    {
      "id": "sci-11-01",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "雲をつくるものとして正しいのはどれですか。",
      "answer": "小さな水滴や氷の粒",
      "options": [
        "小さな水滴や氷の粒",
        "水蒸気という気体だけ",
        "水滴ではなく煙の粒だけ",
        "水蒸気を含まない乾いた空気だけ"
      ],
      "explanation": "水蒸気そのものは目に見えません。冷やされてできた小さな水滴や氷の粒が雲です。",
      "diagram": null,
      "distractorReview": "水蒸気と水滴の混同。",
      "objective": "baseline-sci-11-01"
    },
    {
      "id": "sci-11-02",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "図で、空気が上昇して雲ができるまでの正しい流れはどれですか。",
      "answer": "上昇→冷える→水滴や氷の粒になる",
      "options": [
        "上昇→冷える→水滴や氷の粒になる",
        "上昇→暖まる→水蒸気が水滴になる",
        "下降→冷える→水滴になる",
        "上昇→冷える→水滴が全て気体になる"
      ],
      "explanation": "空気が上昇すると上空で冷え、水蒸気の一部が水滴や氷の粒になって雲ができます。",
      "diagram": "cloud-rise",
      "distractorReview": "上昇下降、加熱冷却、蒸発凝結の混同。",
      "objective": "baseline-sci-11-02"
    },
    {
      "id": "sci-11-03",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "同じ体積の空気が含める水蒸気の最大量は、気温が高いほどどうなりますか。",
      "answer": "大きくなる",
      "options": [
        "大きくなる",
        "小さくなる",
        "温度に関係なく同じ",
        "気温でなく湿度だけで決まる"
      ],
      "explanation": "飽和水蒸気量は気温が高いほど大きくなります。水蒸気量が同じなら温度を下げると湿度は上がります。",
      "diagram": null,
      "distractorReview": "温度と飽和水蒸気量の逆転。",
      "objective": "baseline-sci-11-03"
    },
    {
      "id": "sci-11-04",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "乾湿計の湿球が乾球より低い温度を示す主な理由は何ですか。",
      "answer": "水の蒸発で熱が奪われるから",
      "options": [
        "水の蒸発で熱が奪われるから",
        "水が凍って熱を出すから",
        "日光を多く吸収するから",
        "湿球だけ気温が違う場所にあるから"
      ],
      "explanation": "湿球のガーゼから水が蒸発する時に熱を奪うため、湿球温度は通常乾球温度より低くなります。",
      "diagram": null,
      "distractorReview": "蒸発と凝結、器具の測定対象の混同。",
      "objective": "baseline-sci-11-04"
    },
    {
      "id": "sci-11-05",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "図で乾球20℃、湿球18℃です。温度差は何℃ですか。",
      "answer": "2℃",
      "options": [
        "2℃",
        "18℃",
        "20℃",
        "38℃"
      ],
      "explanation": "温度差は乾球−湿球で、20−18＝2℃です。",
      "diagram": "hygrometer",
      "distractorReview": "差と各温度、引き算と足し算の混同。",
      "objective": "baseline-sci-11-05"
    },
    {
      "id": "sci-11-06",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "図の湿度表で、乾球20℃、温度差2℃の時の湿度は何％ですか。",
      "answer": "81％",
      "options": [
        "81％",
        "91％",
        "73％",
        "100％"
      ],
      "explanation": "20℃の行と温度差2℃の列が交わる81％を読み取ります。",
      "diagram": "humidity-table",
      "distractorReview": "隣の列や差0の列の読み違い。",
      "objective": "baseline-sci-11-06"
    },
    {
      "id": "sci-11-07",
      "unit": 11,
      "sourcePage": 83,
      "prompt": "同じ乾球温度で、乾球と湿球の温度差が大きいほど湿度は通常どうなりますか。",
      "answer": "低くなる",
      "options": [
        "低くなる",
        "高くなる",
        "湿度に関係なく気温だけがわかる",
        "湿球の方が高温になるほど乾いている"
      ],
      "explanation": "乾いた空気ほど水が蒸発しやすく湿球温度が下がるので、温度差が大きく、湿度は低くなります。",
      "diagram": null,
      "distractorReview": "差と湿度の関係の逆転。",
      "objective": "baseline-sci-11-07"
    },
    {
      "id": "sci-11-08",
      "unit": 11,
      "sourcePage": 84,
      "prompt": "白いわたのかたまりのような雲は何ですか。",
      "answer": "積雲",
      "options": [
        "積雲",
        "巻雲",
        "巻層雲",
        "層雲"
      ],
      "explanation": "積雲は白いわたのようなかたまりです。巻雲はすじ状、巻層雲は薄いベール、層雲は霧に似た層状です。",
      "diagram": null,
      "distractorReview": "似た名前の雲、形の取り違え。",
      "objective": "baseline-sci-11-08"
    },
    {
      "id": "sci-11-09",
      "unit": 11,
      "sourcePage": 84,
      "prompt": "入道雲ともよばれ、強いにわか雨や雷をもたらす雲は何ですか。",
      "answer": "積乱雲",
      "options": [
        "積乱雲",
        "巻積雲",
        "巻層雲",
        "層積雲"
      ],
      "explanation": "積乱雲は縦に大きく発達し、短時間の強い雨や雷をもたらすことがあります。",
      "diagram": "cloud:storm",
      "distractorReview": "積と層、雲の名前と発達方向の混同。",
      "objective": "baseline-sci-11-09"
    },
    {
      "id": "sci-11-10",
      "unit": 11,
      "sourcePage": 84,
      "prompt": "広い範囲に、長くおだやかな雨を降らせやすい雲は何ですか。",
      "answer": "乱層雲",
      "options": [
        "乱層雲",
        "積乱雲",
        "巻雲",
        "巻積雲"
      ],
      "explanation": "乱層雲は広い範囲をおおい、長時間の雨や雪をもたらします。積乱雲の局地的な強い雨と区別します。",
      "diagram": null,
      "distractorReview": "雨雲2種類の降り方の混同。",
      "objective": "baseline-sci-11-10"
    },
    {
      "id": "sci-11-11",
      "unit": 11,
      "sourcePage": 84,
      "prompt": "すじのように細く、高いところにできる雲は何ですか。",
      "answer": "巻雲",
      "options": [
        "巻雲",
        "積雲",
        "層雲",
        "乱層雲"
      ],
      "explanation": "巻雲は高いところにできる、細いすじ状の雲です。低いところに広がる層雲とは区別します。",
      "diagram": null,
      "distractorReview": "高さと形、巻雲と層雲の混同。",
      "objective": "baseline-sci-11-11"
    },
    {
      "id": "sci-11-12",
      "unit": 11,
      "sourcePage": 84,
      "prompt": "太陽や月の周りにかさができる原因になることがある薄い雲は何ですか。",
      "answer": "巻層雲",
      "options": [
        "巻層雲",
        "積雲",
        "層積雲",
        "乱層雲"
      ],
      "explanation": "高いところにできる薄いベール状の巻層雲が、かさの原因になることがあります。",
      "diagram": null,
      "distractorReview": "薄い雲と厚い雨雲の混同。",
      "objective": "baseline-sci-11-12"
    },
    {
      "id": "sci-11-13",
      "unit": 11,
      "objective": "water-vapor-visibility",
      "sourcePage": 83,
      "prompt": "水蒸気と白い雲の違いとして正しいのはどれですか。",
      "answer": "水蒸気は目に見えず、白い雲は水滴や氷の粒が見える",
      "options": [
        "水蒸気は目に見えず、白い雲は水滴や氷の粒が見える",
        "白い雲は気体の水蒸気そのもの",
        "水蒸気は必ず白く、雲は無色",
        "雲の中には水が全くない"
      ],
      "explanation": "水蒸気は気体で目に見えません。小さな水滴や氷の粒に変わると、光を散らして白い雲などに見えます。",
      "diagram": null,
      "distractorReview": "目に見える白いものと気体の水蒸気を同一視する誤り。"
    },
    {
      "id": "sci-11-14",
      "unit": 11,
      "objective": "cloud-mountain-lift",
      "sourcePage": 83,
      "prompt": "山に湿った風が吹きつけて雲ができる主な過程はどれですか。",
      "answer": "斜面に沿って上がり、冷える",
      "options": [
        "斜面に沿って上がり、冷える",
        "斜面に沿って下がり、温まる",
        "上昇しながら温まり水滴が全て蒸発する",
        "温度が変わらなくても空気が全て水滴になる"
      ],
      "explanation": "山に当たった湿った空気が斜面を上昇し、冷えると水蒸気が水滴や氷の粒に変わって雲ができます。",
      "diagram": "mountain-cloud",
      "distractorReview": "上昇・下降と冷却・加熱の関係の逆転。"
    },
    {
      "id": "sci-11-15",
      "unit": 11,
      "objective": "cloud-ground-heating",
      "sourcePage": 83,
      "prompt": "夏の日差しで地面が温まり、上の空気が温められると起こりやすいのはどれですか。",
      "answer": "上昇気流が生じる",
      "options": [
        "上昇気流が生じる",
        "温かい空気が地面へ沈む",
        "冷たい空気だけが上昇し続ける",
        "空気の温度が上がっても動きに全く影響しない"
      ],
      "explanation": "地面の熱で温められた空気は上昇しやすくなります。上空で冷えると雲ができる条件になります。",
      "diagram": null,
      "distractorReview": "暖まった空気の動きと下降、凍結の混同。"
    },
    {
      "id": "sci-11-16",
      "unit": 11,
      "objective": "condensation-name",
      "sourcePage": 83,
      "prompt": "空気が冷え、水蒸気が小さな水滴になる変化を何といいますか。",
      "answer": "凝結",
      "options": [
        "凝結",
        "蒸発",
        "融解",
        "昇華"
      ],
      "explanation": "気体の水蒸気が液体の水滴になる変化は凝結です。水から水蒸気になる蒸発とは逆です。",
      "diagram": null,
      "distractorReview": "水の状態変化の名称と向きの混同。"
    },
    {
      "id": "sci-11-17",
      "unit": 11,
      "objective": "saturated-vapor-term",
      "sourcePage": 83,
      "prompt": "一定温度の同じ体積の空気が含める、水蒸気の最大量を何といいますか。",
      "answer": "飽和水蒸気量",
      "options": [
        "飽和水蒸気量",
        "降水量",
        "雲量",
        "風速"
      ],
      "explanation": "飽和水蒸気量は温度によって変わります。実際に降った雨の量や空を覆う雲の割合とは違います。",
      "diagram": null,
      "distractorReview": "空気中の水蒸気の上限と降水・雲の量の混同。"
    },
    {
      "id": "sci-11-18",
      "unit": 11,
      "objective": "humidity-percentage-calculation",
      "sourcePage": 83,
      "prompt": "同じ体積で、飽和水蒸気量が20g、実際の水蒸気量が10gなら湿度は何％ですか。",
      "answer": "50％",
      "options": [
        "50％",
        "200％",
        "10％",
        "30％"
      ],
      "explanation": "湿度は実際の水蒸気量÷飽和水蒸気量×100です。10÷20×100＝50％になります。",
      "diagram": null,
      "distractorReview": "分母分子の逆転、差・和やg数を％とする誤り。"
    },
    {
      "id": "sci-11-19",
      "unit": 11,
      "objective": "humidity-cooling-fixed-vapor",
      "sourcePage": 83,
      "prompt": "水蒸気量を変えずに空気を冷やすと、凝結が始まる前の湿度はどうなりますか。",
      "answer": "高くなる",
      "options": [
        "高くなる",
        "低くなる",
        "必ず0％になる",
        "水蒸気量が同じなので全く変わらない"
      ],
      "explanation": "冷えると飽和水蒸気量が小さくなり、同じ水蒸気量でも最大量に対する割合が増えます。",
      "diagram": null,
      "distractorReview": "水蒸気量が一定なら湿度も一定とする誤解。"
    },
    {
      "id": "sci-11-20",
      "unit": 11,
      "objective": "dry-bulb-air-temperature",
      "sourcePage": 83,
      "prompt": "乾湿計で、その場所の気温として読むのはどちらですか。",
      "answer": "乾球温度計",
      "options": [
        "乾球温度計",
        "湿球温度計",
        "2つの平均だけ",
        "2つの差だけ"
      ],
      "explanation": "気温は乾いた乾球で読みます。湿球は水の蒸発で低くなるので、湿度を求めるために使います。",
      "diagram": null,
      "distractorReview": "気温と湿球の冷却温度、差の用途の混同。"
    },
    {
      "id": "sci-11-21",
      "unit": 11,
      "objective": "wet-bulb-gauze",
      "sourcePage": 83,
      "prompt": "乾湿計で湿球の球部に巻く布は、どの状態にしておきますか。",
      "answer": "水で湿らせる",
      "options": [
        "水で湿らせる",
        "完全に乾かす",
        "油を塗る",
        "砂を詰める"
      ],
      "explanation": "湿った布の水が蒸発すると熱が奪われます。乾いた布では乾球との差を正しく使った湿度測定ができません。",
      "diagram": null,
      "distractorReview": "湿球の蒸発を使う仕組みと乾いた状態の混同。"
    },
    {
      "id": "sci-11-22",
      "unit": 11,
      "objective": "humidity-table-reverse",
      "sourcePage": 83,
      "prompt": "図の表で、乾球20℃、湿度73％なら、湿球の温度は何℃ですか。",
      "answer": "17℃",
      "options": [
        "17℃",
        "23℃",
        "3℃",
        "19℃"
      ],
      "explanation": "20℃の行で73％は温度差3℃の列です。湿球は乾球より低いので20−3＝17℃と求めます。",
      "diagram": "humidity-table",
      "distractorReview": "温度差を温度そのものとする誤り、差を足す誤り。"
    },
    {
      "id": "sci-11-23",
      "unit": 11,
      "objective": "humidity-saturation-wetdry",
      "sourcePage": 83,
      "prompt": "十分通風し正常に使った乾湿計で、乾球と湿球の温度が同じなら湿度はどの値に近いですか。",
      "answer": "100％",
      "options": [
        "100％",
        "0％",
        "50％",
        "温度の℃数と同じ％"
      ],
      "explanation": "湿度が高いと湿球の水が蒸発しにくく、温度差が小さくなります。表の温度差0℃は100％です。",
      "diagram": null,
      "distractorReview": "温度差0を湿度0とする逆の解釈。"
    },
    {
      "id": "sci-11-24",
      "unit": 11,
      "objective": "cirrocumulus-cloud",
      "sourcePage": 84,
      "prompt": "高い空に、小さな魚のうろこのように並ぶ「うろこ雲」は何ですか。",
      "answer": "巻積雲",
      "options": [
        "巻積雲",
        "高積雲",
        "層積雲",
        "積雲"
      ],
      "explanation": "巻積雲は上層の雲で、小さな白い塊がうろこ状に並びます。中層のひつじ雲である高積雲と区別します。",
      "diagram": null,
      "distractorReview": "うろこ雲・ひつじ雲・わた雲の名称の混同。"
    },
    {
      "id": "sci-11-25",
      "unit": 11,
      "objective": "altocumulus-cloud",
      "sourcePage": 84,
      "prompt": "中くらいの高さにでき、白い塊に灰色の影もある「ひつじ雲」は何ですか。",
      "answer": "高積雲",
      "options": [
        "高積雲",
        "巻積雲",
        "巻層雲",
        "層雲"
      ],
      "explanation": "高積雲は中層にできるひつじ雲です。高い所にできる巻積雲より塊が大きく影が見られることがあります。",
      "diagram": null,
      "distractorReview": "似た粒状の雲の名称と高さの混同。"
    },
    {
      "id": "sci-11-26",
      "unit": 11,
      "objective": "altostratus-cloud",
      "sourcePage": 84,
      "prompt": "中層にでき、灰色がかった広い雲の層になるものは何ですか。",
      "answer": "高層雲",
      "options": [
        "高層雲",
        "巻雲",
        "積雲",
        "巻積雲"
      ],
      "explanation": "高層雲は灰色がかった層状の雲で、広い範囲を覆います。細いすじ状や小さな塊状の雲とは違います。",
      "diagram": null,
      "distractorReview": "形の異なる雲の名前の取り違え。"
    },
    {
      "id": "sci-11-27",
      "unit": 11,
      "objective": "stratocumulus-cloud",
      "sourcePage": 84,
      "prompt": "低い空に、灰色の厚い塊が層状に広がる雲は何ですか。",
      "answer": "層積雲",
      "options": [
        "層積雲",
        "巻積雲",
        "高積雲",
        "巻層雲"
      ],
      "explanation": "層積雲は低い所の塊状・層状の雲です。巻積雲は高い所、高積雲は中層にできる雲です。",
      "diagram": null,
      "distractorReview": "積のつく雲の高さと形の混同。"
    },
    {
      "id": "sci-11-28",
      "unit": 11,
      "objective": "stratus-cloud",
      "sourcePage": 84,
      "prompt": "低い所にできる、霧に似た白い雲は何ですか。",
      "answer": "層雲",
      "options": [
        "層雲",
        "巻雲",
        "積乱雲",
        "高積雲"
      ],
      "explanation": "層雲は低い所に層状に広がる、霧に似た雲です。すじ雲や背の高い入道雲とは異なります。",
      "diagram": null,
      "distractorReview": "低い層状雲と上層・対流雲の混同。"
    },
    {
      "id": "sci-11-29",
      "unit": 11,
      "objective": "cloud-ten-genera",
      "sourcePage": 84,
      "prompt": "教材では、雲を基本的に何種類に分類していますか。",
      "answer": "10種類",
      "options": [
        "10種類",
        "3種類",
        "4種類",
        "12種類"
      ],
      "explanation": "教材は巻雲などの10種類で整理しています。上層・中層・下層などの高さの区分数とは違います。",
      "diagram": null,
      "distractorReview": "高さの分類数と雲の種類の数の混同。"
    },
    {
      "id": "sci-11-30",
      "unit": 11,
      "objective": "upper-cloud-group",
      "sourcePage": 84,
      "prompt": "上層にできる雲だけの組み合わせはどれですか。",
      "answer": "巻雲・巻積雲・巻層雲",
      "options": [
        "巻雲・巻積雲・巻層雲",
        "高積雲・高層雲・層雲",
        "積雲・層積雲・層雲",
        "乱層雲・積乱雲・高積雲"
      ],
      "explanation": "上層雲には巻雲・巻積雲・巻層雲があります。中層や低い所の雲とは別に整理します。",
      "diagram": null,
      "distractorReview": "似た名前の巻・高・層の分類の混同。"
    },
    {
      "id": "sci-11-31",
      "unit": 11,
      "objective": "cumulonimbus-altitude-span",
      "sourcePage": 84,
      "prompt": "積乱雲の高さについて、正しい説明はどれですか。",
      "answer": "雲底は低くても、雲頂は上層まで達することがある",
      "options": [
        "雲底は低くても、雲頂は上層まで達することがある",
        "すべて低い高さだけに平らに広がる",
        "雲底も雲頂も必ず同じ高さ",
        "雲頂が低ければ雲底だけ上層にある"
      ],
      "explanation": "積乱雲は縦に大きく発達します。雲の底が低いからといって、全体が低い所だけに収まるわけではありません。",
      "diagram": "cloud",
      "distractorReview": "雲底の高さと雲全体の鉛直方向の広がりの混同。"
    },
    {
      "id": "sci-12-01",
      "unit": 12,
      "sourcePage": 91,
      "prompt": "雨が降るのは、雲の粒が主にどうなるからですか。",
      "answer": "ぶつかり合うなどして大きくなり落ちる",
      "options": [
        "ぶつかり合うなどして大きくなり落ちる",
        "粒が小さくなるほど速く落ちる",
        "水滴が水蒸気に変わって落ちる",
        "雲の中の全ての粒が同時に液体になる"
      ],
      "explanation": "水滴や氷の粒が成長し、上昇気流で支えきれなくなると降水として落ちます。",
      "diagram": null,
      "distractorReview": "蒸発と降水、雲と砂の混同。",
      "objective": "baseline-sci-12-01"
    },
    {
      "id": "sci-12-02",
      "unit": 12,
      "sourcePage": 91,
      "prompt": "雨量（降水量）を表す単位は何ですか。",
      "answer": "mm",
      "options": [
        "mm",
        "mLだけ",
        "g",
        "℃"
      ],
      "explanation": "雨量は、流れ去らずに地面にたまったと考えた時の水の深さをmmで表します。",
      "diagram": null,
      "distractorReview": "深さと体積、重さ、温度の混同。",
      "objective": "baseline-sci-12-02"
    },
    {
      "id": "sci-12-03",
      "unit": 12,
      "sourcePage": 91,
      "prompt": "図の円筒形容器で、水の深さが12mmなら降水量はいくつですか。",
      "answer": "12mm",
      "options": [
        "12mm",
        "12mL",
        "120mm",
        "1.2mm"
      ],
      "explanation": "口から底まで同じ断面積の容器なら、たまった水の深さがそのまま降水量になります。",
      "diagram": "rain-gauge",
      "distractorReview": "単位と10倍・10分の1の取り違え。",
      "objective": "baseline-sci-12-03"
    },
    {
      "id": "sci-12-04",
      "unit": 12,
      "sourcePage": 91,
      "prompt": "海から雲へ向かう図のAの過程は何ですか。",
      "answer": "蒸発",
      "options": [
        "蒸発",
        "凝結",
        "降水",
        "凍結"
      ],
      "explanation": "海の水が水蒸気になる過程が蒸発です。その後、上空で冷えて雲になります。",
      "diagram": "water-cycle",
      "distractorReview": "水の状態変化と循環の段階の混同。",
      "objective": "baseline-sci-12-04"
    },
    {
      "id": "sci-12-05",
      "unit": 12,
      "sourcePage": 91,
      "prompt": "雲から地面へ向かう図のBの過程は何ですか。",
      "answer": "降水",
      "options": [
        "降水",
        "蒸発",
        "凝結",
        "浸透"
      ],
      "explanation": "雲から雨や雪として水が地上へ戻る過程が降水です。",
      "diagram": "water-cycle",
      "distractorReview": "図の矢印の向きと過程の混同。",
      "objective": "baseline-sci-12-05"
    },
    {
      "id": "sci-12-06",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "風は基本的にどちらからどちらへ向かって吹きますか。",
      "answer": "気圧の高い方から低い方",
      "options": [
        "気圧の高い方から低い方",
        "気圧の低い方から高い方",
        "必ず北から南",
        "必ず海から陸"
      ],
      "explanation": "気圧の違いによって空気が動き、基本的に高い方から低い方へ向かいます。実際の風の経路は地球の自転などでも曲がります。",
      "diagram": null,
      "distractorReview": "高低逆転、海風や季節風の一般化。",
      "objective": "baseline-sci-12-06"
    },
    {
      "id": "sci-12-07",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "低気圧の中心付近の上空へ向かう空気の流れはどれですか。",
      "answer": "上昇気流",
      "options": [
        "上昇気流",
        "下降気流",
        "中心から外へ吹き出す気流",
        "風向に関係なく水蒸気だけの流れ"
      ],
      "explanation": "低気圧の中心付近では上昇気流が生じ、雲ができやすくなります。",
      "diagram": "pressure:low",
      "distractorReview": "高気圧との逆転。",
      "objective": "baseline-sci-12-07"
    },
    {
      "id": "sci-12-08",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "高気圧の中心付近の空気の流れはどれですか。",
      "answer": "下降気流",
      "options": [
        "下降気流",
        "上昇気流",
        "地表から中心へ集まる気流",
        "高い空ほど冷えるので常に雲をつくる気流"
      ],
      "explanation": "高気圧の中心付近には下降気流があり、雲ができにくく晴れやすくなります。",
      "diagram": "pressure:high",
      "distractorReview": "低気圧との逆転。",
      "objective": "baseline-sci-12-08"
    },
    {
      "id": "sci-12-09",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "晴れた日の海岸で、昼に吹きやすい風はどれですか。",
      "answer": "海から陸への海風",
      "options": [
        "海から陸への海風",
        "陸から海への陸風",
        "海から陸への陸風",
        "陸から海への海風"
      ],
      "explanation": "昼は陸の方が温まりやすく、陸上で空気が上昇し、海から陸へ海風が吹きます。",
      "diagram": "sea-breeze:day",
      "distractorReview": "風の向きと名称、昼夜の混同。",
      "objective": "baseline-sci-12-09"
    },
    {
      "id": "sci-12-10",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "晴れた日の海岸で、夜に吹きやすい風はどれですか。",
      "answer": "陸から海への陸風",
      "options": [
        "陸から海への陸風",
        "海から陸への海風",
        "海から陸への陸風",
        "陸から海への海風"
      ],
      "explanation": "夜は陸が冷えやすく、海上の方が比較的暖かいため、陸から海へ陸風が吹きます。",
      "diagram": "sea-breeze:night",
      "distractorReview": "昼夜と風向・名称の混同。",
      "objective": "baseline-sci-12-10"
    },
    {
      "id": "sci-12-11",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "海陸風が生じる主な理由は何ですか。",
      "answer": "陸と海で温まり方・冷え方が違うから",
      "options": [
        "陸と海で温まり方・冷え方が違うから",
        "海の方が昼に速く温まり夜に速く冷えるから",
        "陸が昼も夜も海より暖かいから",
        "陸と海の気温差が風を止めるから"
      ],
      "explanation": "陸は温まりやすく冷えやすく、海は温まりにくく冷えにくいので、昼夜で温度差と風向が変わります。",
      "diagram": null,
      "distractorReview": "熱の性質、天体の影響との混同。",
      "objective": "baseline-sci-12-11"
    },
    {
      "id": "sci-12-12",
      "unit": 12,
      "sourcePage": 92,
      "prompt": "日本の冬に吹きやすい季節風の向きはどれですか。",
      "answer": "北西",
      "options": [
        "北西",
        "南東",
        "北東",
        "南西"
      ],
      "explanation": "冬は大陸から日本へ北西の季節風が吹きやすくなります。風向は風が吹いてくる方向です。",
      "diagram": null,
      "distractorReview": "夏との逆転、風向の定義の誤解。",
      "objective": "baseline-sci-12-12"
    },
    {
      "id": "sci-12-13",
      "unit": 12,
      "objective": "raindrop-shape",
      "sourcePage": 91,
      "prompt": "比較的大きな雨粒の形を、教材ではどう説明していますか。",
      "answer": "上下方向につぶれた形",
      "options": [
        "上下方向につぶれた形",
        "先のとがった涙形",
        "必ず完全な球形",
        "針のような細長い形"
      ],
      "explanation": "小さな雨粒は球形に近く、大きくなると空気の力で上下につぶれます。絵でよく見る涙形とは異なります。",
      "diagram": null,
      "distractorReview": "雨の記号やイラストの形を実物と同じとする誤解。"
    },
    {
      "id": "sci-12-14",
      "unit": 12,
      "objective": "rain-cylinder-geometry",
      "sourcePage": 91,
      "prompt": "そのまま水の深さを降水量にできる容器の条件はどれですか。",
      "answer": "受け口から底まで断面積が同じ",
      "options": [
        "受け口から底まで断面積が同じ",
        "受け口が底の2倍の面積",
        "底に小さな穴が開いている",
        "口が閉じている"
      ],
      "explanation": "円筒のように断面積が一定なら深さがそのまま降水量です。面積が変わる容器では換算が必要です。",
      "diagram": null,
      "distractorReview": "どんな容器の水深でも雨量になるという誤解。"
    },
    {
      "id": "sci-12-15",
      "unit": 12,
      "objective": "rain-depth-area-invariance",
      "sourcePage": 91,
      "prompt": "口から底まで断面積が一定の大小2つの円筒を同じ雨の中に置くと、水の深さはどうなりますか。漏れや蒸発は無視します。",
      "answer": "同じになる",
      "options": [
        "同じになる",
        "大きい円筒の方が必ず2倍深くなる",
        "小さい円筒にだけ水がたまる",
        "深さは口の面積に比例する"
      ],
      "explanation": "大きい容器には多くの水が入りますが底面積も大きいので、雨の深さは同じです。体積と深さを区別します。",
      "diagram": "rain-two-cylinders",
      "distractorReview": "集まる体積と降水量としての深さの混同。"
    },
    {
      "id": "sci-12-16",
      "unit": 12,
      "objective": "rainfall-volume-conversion",
      "sourcePage": 91,
      "prompt": "受け口も底も100cm²の容器に200cm³の雨水がたまりました。降水量は何mmですか。",
      "answer": "20mm",
      "options": [
        "20mm",
        "2mm",
        "200mm",
        "2000mm"
      ],
      "explanation": "水の深さは200÷100＝2cmです。降水量の単位mmに直すと2cm＝20mmとなります。",
      "diagram": "rain-volume",
      "distractorReview": "体積と深さの混同、cmとmmの換算の誤り。"
    },
    {
      "id": "sci-12-17",
      "unit": 12,
      "objective": "tipping-bucket-principle",
      "sourcePage": 91,
      "prompt": "転倒ます型雨量計で降水量を求めるために数えるのは何ですか。",
      "answer": "一定量の水でますが傾いた回数",
      "options": [
        "一定量の水でますが傾いた回数",
        "雨粒の色の変化",
        "雲が通過した回数",
        "風向が変わった回数"
      ],
      "explanation": "一定量たまるごとにますが傾いて水を排出します。その回数から雨の量を求める仕組みです。",
      "diagram": null,
      "distractorReview": "雨量測定と雲・風の観測の混同。"
    },
    {
      "id": "sci-12-18",
      "unit": 12,
      "objective": "precipitation-snow-water",
      "sourcePage": 91,
      "prompt": "降水量として雪やあられの量を表す時、基本的にどうして測りますか。",
      "answer": "溶かして水の深さとして測る",
      "options": [
        "溶かして水の深さとして測る",
        "雪の深さをそのままmmにする",
        "氷の粒の個数だけを数える",
        "雪が降った時間だけを測る"
      ],
      "explanation": "降水量は雪などを溶かした水の深さです。積雪の深さは別の量で、同じ数値にはなりません。",
      "diagram": null,
      "distractorReview": "降水量と積雪深・降水時間の混同。"
    },
    {
      "id": "sci-12-19",
      "unit": 12,
      "objective": "groundwater-cycle",
      "sourcePage": 91,
      "prompt": "降った水の一部が地面にしみ込んだ後、主に何になりますか。",
      "answer": "地下水",
      "options": [
        "地下水",
        "全て直ちに水蒸気",
        "全て地面の表面を流れる川",
        "雨がしみ込む前の雲"
      ],
      "explanation": "地面にしみ込んだ水は地下水となるなどして移動します。地表を川として流れる経路だけではありません。",
      "diagram": null,
      "distractorReview": "水の循環の地表経路と地下経路の混同。"
    },
    {
      "id": "sci-12-20",
      "unit": 12,
      "objective": "land-evaporation-cycle",
      "sourcePage": 91,
      "prompt": "雲に含まれる水のもととなる蒸発について正しい説明はどれですか。",
      "answer": "海だけでなく、川・湖・地面からも起こる",
      "options": [
        "海だけでなく、川・湖・地面からも起こる",
        "海からしか起こらない",
        "雨が降ったら蒸発は永久に止まる",
        "氷があると水は全く移動しない"
      ],
      "explanation": "水は海から多く蒸発しますが、川・湖・地面からも蒸発し、水の循環に参加します。",
      "diagram": null,
      "distractorReview": "海の主要な役割を唯一の経路とする誤り。"
    },
    {
      "id": "sci-12-21",
      "unit": 12,
      "objective": "pressure-unit",
      "sourcePage": 92,
      "prompt": "気圧を表す「hPa」の読み方は何ですか。",
      "answer": "ヘクトパスカル",
      "options": [
        "ヘクトパスカル",
        "ヘルツ",
        "ミリメートル",
        "アンペア"
      ],
      "explanation": "hPaはヘクトパスカルという圧力の単位です。Hzは振動数、mmは長さ、Aは電流を表します。",
      "diagram": null,
      "distractorReview": "気圧・音・雨量・電流の単位の混同。"
    },
    {
      "id": "sci-12-22",
      "unit": 12,
      "objective": "standard-pressure",
      "sourcePage": 92,
      "prompt": "海面付近の標準的な1気圧は約何hPaですか。",
      "answer": "1013hPa",
      "options": [
        "1013hPa",
        "100hPa",
        "340hPa",
        "15hPa"
      ],
      "explanation": "標準的な1気圧は約1013hPaです。実際の気圧は場所や天気などによって変わります。",
      "diagram": null,
      "distractorReview": "標準気圧と他分野の代表的な数値の混同。"
    },
    {
      "id": "sci-12-23",
      "unit": 12,
      "objective": "pressure-relative-definition",
      "sourcePage": 92,
      "prompt": "高気圧・低気圧を分ける基準として正しいのはどれですか。",
      "answer": "周りと比べて気圧が高いか低いか",
      "options": [
        "周りと比べて気圧が高いか低いか",
        "1013hPaを超えれば必ず高気圧",
        "1000hPaを超えれば必ず高気圧",
        "気温が高いか低いかだけ"
      ],
      "explanation": "高気圧・低気圧は周囲との比較です。特定のhPa数値や気温だけでは決まりません。",
      "diagram": null,
      "distractorReview": "絶対的な数値や気温を高低気圧の定義とする誤り。"
    },
    {
      "id": "sci-12-24",
      "unit": 12,
      "objective": "northern-high-wind-rotation",
      "sourcePage": 92,
      "prompt": "日本付近の高気圧の地表近くの風は、主にどう流れますか。",
      "answer": "時計回りに外へ吹き出す",
      "options": [
        "時計回りに外へ吹き出す",
        "反時計回りに中心へ吹き込む",
        "時計回りに中心へ吹き込む",
        "反時計回りに外へ吹き出す"
      ],
      "explanation": "北半球の高気圧では時計回りに外へ吹き出します。低気圧の反時計回りに吹き込む流れとは異なります。",
      "diagram": "pressure-plan",
      "distractorReview": "回転方向と吹き込み・吹き出しの組み合わせの混同。"
    },
    {
      "id": "sci-12-25",
      "unit": 12,
      "objective": "high-fair-weather-reason",
      "sourcePage": 92,
      "prompt": "高気圧の下降する空気の中で、雲ができにくくなる主な理由はどれですか。",
      "answer": "空気が温まり湿度が下がるから",
      "options": [
        "空気が温まり湿度が下がるから",
        "空気が冷え湿度が上がるから",
        "空気が下降すると水蒸気が必ず全て水滴になるから",
        "下降する空気の中では必ず積乱雲が発達するから"
      ],
      "explanation": "下降すると空気は温まり、相対湿度が下がるため雲ができにくくなります。低気圧の上昇・冷却とは逆です。",
      "diagram": "pressure:high",
      "distractorReview": "下降と上昇による温度・湿度の変化の逆転。"
    },
    {
      "id": "sci-12-26",
      "unit": 12,
      "objective": "land-water-thermal-comparison",
      "sourcePage": 92,
      "prompt": "陸と海の温まり方・冷え方の関係はどれですか。",
      "answer": "陸は温まりやすく冷えやすい",
      "options": [
        "陸は温まりやすく冷えやすい",
        "陸は温まりにくく冷えにくい",
        "海は昼夜で必ず同じ温度",
        "陸と海はいつでも全く同じ"
      ],
      "explanation": "陸は海より温度が変わりやすく、昼は温まりやすく夜は冷えやすい性質があります。海陸風の原因になります。",
      "diagram": null,
      "distractorReview": "陸と海の温度変化のしやすさの逆転。"
    },
    {
      "id": "sci-12-27",
      "unit": 12,
      "objective": "sea-breeze-upper-flow",
      "sourcePage": 92,
      "prompt": "図の昼の海風で、地面近くは海から陸へ吹きます。上空の戻りの流れはどちら向きですか。",
      "answer": "陸から海へ",
      "options": [
        "陸から海へ",
        "海から陸へ",
        "北から南へだけ",
        "上空には空気の流れがない"
      ],
      "explanation": "陸で上昇した空気は上空で海へ戻り、海側で下降します。地面近くと上空の流れを区別します。",
      "diagram": "sea-breeze:day",
      "distractorReview": "地表の風と循環の上空の流れの混同。"
    },
    {
      "id": "sci-12-28",
      "unit": 12,
      "objective": "calm-sea-breeze-transition",
      "sourcePage": 92,
      "prompt": "海風と陸風が入れ替わる頃、一時的に風が弱まる状態は何ですか。",
      "answer": "なぎ",
      "options": [
        "なぎ",
        "偏西風",
        "台風の目",
        "寒冷前線"
      ],
      "explanation": "朝や夕方に海陸風が入れ替わる頃、風が弱まることをなぎといいます。日々の局地的な風の変化です。",
      "diagram": null,
      "distractorReview": "海陸風の切り替えと大規模な気象現象の混同。"
    },
    {
      "id": "sci-12-29",
      "unit": 12,
      "objective": "summer-seasonal-wind",
      "sourcePage": 92,
      "prompt": "日本の夏の季節風は、教材では主にどの向きから吹くとしていますか。",
      "answer": "南東",
      "options": [
        "南東",
        "北西",
        "北東",
        "南西だけ"
      ],
      "explanation": "夏は暖まった大陸へ向けて、太平洋側から南東の季節風が吹く目安です。冬の北西と対比します。",
      "diagram": null,
      "distractorReview": "夏と冬の季節風、風の来る方と向かう方の混同。"
    },
    {
      "id": "sci-13-01",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "日本付近の雲や移動性高気圧が、西から東へ移動することが多い主な理由は何ですか。",
      "answer": "上空の偏西風",
      "options": [
        "上空の偏西風",
        "北東の貿易風",
        "毎日の海陸風",
        "日本の冬の北西季節風だけ"
      ],
      "explanation": "日本付近の上空には西から東へ吹く偏西風があり、天気の変化に影響します。すべての雲が必ず同じ方向に動くわけではありません。",
      "diagram": null,
      "distractorReview": "広域の風と局地風、天体の動きの混同。",
      "objective": "baseline-sci-13-01"
    },
    {
      "id": "sci-13-02",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "等圧線は、何が等しい地点を結んだ線ですか。",
      "answer": "気圧",
      "options": [
        "気圧",
        "気温",
        "雨量",
        "標高"
      ],
      "explanation": "天気図の等圧線は気圧が等しい地点を結びます。地形図の等高線と区別します。",
      "diagram": "isobars",
      "distractorReview": "等圧線・等温線・等高線の混同。",
      "objective": "baseline-sci-13-02"
    },
    {
      "id": "sci-13-03",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "雨・雪・雷などがなく、雲量0〜1の時の天気は何ですか。",
      "answer": "快晴",
      "options": [
        "快晴",
        "晴れ",
        "くもり",
        "雨"
      ],
      "explanation": "雲量0〜1は快晴、2〜8は晴れ、9〜10はくもりとします。雨などがある時は雲量だけで決めません。",
      "diagram": null,
      "distractorReview": "境界値と降水の優先条件の混同。",
      "objective": "baseline-sci-13-03"
    },
    {
      "id": "sci-13-04",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "雨・雪・雷などがなく、雲量8の時の天気は何ですか。",
      "answer": "晴れ",
      "options": [
        "晴れ",
        "快晴",
        "くもり",
        "雨"
      ],
      "explanation": "雲量8までは晴れです。9からくもりになるので、境目を確かめます。",
      "diagram": "cloud-cover:8",
      "distractorReview": "雲が多い＝必ずくもりという誤解。",
      "objective": "baseline-sci-13-04"
    },
    {
      "id": "sci-13-05",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "雨・雪・雷などがなく、雲量9の時の天気は何ですか。",
      "answer": "くもり",
      "options": [
        "くもり",
        "晴れ",
        "快晴",
        "雪"
      ],
      "explanation": "雲量9〜10はくもりです。雨や雪が降っていれば、その現象も考えて判断します。",
      "diagram": "cloud-cover:9",
      "distractorReview": "8と9の境界、雲と降雪の混同。",
      "objective": "baseline-sci-13-05"
    },
    {
      "id": "sci-13-06",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "雨が降っている時、雲量が少なくても天気を何としますか。",
      "answer": "雨",
      "options": [
        "雨",
        "必ず快晴",
        "必ず晴れ",
        "雲量が少ないのでくもり"
      ],
      "explanation": "雨が降っている時は、雲量だけで快晴や晴れとは判定しません。",
      "diagram": null,
      "distractorReview": "雲量の規則を降水時へ誤って適用。",
      "objective": "baseline-sci-13-06"
    },
    {
      "id": "sci-13-07",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "天気予報に利用する地上の気象観測システムは何ですか。",
      "answer": "アメダス",
      "options": [
        "アメダス",
        "気象衛星ひまわりだけ",
        "気象レーダーだけ",
        "星座早見"
      ],
      "explanation": "アメダスは地域気象観測システムで、雨量・気温・風などを自動観測します。観測項目は地点によって異なります。",
      "diagram": null,
      "distractorReview": "観測分野と道具の混同。",
      "objective": "baseline-sci-13-07"
    },
    {
      "id": "sci-13-08",
      "unit": 13,
      "sourcePage": 99,
      "prompt": "気象衛星ひまわりが、地上からほぼ同じ位置に見える理由は何ですか。",
      "answer": "地球の自転と同じ向き・同じ周期で回るから",
      "options": [
        "地球の自転と同じ向き・同じ周期で回るから",
        "宇宙で全く動かないから",
        "月と同じ27.3日で回るから",
        "地球と反対向きに回るから"
      ],
      "explanation": "静止衛星は赤道上で地球の自転と同じ向き・同じ周期で公転します。地上から静止して見えても宇宙では回っています。",
      "diagram": null,
      "distractorReview": "見かけの静止と実際の運動の混同。",
      "objective": "baseline-sci-13-08"
    },
    {
      "id": "sci-13-09",
      "unit": 13,
      "sourcePage": 100,
      "prompt": "冷たく乾いた、冬に発達する気団は何ですか。",
      "answer": "シベリア気団",
      "options": [
        "シベリア気団",
        "小笠原気団",
        "オホーツク海気団",
        "揚子江気団"
      ],
      "explanation": "シベリア気団は大陸でできる冷たく乾いた気団です。",
      "diagram": null,
      "distractorReview": "4気団の温度と湿り気の対応の混同。",
      "objective": "baseline-sci-13-09"
    },
    {
      "id": "sci-13-10",
      "unit": 13,
      "sourcePage": 100,
      "prompt": "暖かく湿った、夏に発達する気団は何ですか。",
      "answer": "小笠原気団",
      "options": [
        "小笠原気団",
        "シベリア気団",
        "オホーツク海気団",
        "揚子江気団"
      ],
      "explanation": "小笠原気団は太平洋上の暖かく湿った気団です。",
      "diagram": null,
      "distractorReview": "大陸と海、冬と夏の混同。",
      "objective": "baseline-sci-13-10"
    },
    {
      "id": "sci-13-11",
      "unit": 13,
      "sourcePage": 100,
      "prompt": "冷たく湿った気団は何ですか。",
      "answer": "オホーツク海気団",
      "options": [
        "オホーツク海気団",
        "シベリア気団",
        "小笠原気団",
        "揚子江気団"
      ],
      "explanation": "オホーツク海気団は北の海上でできる冷たく湿った気団です。",
      "diagram": null,
      "distractorReview": "冷たい気団2種類、海と大陸の混同。",
      "objective": "baseline-sci-13-11"
    },
    {
      "id": "sci-13-12",
      "unit": 13,
      "sourcePage": 100,
      "prompt": "春や秋に天気が数日ごとに変わりやすい主な理由は何ですか。",
      "answer": "移動性高気圧と低気圧が交互に通るから",
      "options": [
        "移動性高気圧と低気圧が交互に通るから",
        "シベリア気団が春や秋に常に日本をおおうから",
        "高気圧だけが連続して同じ場所にとどまるから",
        "低気圧だけが連続して同じ場所にとどまるから"
      ],
      "explanation": "春や秋は移動性高気圧と低気圧が交互に通過し、晴れと雨などが数日ごとに変わりやすくなります。",
      "diagram": null,
      "distractorReview": "季節と気圧配置、常に一定という誤解。",
      "objective": "baseline-sci-13-12"
    },
    {
      "id": "sci-13-13",
      "unit": 13,
      "objective": "wind-direction-from",
      "sourcePage": 99,
      "prompt": "「北東の風」とは、どのように吹く風ですか。",
      "answer": "北東から南西へ吹く",
      "options": [
        "北東から南西へ吹く",
        "南西から北東へ吹く",
        "北から東へ曲がる風だけ",
        "北東の地点にだけある風"
      ],
      "explanation": "風向は風が吹いてくる方向で表します。向かう方向で表すのではありません。",
      "diagram": null,
      "distractorReview": "風が来る方向と進む方向の逆転。"
    },
    {
      "id": "sci-13-14",
      "unit": 13,
      "objective": "wind-speed-unit",
      "sourcePage": 99,
      "prompt": "風速を表す「m/秒」は何を示しますか。",
      "answer": "空気が1秒間に進む距離",
      "options": [
        "空気が1秒間に進む距離",
        "1分間に進む距離",
        "風が吹いた時間",
        "気圧の差"
      ],
      "explanation": "風速のm/秒は1秒あたりの距離です。風力の階級や気圧、風が続いた時間とは違います。",
      "diagram": null,
      "distractorReview": "速さと時間・気圧・風力階級の混同。"
    },
    {
      "id": "sci-13-15",
      "unit": 13,
      "objective": "beaufort-table-reading",
      "sourcePage": 99,
      "prompt": "教材の風力表で、風速4.0m/秒に対応する風力階級はどれですか。",
      "answer": "3",
      "options": [
        "3",
        "2",
        "4",
        "6"
      ],
      "explanation": "表では風力3が3.4〜5.4m/秒です。風力は風速の数値をそのまま丸めた数ではありません。",
      "diagram": "wind-force-table",
      "distractorReview": "隣の範囲との境界、風速の値を階級とする誤り。"
    },
    {
      "id": "sci-13-16",
      "unit": 13,
      "objective": "weather-symbol-clear",
      "sourcePage": 99,
      "prompt": "図の天気記号A（白い1つの円）は、教材ではどの天気ですか。",
      "answer": "快晴",
      "options": [
        "快晴",
        "晴れ",
        "くもり",
        "雨"
      ],
      "explanation": "教材の天気記号では白い単一の円が快晴です。晴れは円内に縦線、くもりは二重の円で示します。",
      "diagram": "weather-symbols",
      "distractorReview": "白い円・線入り円・二重円・黒い円の取り違え。"
    },
    {
      "id": "sci-13-17",
      "unit": 13,
      "objective": "weather-symbol-cloudy",
      "sourcePage": 99,
      "prompt": "図の天気記号C（二重の円）が表す天気はどれですか。",
      "answer": "くもり",
      "options": [
        "くもり",
        "快晴",
        "晴れ",
        "雨"
      ],
      "explanation": "二重の円はくもりの天気記号です。雲量9〜10で雨などがない時の分類と対応します。",
      "diagram": "weather-symbols",
      "distractorReview": "二重円と快晴・晴れ・雨の記号の混同。"
    },
    {
      "id": "sci-13-18",
      "unit": 13,
      "objective": "weather-symbol-rain",
      "sourcePage": 99,
      "prompt": "図の天気記号D（黒く塗った円）は、どの天気ですか。",
      "answer": "雨",
      "options": [
        "雨",
        "快晴",
        "晴れ",
        "くもり"
      ],
      "explanation": "黒く塗った円は雨の天気記号です。空に雲が多いだけのくもりとは区別します。",
      "diagram": "weather-symbols",
      "distractorReview": "雲が多いことと雨が降っていることの混同。"
    },
    {
      "id": "sci-13-19",
      "unit": 13,
      "objective": "cloud-amount-scale",
      "sourcePage": 99,
      "prompt": "雲量は、空全体をいくつとして雲の割合を表しますか。",
      "answer": "10",
      "options": [
        "10",
        "100",
        "360",
        "24"
      ],
      "explanation": "教材の雲量は空全体を10として、雲に覆われた割合を0〜10で表します。湿度の％とは別です。",
      "diagram": null,
      "distractorReview": "雲量と湿度の％、角度や時間の尺度の混同。"
    },
    {
      "id": "sci-13-20",
      "unit": 13,
      "objective": "satellite-orbit-altitude",
      "sourcePage": 99,
      "prompt": "気象衛星ひまわりのような静止衛星が回る高さは、地表から約何kmですか。",
      "answer": "36000km",
      "options": [
        "36000km",
        "3500km",
        "38万km",
        "1500km"
      ],
      "explanation": "静止衛星は赤道上空の約36000kmを回ります。月までの距離や月の直径とは違う数値です。",
      "diagram": null,
      "distractorReview": "衛星の高度と月の距離・直径の混同。"
    },
    {
      "id": "sci-13-21",
      "unit": 13,
      "objective": "satellite-earth-equator",
      "sourcePage": 99,
      "prompt": "静止衛星が地球の同じ場所の上空に見えるため、軌道は主にどこの上にありますか。",
      "answer": "赤道",
      "options": [
        "赤道",
        "北極",
        "南極",
        "日本の真上だけ"
      ],
      "explanation": "静止衛星は赤道上空を地球の自転と同じ向き・同じ周期で回ります。北極・南極の上を回る軌道とは違います。",
      "diagram": null,
      "distractorReview": "地上の見たい場所と静止軌道の位置の混同。"
    },
    {
      "id": "sci-13-22",
      "unit": 13,
      "objective": "satellite-amedas-complement",
      "sourcePage": 99,
      "prompt": "ひまわりとアメダスを組み合わせて使う説明として適切なのはどれですか。",
      "answer": "広い範囲の雲と地上の気温・降水などを補い合える",
      "options": [
        "広い範囲の雲と地上の気温・降水などを補い合える",
        "両方とも地上の雲量だけを人が数える",
        "ひまわりだけで全地点の雨水量を容器で直接測る",
        "アメダスは宇宙で月の形だけを撮影する"
      ],
      "explanation": "衛星は広い範囲の雲などを観測し、アメダスは地上の気温・降水・風などを自動観測します。得意な情報が異なります。",
      "diagram": null,
      "distractorReview": "観測場所と観測できる量の役割の混同。"
    },
    {
      "id": "sci-13-23",
      "unit": 13,
      "objective": "amedas-elements",
      "sourcePage": 99,
      "prompt": "現在のアメダスの観測項目に含まれる組み合わせはどれですか。",
      "answer": "気温・降水量・風向と風速・湿度",
      "options": [
        "気温・降水量・風向と風速・湿度",
        "気温・雲の形・月齢・星の明るさ",
        "降水量・風向・惑星の位置・月齢",
        "気温・雲の画像だけで降水量は含まれない"
      ],
      "explanation": "気温・降水量・風向と風速・湿度などを自動観測します。観測所により装備は異なります。日照時間には衛星などによる推計も使います。",
      "diagram": null,
      "distractorReview": "地上の気象観測と天文・地質観測の混同。"
    },
    {
      "id": "sci-13-24",
      "unit": 13,
      "objective": "pressure-map-center",
      "sourcePage": 99,
      "prompt": "図の等圧線では、外側から中心へ1008→1004→1000hPaと下がっています。中心付近はどれですか。",
      "answer": "低気圧",
      "options": [
        "低気圧",
        "高気圧",
        "必ず無風の高気圧",
        "気圧はどこも同じ"
      ],
      "explanation": "周囲より中心の気圧が低いため低気圧です。値が1013hPaより低いから、という絶対値だけの判定ではありません。",
      "diagram": "isobars",
      "distractorReview": "高低の比較の逆転、値ではなく線の形だけで判定する誤り。"
    },
    {
      "id": "sci-13-25",
      "unit": 13,
      "objective": "isobar-spacing-wind",
      "sourcePage": 99,
      "prompt": "同じ地図の尺度なら、等圧線の間隔が狭い所は、一般にどのような風になりやすいですか。",
      "answer": "強い風",
      "options": [
        "強い風",
        "弱い風だけ",
        "必ず無風",
        "風向が存在しない風"
      ],
      "explanation": "短い距離で気圧が大きく変わるので、空気を動かす力が大きくなり、風が強くなりやすくなります。",
      "diagram": null,
      "distractorReview": "線の密度と風の強さの逆の解釈。"
    },
    {
      "id": "sci-13-26",
      "unit": 13,
      "objective": "airmass-definition",
      "sourcePage": 100,
      "prompt": "気団とは、どのようなものですか。",
      "answer": "気温や湿度がほぼ同じ大きな空気のかたまり",
      "options": [
        "気温や湿度がほぼ同じ大きな空気のかたまり",
        "同じ高さの雲をつないだ線",
        "気圧の同じ地点をつないだ線",
        "1個の雨粒の集まりだけ"
      ],
      "explanation": "気団は広い範囲で気温や湿度の性質が似た空気のかたまりです。等圧線や雲そのものとは違います。",
      "diagram": null,
      "distractorReview": "気団・等圧線・雲の概念の混同。"
    },
    {
      "id": "sci-13-27",
      "unit": 13,
      "objective": "airmass-land-sea",
      "sourcePage": 100,
      "prompt": "気団ができる場所と湿り方の一般的な関係はどれですか。",
      "answer": "大陸上は乾きやすく、海上は湿りやすい",
      "options": [
        "大陸上は乾きやすく、海上は湿りやすい",
        "大陸上は湿りやすく、海上は乾きやすい",
        "海上では水蒸気を含めない",
        "どの場所でも湿度は同じ"
      ],
      "explanation": "大陸上でできる気団は乾き、海上では水蒸気を受けて湿りやすくなります。性質はできた場所に関係します。",
      "diagram": null,
      "distractorReview": "海陸の気団の湿り方の逆転。"
    },
    {
      "id": "sci-13-28",
      "unit": 13,
      "objective": "spring-first-wind",
      "sourcePage": 100,
      "prompt": "冬から春への移り変わりに吹くことがある、強い南寄りの風を何といいますか。",
      "answer": "春一番",
      "options": [
        "春一番",
        "北西の季節風",
        "海風",
        "偏西風"
      ],
      "explanation": "春一番は冬から春の移行期の強い南寄りの風です。上空の偏西風や、毎日の海陸風とは異なります。",
      "diagram": null,
      "distractorReview": "季節の変化と毎日の局地風、上空の風の混同。"
    },
    {
      "id": "sci-13-29",
      "unit": 13,
      "objective": "baiu-front-airmasses",
      "sourcePage": 100,
      "prompt": "教材で、梅雨前線をつくる主な2つの気団はどれですか。",
      "answer": "オホーツク海気団と小笠原気団",
      "options": [
        "オホーツク海気団と小笠原気団",
        "シベリア気団と北極の気団だけ",
        "小笠原気団と同じ小笠原気団",
        "乾いた大陸の気団だけ"
      ],
      "explanation": "冷たく湿ったオホーツク海気団と暖かく湿った小笠原気団が出会う境界に梅雨前線ができると教材で整理しています。",
      "diagram": null,
      "distractorReview": "冷湿・暖湿の組み合わせと冬の気団の混同。"
    },
    {
      "id": "sci-13-30",
      "unit": 13,
      "objective": "stationary-front-weather",
      "sourcePage": 100,
      "prompt": "梅雨の頃に雨やくもりが長く続く主な理由はどれですか。",
      "answer": "停滞前線が日本付近にとどまりやすいから",
      "options": [
        "停滞前線が日本付近にとどまりやすいから",
        "高気圧の中心で空気が下降し続けるから",
        "梅雨前線が毎日必ず地球を1周するから",
        "寒暖の空気の境目がなくなるから"
      ],
      "explanation": "梅雨前線は停滞前線で、あまり動かずに日本付近にとどまるため、雨やくもりの期間が続きやすくなります。",
      "diagram": null,
      "distractorReview": "前線の停滞とすべての雲や地球の運動停止の混同。"
    },
    {
      "id": "sci-13-31",
      "unit": 13,
      "objective": "summer-afternoon-storm",
      "sourcePage": 100,
      "prompt": "日本の夏に強い日差しの後、夕立が起こりやすい過程はどれですか。",
      "answer": "地面が温まり上昇気流で積乱雲が発達する",
      "options": [
        "地面が温まり上昇気流で積乱雲が発達する",
        "空気が下降し巻雲が全て雨になる",
        "冬の乾いた季節風で水蒸気が消える",
        "地面が必ず0℃まで冷える"
      ],
      "explanation": "日差しで地面が暖まり、湿った空気が上昇して積乱雲ができると、短時間の強い雨につながります。",
      "diagram": null,
      "distractorReview": "夏の対流と下降気流・冬の季節風の混同。"
    },
    {
      "id": "sci-13-32",
      "unit": 13,
      "objective": "autumn-long-rain",
      "sourcePage": 100,
      "prompt": "9月頃に、前線によって雨やくもりが続く時期を教材では何とよんでいますか。",
      "answer": "秋の長雨（秋霖）",
      "options": [
        "秋の長雨（秋霖）",
        "春一番",
        "台風の目",
        "なぎ"
      ],
      "explanation": "秋の初めには秋雨前線に関係した長雨が見られます。秋の後半の移動性高気圧による周期的な天気変化とは区別します。",
      "diagram": null,
      "distractorReview": "季節の現象と台風・海陸風の現象の混同。"
    },
    {
      "id": "sci-14-01",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "日本の冬に典型的な気圧配置はどれですか。",
      "answer": "西高東低",
      "options": [
        "西高東低",
        "東高西低",
        "南高北低だけ",
        "全国が同じ気圧"
      ],
      "explanation": "冬は大陸側の西に高気圧、東の太平洋側に低気圧がある西高東低の配置になりやすくなります。",
      "diagram": null,
      "distractorReview": "高低と方角の逆転。",
      "objective": "baseline-sci-14-01"
    },
    {
      "id": "sci-14-02",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "冬の北西の季節風が、日本海を渡る間に多く取り込むのは何ですか。",
      "answer": "水蒸気",
      "options": [
        "水蒸気",
        "水蒸気を失った乾いた空気だけ",
        "海からの冷たい雨粒だけ",
        "酸素だけで水蒸気は取り込まない"
      ],
      "explanation": "季節風は日本海から水蒸気を取り込み、山地で上昇して雲をつくり、日本海側に雪や雨を降らせます。",
      "diagram": "winter-mountain",
      "distractorReview": "雲の材料と別の粒子の混同。",
      "objective": "baseline-sci-14-02"
    },
    {
      "id": "sci-14-03",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "典型的な冬の季節風の時、太平洋側が晴れやすい理由は何ですか。",
      "answer": "山を越えた空気が水分を失い乾くから",
      "options": [
        "山を越えた空気が水分を失い乾くから",
        "山を越えて空気が上昇し続けるから",
        "日本海側で水蒸気を失わないから",
        "山を越えて空気が湿り続けるから"
      ],
      "explanation": "日本海側で雨や雪を降らせた空気は山を越えて乾き、下降するため太平洋側は晴れやすくなります。",
      "diagram": "winter-mountain",
      "distractorReview": "風上と風下、湿る乾くの逆転。",
      "objective": "baseline-sci-14-03"
    },
    {
      "id": "sci-14-04",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "暖かい空気が冷たい空気の上をゆっくりはい上がる前線は何ですか。",
      "answer": "温暖前線",
      "options": [
        "温暖前線",
        "寒冷前線",
        "停滞前線",
        "閉塞前線"
      ],
      "explanation": "温暖前線では暖かい空気が冷たい空気の上にゆるやかに乗り上げ、広い範囲に長い雨をもたらしやすくなります。",
      "diagram": "front:warm",
      "distractorReview": "温暖と寒冷、前線と等圧線の混同。",
      "objective": "baseline-sci-14-04"
    },
    {
      "id": "sci-14-05",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "冷たい空気が暖かい空気の下にもぐりこみ、急に押し上げる前線は何ですか。",
      "answer": "寒冷前線",
      "options": [
        "寒冷前線",
        "温暖前線",
        "停滞前線",
        "閉塞前線"
      ],
      "explanation": "寒冷前線では暖かい空気が急に押し上げられ、積乱雲が発達して短時間の強い雨になりやすくなります。",
      "diagram": "front:cold",
      "distractorReview": "前線2種類の空気の動きの逆転。",
      "objective": "baseline-sci-14-05"
    },
    {
      "id": "sci-14-06",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "寒冷前線にともなう雨の典型的な特徴はどれですか。",
      "answer": "狭い範囲で短時間に強く降る",
      "options": [
        "狭い範囲で短時間に強く降る",
        "広い範囲で長時間おだやかに降る",
        "前線の通過後だけ長時間降り続ける",
        "雨は降らず巻雲だけができる"
      ],
      "explanation": "急な上昇気流で積乱雲が発達し、比較的狭い範囲に短時間の強い雨が降りやすくなります。",
      "diagram": null,
      "distractorReview": "温暖前線の降り方との混同。",
      "objective": "baseline-sci-14-06"
    },
    {
      "id": "sci-14-07",
      "unit": 14,
      "sourcePage": 107,
      "prompt": "温暖前線にともなう雨の典型的な特徴はどれですか。",
      "answer": "広い範囲で比較的おだやかに長く降る",
      "options": [
        "広い範囲で比較的おだやかに長く降る",
        "狭い範囲で短時間に強く降る",
        "前線の通過後だけにわか雨が降る",
        "層状の雲ではなく積乱雲だけが発達する"
      ],
      "explanation": "温暖前線では広い範囲に層状の雲ができ、比較的おだやかな雨が長く降りやすくなります。",
      "diagram": null,
      "distractorReview": "寒冷前線・台風との混同。",
      "objective": "baseline-sci-14-07"
    },
    {
      "id": "sci-14-08",
      "unit": 14,
      "sourcePage": 108,
      "prompt": "日本付近の台風の地表近くの風の流れはどれですか。",
      "answer": "反時計回りに中心へ吹き込む",
      "options": [
        "反時計回りに中心へ吹き込む",
        "時計回りに中心へ吹き込む",
        "反時計回りに外へ吹き出す",
        "時計回りに外へ吹き出す"
      ],
      "explanation": "北半球の台風は低気圧で、地表近くの風は反時計回りに中心へ吹き込みます。南半球と区別します。",
      "diagram": "pressure:low",
      "distractorReview": "回転方向と出入り、高気圧との混同。",
      "objective": "baseline-sci-14-08"
    },
    {
      "id": "sci-14-09",
      "unit": 14,
      "sourcePage": 108,
      "prompt": "台風の目の中心付近では、どの流れが見られますか。",
      "answer": "下降気流",
      "options": [
        "下降気流",
        "周囲より激しい上昇気流",
        "地表近くで高気圧のように外へ吹き出す流れ",
        "目の中心だけ気流が完全に止まる"
      ],
      "explanation": "台風の目では下降気流があり、雲が少なく比較的風が弱くなります。目の周囲には強い上昇気流と暴風があります。",
      "diagram": null,
      "distractorReview": "目と周囲の壁の混同。",
      "objective": "baseline-sci-14-09"
    },
    {
      "id": "sci-14-10",
      "unit": 14,
      "sourcePage": 108,
      "prompt": "台風の「大きさ」の分類で主に使うのは何ですか。",
      "answer": "風速15m/秒以上の範囲の半径",
      "options": [
        "風速15m/秒以上の範囲の半径",
        "中心気圧だけ",
        "最大風速だけ",
        "台風の目の直径だけ"
      ],
      "explanation": "大きさは風速15m/秒以上の強風域の半径、強さは最大風速で分類します。",
      "diagram": null,
      "distractorReview": "台風の大きさと強さの混同。",
      "objective": "baseline-sci-14-10"
    },
    {
      "id": "sci-14-11",
      "unit": 14,
      "sourcePage": 108,
      "prompt": "台風の「強さ」の分類で主に使うのは何ですか。",
      "answer": "最大風速",
      "options": [
        "最大風速",
        "強風域の半径",
        "中心気圧だけ",
        "台風の目の直径"
      ],
      "explanation": "台風の強さは最大風速に基づきます。中心気圧は目安になっても強さの定義そのものではありません。",
      "diagram": null,
      "distractorReview": "大きさ・時期・見た目との混同。",
      "objective": "baseline-sci-14-11"
    },
    {
      "id": "sci-14-12",
      "unit": 14,
      "sourcePage": 108,
      "prompt": "高潮が起こる主な仕組みの組み合わせはどれですか。",
      "answer": "低気圧による吸い上げと風による吹き寄せ",
      "options": [
        "低気圧による吸い上げと風による吹き寄せ",
        "高気圧による押し下げと陸風",
        "風による沖への吹き出しと海面の低下",
        "地震による海底の急な変動"
      ],
      "explanation": "台風の低い気圧で海面が上がる効果と、強い風で海水が岸へ吹き寄せられる効果が高潮の主な原因です。",
      "diagram": null,
      "distractorReview": "高潮と天文現象、気圧の効果の逆転。",
      "objective": "baseline-sci-14-12"
    },
    {
      "id": "sci-14-13",
      "unit": 14,
      "objective": "front-definition",
      "sourcePage": 107,
      "prompt": "前線とは、前線面と何が交わる境界線ですか。",
      "answer": "地表",
      "options": [
        "地表",
        "上空の一定の高さの面",
        "等圧線",
        "雲頂だけ"
      ],
      "explanation": "暖かい空気と冷たい空気の境界面を前線面といい、それが地表に接する線が前線です。",
      "diagram": null,
      "distractorReview": "境界面と地表の線、気象現象の場所の混同。"
    },
    {
      "id": "sci-14-14",
      "unit": 14,
      "objective": "warm-front-symbol",
      "sourcePage": 107,
      "prompt": "図のAのように半円を並べた線は何の前線ですか。",
      "answer": "温暖前線",
      "options": [
        "温暖前線",
        "寒冷前線",
        "停滞前線",
        "閉塞前線"
      ],
      "explanation": "半円を並べた記号は温暖前線です。寒冷前線は三角、停滞・閉塞は両方の形を使います。",
      "diagram": "front-symbols",
      "distractorReview": "半円と三角、混合記号の取り違え。"
    },
    {
      "id": "sci-14-15",
      "unit": 14,
      "objective": "cold-front-symbol",
      "sourcePage": 107,
      "prompt": "図のBのように三角を並べた線は何の前線ですか。",
      "answer": "寒冷前線",
      "options": [
        "寒冷前線",
        "温暖前線",
        "停滞前線",
        "閉塞前線"
      ],
      "explanation": "三角を並べた記号は寒冷前線です。記号の形と暖かい・冷たい空気の動きを対応させましょう。",
      "diagram": "front-symbols",
      "distractorReview": "温暖前線と寒冷前線の記号の逆転。"
    },
    {
      "id": "sci-14-16",
      "unit": 14,
      "objective": "stationary-front-symbol",
      "sourcePage": 107,
      "prompt": "図のCのように半円と三角が線の反対側に並ぶ前線は何ですか。",
      "answer": "停滞前線",
      "options": [
        "停滞前線",
        "閉塞前線",
        "温暖前線",
        "寒冷前線"
      ],
      "explanation": "停滞前線は半円と三角を線の反対側に描きます。同じ側に交互に描く閉塞前線と区別します。",
      "diagram": "front-symbols",
      "distractorReview": "停滞・閉塞の記号の表裏の取り違え。"
    },
    {
      "id": "sci-14-17",
      "unit": 14,
      "objective": "occluded-front-symbol",
      "sourcePage": 107,
      "prompt": "図のDのように半円と三角が線の同じ側に並ぶ前線は何ですか。",
      "answer": "閉塞前線",
      "options": [
        "閉塞前線",
        "停滞前線",
        "温暖前線",
        "寒冷前線"
      ],
      "explanation": "閉塞前線の記号は半円と三角が同じ側です。2種類の形があるだけでは停滞前線と決められません。",
      "diagram": "front-symbols",
      "distractorReview": "停滞前線と閉塞前線の記号の向きの混同。"
    },
    {
      "id": "sci-14-18",
      "unit": 14,
      "objective": "cold-front-cloud",
      "sourcePage": 107,
      "prompt": "寒冷前線で発達しやすく、短時間に強い雨をもたらす代表的な雲は何ですか。",
      "answer": "積乱雲",
      "options": [
        "積乱雲",
        "巻雲だけ",
        "巻層雲だけ",
        "層雲だけ"
      ],
      "explanation": "寒冷前線では暖かい空気が急に押し上げられ、積乱雲が発達することがあります。温暖前線の層状の雲と対比します。",
      "diagram": "front:cold",
      "distractorReview": "前線の上昇の強さと雲の種類の取り違え。"
    },
    {
      "id": "sci-14-19",
      "unit": 14,
      "objective": "cold-front-temperature-after",
      "sourcePage": 107,
      "prompt": "寒冷前線が通過した後の気温は、一般にどうなりやすいですか。",
      "answer": "下がる",
      "options": [
        "下がる",
        "上がる",
        "必ず変わらない",
        "必ず0℃になる"
      ],
      "explanation": "寒冷前線の後ろから冷たい空気が入り、気温が下がりやすくなります。気温は常に同じ値になるわけではありません。",
      "diagram": null,
      "distractorReview": "温暖前線との混同、相対的な変化を固定温度とする誤り。"
    },
    {
      "id": "sci-14-20",
      "unit": 14,
      "objective": "warm-front-temperature-after",
      "sourcePage": 107,
      "prompt": "温暖前線が通過した後の気温は、一般にどうなりやすいですか。",
      "answer": "上がる",
      "options": [
        "上がる",
        "下がる",
        "必ず0℃になる",
        "必ず変わらない"
      ],
      "explanation": "温暖前線の通過後は暖かい空気に覆われ、気温が上がりやすくなります。寒冷前線の通過後とは逆です。",
      "diagram": null,
      "distractorReview": "暖気と寒気の入れ替わりの逆転。"
    },
    {
      "id": "sci-14-21",
      "unit": 14,
      "objective": "extratropical-fronts-versus-tropical",
      "sourcePage": 107,
      "prompt": "温帯低気圧と、発達中の典型的な台風の違いとして適切なのはどれですか。",
      "answer": "温帯低気圧は前線を伴うことが多く、台風は通常前線を伴わない",
      "options": [
        "温帯低気圧は前線を伴うことが多く、台風は通常前線を伴わない",
        "台風だけが必ず温暖前線を伴う",
        "温帯低気圧は必ず高気圧である",
        "両方とも前線は絶対にない"
      ],
      "explanation": "温帯低気圧は暖気と寒気の境界に関係して前線を伴います。台風は熱帯の暖かい海などで発達する熱帯低気圧です。",
      "diagram": null,
      "distractorReview": "低気圧の種類と前線の有無の混同。"
    },
    {
      "id": "sci-14-22",
      "unit": 14,
      "objective": "typhoon-threshold",
      "sourcePage": 108,
      "prompt": "北西太平洋などの熱帯低気圧を台風とする最大風速の基準はどれですか。",
      "answer": "約17m/秒以上",
      "options": [
        "約17m/秒以上",
        "15m/秒以上",
        "33m/秒以上",
        "54m/秒以上"
      ],
      "explanation": "台風は最大風速が約17m/秒以上の熱帯低気圧です。33・44・54m/秒は台風の強さの階級の境界です。",
      "diagram": null,
      "distractorReview": "台風になる基準と強風域・強さの階級の混同。"
    },
    {
      "id": "sci-14-23",
      "unit": 14,
      "objective": "eye-versus-eyewall",
      "sourcePage": 108,
      "prompt": "図のBは台風の目のすぐ周りです。目の中心Aと比べた典型的な特徴はどれですか。",
      "answer": "強い上昇気流と激しい雨がある",
      "options": [
        "強い上昇気流と激しい雨がある",
        "いつも雲がなく風もない",
        "下降気流だけで雨が全くない",
        "高気圧となり時計回りに吹き出す"
      ],
      "explanation": "目の中心は比較的穏やかでも、すぐ周りには強い上昇気流があり、積乱雲による激しい雨や風が見られます。",
      "diagram": "typhoon-section",
      "distractorReview": "台風の目と目の周囲を同じ状態とする誤り。"
    },
    {
      "id": "sci-14-24",
      "unit": 14,
      "objective": "typhoon-moving-right",
      "sourcePage": 108,
      "prompt": "北半球で進む台風の進行方向に向かって右側が、一般に風が強くなりやすいのはなぜですか。",
      "answer": "台風の回転の風と進行に伴う風が重なるから",
      "options": [
        "台風の回転の風と進行に伴う風が重なるから",
        "右側では回転の風と進行に伴う風が打ち消し合うから",
        "右側だけ台風の風が時計回りになるから",
        "風の強さは進行方向と無関係で必ず左右同じだから"
      ],
      "explanation": "進行方向の右側では、台風の風と台風を動かす流れが同じ向きに重なり、風が強まりやすくなります。",
      "diagram": "typhoon-plan",
      "distractorReview": "左右の絶対方位と進行方向の混同、風の足し合わせの逆転。"
    },
    {
      "id": "sci-14-25",
      "unit": 14,
      "objective": "typhoon-turn-northeast",
      "sourcePage": 108,
      "prompt": "台風が日本付近で北東へ向きを変える時、影響する代表的な上空の風は何ですか。",
      "answer": "偏西風",
      "options": [
        "偏西風",
        "海風",
        "陸風",
        "冬の地表近くの北西の季節風だけ"
      ],
      "explanation": "台風は太平洋高気圧の縁を進んだ後、上空の偏西風に乗って北東へ進むことがあります。毎日の海陸風とは規模が違います。",
      "diagram": null,
      "distractorReview": "台風の進路と局地的な海陸風の混同。"
    },
    {
      "id": "sci-14-26",
      "unit": 14,
      "objective": "typhoon-classification-example",
      "sourcePage": 108,
      "prompt": "図の基準表を使います。最大風速40m/秒、強風域の半径600kmの台風の表現はどれですか。",
      "answer": "大型で強い台風",
      "options": [
        "大型で強い台風",
        "超大型で強い台風",
        "大型で猛烈な台風",
        "超大型で非常に強い台風"
      ],
      "explanation": "半径600kmは大型、最大風速40m/秒は強いに当たります。大きさと強さの2つを別々の基準で判定します。",
      "diagram": "typhoon-classes",
      "distractorReview": "大きさと強さの基準の取り違え、隣の階級への誤分類。"
    },
    {
      "id": "sci-14-27",
      "unit": 14,
      "objective": "typhoon-verystrong-boundary",
      "sourcePage": 108,
      "prompt": "最大風速44m/秒以上54m/秒未満の台風の強さは何ですか。",
      "answer": "非常に強い",
      "options": [
        "非常に強い",
        "強い",
        "猛烈な",
        "超大型"
      ],
      "explanation": "強さは最大風速で分類します。44以上54未満は非常に強いで、54以上が猛烈な台風です。",
      "diagram": null,
      "distractorReview": "階級境界と大きさを示す超大型の混同。"
    },
    {
      "id": "sci-14-28",
      "unit": 14,
      "objective": "typhoon-violent-boundary",
      "sourcePage": 108,
      "prompt": "最大風速54m/秒以上の台風の強さは何ですか。",
      "answer": "猛烈な",
      "options": [
        "猛烈な",
        "非常に強い",
        "強い",
        "大型"
      ],
      "explanation": "最大風速54m/秒以上は猛烈な台風です。大型は最大風速でなく、強風域の半径による分類です。",
      "diagram": null,
      "distractorReview": "強さの隣の階級、大きさの分類との混同。"
    },
    {
      "id": "sci-14-29",
      "unit": 14,
      "objective": "typhoon-superlarge-boundary",
      "sourcePage": 108,
      "prompt": "風速15m/秒以上の強風域の半径が800km以上の台風の大きさは何ですか。",
      "answer": "超大型",
      "options": [
        "超大型",
        "大型",
        "猛烈な",
        "非常に強い"
      ],
      "explanation": "強風域の半径800km以上は超大型です。猛烈な・非常に強いは最大風速による強さの分類です。",
      "diagram": null,
      "distractorReview": "半径と直径、強さと大きさの分類の混同。"
    },
    {
      "id": "sci-14-30",
      "unit": 14,
      "objective": "storm-surge-pressure-calculation",
      "sourcePage": 108,
      "prompt": "教材の目安で、気圧が1hPa下がると海面は約1cm上がります。30hPa低下した時の吸い上げによる上昇の目安は何cmですか。",
      "answer": "30cm",
      "options": [
        "30cm",
        "3cm",
        "300cm",
        "30m"
      ],
      "explanation": "1hPaあたり約1cmの近似なら30×1＝30cmです。風の吹き寄せはこの計算に含めていません。",
      "diagram": null,
      "distractorReview": "hPaとcmの比例関係、cmとmの換算の誤り。"
    },
    {
      "id": "sci-14-31",
      "unit": 14,
      "objective": "storm-surge-not-tsunami",
      "sourcePage": 108,
      "prompt": "高潮と津波の主な原因の違いとして正しいのはどれですか。",
      "answer": "高潮は気圧や風、津波は主に海底の地震など",
      "options": [
        "高潮は気圧や風、津波は主に海底の地震など",
        "高潮は海底の地震、津波は気圧や風",
        "両方とも降水量だけで決まる",
        "両方とも満月の時にしか起こらない"
      ],
      "explanation": "高潮は低気圧や風による海面上昇です。津波は主に海底の急な動きなどによる波で、原因が異なります。",
      "diagram": null,
      "distractorReview": "海岸の水害の名称と原因を同一視する誤り。"
    },
    {
      "id": "sci-14-32",
      "unit": 14,
      "objective": "typhoon-after-name",
      "sourcePage": 108,
      "prompt": "台風が通り過ぎた後に晴れ渡ることがある状態を、教材では何といいますか。",
      "answer": "台風一過",
      "options": [
        "台風一過",
        "秋霖",
        "春一番",
        "梅雨入り"
      ],
      "explanation": "台風が過ぎて晴れることを台風一過といいます。すべての台風通過後に必ず晴れるという意味ではありません。",
      "diagram": null,
      "distractorReview": "天気の名称と時期、必ず起こるという断定の混同。"
    },
    {
      "id": "sci-15-01",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "音を出しているものに共通する性質は何ですか。",
      "answer": "振動している",
      "options": [
        "振動している",
        "空気そのものが耳まで流れてくる",
        "音源から光が耳へ届く",
        "音源の熱だけが耳に届く"
      ],
      "explanation": "音源が振動し、その振動が周囲へ伝わって音になります。",
      "diagram": null,
      "distractorReview": "音・光・熱、媒質の状態の混同。",
      "objective": "baseline-sci-15-01"
    },
    {
      "id": "sci-15-02",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "音を伝えることができる組み合わせはどれですか。",
      "answer": "空気・水・鉄",
      "options": [
        "空気・水・鉄",
        "空気だけ",
        "水だけ",
        "真空だけ"
      ],
      "explanation": "音は気体、液体、固体の中を伝わります。物質のない真空中では伝わりません。",
      "diagram": null,
      "distractorReview": "音は空気だけで伝わるという誤解。",
      "objective": "baseline-sci-15-02"
    },
    {
      "id": "sci-15-03",
      "unit": 15,
      "sourcePage": 116,
      "prompt": "音が伝わらない環境はどれですか。",
      "answer": "真空",
      "options": [
        "真空",
        "空気中",
        "水中",
        "鉄の中"
      ],
      "explanation": "音は振動を伝える物質が必要なので、真空では伝わりません。",
      "diagram": null,
      "distractorReview": "光と音の伝わり方の混同。",
      "objective": "baseline-sci-15-03"
    },
    {
      "id": "sci-15-04",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "図の糸電話で音がよく伝わるようにするには、糸をどうしますか。",
      "answer": "ぴんと張る",
      "options": [
        "ぴんと張る",
        "たるませる",
        "途中を強くつかんで振動を止める",
        "糸を切る"
      ],
      "explanation": "糸を張ると紙コップの振動が糸を通って伝わりやすくなります。途中をつかむと伝わりにくくなります。",
      "diagram": "string-phone",
      "distractorReview": "張り方と振動の伝達の混同。",
      "objective": "baseline-sci-15-04"
    },
    {
      "id": "sci-15-05",
      "unit": 15,
      "sourcePage": 116,
      "prompt": "光ってから3秒後に花火の音が聞こえました。音速340m/秒、光の時間を無視すると距離は何mですか。",
      "answer": "1020m",
      "options": [
        "1020m",
        "340m",
        "約113m",
        "2040m"
      ],
      "explanation": "距離＝速さ×時間なので、340×3＝1020mです。片道なので2倍や半分にはしません。",
      "diagram": null,
      "distractorReview": "掛け算と割り算、往復との混同。",
      "objective": "baseline-sci-15-05"
    },
    {
      "id": "sci-15-06",
      "unit": 15,
      "sourcePage": 116,
      "prompt": "雷の光が音より先に届くのはなぜですか。",
      "answer": "光の方が音より速いから",
      "options": [
        "光の方が音より速いから",
        "音の方が光より速いから",
        "雷は光った後で初めて音を出すから",
        "音は上空を通ると伝わらなくなるから"
      ],
      "explanation": "光は音より非常に速いため、離れた雷では光を先に見て、音を後に聞きます。",
      "diagram": null,
      "distractorReview": "発生順序と到着順序、速さの逆転。",
      "objective": "baseline-sci-15-06"
    },
    {
      "id": "sci-15-07",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "教材の目安で、音が最も速く伝わるものはどれですか。",
      "answer": "鉄",
      "options": [
        "鉄",
        "水",
        "空気",
        "真空"
      ],
      "explanation": "教材の目安は空気約340m/秒、水約1500m/秒、鉄約6000m/秒です。温度や材質によって速さは変わります。",
      "diagram": null,
      "distractorReview": "固体・液体・気体の速さの混同。",
      "objective": "baseline-sci-15-07"
    },
    {
      "id": "sci-15-08",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "山に向かって声を出すと、少し後に声が返るのは何という性質によりますか。",
      "answer": "反射",
      "options": [
        "反射",
        "吸収",
        "回折",
        "共鳴"
      ],
      "explanation": "音が山などに反射して戻ると、やまびこが聞こえます。",
      "diagram": null,
      "distractorReview": "波の性質と状態変化の混同。",
      "objective": "baseline-sci-15-08"
    },
    {
      "id": "sci-15-09",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "音を吸収しやすい材料として適するのはどれですか。",
      "answer": "スポンジ",
      "options": [
        "スポンジ",
        "硬い金属板",
        "ガラス板",
        "石の壁"
      ],
      "explanation": "柔らかく多孔質のスポンジは音を吸収しやすく、硬い壁や板は反射しやすい材料です。",
      "diagram": null,
      "distractorReview": "吸収と反射の材料の混同。",
      "objective": "baseline-sci-15-09"
    },
    {
      "id": "sci-15-10",
      "unit": 15,
      "sourcePage": 116,
      "prompt": "音速340m/秒で、声を出して2秒後にやまびこが返りました。反射する壁までの距離は何mですか。",
      "answer": "340m",
      "options": [
        "340m",
        "680m",
        "170m",
        "1360m"
      ],
      "explanation": "音は壁まで往復するので、340×2÷2＝340mです。花火の片道の問題と区別します。",
      "diagram": null,
      "distractorReview": "往復の半分忘れ、余分な2倍・半分。",
      "objective": "baseline-sci-15-10"
    },
    {
      "id": "sci-15-11",
      "unit": 15,
      "sourcePage": 115,
      "prompt": "障害物の後ろにも音が回り込む性質を何といいますか。",
      "answer": "回折",
      "options": [
        "回折",
        "反射",
        "吸収",
        "共鳴"
      ],
      "explanation": "音が障害物の後ろへ回り込む性質が回折です。",
      "diagram": null,
      "distractorReview": "反射・吸収・回折の混同。",
      "objective": "baseline-sci-15-11"
    },
    {
      "id": "sci-15-12",
      "unit": 15,
      "sourcePage": 116,
      "prompt": "空気中の音速は、気温が上がると通常どうなりますか。",
      "answer": "速くなる",
      "options": [
        "速くなる",
        "遅くなる",
        "必ず変わらない",
        "音が伝わらなくなる"
      ],
      "explanation": "空気中の音速は気温が高いほど速くなります。教材では1℃上がると約0.6m/秒速くなる目安を示しています。",
      "diagram": null,
      "distractorReview": "温度と速さの関係の逆転。",
      "objective": "baseline-sci-15-12"
    },
    {
      "id": "sci-15-13",
      "unit": 15,
      "objective": "instrument-string-pluck",
      "sourcePage": 116,
      "prompt": "ギターの弦を指ではじいて音を出す時、主に振動しているものは何ですか。",
      "answer": "弦",
      "options": [
        "弦",
        "ギターの中の空気だけで弦は動かない",
        "弦を押さえる指だけで弦は動かない",
        "ギターの弦は振動せず回転だけする"
      ],
      "explanation": "弦をはじくと弦が振動し、その振動が周囲へ伝わります。",
      "diagram": null,
      "distractorReview": "弦楽器と管楽器の音源の混同。"
    },
    {
      "id": "sci-15-14",
      "unit": 15,
      "objective": "instrument-string-bow",
      "sourcePage": 116,
      "prompt": "バイオリンで弦を振動させる代表的な方法はどれですか。",
      "answer": "弓で弦をこする",
      "options": [
        "弓で弦をこする",
        "管に息を吹き込む",
        "ハンマーで内部の弦を打つ",
        "弦をぴんと張るだけで動かさない"
      ],
      "explanation": "弓と弦の摩擦によって弦が振動します。管に息を吹き込む笛や、ハンマーで弦を打つピアノとは方法が異なります。",
      "diagram": null,
      "distractorReview": "弓の役割と管楽器の発音方法の混同。"
    },
    {
      "id": "sci-15-15",
      "unit": 15,
      "objective": "instrument-piano-hammer",
      "sourcePage": 116,
      "prompt": "ピアノの鍵盤を押すと、内部で主に何が起こって音が出ますか。",
      "answer": "ハンマーが弦を打つ",
      "options": [
        "ハンマーが弦を打つ",
        "鍵盤が管の空気を吹き出す",
        "弓が弦をこする",
        "鍵盤を押すと弦の振動を完全に止める"
      ],
      "explanation": "ピアノは鍵盤の動きでハンマーが弦を打ち、弦が振動して音を出します。",
      "diagram": null,
      "distractorReview": "鍵盤そのものを音源と考える誤り。"
    },
    {
      "id": "sci-15-16",
      "unit": 15,
      "objective": "sound-stop-vibration",
      "sourcePage": 116,
      "prompt": "鳴っている音叉の枝を指で軽く押さえると、音が止まる主な理由は何ですか。",
      "answer": "振動が抑えられるから",
      "options": [
        "振動が抑えられるから",
        "空気そのものがなくなるから",
        "振動数だけが大きくなって必ず聞こえなくなるから",
        "音の速さが小さくなり0になるから"
      ],
      "explanation": "音源の振動を抑えると、周囲に伝える振動も小さくなります。",
      "diagram": null,
      "distractorReview": "音源を止めることと伝える空気を取り去ることの混同。"
    },
    {
      "id": "sci-15-17",
      "unit": 15,
      "objective": "air-compression",
      "sourcePage": 116,
      "prompt": "空気中を音が伝わる時の空気の動きとして正しいのはどれですか。",
      "answer": "空気の濃い所と薄い所が順に伝わる",
      "options": [
        "空気の濃い所と薄い所が順に伝わる",
        "同じ空気が音源から耳まで一方向に飛んでくる",
        "空気が全部静止したままで伝わる",
        "空気中では振動がなく音源だけが動く"
      ],
      "explanation": "空気の各部分が振動し、圧縮と膨張が順に伝わります。空気全体が音源から耳へ移動するわけではありません。",
      "diagram": "sound-compression",
      "distractorReview": "振動の伝わり方と空気の移動の混同。"
    },
    {
      "id": "sci-15-18",
      "unit": 15,
      "objective": "string-phone-sequence",
      "sourcePage": 116,
      "prompt": "糸電話で話す声の振動が伝わる順として正しいのはどれですか。",
      "answer": "空気→紙コップ→糸→紙コップ→空気",
      "options": [
        "空気→紙コップ→糸→紙コップ→空気",
        "空気→糸→空気だけでコップは振動しない",
        "紙コップ→空気だけで糸は振動しない",
        "声が糸の中を空気のかたまりとして移動する"
      ],
      "explanation": "声で一方のコップが振動し、張った糸を通ってもう一方のコップと空気へ振動が伝わります。",
      "diagram": null,
      "distractorReview": "空気と固体の間で振動が受け渡される順の誤り。"
    },
    {
      "id": "sci-15-19",
      "unit": 15,
      "objective": "string-phone-hold",
      "sourcePage": 116,
      "prompt": "張った糸電話の糸を途中で強く握ると聞こえにくくなる理由はどれですか。",
      "answer": "糸の振動が伝わりにくくなるから",
      "options": [
        "糸の振動が伝わりにくくなるから",
        "糸を握ると糸が長くなって音速が0になるから",
        "握った部分では振動数が必ず無限大になるから",
        "糸の色が変わり音を反射しなくなるから"
      ],
      "explanation": "糸を押さえると振動が抑えられ、相手側まで伝わりにくくなります。",
      "diagram": null,
      "distractorReview": "糸の長さや気温の問題との混同。"
    },
    {
      "id": "sci-15-20",
      "unit": 15,
      "objective": "sound-water-speed",
      "sourcePage": 116,
      "prompt": "教材の目安で空気中の音速は約340m/秒、水中は約1500m/秒です。同じ距離を伝わる時、先に届くのはどちらですか。",
      "answer": "水中の音",
      "options": [
        "水中の音",
        "空気中の音",
        "必ず同時",
        "水中では音が伝わらない"
      ],
      "explanation": "同じ距離なら、速さが大きい水中の方が短い時間で伝わります。",
      "diagram": null,
      "distractorReview": "空気中が常に最速だという誤解。"
    },
    {
      "id": "sci-15-21",
      "unit": 15,
      "objective": "vacuum-bell-visible",
      "sourcePage": 116,
      "prompt": "容器内の空気を少なくした実験で、電気ベルは動いているのに音が小さくなりました。正しい説明はどれですか。",
      "answer": "音源は振動しているが、伝える空気が少ない",
      "options": [
        "音源は振動しているが、伝える空気が少ない",
        "ベルの振動が必ず完全に止まった",
        "光も必ず届かなくなった",
        "音が容器内で速くなりすぎた"
      ],
      "explanation": "音源の振動と、その振動を伝える物質の存在は別の条件です。",
      "diagram": null,
      "distractorReview": "聞こえないなら音源も動いていないという誤り。"
    },
    {
      "id": "sci-15-22",
      "unit": 15,
      "objective": "sound-reflection-angle",
      "sourcePage": 116,
      "prompt": "図で音が壁に当たる時、垂線と入ってくる音の道筋との角度が30°です。反射する道筋と垂線との角度は何度ですか。",
      "answer": "30°",
      "options": [
        "30°",
        "60°",
        "90°",
        "150°"
      ],
      "explanation": "音の反射でも入射角と反射角は等しく、壁ではなく垂線を基準に測ります。",
      "diagram": "sound-reflection",
      "distractorReview": "壁と垂線のどちらから測るかの混同。"
    },
    {
      "id": "sci-15-23",
      "unit": 15,
      "objective": "sound-temperature-formula",
      "sourcePage": 116,
      "prompt": "音速の近似式を「331＋0.6×気温（℃）」m/秒とします。気温20℃の時の音速はどれですか。",
      "answer": "343m/秒",
      "options": [
        "343m/秒",
        "331m/秒",
        "351m/秒",
        "6620m/秒"
      ],
      "explanation": "331＋0.6×20＝331＋12＝343です。これは近似式です。",
      "diagram": null,
      "distractorReview": "係数0.6を省く、気温を掛ける場所を誤る計算。"
    },
    {
      "id": "sci-15-24",
      "unit": 15,
      "objective": "sound-distance-unit",
      "sourcePage": 116,
      "prompt": "音速340m/秒で、音が1km進む時間を求める式として正しいのはどれですか。",
      "answer": "1000÷340",
      "options": [
        "1000÷340",
        "1÷340",
        "340÷1000",
        "1000×340"
      ],
      "explanation": "距離をmにそろえ、時間＝距離÷速さで求めます。",
      "diagram": null,
      "distractorReview": "kmとmの換算忘れ、距離と速さの割る順の誤り。"
    },
    {
      "id": "sci-15-25",
      "unit": 15,
      "objective": "sound-rhythm-delay",
      "sourcePage": 117,
      "prompt": "太鼓を0.5秒ごとにたたく映像と、その音がちょうど半拍ずれて聞こえました。映像の光が届く時間を無視すると、音の遅れは何秒ですか。",
      "answer": "0.25秒",
      "options": [
        "0.25秒",
        "0.5秒",
        "1秒",
        "2秒"
      ],
      "explanation": "1拍の間隔が0.5秒なので、半拍は0.5÷2＝0.25秒です。距離を求める前に遅れを読み取ります。",
      "diagram": null,
      "distractorReview": "1拍と半拍の取り違え。"
    },
    {
      "id": "sci-16-01",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "音の大きさを主に決めるのは何ですか。",
      "answer": "振幅",
      "options": [
        "振幅",
        "振動数",
        "音が伝わる速さ",
        "波形の種類だけ"
      ],
      "explanation": "振幅が大きいほど大きな音になります。音の高さは振動数によって決まります。",
      "diagram": null,
      "distractorReview": "音量と音程の混同。",
      "objective": "baseline-sci-16-01"
    },
    {
      "id": "sci-16-02",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "音の高さを主に決めるのは何ですか。",
      "answer": "振動数",
      "options": [
        "振動数",
        "振幅",
        "音が伝わる速さ",
        "音源との距離だけ"
      ],
      "explanation": "振動数が多いほど高い音になります。振幅は音の大きさです。",
      "diagram": null,
      "distractorReview": "音程と音量の混同。",
      "objective": "baseline-sci-16-02"
    },
    {
      "id": "sci-16-03",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "同じ時間・同じ縦の尺度で表示した図です。Bの音はAと比べてどうなりますか。",
      "answer": "大きさは大きく、高さは同じ",
      "options": [
        "大きさは大きく、高さは同じ",
        "大きさは同じ、高さは高い",
        "大きさも高さも同じ",
        "大きさも高さも大きくなる"
      ],
      "explanation": "BはAより振幅が大きいので大きな音です。振動回数は同じなので高さは同じです。",
      "diagram": "waves:amplitude",
      "distractorReview": "波の高さと音程の混同。",
      "objective": "baseline-sci-16-03"
    },
    {
      "id": "sci-16-04",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "同じ時間・同じ縦の尺度で表示した図です。Bの音はAと比べてどうなりますか。",
      "answer": "高さは高く、大きさは同じ",
      "options": [
        "高さは高く、大きさは同じ",
        "高さは同じ、大きさは大きい",
        "高さも大きさも同じ",
        "高さも大きさも大きくなる"
      ],
      "explanation": "Bは同じ時間に多く振動しているので、高い音です。振幅は同じです。",
      "diagram": "waves:frequency",
      "distractorReview": "波の細かさと音量の混同。",
      "objective": "baseline-sci-16-04"
    },
    {
      "id": "sci-16-05",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "同じ材質・太さ・張り方の弦で、長さだけを短くすると、音の高さと振動数はどうなりますか。",
      "answer": "音は高くなり、振動数が増える",
      "options": [
        "音は高くなり、振動数が増える",
        "音は低くなり、振動数が減る",
        "音は高くなり、振動数が減る",
        "高さは変わらず、大きさだけが増える"
      ],
      "explanation": "ほかの条件が同じなら、弦は短い方が速く振動し、高い音になります。",
      "diagram": "strings:length",
      "distractorReview": "長さと高さの逆転。",
      "objective": "baseline-sci-16-05"
    },
    {
      "id": "sci-16-06",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "同じ材質・長さ・張り方の弦で、太さだけを細くすると、音の高さと振動数はどうなりますか。",
      "answer": "音は高くなり、振動数が増える",
      "options": [
        "音は高くなり、振動数が増える",
        "音は低くなり、振動数が減る",
        "音は高くなり、振動数が減る",
        "高さは変わらず、大きさだけが増える"
      ],
      "explanation": "同じ材質なら、細い弦の方が高い音になります。ほかの条件をそろえて比べます。",
      "diagram": null,
      "distractorReview": "太さと高さの逆転。",
      "objective": "baseline-sci-16-06"
    },
    {
      "id": "sci-16-07",
      "unit": 16,
      "sourcePage": 123,
      "prompt": "同じ弦の音を高くするにはどうしますか。",
      "answer": "強く張る",
      "options": [
        "強く張る",
        "ゆるく張る",
        "弱くはじくだけ",
        "強くはじくだけ"
      ],
      "explanation": "弦を強く張ると振動数が増え、音が高くなります。強くはじくことは主に音量を変えます。",
      "diagram": null,
      "distractorReview": "張る強さとはじく強さの混同。",
      "objective": "baseline-sci-16-07"
    },
    {
      "id": "sci-16-08",
      "unit": 16,
      "sourcePage": 124,
      "prompt": "同じ試験管を口から吹く時、水を増やすと、空気の柱の長さと音はどう変わりますか。",
      "answer": "空気の柱が短くなり、音は高くなる",
      "options": [
        "空気の柱が短くなり、音は高くなる",
        "空気の柱が短くなり、音は低くなる",
        "空気の柱が長くなり、音は高くなる",
        "空気の柱が長くなり、音は低くなる"
      ],
      "explanation": "水を増やすと空気の柱が短くなり、高い音になります。容器をたたく場合とは違います。",
      "diagram": "tubes:blow",
      "distractorReview": "吹く時とたたく時の水量の効果の混同。",
      "objective": "baseline-sci-16-08"
    },
    {
      "id": "sci-16-09",
      "unit": 16,
      "sourcePage": 124,
      "prompt": "同じコップをたたく時、水を増やすと、音の高さと振動数は主にどう変わりますか。",
      "answer": "音は低くなり、振動数が減る",
      "options": [
        "音は低くなり、振動数が減る",
        "音は高くなり、振動数が増える",
        "音は低くなり、振動数が増える",
        "高さは変わらず、大きさだけが増える"
      ],
      "explanation": "コップをたたくとコップと水が振動します。水が多いと振動しにくくなり、低い音になります。",
      "diagram": "cups:tap",
      "distractorReview": "吹く場合との逆転、振動体の取り違え。",
      "objective": "baseline-sci-16-09"
    },
    {
      "id": "sci-16-10",
      "unit": 16,
      "sourcePage": 124,
      "prompt": "440Hzの音より1オクターブ高い音の振動数は何Hzですか。",
      "answer": "880Hz",
      "options": [
        "880Hz",
        "220Hz",
        "441Hz",
        "1320Hz"
      ],
      "explanation": "1オクターブ高い音の振動数は2倍なので、440×2＝880Hzです。",
      "diagram": null,
      "distractorReview": "高低の逆転、1足す、3倍との混同。",
      "objective": "baseline-sci-16-10"
    },
    {
      "id": "sci-16-11",
      "unit": 16,
      "sourcePage": 124,
      "prompt": "同じ振動数の2つの音さで、一方を鳴らすともう一方も鳴る現象は何ですか。",
      "answer": "共鳴",
      "options": [
        "共鳴",
        "回折",
        "吸収",
        "反射だけ"
      ],
      "explanation": "同じ固有振動数の音さが振動を受けて鳴り出す現象が共鳴です。",
      "diagram": null,
      "distractorReview": "音の各現象の用語の混同。",
      "objective": "baseline-sci-16-11"
    },
    {
      "id": "sci-16-12",
      "unit": 16,
      "sourcePage": 124,
      "prompt": "近づいてくる救急車のサイレンは、静止した音源に比べて、耳に届く波の間隔と音の高さがどうなりますか。",
      "answer": "波の間隔が短くなり、高く聞こえる",
      "options": [
        "波の間隔が短くなり、高く聞こえる",
        "波の間隔が長くなり、低く聞こえる",
        "波の間隔が短くなり、低く聞こえる",
        "波の間隔が長くなり、高く聞こえる"
      ],
      "explanation": "音源が近づくと届く波の間隔が短くなり、高く聞こえます。遠ざかると低く聞こえます。ドップラー効果です。",
      "diagram": null,
      "distractorReview": "近づく・遠ざかる、音量と音程の混同。",
      "objective": "baseline-sci-16-12"
    },
    {
      "id": "sci-16-13",
      "unit": 16,
      "objective": "sound-three-elements",
      "sourcePage": 124,
      "prompt": "教材でいう音の3つの要素の組合せはどれですか。",
      "answer": "大きさ・高さ・音色",
      "options": [
        "大きさ・高さ・音色",
        "大きさ・速さ・音色",
        "高さ・速さ・音色",
        "大きさ・高さ・距離"
      ],
      "explanation": "音の特徴を大きさ、高さ、音色で区別します。",
      "diagram": null,
      "distractorReview": "音速や周囲の条件と音の特徴の混同。"
    },
    {
      "id": "sci-16-14",
      "unit": 16,
      "objective": "timbre-wave-shape",
      "sourcePage": 124,
      "prompt": "同じ高さ・同じ大きさでも、ピアノと笛の音を聞き分けられる主な理由は何ですか。",
      "answer": "波形の違いによる音色の違い",
      "options": [
        "波形の違いによる音色の違い",
        "音速が楽器ごとに全く違うため",
        "周波数だけが必ず違うため",
        "音量だけが必ず違うため"
      ],
      "explanation": "同じ基本の振動数と大きさでも、含まれる振動や波形の違いで音色が変わります。",
      "diagram": "timbre",
      "distractorReview": "音色を音量や基本の振動数だけで説明する誤り。"
    },
    {
      "id": "sci-16-15",
      "unit": 16,
      "objective": "frequency-count-time",
      "sourcePage": 124,
      "prompt": "図の波は0.01秒間に4回振動しています。振動数は何Hzですか。",
      "answer": "400Hz",
      "options": [
        "400Hz",
        "4Hz",
        "40Hz",
        "0.04Hz"
      ],
      "explanation": "1秒当たりの回数なので4÷0.01＝400Hzです。",
      "diagram": "frequency-count",
      "distractorReview": "表示時間を1秒とみなす、回数と時間を掛ける誤り。"
    },
    {
      "id": "sci-16-16",
      "unit": 16,
      "objective": "oscilloscope-function",
      "sourcePage": 124,
      "prompt": "オシロスコープで音を調べる時、画面に表せる代表的なものは何ですか。",
      "answer": "振動の波形",
      "options": [
        "振動の波形",
        "音源までの距離だけ",
        "楽器の質量だけ",
        "音速を直接目盛りで読む値だけ"
      ],
      "explanation": "マイクなどで音を電気信号に変え、振動の様子を波形として調べます。",
      "diagram": null,
      "distractorReview": "理科の測定器の役割の混同。"
    },
    {
      "id": "sci-16-17",
      "unit": 16,
      "objective": "strike-strength-pitch",
      "sourcePage": 124,
      "prompt": "同じ音叉をより強くたたく時、通常どの変化が主に起こりますか。",
      "answer": "振幅が大きくなり、音が大きくなる",
      "options": [
        "振幅が大きくなり、音が大きくなる",
        "振動数が必ず2倍になり、音が高くなる",
        "音速が必ず2倍になる",
        "音色が必ず別の楽器に変わる"
      ],
      "explanation": "同じ音叉では主に振幅が大きくなり、振動数はほぼ変わりません。",
      "diagram": null,
      "distractorReview": "大きさと高さ、振幅と振動数の混同。"
    },
    {
      "id": "sci-16-18",
      "unit": 16,
      "objective": "pipe-air-source",
      "sourcePage": 124,
      "prompt": "笛やリコーダーの音で主に振動しているものは何ですか。",
      "answer": "管の中などの空気",
      "options": [
        "管の中などの空気",
        "指だけで空気は振動しない",
        "弦で空気は振動しない",
        "水だけで空気は振動しない"
      ],
      "explanation": "管楽器では空気の振動が音に関係します。穴をふさぐ指は空気の部分の長さを変えますが、主な音源そのものではありません。",
      "diagram": null,
      "distractorReview": "弦や指などの操作部分と音源の混同。"
    },
    {
      "id": "sci-16-19",
      "unit": 16,
      "objective": "recorder-hole-length",
      "sourcePage": 124,
      "prompt": "リコーダーで同じ吹き方をし、開いている穴をふさいで振動する空気の部分を長くすると、基本の音はどうなりますか。",
      "answer": "低くなる",
      "options": [
        "低くなる",
        "高くなる",
        "必ず大きくなるだけ",
        "音速が0になる"
      ],
      "explanation": "長い空気の部分は基本の振動数が小さくなり、低い音になります。",
      "diagram": null,
      "distractorReview": "空気の部分の長さと音の高さの関係の逆転。"
    },
    {
      "id": "sci-16-20",
      "unit": 16,
      "objective": "hearing-frequency-range",
      "sourcePage": 124,
      "prompt": "教材で示す、人が聞ける振動数のおおよその範囲はどれですか。",
      "answer": "20〜20000Hz",
      "options": [
        "20〜20000Hz",
        "0〜2Hz",
        "20000〜200000Hzだけ",
        "すべての振動数"
      ],
      "explanation": "一般的な目安は約20〜20000Hzです。個人差があり、年齢などでも変わります。",
      "diagram": null,
      "distractorReview": "超音波の範囲や、全て聞こえるという断定との混同。"
    },
    {
      "id": "sci-16-21",
      "unit": 16,
      "objective": "ultrasound-definition",
      "sourcePage": 124,
      "prompt": "人に聞こえる範囲より高い、一般に約20000Hzを超える音を何といいますか。",
      "answer": "超音波",
      "options": [
        "超音波",
        "低周波音",
        "可聴音の低い部分だけ",
        "光の波"
      ],
      "explanation": "超音波は人の可聴域より高い振動数の音です。",
      "diagram": null,
      "distractorReview": "高さの範囲と音の性質や反射現象の名称の混同。"
    },
    {
      "id": "sci-16-22",
      "unit": 16,
      "objective": "ultrasound-cleaning",
      "sourcePage": 124,
      "prompt": "超音波洗浄で主に利用するものはどれですか。",
      "answer": "液体などへ伝わる細かな振動",
      "options": [
        "液体などへ伝わる細かな振動",
        "可視光で汚れを照らすことだけ",
        "音を完全になくすこと",
        "水を振動させずに凍らせること"
      ],
      "explanation": "超音波の細かな振動を利用して汚れを落とします。超音波は音の一種です。",
      "diagram": null,
      "distractorReview": "音を光と混同する誤り。"
    },
    {
      "id": "sci-16-23",
      "unit": 16,
      "objective": "natural-frequency-definition",
      "sourcePage": 124,
      "prompt": "物体が振動しやすい、その物体に特有の振動数を何といいますか。",
      "answer": "固有振動数",
      "options": [
        "固有振動数",
        "音速",
        "音の伝わる時間",
        "振幅"
      ],
      "explanation": "固有振動数は、その物体が振動しやすい振動数です。共鳴を考える時の基準になります。",
      "diagram": null,
      "distractorReview": "共鳴の条件を振幅や音速と取り違える誤り。"
    },
    {
      "id": "sci-16-24",
      "unit": 16,
      "objective": "doppler-name",
      "sourcePage": 124,
      "prompt": "近づく救急車のサイレンが高く、遠ざかると低く聞こえる現象の名前は何ですか。",
      "answer": "ドップラー効果",
      "options": [
        "ドップラー効果",
        "共鳴",
        "回折",
        "反射"
      ],
      "explanation": "音源と聞き手の相対的な動きで聞こえる振動数が変わる現象です。",
      "diagram": null,
      "distractorReview": "別分野の現象名との混同。"
    },
    {
      "id": "sci-17-01",
      "unit": 17,
      "sourcePage": 131,
      "prompt": "図のメスシリンダーの水面は何mLですか。最小目盛りは1mLです。",
      "answer": "46.0mL",
      "options": [
        "46.0mL",
        "47.0mL",
        "45.0mL",
        "50.0mL"
      ],
      "explanation": "水のへこんだ液面の底を、目と同じ高さで読みます。図の底は46の目盛りです。",
      "diagram": "cylinder",
      "distractorReview": "液面の縁と底、目盛りの読み違い。",
      "objective": "baseline-sci-17-01"
    },
    {
      "id": "sci-17-02",
      "unit": 17,
      "sourcePage": 131,
      "prompt": "メスシリンダーで水の体積を読む時、目の高さはどうしますか。",
      "answer": "液面と同じ高さ",
      "options": [
        "液面と同じ高さ",
        "液面より上",
        "液面より下",
        "どこからでも同じ"
      ],
      "explanation": "液面と目を同じ高さにして真横から読みます。斜めから見ると視差による誤差が生じます。",
      "diagram": null,
      "distractorReview": "視差、目の高さの取り違え。",
      "objective": "baseline-sci-17-02"
    },
    {
      "id": "sci-17-03",
      "unit": 17,
      "sourcePage": 131,
      "prompt": "電子てんびんで容器を使って重さをはかる時、最初にすることは何ですか。",
      "answer": "空の容器をのせて0にする",
      "options": [
        "空の容器をのせて0にする",
        "何ものせず0にした後、容器と中身をまとめて読む",
        "容器と中身をのせてから0にする",
        "容器の重さを中身の重さに足す"
      ],
      "explanation": "空の容器を置いて0にする風袋引きを行い、中身だけの重さをはかります。",
      "diagram": null,
      "distractorReview": "容器込みと中身だけの混同。",
      "objective": "baseline-sci-17-03"
    },
    {
      "id": "sci-17-04",
      "unit": 17,
      "sourcePage": 131,
      "prompt": "ろ過で、液体に溶けていない砂を分ける時、砂は主にどこに残りますか。",
      "answer": "ろ紙の上",
      "options": [
        "ろ紙の上",
        "ろ液の中",
        "ろ紙を通って水に溶ける",
        "ろうとの管の中だけ"
      ],
      "explanation": "ろ紙が溶けていない固体を留め、液体は通過します。溶けた物質を普通のろ過で分けることはできません。",
      "diagram": "filtration",
      "distractorReview": "残留物とろ液、溶解と懸濁の混同。",
      "objective": "baseline-sci-17-04"
    },
    {
      "id": "sci-17-05",
      "unit": 17,
      "sourcePage": 131,
      "prompt": "食塩水を普通のろ紙でろ過した時、食塩はどうなりますか。",
      "answer": "水とともにろ紙を通る",
      "options": [
        "水とともにろ紙を通る",
        "全てろ紙の上に残る",
        "食塩だけが通り水は残る",
        "ろ紙に付いた食塩をガラス棒で集められる"
      ],
      "explanation": "水に溶けた食塩は水とともにろ紙を通ります。食塩を取り出すには水を蒸発させるなどの方法が必要です。",
      "diagram": null,
      "distractorReview": "溶けた物質もろ紙で分けられるという誤解。",
      "objective": "baseline-sci-17-05"
    },
    {
      "id": "sci-17-06",
      "unit": 17,
      "sourcePage": 131,
      "prompt": "アルコールランプの火の正しい消し方はどれですか。",
      "answer": "ふたをかぶせる",
      "options": [
        "ふたをかぶせる",
        "息で吹き消す",
        "水を本体に注ぐ",
        "火がついたままアルコールを足す"
      ],
      "explanation": "ふたをかぶせて消します。息で吹き消したり、点火中にアルコールを足したりしてはいけません。実験は先生の指示で行います。",
      "diagram": null,
      "distractorReview": "他の火の消し方との混同、燃料補給時の誤操作。",
      "objective": "baseline-sci-17-06"
    },
    {
      "id": "sci-17-07",
      "unit": 17,
      "sourcePage": 132,
      "prompt": "電流計は、調べる部分にどうつなぎますか。",
      "answer": "直列",
      "options": [
        "直列",
        "調べる部分と並列",
        "電源に直接並列",
        "回路から外して両端の間に近づける"
      ],
      "explanation": "電流計は調べる部分と直列につなぎます。電源に直接並列につなぐと大電流が流れるおそれがあります。",
      "diagram": "ammeter",
      "distractorReview": "電流計と電圧計の接続の混同。",
      "objective": "baseline-sci-17-07"
    },
    {
      "id": "sci-17-08",
      "unit": 17,
      "sourcePage": 132,
      "prompt": "5A・500mA・50mAの端子がある電流計で、電流の大きさが不明な時、最初に使う端子はどれですか。",
      "answer": "5A端子",
      "options": [
        "5A端子",
        "500mA端子",
        "50mA端子",
        "3つの端子を同時につなぐ"
      ],
      "explanation": "はじめは最大の測定範囲を使い、針の振れが小さい時に小さい範囲へ切り替えます。",
      "diagram": null,
      "distractorReview": "精密さを求めて小範囲から使う誤解。",
      "objective": "baseline-sci-17-08"
    },
    {
      "id": "sci-17-09",
      "unit": 17,
      "sourcePage": 132,
      "prompt": "顕微鏡で観察を始める時、倍率とその理由の組み合わせとして正しいのはどれですか。",
      "answer": "低倍率で、視野が広く明るいから",
      "options": [
        "低倍率で、視野が広く明るいから",
        "高倍率で、視野が広く明るいから",
        "低倍率で、視野が狭く暗いから",
        "高倍率で、最初から全体を見渡せるから"
      ],
      "explanation": "低倍率から始めると視野が広く、明るく、観察物を見つけやすくなります。",
      "diagram": null,
      "distractorReview": "大きく見るために最初から高倍率にする誤解。",
      "objective": "baseline-sci-17-09"
    },
    {
      "id": "sci-17-10",
      "unit": 17,
      "sourcePage": 132,
      "prompt": "接眼レンズ10倍、対物レンズ20倍の顕微鏡の倍率は何倍ですか。",
      "answer": "200倍",
      "options": [
        "200倍",
        "30倍",
        "10倍",
        "20倍"
      ],
      "explanation": "顕微鏡の倍率は接眼×対物なので、10×20＝200倍です。",
      "diagram": null,
      "distractorReview": "掛け算と足し算、片方だけ使う誤り。",
      "objective": "baseline-sci-17-10"
    },
    {
      "id": "sci-17-11",
      "unit": 17,
      "sourcePage": 132,
      "prompt": "顕微鏡の倍率を上げると、見える範囲と明るさは一般にどうなりますか。",
      "answer": "範囲は狭く、暗くなる",
      "options": [
        "範囲は狭く、暗くなる",
        "範囲は広く、明るくなる",
        "範囲は広く、暗くなる",
        "範囲は狭く、必ず明るくなる"
      ],
      "explanation": "高倍率ほど視野は狭く、一般に暗くなります。明るさはしぼりなどでも調整します。",
      "diagram": null,
      "distractorReview": "拡大と視野の広さ、明るさの関係の混同。",
      "objective": "baseline-sci-17-11"
    },
    {
      "id": "sci-17-12",
      "unit": 17,
      "sourcePage": 132,
      "prompt": "図の顕微鏡で、目を近づけてのぞくAのレンズは何ですか。",
      "answer": "接眼レンズ",
      "options": [
        "接眼レンズ",
        "対物レンズ",
        "反射鏡",
        "しぼり"
      ],
      "explanation": "Aは接眼レンズです。観察物に近いレンズが対物レンズです。",
      "diagram": "microscope",
      "distractorReview": "接眼・対物、照明部品の混同。",
      "objective": "baseline-sci-17-12"
    },
    {
      "id": "sci-17-13",
      "unit": 17,
      "objective": "burner-screws",
      "sourcePage": 132,
      "prompt": "ガスバーナーの2つの調節ねじは、主に何をそれぞれ調節しますか。",
      "answer": "ガスの量と空気の量",
      "options": [
        "ガスの量と空気の量",
        "ガスの量と水の量",
        "空気の量と室温を直接別々に",
        "ガスの色と炎の高さを独立に"
      ],
      "explanation": "ガス調節ねじと空気調節ねじで燃料と空気の量を調節します。使用は先生の指示のもとで行います。",
      "diagram": null,
      "distractorReview": "調節する量と結果として変わる温度の混同。"
    },
    {
      "id": "sci-17-14",
      "unit": 17,
      "objective": "burner-red-air",
      "sourcePage": 132,
      "prompt": "ガスバーナーの炎が赤っぽく、空気が不足している時、先生の指示のもとで主に調節するねじはどれですか。",
      "answer": "空気調節ねじ",
      "options": [
        "空気調節ねじ",
        "ガス調節ねじだけ",
        "ガスの元栓だけ",
        "顕微鏡の調節ねじ"
      ],
      "explanation": "空気量を調節して適切な燃焼状態にします。実物の操作は先生の指示に従います。",
      "diagram": null,
      "distractorReview": "実験器具のねじの役割の混同。"
    },
    {
      "id": "sci-17-15",
      "unit": 17,
      "objective": "alcohol-no-transfer",
      "sourcePage": 132,
      "prompt": "アルコールランプを点火する際、してはいけない操作はどれですか。",
      "answer": "別の燃えているランプから直接火を移す",
      "options": [
        "別の燃えているランプから直接火を移す",
        "安定した台に置く",
        "周囲の燃えやすい物を片付ける",
        "先生の指示を確認する"
      ],
      "explanation": "燃えているランプを傾けて火を移すと、燃料がこぼれて燃え広がる危険があります。",
      "diagram": null,
      "distractorReview": "安全な準備と危険な点火操作の取り違え。"
    },
    {
      "id": "sci-17-16",
      "unit": 17,
      "objective": "meniscus-bottom",
      "sourcePage": 132,
      "prompt": "メスシリンダーで水の体積を読む時、くぼんだ水面のどの部分を読みますか。",
      "answer": "くぼみの最も低い所",
      "options": [
        "くぼみの最も低い所",
        "端の最も高い所",
        "水面の上の空気",
        "容器の底そのもの"
      ],
      "explanation": "水などがつくる凹形のメニスカスでは、中央の最も低い所を目の高さを合わせて読みます。",
      "diagram": null,
      "distractorReview": "水面の端と中央、容器の底の混同。"
    },
    {
      "id": "sci-17-17",
      "unit": 17,
      "objective": "displacement-volume",
      "sourcePage": 132,
      "prompt": "図で水は40mLでした。石を完全に沈めると65mLになりました。石の体積は何cm³ですか。",
      "answer": "25cm³",
      "options": [
        "25cm³",
        "65cm³",
        "40cm³",
        "105cm³"
      ],
      "explanation": "増えた体積65−40＝25mLが石の体積です。1mL＝1cm³です。",
      "diagram": "displacement",
      "distractorReview": "全体の目盛りを石の体積とする、引かずに足す誤り。"
    },
    {
      "id": "sci-17-18",
      "unit": 17,
      "objective": "volume-unit-equivalence",
      "sourcePage": 132,
      "prompt": "水の体積の単位で、1mLと等しいのはどれですか。",
      "answer": "1cm³",
      "options": [
        "1cm³",
        "1m³",
        "100cm³",
        "0.01cm³"
      ],
      "explanation": "1mL＝1cm³、1000mL＝1Lです。",
      "diagram": null,
      "distractorReview": "mL・L・cm³・m³の換算の混同。"
    },
    {
      "id": "sci-17-19",
      "unit": 17,
      "objective": "balance-container-subtract",
      "sourcePage": 132,
      "prompt": "容器だけの質量は5g、容器と試料を合わせた質量は23gでした。試料だけの質量は何gですか。",
      "answer": "18g",
      "options": [
        "18g",
        "23g",
        "28g",
        "5g"
      ],
      "explanation": "全体23gから容器5gを引いて18gです。容器を含む値と試料だけの値を区別します。",
      "diagram": null,
      "distractorReview": "容器の質量を引かない、逆に足す誤り。"
    },
    {
      "id": "sci-17-20",
      "unit": 17,
      "objective": "filter-paper-fold",
      "sourcePage": 132,
      "prompt": "ろ紙を2回折り、円すい状に開く時の紙の重なり方はどれですか。",
      "answer": "片側3枚、反対側1枚",
      "options": [
        "片側3枚、反対側1枚",
        "両側2枚ずつのまま",
        "片側4枚、反対側0枚",
        "両側4枚ずつ"
      ],
      "explanation": "4つ折りにしたろ紙の1枚を開くと、円すいの片側が3枚、もう片側が1枚になります。",
      "diagram": null,
      "distractorReview": "4つ折りの枚数と開く方向の取り違え。"
    },
    {
      "id": "sci-17-21",
      "unit": 17,
      "objective": "filter-below-rim",
      "sourcePage": 132,
      "prompt": "ろ過する液体を注ぐ時、ろうと内の液面はどう保ちますか。",
      "answer": "ろ紙の上端より下にする",
      "options": [
        "ろ紙の上端より下にする",
        "ろ紙の上端を越えるまで入れる",
        "ろ紙を完全に沈めてあふれさせる",
        "ろ紙の外側へ注ぐ"
      ],
      "explanation": "ろ紙の上端を越えると、ろ紙を通らずに液体が流れるおそれがあります。",
      "diagram": null,
      "distractorReview": "ろ紙を通すための条件と単なる容器の容量の混同。"
    },
    {
      "id": "sci-17-22",
      "unit": 17,
      "objective": "filter-funnel-stem-wall",
      "sourcePage": 132,
      "prompt": "ろ過で、ろうとの脚の先を受けるビーカーの内壁につける主な理由は何ですか。",
      "answer": "液体を壁に沿って流し、はねを抑える",
      "options": [
        "液体を壁に沿って流し、はねを抑える",
        "ろ紙の穴を大きくする",
        "溶けた物を全て取り除く",
        "液体を必ず沸騰させる"
      ],
      "explanation": "内壁を伝わせると液体が落ちる時のはねを抑えられます。",
      "diagram": null,
      "distractorReview": "ろ過の分離能力と器具配置の目的の混同。"
    },
    {
      "id": "sci-17-23",
      "unit": 17,
      "objective": "ammeter-terminal-polarity",
      "sourcePage": 132,
      "prompt": "電流計の＋端子は、回路のどちら側につなぎますか。",
      "answer": "電源の＋極側",
      "options": [
        "電源の＋極側",
        "電源の−極側だけ",
        "どちらでも必ず同じ",
        "回路につながず空中に置く"
      ],
      "explanation": "電流が＋端子から入るように接続します。針式では逆向きの振れを避けます。",
      "diagram": null,
      "distractorReview": "端子の極性と回路のつながりの混同。"
    },
    {
      "id": "sci-17-24",
      "unit": 17,
      "objective": "ammeter-scale-read",
      "sourcePage": 132,
      "prompt": "図の電流計は500mA端子を使い、0〜5の目盛りで2を示しています。電流は何mAですか。",
      "answer": "200mA",
      "options": [
        "200mA",
        "2mA",
        "20mA",
        "500mA"
      ],
      "explanation": "目盛り5が500mAなので1目盛り100mA、2は200mAです。",
      "diagram": "ammeter-scale",
      "distractorReview": "表示数字をそのままmAと読む、端子の最大値を測定値とする誤り。"
    },
    {
      "id": "sci-17-25",
      "unit": 17,
      "objective": "current-unit-convert",
      "sourcePage": 132,
      "prompt": "250mAは何Aですか。",
      "answer": "0.25A",
      "options": [
        "0.25A",
        "2.5A",
        "25A",
        "250000A"
      ],
      "explanation": "1000mA＝1Aなので250÷1000＝0.25Aです。",
      "diagram": null,
      "distractorReview": "ミリの意味と小数点の位置の混同。"
    },
    {
      "id": "sci-17-26",
      "unit": 17,
      "objective": "microscope-focus-safe",
      "sourcePage": 132,
      "prompt": "顕微鏡で対物レンズを標本に近づける時、教材ではどこから確かめますか。",
      "answer": "横から見て、レンズと標本の間を確認する",
      "options": [
        "横から見て、レンズと標本の間を確認する",
        "接眼レンズだけをのぞいて強く押しつける",
        "目を閉じて回す",
        "標本を外して必ず空中で合わせる"
      ],
      "explanation": "近づける時は横から距離を確かめ、レンズや標本の接触を防ぎます。",
      "diagram": null,
      "distractorReview": "のぞいたまま近づける焦点合わせの危険。"
    },
    {
      "id": "sci-17-27",
      "unit": 17,
      "objective": "microscope-moving-image",
      "sourcePage": 132,
      "prompt": "顕微鏡で見る像は上下左右が逆になります。標本を右へ動かすと、像はどちらへ動きますか。",
      "answer": "左",
      "options": [
        "左",
        "右",
        "必ず上",
        "動かない"
      ],
      "explanation": "像の左右が逆なので、標本の右への移動は像の左への移動になります。",
      "diagram": null,
      "distractorReview": "実物の動く向きと像の動く向きの混同。"
    },
    {
      "id": "sci-17-28",
      "unit": 17,
      "objective": "microscope-revolver",
      "sourcePage": 132,
      "prompt": "顕微鏡で複数の対物レンズを切り替える部分は何ですか。",
      "answer": "レボルバー",
      "options": [
        "レボルバー",
        "接眼レンズ",
        "鏡筒だけ",
        "クリップ"
      ],
      "explanation": "レボルバーを回して、使う対物レンズを切り替えます。",
      "diagram": null,
      "distractorReview": "レンズ本体や標本を固定する部品との混同。"
    },
    {
      "id": "sci-17-29",
      "unit": 17,
      "objective": "microscope-diaphragm",
      "sourcePage": 132,
      "prompt": "顕微鏡で、通る光の量を調節する代表的な部分は何ですか。",
      "answer": "しぼり",
      "options": [
        "しぼり",
        "レボルバー",
        "クリップ",
        "対物レンズの倍率を示す数字だけ"
      ],
      "explanation": "しぼりは光量を調節する部分です。機種により構造や調整方法は異なります。",
      "diagram": null,
      "distractorReview": "別の測定器や加熱器具の調節部分との混同。"
    },
    {
      "id": "sci-17-30",
      "unit": 17,
      "objective": "balance-weights-tweezers",
      "sourcePage": 132,
      "prompt": "上皿てんびんの分銅を直接手で持たず、ピンセットを使う理由として適切なのはどれですか。",
      "answer": "汚れなどがついて質量が変わるのを防ぐ",
      "options": [
        "汚れなどがついて質量が変わるのを防ぐ",
        "分銅の質量を軽くするため",
        "指で温めて重くするため",
        "測定物の質量を分銅から差し引くため"
      ],
      "explanation": "分銅に汚れやさびの原因になるものがつくのを抑え、質量を保つためです。",
      "diagram": null,
      "distractorReview": "器具を清潔に保つ目的と物理量の変化の混同。"
    },
    {
      "id": "sci-17-31",
      "unit": 17,
      "objective": "balance-equilibrium",
      "sourcePage": 132,
      "prompt": "上皿てんびんで釣り合ったと判断する目安はどれですか。",
      "answer": "針が中央の左右に同じ程度振れる",
      "options": [
        "針が中央の左右に同じ程度振れる",
        "針が中央より一方だけに偏って振れる",
        "分銅側の皿が下がったままになる",
        "針がどこで止まっても釣り合いと判断する"
      ],
      "explanation": "左右が同じ程度に振れる状態で釣り合いを判断できます。針が完全に止まるまで待つ必要はありません。",
      "diagram": null,
      "distractorReview": "左右対称の振れと片側に偏った振れの混同。"
    }
  ],
  "legacyQuestions": [
    {
      "id": "sci-03-06",
      "unit": 3,
      "sourcePage": 19,
      "prompt": "教材の目安で、18時ごろ東の地平線近くにある月はどれですか。",
      "answer": "満月",
      "options": [
        "満月",
        "上弦の月",
        "下弦の月",
        "三日月"
      ],
      "explanation": "満月は夕方ごろに東から昇ります。上弦は南の空、三日月は南西の空が目安です。",
      "diagram": "sky:full",
      "distractorReview": "同じ時刻の異なる月の形と方角の混同。"
    },
    {
      "id": "sci-03-07",
      "unit": 3,
      "sourcePage": 19,
      "prompt": "教材の目安で、18時ごろ南の空にある半月はどれですか。",
      "answer": "上弦の月",
      "options": [
        "上弦の月",
        "下弦の月",
        "満月",
        "新月"
      ],
      "explanation": "上弦の月は18時ごろに南中します。下弦の南中は6時ごろです。",
      "diagram": "sky:upper",
      "distractorReview": "上弦と下弦、朝と夕方の混同。"
    },
    {
      "id": "sci-03-11",
      "unit": 3,
      "sourcePage": 19,
      "prompt": "日本で月が東から西へ動くように見える主な原因は何ですか。",
      "answer": "地球の自転",
      "options": [
        "地球の自転",
        "地球の公転だけ",
        "月が地球の影に入ること",
        "太陽が地球のまわりを回ること"
      ],
      "explanation": "1日の見かけの動きは地球の自転によります。月の日ごとの位置や形の変化には月の公転が関わります。",
      "diagram": null,
      "distractorReview": "自転と公転の混同。"
    },
    {
      "id": "sci-04-09",
      "unit": 4,
      "sourcePage": 27,
      "prompt": "地球から新月となる時、月の地球側から見た地球は、どの形に近いですか。",
      "answer": "満月のような形",
      "options": [
        "満月のような形",
        "新月のような形",
        "上弦のような形",
        "下弦のような形"
      ],
      "explanation": "新月の位置にある月から見ると、地球の日光が当たる面をほぼ全面見られます。",
      "diagram": null,
      "distractorReview": "視点と照明方向の取り違え。"
    },
    {
      "id": "sci-06-02",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "星が北極星のまわりを45度動くまでの時間は何時間ですか。1時間に15度とします。",
      "answer": "3時間",
      "options": [
        "3時間",
        "2時間",
        "4時間",
        "6時間"
      ],
      "explanation": "星は1時間に約15度動くので、45度÷15度/時間＝3時間です。",
      "diagram": null,
      "distractorReview": "角度を時間に換算する割り算の混同。"
    },
    {
      "id": "sci-06-12",
      "unit": 6,
      "sourcePage": 42,
      "prompt": "3か月後の同じ時刻、星の位置は教材の近似で約何度西へずれますか。",
      "answer": "90度",
      "options": [
        "90度",
        "30度",
        "45度",
        "180度"
      ],
      "explanation": "1か月約30度なので、30×3＝約90度です。",
      "diagram": null,
      "distractorReview": "1か月、日周3時間、半年との混同。"
    },
    {
      "id": "sci-07-02",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "インゲンマメの種子で、発芽に使う養分を主に蓄える部分はどこですか。",
      "answer": "子葉",
      "options": [
        "子葉",
        "種皮",
        "幼根",
        "幼芽"
      ],
      "explanation": "インゲンマメは胚乳を持たず、子葉に養分を蓄えています。",
      "diagram": null,
      "distractorReview": "有胚乳種子との混同、胚の各部の混同。"
    },
    {
      "id": "sci-07-03",
      "unit": 7,
      "sourcePage": 50,
      "prompt": "トウモロコシの種子で、発芽に使う養分を主に蓄える部分はどこですか。",
      "answer": "胚乳",
      "options": [
        "胚乳",
        "種皮",
        "幼根",
        "幼芽"
      ],
      "explanation": "トウモロコシは有胚乳種子で、主に胚乳の養分を使います。",
      "diagram": null,
      "distractorReview": "インゲンマメの子葉との混同、保護と養分の混同。"
    },
    {
      "id": "sci-08-01",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "発芽後、インゲンマメの子葉がしぼむ主な理由は何ですか。",
      "answer": "蓄えた養分が成長に使われるから",
      "options": [
        "蓄えた養分が成長に使われるから",
        "子葉が根に変わるから",
        "養分が子葉へ集まり続けるから",
        "子葉の中のでんぷんが増えるから"
      ],
      "explanation": "子葉に蓄えた養分が芽や根の成長に使われるため、子葉はしだいにしぼみます。",
      "diagram": null,
      "distractorReview": "養分の移動方向、器官の変化の混同。"
    },
    {
      "id": "sci-08-10",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "種子にでんぷんが多いか調べる薬品はどれですか。",
      "answer": "ヨウ素液",
      "options": [
        "ヨウ素液",
        "石灰水",
        "食塩水",
        "水だけ"
      ],
      "explanation": "ヨウ素液ででんぷんを調べます。石灰水は二酸化炭素の検出などに用いる別の薬品です。",
      "diagram": null,
      "distractorReview": "検出薬の取り違え。"
    },
    {
      "id": "sci-08-11",
      "unit": 8,
      "sourcePage": 59,
      "prompt": "インゲンマメが発芽して、地下で主に下へ伸びる部分は何ですか。",
      "answer": "根",
      "options": [
        "根",
        "本葉",
        "花びら",
        "子葉"
      ],
      "explanation": "根は地中へ伸び、水を吸収し、植物を支えます。",
      "diagram": null,
      "distractorReview": "発芽図の上下と器官の位置の混同。"
    },
    {
      "id": "sci-08-12",
      "unit": 8,
      "sourcePage": 58,
      "prompt": "緑の葉が十分育つ前、種子の養分の減少と芽・根の成長の関係として正しいのはどれですか。",
      "answer": "養分を使って芽・根が成長する",
      "options": [
        "養分を使って芽・根が成長する",
        "芽・根が成長すると養分が必ず増える",
        "芽・根は養分を使わず成長する",
        "養分は全て種皮へ移る"
      ],
      "explanation": "種子に蓄えた養分を使って芽や根が成長します。水の吸収などもあるので、子葉の減少量と芽・根の増加量が常に同じになるわけではありません。",
      "diagram": null,
      "distractorReview": "保存量の単純な同一視、養分不要という誤解。"
    }
  ],
  "aliases": {
    "sci-03-06": "sci-02-01",
    "sci-03-07": "sci-02-03",
    "sci-03-11": "sci-05-05",
    "sci-04-09": "sci-04-08",
    "sci-06-02": "sci-06-03",
    "sci-06-12": "sci-06-04",
    "sci-07-02": "sci-07-04",
    "sci-07-03": "sci-07-05",
    "sci-08-01": "sci-08-03",
    "sci-08-10": "sci-07-08",
    "sci-08-11": "sci-07-07",
    "sci-08-12": "sci-08-03"
  }
};
data.allQuestions=data.questions.concat(data.legacyQuestions);
if(typeof module==='object'&&module.exports)module.exports=data;else root.ScienceData=data;
})(typeof window!=='undefined'?window:null);
