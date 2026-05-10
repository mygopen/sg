const days = [
  {
    id: 1,
    date: "8/15",
    weekday: "星期六",
    title: "抵達新加坡，濱海灣暖身",
    theme: "輕鬆適應日",
    hotel: "Marina Bay Sands",
    pace: "低強度",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_and_Merlion.jpg?width=1200",
    imageCredit: "Photo: Wikimedia Commons",
    weather: { icon: "cloud-rain", label: "午後雷雨", temp: "25-32°C" },
    summary:
      "早班機抵達後不急著塞滿景點，先讓大人小孩恢復體力。傍晚從魚尾獅公園一路走到濱海灣，夜景與水舞很適合當第一天的開場。",
    map: "https://www.google.com/maps/search/?api=1&query=Merlion+Park+Singapore",
    stops: [
      ["07:30", "台北 → 新加坡", "直飛，抵達後以飯店休息與夜景為主。機上先補眠，抵達前請孩子把水壺喝完，入境後再補水。"],
      ["12:00", "抵達樟宜、入境與午餐", "抓 90-120 分鐘完成入境、行李、交通。8 人建議分 2 台 Grab 或預約接送。"],
      ["14:30", "Marina Bay Sands 入住與休息", "先洗澡、整理泳衣與晚間小包。房間若未好，可寄放行李後到商場輕食。"],
      ["17:00", "飯店泳池或購物中心慢慢恢復", "兒童先放電但不要過量，第一晚重點是調整節奏與避免中暑。"],
      ["18:20", "魚尾獅公園與濱海灣步道", "傍晚光線漂亮，從 Merlion Park 拍照後沿著灣區散步，孩子不想走可改搭計程車短移動。"],
      ["19:30", "珍寶海鮮 Riverside Point 晚餐", "第一晚安排辣椒螃蟹與海鮮桌菜，建議先訂位並點微辣版本；8 人可分 2 台車從灣區過去。"],
      ["21:00", "Spectra 水舞或濱海灣夜景", "若精神好看水舞，若疲累就回飯店。第一天不要硬排太晚。"]
    ],
    tips: [
      ["親子節奏", "第一天孩子通常興奮但累，珍寶海鮮要先訂位；若全員太累，可改成 MBS 內用餐。"],
      ["交通", "8 人移動以 2 台車最省心；濱海灣周邊步行舒服，但雨後地面濕滑。"],
      ["拍照點", "魚尾獅公園、Helix Bridge、Apple Marina Bay Sands 外側都適合全家合照。"]
    ],
    sources: [
      ["Merlion Park", "https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/"],
      ["JUMBO Seafood", "https://www.jumboseafood.com.sg/"],
      ["Marina Bay Sands", "https://www.marinabaysands.com/"]
    ]
  },
  {
    id: 2,
    date: "8/16",
    weekday: "星期日",
    title: "花園、雲霧森林與科學館",
    theme: "室內避暑日",
    hotel: "Marina Bay Sands",
    pace: "中強度",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore.jpg?width=1200",
    imageCredit: "Photo: Ralff Nestor Nacor / Wikimedia Commons",
    weather: { icon: "cloud-sun", label: "悶熱多雲", temp: "25-31°C" },
    summary:
      "上午把戶外熱度留給濱海灣花園，接著進冷房展館；午後移到 Science Centre Singapore，讓 10-12 歲孩子有動手互動的空間。",
    map: "https://www.google.com/maps/search/?api=1&query=Gardens+by+the+Bay+Singapore",
    stops: [
      ["08:20", "早餐與步行到 Gardens by the Bay", "早點出門避開正午熱。從 MBS 走空橋到花園，沿路可拍 Supertree。"],
      ["09:00", "Flower Dome / Cloud Forest", "先排冷房展館，孩子可找瀑布、植物任務、雲霧步道。"],
      ["11:30", "Supertree Grove 與輕午餐", "如果天氣太熱，縮短戶外拍照時間，直接回商場或花園內餐廳。"],
      ["13:00", "前往 Science Centre Singapore", "從市區搭車約 25-35 分鐘；MRT 可到 Jurong East 再步行，但 8 人搭車較省力。"],
      ["14:00", "新加坡科學館", "互動展、鏡子迷宮、KidsSTOP 附近資源適合分齡；12 歲孩子可偏向科學互動與 Omni-Theatre。"],
      ["17:15", "回飯店游泳休息", "晚餐前保留 90 分鐘在飯店放空，避免隔天搬飯店時全員電量歸零。"],
      ["18:45", "松發肉骨茶 Clarke Quay 晚餐", "把肉骨茶安排在第二天晚餐，離 MBS 與濱海灣都不遠；胡椒湯熱但補體力，孩子可搭配油條、滷味與白飯。"],
      ["20:15", "Garden Rhapsody 燈光秀", "體力允許再回 Supertree Grove 看燈光秀；不想走動就留在 Clarke Quay 或 MBS 附近散步。"]
    ],
    tips: [
      ["避暑", "8 月濕熱，上午戶外、下午室內是最穩的親子節奏。"],
      ["科學館提醒", "Science Centre 通常週一休館，這天是星期日，安排很剛好。"],
      ["雨備", "午後雷陣雨時，Gardens 展館、MBS 商場與 Science Centre 都能銜接。"]
    ],
    sources: [
      ["Gardens by the Bay", "https://www.gardensbythebay.com.sg/"],
      ["Science Centre Singapore", "https://www.science.edu.sg/"],
      ["Song Fa Bak Kut Teh", "https://songfa.com.sg/"],
      ["Garden Rhapsody", "https://www.gardensbythebay.com.sg/en/things-to-do/calendar-of-events/garden-rhapsody.html"]
    ]
  },
  {
    id: 3,
    date: "8/17",
    weekday: "星期一",
    title: "新加坡動物園，轉場到聖淘沙",
    theme: "行程轉換日",
    hotel: "Shangri-La Rasa Sentosa",
    pace: "中強度",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance_-_Singapore_Zoo_(01).jpg?width=1200",
    imageCredit: "Photo: Dan arndt / Wikimedia Commons",
    weather: { icon: "umbrella", label: "短暫陣雨", temp: "25-32°C" },
    summary:
      "上午趁精神好去新加坡動物園，下午回市區拿行李後搬到聖淘沙。這天不再硬塞夜間動物園，把玩水與轉換飯店做好。",
    map: "https://www.google.com/maps/search/?api=1&query=Singapore+Zoo",
    stops: [
      ["07:30", "退房前整理行李", "把泳衣、涼鞋、防曬放進隨身袋；大行李寄放 MBS 禮賓部。"],
      ["08:15", "出發前往 Singapore Zoo", "市區搭車約 25-35 分鐘。建議抵達開園時段，動物活動力較好。"],
      ["09:00", "新加坡動物園主園區", "優先 Fragile Forest、Primate Kingdom、Elephants of Asia 與 KidzWorld。行程以樹蔭路線走。"],
      ["12:15", "園內午餐與表演", "避開正午硬走；查當日表演時間，提前 15 分鐘到。"],
      ["14:00", "回 MBS 取行李", "車上休息，讓孩子補水補糖。"],
      ["15:30", "移動到 Shangri-La Rasa Sentosa", "入住後先確認兒童活動、泳池、海灘通道與隔天早餐時段。"],
      ["17:00", "飯店泳池與 Siloso Beach", "轉換日最好的收尾是玩水，不再安排遠距離景點。"],
      ["19:00", "聖淘沙晚餐", "可在飯店、Beach Station 或 Resorts World Sentosa 用餐，早點回房。"]
    ],
    tips: [
      ["動線", "動物園與聖淘沙在不同方向，先回 MBS 取行李再進聖淘沙最清楚。"],
      ["體力管理", "不建議同一天再接 Night Safari，隔天環球影城會更需要體力。"],
      ["孩子分工", "讓 12 歲孩子各負責一張園區地圖或表演時間，參與感會更高。"]
    ],
    sources: [
      ["Singapore Zoo", "https://www.mandai.com/en/singapore-zoo.html"],
      ["Shangri-La Rasa Sentosa", "https://www.shangri-la.com/singapore/rasasentosaresort/"]
    ]
  },
  {
    id: 4,
    date: "8/18",
    weekday: "星期二",
    title: "環球影城與海洋館，聖淘沙最嗨日",
    theme: "玩樂爆發日",
    hotel: "Shangri-La Rasa Sentosa",
    pace: "高強度",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Universal_Studios_Singapore_globe_(125026).jpg?width=1200",
    imageCredit: "Photo: Wikimedia Commons",
    weather: { icon: "cloud-lightning", label: "午後雷陣雨", temp: "26-32°C" },
    summary:
      "今天把重心給 Universal Studios Singapore。Singapore Oceanarium 可排在上午開園前後或傍晚短逛，若排隊與天氣消耗太大，就把海洋館改成備案。",
    map: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Singapore",
    stops: [
      ["08:30", "早餐與出門", "帶輕便雨衣、水壺、行動電源。從 Rasa Sentosa 到 RWS 可搭 Sentosa 交通或叫車。"],
      ["09:30", "抵達 Resorts World Sentosa", "先拍地球標誌、確認 Express Pass 與當日開園時間。熱門日建議提早到門口。"],
      ["10:00", "Universal Studios Singapore", "優先 Transformers、Revenge of the Mummy、Jurassic Park、Canopy Flyer；怕刺激的孩子可改 Minion / Sesame Street。"],
      ["12:45", "園內午餐與降溫", "避開最熱時段排戶外長隊。可用 App 看排隊時間，分組玩不同強度設施。"],
      ["15:00", "第二輪熱門設施", "大人輪流陪玩，膽量不同的孩子可分線：刺激組與輕鬆組。"],
      ["17:30", "Singapore Oceanarium 備案", "若環球排隊順利且海洋館仍開放，可短逛 90 分鐘；否則留在 USS 到關園。"],
      ["19:30", "聖淘沙散步與晚餐", "海灘或 RWS 晚餐。孩子若累，直接回飯店泡澡休息。"]
    ],
    tips: [
      ["優先順序", "USS 是今天主菜，Oceanarium 是漂亮加分項，不要為了全收集犧牲孩子心情。"],
      ["票券", "暑假與週二仍可能排隊，8 人團建議先買票並評估 Express Pass。"],
      ["名稱提醒", "原 S.E.A. Aquarium 已升級為 Singapore Oceanarium，搜尋票券時兩個名稱可能都會出現。"]
    ],
    sources: [
      ["Universal Studios Singapore", "https://www.rwsentosa.com/en/attractions/universal-studios-singapore"],
      ["Singapore Oceanarium", "https://www.rwsentosa.com/en/attractions/singapore-oceanarium"],
      ["Sentosa", "https://www.sentosa.com.sg/"]
    ]
  },
  {
    id: 5,
    date: "8/19",
    weekday: "星期三",
    title: "星耀樟宜收尾，13:10 回台北",
    theme: "機場景點收尾",
    hotel: "返程",
    pace: "低強度",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jewel_Changi_Airport_Rain_Vortex_3.jpg?width=1200",
    imageCredit: "Photo: Bennv3771 / Wikimedia Commons",
    weather: { icon: "cloud-rain", label: "濕熱有雨", temp: "25-31°C" },
    summary:
      "回程航班 13:10，今天只排機場內的 Jewel Changi。核心是準時、輕鬆、不要把最後一天變成趕場。",
    map: "https://www.google.com/maps/search/?api=1&query=Jewel+Changi+Airport",
    stops: [
      ["07:30", "早餐與退房", "確認護照、登機資料、退稅單、孩子隨身外套。"],
      ["08:15", "前往樟宜機場", "聖淘沙到機場抓 35-50 分鐘，尖峰或雨天再加緩衝。"],
      ["09:10", "Jewel Changi Airport", "先看 HSBC Rain Vortex，再逛 Canopy Park 或買伴手禮。行李多時先找寄放或航空櫃台。"],
      ["10:30", "報到與出境", "國際線建議至少起飛前 2.5 小時完成報到節奏，8 人團更要早。"],
      ["11:15", "Jewel 輕食與最後採買", "把時間留給雨漩渦、伴手禮與簡單午餐；避免正式餐廳排隊壓縮登機緩衝。"],
      ["13:10", "新加坡 → 台北", "早上直攻星耀樟宜，保留報到緩衝。直飛返程，照片備份可在候機時完成。"]
    ],
    tips: [
      ["時間底線", "10:30 前進入報到流程會比較穩，Jewel 不要逛到忘記登機。"],
      ["雨備", "Jewel 是室內收尾，適合最後一天不用再擔心天氣。"],
      ["退稅", "若有購物退稅，請把單據與商品集中給一位成人管理。"]
    ],
    sources: [
      ["Jewel Changi Airport", "https://www.jewelchangiairport.com/"],
      ["Changi Airport", "https://www.changiairport.com/"]
    ]
  }
];

const panels = {
  tickets: {
    title: "資訊",
    sections: [
      {
        icon: "landmark",
        title: "新加坡相關生活常識",
        items: [
          "新加坡使用新加坡幣 SGD；多數地方可刷卡或行動支付，但小額現金仍建議準備。",
          "插座為英規 Type G，電壓 230V；手機、相機、行動電源通常只需轉接頭。",
          "公共場所重視規範：MRT 禁飲食，亂丟垃圾、違規吸菸、帶榴槤上車都可能受罰。",
          "室內冷氣很強，孩子可帶薄外套；戶外濕熱，水壺、防曬、輕便雨具每天都要帶。"
        ]
      },
      {
        icon: "siren",
        title: "緊急聯絡電話",
        items: [
          "警察：999。",
          "救護車 / 消防：995。",
          "非緊急救護：1777。",
          "台灣旅客可先備妥駐新加坡台北代表處電話、旅平險海外急難專線與飯店電話截圖。"
        ]
      },
      {
        icon: "plane-takeoff",
        title: "機場出境教學",
        items: [
          "13:10 回程建議 10:30 前開始報到流程；8 人團請多留排隊、退稅、托運緩衝。",
          "先處理航空公司報到與托運，再看是否需要退稅；退稅商品與單據請集中給一位成人管理。",
          "Jewel 與航廈相連但不等於已出境，逛完 Jewel 後仍要回航廈完成安檢與出境。",
          "出境後再採買液體或飲料最穩；登機口可能需要二次檢查，請提早看螢幕確認 gate。"
        ]
      },
      {
        icon: "smartphone",
        title: "必備 APP",
        items: [
          "Grab：最常用叫車與外送，8 人移動時通常分 2 台。",
          "CDG Zig：可叫 ComfortDelGro 計程車，尖峰時可當 Grab 之外的車源。",
          "Gojek：叫車備案，適合比價與補車源。",
          "Google Maps / Citymapper：查 MRT、步行時間與景點動線；出發前可先收藏飯店與每日景點。"
        ]
      },
      {
        icon: "train-front",
        title: "交通指南",
        items: [
          "MRT 適合濱海灣、市區與樟宜機場移動；先看 LTA 官方 MRT/LRT system map，確認轉乘站與步行距離。",
          "8 人同行叫車通常要分 2 台車；雨天、晚餐後、環球影城散場時段會加價或等較久，建議提早 10-15 分鐘叫車。",
          "建議安裝 Grab、CDG Zig、Gojek。Grab 覆蓋廣，CDG Zig 可叫 ComfortDelGro 計程車，Gojek 可當價格與車源備案。",
          "樟宜機場、MBS、聖淘沙都可以搭車，但聖淘沙進出可能有指定上車點；上車前確認 pick-up point，避免全家拖行李走回頭路。"
        ]
      }
    ],
    links: [
      ["Visit Singapore", "https://www.visitsingapore.com/"],
      ["Changi Airport", "https://www.changiairport.com/"],
      ["ICA SG Arrival Card", "https://eservices.ica.gov.sg/sgarrivalcard/"],
      ["LTA MRT System Map", "https://www.lta.gov.sg/content/ltaweb/en/public-transport/mrt-and-lrt/mrt-system-map.html"],
      ["Grab Singapore", "https://transport.grab.com/"],
      ["CDG Zig", "https://www.cdgtaxi.com.sg/cdg-zig/"],
      ["Gojek Singapore", "https://www.gojek.com/sg/"]
    ]
  },
  marina: {
    title: "濱海灣快逛指南",
    intro: "整理自 Journey.tw 的 Marina Bay 濱海灣一日遊文章，改成在灣區散步時可以快速查看的分類版；重點放在交通、拍照地標、雨天室內、夜景表演、花園展館與晚餐收尾。",
    sections: [
      {
        icon: "train-front",
        title: "怎麼到濱海灣",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_and_Merlion.jpg?width=720",
        items: [
          "最直覺的地鐵站是 Bayfront（DT16 / CE1），出站後可接 Marina Bay Sands、The Shoppes 與 Gardens by the Bay。",
          "8 人親子團若天氣熱或下雨，MBS、魚尾獅、珍寶海鮮之間可分 2 台 Grab，不必硬走完整圈。",
          "晚上散步可用「MBS → Helix Bridge → Merlion Park」或反向走，記得把回程上車點先看好。"
        ]
      },
      {
        icon: "camera",
        title: "經典地標拍照",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marina_Bay_Sands_and_Merlion.jpg?width=720",
        items: [
          "Marina Bay Sands 是灣區最明顯地標；要拍全景可站在魚尾獅公園或濱海灣步道對岸。",
          "魚尾獅公園是第一次到新加坡必拍點，傍晚光線柔和，但人潮多，建議快速拍完就移動。",
          "Helix Bridge 連接 MBS 與灣區步道，橋上觀景台很好拍城市線條，夜間 LED 亮起更漂亮。"
        ]
      },
      {
        icon: "shopping-bag",
        title: "室內避暑與購物",
        image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=720&q=78",
        items: [
          "The Shoppes at Marina Bay Sands 是雨天和午後熱浪的好緩衝，餐廳、咖啡、洗手間與冷氣都方便。",
          "ArtScience Museum 外型像蓮花，展覽結合藝術、科學與科技，適合孩子需要室內互動時當備案。",
          "LV 水晶亭在水面上很醒目，不一定要購物，路過拍照就很有濱海灣感。"
        ]
      },
      {
        icon: "sparkles",
        title: "夜景與水舞",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=720&q=78",
        items: [
          "Spectra 水舞在 MBS 外側 Event Plaza 觀看，文章列出常見場次為 20:00、21:00，週五週六另有 22:00。",
          "看完水舞後可沿灣區步道慢走，或直接回 MBS / 叫車回飯店，第一天不需要硬撐太晚。",
          "Esplanade 外型像榴槤，是灣區另一個好辨識地標；走到對岸可拍 MBS 與整片水岸。"
        ]
      },
      {
        icon: "leaf",
        title: "花園展館與超級樹",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore.jpg?width=720",
        items: [
          "Cloud Forest 有大型室內瀑布與雲霧步道，適合炎熱午後避暑，也很適合孩子拍照探索。",
          "Flower Dome 是冷室花園，文章提醒館內維持涼爽溫度，逛展時孩子可以帶薄外套。",
          "Supertree Grove 與 OCBC Skyway 是濱海灣花園代表畫面；晚上 Garden Rhapsody 免費燈光秀很值得排入。"
        ]
      },
      {
        icon: "utensils",
        title: "散步後吃什麼",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=720&q=78",
        items: [
          "MBS 裡餐廳選擇多，適合孩子累了就地解決；要吃正式餐廳建議先訂位。",
          "Lau Pa Sat 老巴剎在金融區，文章列為濱海灣附近美食點，適合想吃沙嗲、海南雞飯、叻沙等小吃。",
          "你們 Day1 已安排珍寶海鮮，建議魚尾獅拍完後直接過去，晚餐後再看體力決定是否回灣區看水舞。"
        ]
      }
    ],
    links: [
      ["Journey.tw 原文", "https://journey.tw/go-marina-bay/"],
      ["Marina Bay Sands", "https://www.marinabaysands.com/"],
      ["Gardens by the Bay", "https://www.gardensbythebay.com.sg/"],
      ["ArtScience Museum", "https://www.marinabaysands.com/museum.html"],
      ["Spectra", "https://www.marinabaysands.com/attractions/spectra.html"]
    ]
  },
  airport: {
    title: "樟宜機場快逛指南",
    intro: "整理自 Journey.tw 的樟宜機場開箱文，改成回程當天在手機上快速查的版本；重點放在航廈移動、Jewel、親子放電、採買、退稅與登機緩衝。",
    sections: [
      {
        icon: "tram-front",
        title: "航廈移動",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=720&q=78",
        items: [
          "T1、T2、T3 彼此連通，可步行或搭 Skytrain 移動；如果全家帶行李，先確認出發航廈再決定要不要跨航廈逛。",
          "T4 為獨立航廈，通常需從 T2 搭接駁巴士前往；不建議回程日為了逛 T4 來回奔波。",
          "先下載 Changi App 或使用官方地圖查店家、設施、登機門與航班狀態。"
        ]
      },
      {
        icon: "wifi",
        title: "到機場先做",
        image: "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&w=720&q=78",
        items: [
          "連上樟宜機場免費 Wi-Fi，並把航班、登機門與報到櫃台截圖給成人群組。",
          "若回程有購物退稅，先把退稅單、護照、商品集中管理；需要查驗的商品不要太早托運。",
          "有問題直接找旅客服務櫃台；文章也提醒部分服務人員可中文溝通。"
        ]
      },
      {
        icon: "shopping-bag",
        title: "美食與採買",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=720&q=78",
        items: [
          "各航廈都有餐廳、美食街與咖啡店，適合把 Day5 午餐做成輕食，不要壓縮 13:10 回程登機時間。",
          "免稅店、3C、美妝、運動品牌、伴手禮與星巴克城市杯都可列為最後採買清單。",
          "T2 美食街與機場商店常見新加坡風味餐點與伴手禮，刷卡比收一堆零錢更省心。"
        ]
      },
      {
        icon: "baby",
        title: "孩子放電與休息",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=720&q=78",
        items: [
          "T1、T2、T3 轉機區都有兒童遊戲區；若已出境又還有時間，可讓 10-12 歲孩子短暫放電。",
          "航廈內座位很多，也常見免費按摩椅；大人可以輪流顧行李與休息。",
          "主題花園可當雨天備案：T1 仙人掌花園、T2 夢幻花園與蘭花園、T3 蝴蝶園。"
        ]
      },
      {
        icon: "receipt",
        title: "退稅與出境",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=720&q=78",
        items: [
          "抵達機場後先決定是否要退稅；退稅商品若需查驗，請在托運前處理。",
          "樟宜機場有自助退稅機台，流程通常是掃護照與退稅單、確認資料，再依指示完成查驗與退款。",
          "8 人團建議 10:30 前進入報到/出境節奏，Jewel 拍照採買不要拖到最後一刻。"
        ]
      },
      {
        icon: "sparkles",
        title: "Jewel 星耀樟宜",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jewel_Changi_Airport_Rain_Vortex_3.jpg?width=720",
        items: [
          "Jewel 連接 T1/T2/T3，核心亮點是 Rain Vortex 雨漩渦與森林谷，適合回程日當機場景點收尾。",
          "Jewel 有餐廳、商店、寶可夢中心與 Canopy Park；帶孩子可優先雨漩渦、寶可夢中心、簡單伴手禮。",
          "雨漩渦一般白天開放，晚間才有聲光秀；你們 13:10 回程，重點放在白天拍照與準時回航廈。"
        ]
      }
    ],
    links: [
      ["Journey.tw 原文", "https://journey.tw/changi-airport/"],
      ["Changi Airport 官方地圖", "https://www.changiairport.com/en/maps.html"],
      ["Changi App", "https://www.changiairport.com/en/download-app.html"],
      ["Jewel Changi Airport", "https://www.jewelchangiairport.com/"]
    ]
  },
  exchange: {
    title: "匯率計算機",
    rate: 24.76,
    updated: "預設參考 2026/5/7 中間價；可按重新整理抓即時匯率。",
    source: "https://open.er-api.com/v6/latest/SGD"
  }
};

const stopMapQueries = {
  "台北 → 新加坡": "Taiwan Taoyuan International Airport Terminal 2",
  "抵達樟宜、入境與午餐": "Singapore Changi Airport",
  "Marina Bay Sands 入住與休息": "Marina Bay Sands Singapore",
  "飯店泳池或購物中心慢慢恢復": "Marina Bay Sands Singapore",
  "魚尾獅公園與濱海灣步道": "Merlion Park Singapore",
  "珍寶海鮮 Riverside Point 晚餐": "JUMBO Seafood Riverside Point Singapore",
  "Spectra 水舞或濱海灣夜景": "Spectra A Light and Water Show Singapore",
  "早餐與步行到 Gardens by the Bay": "Gardens by the Bay Singapore",
  "Flower Dome / Cloud Forest": "Flower Dome Cloud Forest Singapore",
  "Supertree Grove 與輕午餐": "Supertree Grove Singapore",
  "前往 Science Centre Singapore": "Science Centre Singapore",
  "新加坡科學館": "Science Centre Singapore",
  "回飯店游泳休息": "Marina Bay Sands Singapore",
  "松發肉骨茶 Clarke Quay 晚餐": "Song Fa Bak Kut Teh 11 New Bridge Road Singapore",
  "Garden Rhapsody 燈光秀": "Garden Rhapsody Supertree Grove Singapore",
  "退房前整理行李": "Marina Bay Sands Singapore",
  "出發前往 Singapore Zoo": "Singapore Zoo",
  "新加坡動物園主園區": "Singapore Zoo",
  "園內午餐與表演": "Singapore Zoo Ah Meng Restaurant",
  "回 MBS 取行李": "Marina Bay Sands Singapore",
  "移動到 Shangri-La Rasa Sentosa": "Shangri-La Rasa Sentosa Singapore",
  "飯店泳池與 Siloso Beach": "Siloso Beach Singapore",
  "聖淘沙晚餐": "Resorts World Sentosa Singapore",
  "早餐與出門": "Shangri-La Rasa Sentosa Singapore",
  "抵達 Resorts World Sentosa": "Resorts World Sentosa Singapore",
  "Universal Studios Singapore": "Universal Studios Singapore",
  "園內午餐與降溫": "Universal Studios Singapore",
  "第二輪熱門設施": "Universal Studios Singapore",
  "Singapore Oceanarium 備案": "Singapore Oceanarium Resorts World Sentosa",
  "聖淘沙散步與晚餐": "Sentosa Singapore",
  "早餐與退房": "Shangri-La Rasa Sentosa Singapore",
  "前往樟宜機場": "Singapore Changi Airport",
  "Jewel Changi Airport": "Jewel Changi Airport",
  "報到與出境": "Singapore Changi Airport Terminal 1",
  "Jewel 輕食與最後採買": "Jewel Changi Airport Food",
  "新加坡 → 台北": "Singapore Changi Airport"
};

function commonsImage(fileName, width = 320) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;
}

const thumbImages = {
  flight: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=360&q=78",
  changi: commonsImage("Jewel_Changi_Airport_Rain_Vortex_3.jpg"),
  mbs: commonsImage("Marina_Bay_Sands_and_Merlion.jpg"),
  merlion: commonsImage("Marina_Bay_Sands_and_Merlion.jpg"),
  gardens: commonsImage("Supertree_Grove,_Gardens_by_the_Bay,_Singapore.jpg"),
  flower: commonsImage("Supertree_Grove,_Gardens_by_the_Bay,_Singapore.jpg"),
  science: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=360&q=78",
  zoo: commonsImage("Entrance_-_Singapore_Zoo_(01).jpg"),
  sentosa: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=360&q=78",
  rasa: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=360&q=78",
  rws: commonsImage("Universal_Studios_Singapore_globe_(125026).jpg"),
  uss: commonsImage("Universal_Studios_Singapore_globe_(125026).jpg"),
  oceanarium: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=360&q=78",
  jewel: commonsImage("Jewel_Changi_Airport_Rain_Vortex_3.jpg"),
  seafood: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=360&q=78",
  bakKutTeh: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=360&q=78"
};

const stopThumbImages = {
  "台北 → 新加坡": thumbImages.flight,
  "抵達樟宜、入境與午餐": thumbImages.changi,
  "Marina Bay Sands 入住與休息": thumbImages.mbs,
  "飯店泳池或購物中心慢慢恢復": thumbImages.mbs,
  "魚尾獅公園與濱海灣步道": thumbImages.merlion,
  "珍寶海鮮 Riverside Point 晚餐": thumbImages.seafood,
  "Spectra 水舞或濱海灣夜景": thumbImages.mbs,
  "早餐與步行到 Gardens by the Bay": thumbImages.gardens,
  "Flower Dome / Cloud Forest": thumbImages.flower,
  "Supertree Grove 與輕午餐": thumbImages.gardens,
  "前往 Science Centre Singapore": thumbImages.science,
  "新加坡科學館": thumbImages.science,
  "回飯店游泳休息": thumbImages.mbs,
  "松發肉骨茶 Clarke Quay 晚餐": thumbImages.bakKutTeh,
  "Garden Rhapsody 燈光秀": thumbImages.gardens,
  "退房前整理行李": thumbImages.mbs,
  "出發前往 Singapore Zoo": thumbImages.zoo,
  "新加坡動物園主園區": thumbImages.zoo,
  "園內午餐與表演": thumbImages.zoo,
  "回 MBS 取行李": thumbImages.mbs,
  "移動到 Shangri-La Rasa Sentosa": thumbImages.rasa,
  "飯店泳池與 Siloso Beach": thumbImages.sentosa,
  "聖淘沙晚餐": thumbImages.rws,
  "早餐與出門": thumbImages.rasa,
  "抵達 Resorts World Sentosa": thumbImages.rws,
  "Universal Studios Singapore": thumbImages.uss,
  "園內午餐與降溫": thumbImages.uss,
  "第二輪熱門設施": thumbImages.uss,
  "Singapore Oceanarium 備案": thumbImages.oceanarium,
  "聖淘沙散步與晚餐": thumbImages.sentosa,
  "早餐與退房": thumbImages.rasa,
  "前往樟宜機場": thumbImages.changi,
  "Jewel Changi Airport": thumbImages.jewel,
  "報到與出境": thumbImages.changi,
  "Jewel 輕食與最後採買": thumbImages.jewel,
  "新加坡 → 台北": thumbImages.flight
};

const tabs = document.querySelector(".day-tabs");
const dayPanel = document.querySelector(".day-panel");
const infoPanel = document.querySelector(".info-panel");
const toolButtons = [...document.querySelectorAll(".tool")];
let activeDay = 1;
let activeView = "summary";

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderTabs() {
  tabs.innerHTML = days
    .map(
      (day) => `
        <button class="day-tab ${day.id === activeDay ? "is-active" : ""}" data-day="${day.id}">
          Day ${day.id}
          <small>${day.date}</small>
        </button>
      `
    )
    .join("");
}

function renderDay() {
  const day = days.find((item) => item.id === activeDay);
  dayPanel.innerHTML = `
    <article class="day-header">
      <img src="${day.image}" alt="${day.title}" />
      <div class="weather-badge" aria-label="${day.weather.label}，${day.weather.temp}">
        ${icon(day.weather.icon)}
        <span>
          <strong>${day.weather.label}</strong>
          <small>${day.weather.temp}</small>
        </span>
      </div>
      <div class="day-header__body">
        <span class="photo-credit">${day.imageCredit}</span>
        <p class="kicker">${day.date} · ${day.weekday} · ${day.theme}</p>
        <h2>${day.title}</h2>
        <p>${day.summary}</p>
      </div>
    </article>

    <h2 class="section-title">一整天行程</h2>
    <div class="timeline">
      ${day.stops
        .map(
          ([time, title, text]) => `
            <article class="stop">
              <div class="stop__media">
                <time>${time}</time>
                <img
                  class="stop-thumb"
                  src="${stopThumbImages[title] || day.image}"
                  alt="${title}"
                  loading="lazy"
                  onerror="this.onerror=null;this.src='${day.image}'"
                />
              </div>
              <div>
                <div class="stop__heading">
                  <h3>${title}</h3>
                  <a
                    class="map-icon"
                    href="${googleMapsUrl(stopMapQueries[title] || `${title} Singapore`)}"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="在 Google Maps 開啟 ${title}"
                    title="Google Maps"
                  >
                    ${icon("map-pin")}
                  </a>
                </div>
                <p>${text}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>

    <h2 class="section-title">當日提醒</h2>
    <div class="note-grid">
      ${day.tips
        .map(
          ([title, text]) => `
            <article class="note-card">
              <strong>${title}</strong>
              <p>${text}</p>
            </article>
          `
        )
        .join("")}
    </div>

    <h2 class="section-title">官方來源</h2>
    <div class="source-list">
      ${day.sources
        .map(
          ([title, href]) => `
            <a class="link-button" href="${href}" target="_blank" rel="noreferrer">
              <span>${title}</span>
              ${icon("external-link")}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function scrollToDayBanner() {
  window.requestAnimationFrame(() => {
    const banner = dayPanel.querySelector(".day-header");
    const header = document.querySelector(".app-header");
    const dayTabs = document.querySelector(".day-tabs");
    if (!banner || !header || !dayTabs) return;
    const stickyOffset = header.offsetHeight + dayTabs.offsetHeight + 8;
    const top = banner.getBoundingClientRect().top + window.scrollY - stickyOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  });
}

function renderInfoPanel() {
  if (activeView === "summary") {
    infoPanel.innerHTML = "";
    return;
  }
  const panel = panels[activeView];
  if (activeView === "exchange") {
    renderExchangePanel(panel);
    return;
  }
  infoPanel.innerHTML = `
    <article class="info-card">
      <h2>${panel.title}</h2>
      ${panel.intro ? `<p class="panel-intro">${panel.intro}</p>` : ""}
      ${
        panel.sections
          ? `
            <div class="info-sections">
              ${panel.sections
                .map(
                  (section) => `
                    <section class="info-section">
                      ${
                        section.image
                          ? `<img class="info-section__image" src="${section.image}" alt="${section.title}" loading="lazy" />`
                          : ""
                      }
                      <div class="info-section__heading">
                        ${icon(section.icon)}
                        <h3>${section.title}</h3>
                      </div>
                      <ul class="check-list">
                        ${section.items
                          .map(
                            (item) => `
                              <li>
                                ${icon("check-circle-2")}
                                <span>${item}</span>
                              </li>
                            `
                          )
                          .join("")}
                      </ul>
                    </section>
                  `
                )
                .join("")}
            </div>
          `
          : `
            <ul class="check-list">
              ${panel.items
                .map(
                  (item) => `
                    <li>
                      ${icon("check-circle-2")}
                      <span>${item}</span>
                    </li>
                  `
                )
                .join("")}
            </ul>
          `
      }
      ${
        panel.links
          ? `
            <div class="panel-links">
              ${panel.links
                .map(
                  ([title, href]) => `
                    <a class="link-button" href="${href}" target="_blank" rel="noreferrer">
                      <span>${title}</span>
                      ${icon("external-link")}
                    </a>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
    </article>
  `;
}

function formatCurrency(value, currency) {
  const digits = currency === "TWD" ? 0 : 2;
  return new Intl.NumberFormat("zh-TW", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(value);
}

function renderExchangePanel(panel) {
  const quickSgd = [5, 10, 20, 50, 100, 200];
  infoPanel.innerHTML = `
    <article class="info-card exchange-card">
      <div class="exchange-hero">
        <span class="exchange-icon">${icon("coins")}</span>
        <div>
          <h2>${panel.title}</h2>
          <p>台幣 TWD 與新加坡幣 SGD 雙向換算。預設 1 SGD = <strong>${panel.rate}</strong> TWD，可依現場匯率調整。</p>
        </div>
      </div>

      <label class="rate-field">
        <span>匯率設定</span>
        <div class="rate-control">
          <input id="exchange-rate" inputmode="decimal" type="text" value="${panel.rate}" aria-label="1 新加坡幣兌換台幣匯率" />
          <button id="refresh-rate" class="refresh-rate" type="button" aria-label="重新整理即時匯率" title="重新整理即時匯率">
            ${icon("refresh-cw")}
          </button>
        </div>
        <small id="rate-status">目前使用預設匯率。實際刷卡/換匯以銀行或平台為準。</small>
      </label>

      <div class="exchange-grid">
        <label class="money-field">
          <span>新加坡幣 SGD</span>
          <input id="sgd-input" inputmode="decimal" type="text" value="100" />
        </label>
        <label class="money-field">
          <span>台幣 TWD</span>
          <input id="twd-input" inputmode="numeric" type="text" value="${Math.round(100 * panel.rate)}" />
        </label>
      </div>

      <section class="quick-convert" aria-label="快速換算">
        <h3>快速計算</h3>
        <div class="quick-grid">
          ${quickSgd
            .map(
              (amount) => `
                <button class="quick-rate" data-sgd="${amount}">
                  <strong>S$${amount}</strong>
                  <span>NT$${formatCurrency(amount * panel.rate, "TWD")}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>

      <p class="exchange-note">${panel.updated}</p>
    </article>
  `;
  bindExchangeCalculator();
}

function bindExchangeCalculator() {
  const rateInput = document.querySelector("#exchange-rate");
  const sgdInput = document.querySelector("#sgd-input");
  const twdInput = document.querySelector("#twd-input");
  const refreshButton = document.querySelector("#refresh-rate");
  const rateStatus = document.querySelector("#rate-status");
  const quickButtons = [...document.querySelectorAll(".quick-rate")];
  if (!rateInput || !sgdInput || !twdInput) return;

  const parseAmount = (value) => Number(String(value).replace(/,/g, "")) || 0;
  const rate = () => parseAmount(rateInput.value) || panels.exchange.rate;
  const syncFromSgd = () => {
    const value = parseAmount(sgdInput.value);
    twdInput.value = Math.round(value * rate());
  };
  const syncFromTwd = () => {
    const value = parseAmount(twdInput.value);
    sgdInput.value = formatCurrency(value / rate(), "SGD").replace(/,/g, "");
  };
  const refreshQuickRates = () => {
    quickButtons.forEach((button) => {
      const amount = Number(button.dataset.sgd) || 0;
      button.querySelector("span").textContent = `NT$${formatCurrency(amount * rate(), "TWD")}`;
    });
  };
  const setStatus = (message, state = "neutral") => {
    if (!rateStatus) return;
    rateStatus.textContent = message;
    rateStatus.dataset.state = state;
  };
  const refreshLiveRate = async () => {
    if (!refreshButton) return;
    refreshButton.disabled = true;
    refreshButton.classList.add("is-loading");
    setStatus("正在取得即時匯率...", "loading");
    try {
      const response = await fetch(panels.exchange.source, { cache: "no-store" });
      if (!response.ok) throw new Error("rate fetch failed");
      const data = await response.json();
      const nextRate = Number(data?.rates?.TWD);
      if (!Number.isFinite(nextRate) || nextRate <= 0) throw new Error("TWD rate missing");
      rateInput.value = nextRate.toFixed(2);
      syncFromSgd();
      refreshQuickRates();
      const updated = data.time_last_update_utc ? `更新時間：${data.time_last_update_utc}` : "已更新即時匯率。";
      setStatus(`${updated} 來源：open.er-api.com`, "success");
    } catch (error) {
      setStatus("即時匯率暫時無法取得，仍可手動輸入匯率。", "error");
    } finally {
      refreshButton.disabled = false;
      refreshButton.classList.remove("is-loading");
    }
  };

  rateInput.addEventListener("input", () => {
    syncFromSgd();
    refreshQuickRates();
    setStatus("已使用手動輸入匯率。", "neutral");
  });
  sgdInput.addEventListener("input", syncFromSgd);
  twdInput.addEventListener("input", syncFromTwd);
  refreshButton?.addEventListener("click", refreshLiveRate);
  quickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sgdInput.value = button.dataset.sgd;
      syncFromSgd();
    });
  });
}

function render() {
  renderTabs();
  renderDay();
  renderInfoPanel();
  updateViewMode();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateViewMode() {
  const isItinerary = activeView === "summary";
  tabs.hidden = !isItinerary;
  dayPanel.hidden = !isItinerary;
  infoPanel.hidden = isItinerary;
  infoPanel.classList.toggle("is-standalone", !isItinerary);
  if (!isItinerary) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest(".day-tab");
  if (!button) return;
  activeDay = Number(button.dataset.day);
  render();
  scrollToDayBanner();
});

toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    toolButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderInfoPanel();
    updateViewMode();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
});

render();
