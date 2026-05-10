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
    summary:
      "早班機抵達後不急著塞滿景點，先讓大人小孩恢復體力。傍晚從魚尾獅公園一路走到濱海灣，夜景與水舞很適合當第一天的開場。",
    map: "https://www.google.com/maps/search/?api=1&query=Merlion+Park+Singapore",
    stops: [
      ["07:30", "台北 → 新加坡", "直飛，抵達後以飯店休息與夜景為主。機上先補眠，抵達前請孩子把水壺喝完，入境後再補水。"],
      ["12:00", "抵達樟宜、入境與午餐", "抓 90-120 分鐘完成入境、行李、交通。8 人建議分 2 台 Grab 或預約接送。"],
      ["14:30", "Marina Bay Sands 入住與休息", "先洗澡、整理泳衣與晚間小包。房間若未好，可寄放行李後到商場輕食。"],
      ["17:00", "飯店泳池或購物中心慢慢恢復", "兒童先放電但不要過量，第一晚重點是調整節奏與避免中暑。"],
      ["18:20", "魚尾獅公園與濱海灣步道", "傍晚光線漂亮，從 Merlion Park 拍照後沿著灣區散步，孩子不想走可改搭計程車短移動。"],
      ["20:00", "Spectra 水舞或濱海灣夜景", "若精神好看水舞，若疲累就回飯店。第一天不要硬排太晚。"]
    ],
    tips: [
      ["親子節奏", "第一天孩子通常興奮但累，晚餐選 Marina Bay Sands / The Shoppes 內部最穩。"],
      ["交通", "8 人移動以 2 台車最省心；濱海灣周邊步行舒服，但雨後地面濕滑。"],
      ["拍照點", "魚尾獅公園、Helix Bridge、Apple Marina Bay Sands 外側都適合全家合照。"]
    ],
    sources: [
      ["Merlion Park", "https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/"],
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
      ["19:45", "Garden Rhapsody 燈光秀", "體力允許再回 Supertree Grove 看燈光秀；不想走動就留在 MBS 附近吃飯。"]
    ],
    tips: [
      ["避暑", "8 月濕熱，上午戶外、下午室內是最穩的親子節奏。"],
      ["科學館提醒", "Science Centre 通常週一休館，這天是星期日，安排很剛好。"],
      ["雨備", "午後雷陣雨時，Gardens 展館、MBS 商場與 Science Centre 都能銜接。"]
    ],
    sources: [
      ["Gardens by the Bay", "https://www.gardensbythebay.com.sg/"],
      ["Science Centre Singapore", "https://www.science.edu.sg/"],
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
    summary:
      "回程航班 13:10，今天只排機場內的 Jewel Changi。核心是準時、輕鬆、不要把最後一天變成趕場。",
    map: "https://www.google.com/maps/search/?api=1&query=Jewel+Changi+Airport",
    stops: [
      ["07:30", "早餐與退房", "確認護照、登機資料、退稅單、孩子隨身外套。"],
      ["08:15", "前往樟宜機場", "聖淘沙到機場抓 35-50 分鐘，尖峰或雨天再加緩衝。"],
      ["09:10", "Jewel Changi Airport", "先看 HSBC Rain Vortex，再逛 Canopy Park 或買伴手禮。行李多時先找寄放或航空櫃台。"],
      ["10:30", "報到與出境", "國際線建議至少起飛前 2.5 小時完成報到節奏，8 人團更要早。"],
      ["11:15", "機場午餐與最後採買", "讓孩子自己選小點心，避免登機前太趕。"],
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
  summary: {
    title: "全程策略",
    items: [
      "8 月新加坡高溫潮濕，上午戶外、午後室內或飯店泳池，是 8 人親子團最穩的節奏。",
      "Day1 與 Day5 刻意做輕，避免早班機與回程航班壓縮整趟旅行的體力。",
      "兩段住宿很合理：前兩晚住濱海灣，後兩晚住聖淘沙，移動成本低很多。",
      "每天都保留一個可刪減項目：Day2 晚間燈光秀、Day3 晚餐外出、Day4 Oceanarium。"
    ]
  },
  tickets: {
    title: "票券與預約",
    items: [
      "Gardens by the Bay、Science Centre、Singapore Zoo、USS、Singapore Oceanarium 都建議出發前確認 2026 年 8 月實際營業時間與票價。",
      "USS 若遇暑假人潮，可先比價一般票 + Express Pass；8 人同行時，排隊時間的成本很高。",
      "動物園表演與餵食體驗常需看當日場次，進園後先截圖地圖與節目表。",
      "飯店泳池、兒童活動與早餐時段，入住當天直接向櫃台確認。"
    ]
  },
  packing: {
    title: "手機小清單",
    items: [
      "每人水壺、薄外套、輕便雨衣、防曬、帽子、止汗濕紙巾。",
      "孩子泳衣分成 Day1/Day3/Day4 可快速取用的小包，不要壓在大行李底部。",
      "8 人團建議兩顆行動電源、至少兩張可海外付款的信用卡，以及護照照片備份。",
      "準備一個『今天可取消』的共識，遇到雷雨或孩子累了就刪減最低優先項。"
    ]
  }
};

const stopMapQueries = {
  "台北 → 新加坡": "Taiwan Taoyuan International Airport Terminal 2",
  "抵達樟宜、入境與午餐": "Singapore Changi Airport",
  "Marina Bay Sands 入住與休息": "Marina Bay Sands Singapore",
  "飯店泳池或購物中心慢慢恢復": "Marina Bay Sands Singapore",
  "魚尾獅公園與濱海灣步道": "Merlion Park Singapore",
  "Spectra 水舞或濱海灣夜景": "Spectra A Light and Water Show Singapore",
  "早餐與步行到 Gardens by the Bay": "Gardens by the Bay Singapore",
  "Flower Dome / Cloud Forest": "Flower Dome Cloud Forest Singapore",
  "Supertree Grove 與輕午餐": "Supertree Grove Singapore",
  "前往 Science Centre Singapore": "Science Centre Singapore",
  "新加坡科學館": "Science Centre Singapore",
  "回飯店游泳休息": "Marina Bay Sands Singapore",
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
  "機場午餐與最後採買": "Jewel Changi Airport",
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
  jewel: commonsImage("Jewel_Changi_Airport_Rain_Vortex_3.jpg")
};

const stopThumbImages = {
  "台北起飛": thumbImages.flight,
  "抵達樟宜、入境與午餐": thumbImages.changi,
  "Marina Bay Sands 入住與休息": thumbImages.mbs,
  "飯店泳池或購物中心慢慢恢復": thumbImages.mbs,
  "魚尾獅公園與濱海灣步道": thumbImages.merlion,
  "Spectra 水舞或濱海灣夜景": thumbImages.mbs,
  "早餐與步行到 Gardens by the Bay": thumbImages.gardens,
  "Flower Dome / Cloud Forest": thumbImages.flower,
  "Supertree Grove 與輕午餐": thumbImages.gardens,
  "前往 Science Centre Singapore": thumbImages.science,
  "新加坡科學館": thumbImages.science,
  "回飯店游泳休息": thumbImages.mbs,
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
  "機場午餐與最後採買": thumbImages.jewel,
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
      <div class="day-header__body">
        <span class="photo-credit">${day.imageCredit}</span>
        <p class="kicker">${day.date} · ${day.weekday} · ${day.theme}</p>
        <h2>${day.title}</h2>
        <p>${day.summary}</p>
        <div class="meta-row">
          <span class="pill">${icon("bed-double")} ${day.hotel}</span>
          <span class="pill">${icon("activity")} ${day.pace}</span>
          <a class="pill" href="${day.map}" target="_blank" rel="noreferrer">${icon("map-pin")} 地圖</a>
        </div>
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

function renderInfoPanel() {
  const panel = panels[activeView];
  infoPanel.innerHTML = `
    <article class="info-card">
      <h2>${panel.title}</h2>
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
    </article>
  `;
}

function render() {
  renderTabs();
  renderDay();
  renderInfoPanel();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest(".day-tab");
  if (!button) return;
  activeDay = Number(button.dataset.day);
  render();
  dayPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    toolButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderInfoPanel();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
});

render();
