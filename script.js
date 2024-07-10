// 假設 json_data 是從服務器加載的 JSON 數據
const cards = [
  {
    "id": "EB01-001",
    "effect": "在規則上，自己擁有《和之國》特徵未持有反擊的角色卡全數持有反擊+1000。【咚‼×1】【攻擊時】若場上有自己費用5以上擁有《和之國》特徵的角色卡時，這張領航卡，到下一個我方回合開始前，力量值+1000。"
  },
  {
    "id": "EB01-001_p1",
    "effect": "在規則上，自己擁有《和之國》特徵未持有反擊的角色卡全數持有反擊+1000。【咚‼×1】【攻擊時】若場上有自己費用5以上擁有《和之國》特徵的角色卡時，這張領航卡，到下一個我方回合開始前，力量值+1000。"
  },
  {
    "id": "EB01-002",
    "effect": "【登場時】附加最多1張休息狀態的咚‼卡在1張自己的領航卡或角色卡。【對方攻擊時】【每回合1次】可以廢棄1張自己的手牌：若自己的領航卡擁有《和之國》或《白鬍子海賊團》特徵時，最多1張對手的領航卡或角色卡，在這個回合，力量值-2000。"
  },
  {
    "id": "EB01-003",
    "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【攻擊時】若對手的生命值卡在2張以下時，這張角色卡，在這個回合，力量值+2000。"
  },
  {
    "id": "EB01-003_p1",
    "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【攻擊時】若對手的生命值卡在2張以下時，這張角色卡，在這個回合，力量值+2000。"
  },
  {
    "id": "EB01-004",
    "effect": "【攻擊時】1張自己活動狀態的領航卡，在這個回合，可以力量值-5000：最多1張對手的角色卡，在這個回合，力量值-3000。"
  },
  {
    "id": "EB01-005",
    "effect": ""
  },
  {
    "id": "EB01-006",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚‼×2】【攻擊時】最多1張對手的角色卡，在這個回合，力量值-3000。"
  },
  {
    "id": "EB01-006_p2",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚‼×2】【攻擊時】最多1張對手的角色卡，在這個回合，力量值-3000。"
  },
  {
    "id": "EB01-006_p1",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【咚‼×2】【攻擊時】最多1張對手的角色卡，在這個回合，力量值-3000。"
  },
  {
    "id": "EB01-007",
    "effect": "【啟動主要】【每回合1次】附加最多1張休息狀態的咚‼卡在1張自己的領航卡或角色卡。"
  },
  {
    "id": "EB01-008",
    "effect": "【每回合1次】若這張角色卡因為效果即將遭到KO時，可以替換成廢棄1張自己手牌中的事件卡或舞台卡。"
  },
  {
    "id": "EB01-009",
    "effect": "【反擊】從自己的卡組上面查看5張卡片，使最多1張費用3以下擁有《動物》特徵的角色卡登場。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "EB01-010",
    "effect": "【反擊】KO最多1張對手原本力量值6000以下的角色卡。"
  },
  {
    "id": "EB01-011",
    "effect": "【啟動主要】可將這張卡片置為休息狀態，並將1張自己原本力量值1000的角色卡放置在卡組下面：抽1張卡片。"
  },
  {
    "id": "EB01-012",
    "effect": "【登場時】/【攻擊時】若自己的領航卡擁有《超新星》特徵，場上沒有自己其他的角色卡「卡文迪許」時，將最多2張自己的咚‼卡置為活動狀態。"
  },
  {
    "id": "EB01-012_p1",
    "effect": "【登場時】/【攻擊時】若自己的領航卡擁有《超新星》特徵，場上沒有自己其他的角色卡「卡文迪許」時，將最多2張自己的咚‼卡置為活動狀態。"
  },
  {
    "id": "EB01-013",
    "effect": "【啟動主要】可將這張角色卡放置在廢棄區：使最多1張自己手牌中除了「光月日和」以外費用5以下擁有《和之國》特徵的角色卡登場。之後，抽1張卡片。"
  },
  {
    "id": "EB01-013_p1",
    "effect": "【啟動主要】可將這張角色卡放置在廢棄區：使最多1張自己手牌中除了「光月日和」以外費用5以下擁有《和之國》特徵的角色卡登場。之後，抽1張卡片。"
  },
  {
    "id": "EB01-014",
    "effect": "【咚‼×1】【我方回合中】自己每有3張休息狀態的咚‼卡，這張角色卡，力量+1000。"
  },
  {
    "id": "EB01-015",
    "effect": "【登場時】將最多1張對手費用2以下的角色卡置為休息狀態。"
  },
  {
    "id": "EB01-016",
    "effect": "【啟動主要】可將這張角色卡置為休息狀態：KO最多1張對手休息狀態費用1以下的角色卡。"
  },
  {
    "id": "EB01-017",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)"
  },
  {
    "id": "EB01-018",
    "effect": ""
  },
  {
    "id": "EB01-019",
    "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，從自己的卡組上面查看3張卡片，公開最多1張擁有《唐吉訶德海賊團》特徵的角色卡，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "EB01-020",
    "effect": "【主要】若自己的領航卡擁有《超新星》特徵時，將1張自己的角色卡放回持有者的手牌，並從自己的手牌中，使最多1張和被放回的角色卡不同顏色費用2以下的角色卡登場。"
  },
  {
    "id": "EB01-021",
    "effect": "【我方回合結束時】可將1張自己費用2以上擁有《推進城》特徵的角色卡放回持有者的手牌：從咚‼卡組追加最多1張活動狀態的咚‼卡。"
  },
  {
    "id": "EB01-021_p1",
    "effect": "【我方回合結束時】可將1張自己費用2以上擁有《推進城》特徵的角色卡放回持有者的手牌：從咚‼卡組追加最多1張活動狀態的咚‼卡。"
  },
  {
    "id": "EB01-022",
    "effect": "【我方回合結束時】若自己的手牌在2張以下時，抽2張卡片。"
  },
  {
    "id": "EB01-022_p1",
    "effect": "【我方回合結束時】若自己的手牌在2張以下時，抽2張卡片。"
  },
  {
    "id": "EB01-023",
    "effect": "【登場時】抽1張卡片。"
  },
  {
    "id": "EB01-024",
    "effect": "若自己的手牌在4張以下時，自己擁有《SMILE》特徵的角色卡全數，力量值+1000。"
  },
  {
    "id": "EB01-025",
    "effect": ""
  },
  {
    "id": "EB01-026",
    "effect": "【咚‼×1】【攻擊時】若自己的手牌在1張以下時，將最多1張費用3以下的角色卡放回持有者的手牌。"
  },
  {
    "id": "EB01-027",
    "effect": "若自己的領航卡擁有包含『B・W』特徵時，自己的廢棄區中每有2張事件卡，這張角色卡，力量值+1000。【登場時】抽2張卡片，並廢棄1張自己的手牌。"
  },
  {
    "id": "EB01-027_p1",
    "effect": "若自己的領航卡擁有包含『B・W』特徵時，自己的廢棄區中每有2張事件卡，這張角色卡，力量值+1000。【登場時】抽2張卡片，並廢棄1張自己的手牌。"
  },
  {
    "id": "EB01-028",
    "effect": "【反擊】若自己的領航卡擁有《推進城》特徵時，最多1張自己的領航卡或角色卡，在這場對戰中，力量值+2000。之後，對手將1張自身活動狀態的角色卡放回持有者的手牌。"
  },
  {
    "id": "EB01-029",
    "effect": "【反擊】公開1張自己卡組上面的卡片，若公開的卡片是費用4以上時，將最多1張自己的角色卡放回持有者的手牌。之後，將公開的卡片放置在卡組下面。"
  },
  {
    "id": "EB01-030",
    "effect": "【啟動主要】可將這張卡片和1張自己的手牌依任意順序放置在卡組下面：抽2張卡片。"
  },
  {
    "id": "EB01-031",
    "effect": "【登場時】咚!!-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，將最多2張自己廢棄區中費用4以下的角色卡，加入手牌。"
  },
  {
    "id": "EB01-031_p1",
    "effect": "【登場時】咚!!-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，將最多2張自己廢棄區中費用4以下的角色卡，加入手牌。"
  },
  {
    "id": "EB01-032",
    "effect": ""
  },
  {
    "id": "EB01-033",
    "effect": "【登場時】咚!!-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《W7》特徵時，使最多1張自己手牌或廢棄區中除了「布魯諾」以外費用5擁有《W7》特徵的角色卡登場。"
  },
  {
    "id": "EB01-034",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【對方攻擊時】【每回合1次】咚!!-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有包含『B・W』特徵時，從咚‼卡組追加最多1張活動狀態的咚‼卡。"
  },
  {
    "id": "EB01-034_p1",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【對方攻擊時】【每回合1次】咚!!-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有包含『B・W』特徵時，從咚‼卡組追加最多1張活動狀態的咚‼卡。"
  },
  {
    "id": "EB01-035",
    "effect": "【登場時】若自己的領航卡擁有包含『B・W』特徵時，最多1張自己的領航卡或角色卡，在這個回合，力量值+1000。"
  },
  {
    "id": "EB01-036",
    "effect": "【速攻】(這張卡片在登場的回合即可攻擊)【KO時】若自己的領航卡擁有《推進城》特徵時，從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "EB01-037",
    "effect": "【對方攻擊時】【每回合1次】咚!!-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：KO最多1張對手費用2以下的角色卡。"
  },
  {
    "id": "EB01-038",
    "effect": "【反擊】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有包含『B・W』特徵時，選擇1張自己的角色卡。攻擊的對象變更為選擇的角色卡。"
  },
  {
    "id": "EB01-039",
    "effect": "【主要】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：KO最多1張對手費用8以下的角色卡。"
  },
  {
    "id": "EB01-040",
    "effect": "【啟動主要】【每回合1次】可將1張自己生命值區上面的卡片翻成正面朝上：KO最多1張對手費用0的角色卡。"
  },
  {
    "id": "EB01-040_p1",
    "effect": "【啟動主要】【每回合1次】可將1張自己生命值區上面的卡片翻成正面朝上：KO最多1張對手費用0的角色卡。"
  },
  {
    "id": "EB01-041",
    "effect": ""
  },
  {
    "id": "EB01-042",
    "effect": "【啟動主要】可將這張角色卡放置在廢棄區：使最多1張自己手牌中除了「史卡雷多」以外費用3以下擁有《多雷斯羅薩》特徵的角色卡以休息狀態登場。之後，最多1張對手的角色卡，在這個回合，費用-2。"
  },
  {
    "id": "EB01-043",
    "effect": "【登場時】可將3張自己廢棄區中擁有包含『CP』特徵的卡片依任意順序放置在卡組下面：使最多1張自己廢棄區中除了「斯帕達因」以外費用4以下擁有包含『CP』特徵的角色卡，以休息狀態登場。"
  },
  {
    "id": "EB01-044",
    "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張自己的角色卡「斯帕達姆」，在這個回合，力量值+3000。"
  },
  {
    "id": "EB01-045",
    "effect": "【登場時】若場上有對手費用0的角色卡時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "EB01-046",
    "effect": "【登場時】/【攻擊時】最多1張對手的角色卡，在這個回合，費用-1。之後，KO最多1張對手費用0的角色卡。"
  },
  {
    "id": "EB01-046_p1",
    "effect": "【登場時】/【攻擊時】最多1張對手的角色卡，在這個回合，費用-1。之後，KO最多1張對手費用0的角色卡。"
  },
  {
    "id": "EB01-047",
    "effect": "【每回合1次】角色卡遭到KO時，抽1張卡片，並廢棄1張自己的手牌。"
  },
  {
    "id": "EB01-048",
    "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-4。"
  },
  {
    "id": "EB01-048_p1",
    "effect": "【啟動主要】可將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-4。"
  },
  {
    "id": "EB01-049",
    "effect": "【登場時】KO最多1張對手費用2以下的角色卡。"
  },
  {
    "id": "EB01-049_p1",
    "effect": "【登場時】KO最多1張對手費用2以下的角色卡。"
  },
  {
    "id": "EB01-050",
    "effect": "【反擊】若自己廢棄區有30張以上卡片時，將最多1張自己卡組上面的卡片加入生命值區上面。"
  },
  {
    "id": "EB01-051",
    "effect": "【主要】可將2張自己卡組上面的卡片放置在廢棄區：KO最多1張對手費用5以下的角色卡。"
  },
  {
    "id": "EB01-052",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】選擇下列其中一項。・查看對手全數的生命值卡，並依任意順序放置。・將自己的生命值卡全數翻成背面朝上。"
  },
  {
    "id": "EB01-052_p1",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】選擇下列其中一項。・查看對手全數的生命值卡，並依任意順序放置。・將自己的生命值卡全數翻成背面朝上。"
  },
  {
    "id": "EB01-053",
    "effect": "【登場時】將最多1張對手費用3以下的角色卡，以正面朝上放置在對手的生命值區上面或下面。"
  },
  {
    "id": "EB01-054",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】若對手的生命值卡在1張以下時，KO最多1張對手費用3以下的角色卡。"
  },
  {
    "id": "EB01-055",
    "effect": ""
  },
  {
    "id": "EB01-056",
    "effect": "【登場時】可將1張自己生命值區上面或下面的卡片加入手牌：抽1張卡片。"
  },
  {
    "id": "EB01-056_p1",
    "effect": "【登場時】可將1張自己生命值區上面或下面的卡片加入手牌：抽1張卡片。"
  },
  {
    "id": "EB01-057",
    "effect": "這張角色卡因對手的效果遭到KO時，將最多1張自己卡組上面的卡片加入生命值區上面。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)"
  },
  {
    "id": "EB01-057_p1",
    "effect": "這張角色卡因對手的效果遭到KO時，將最多1張自己卡組上面的卡片加入生命值區上面。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)"
  },
  {
    "id": "EB01-058",
    "effect": "【咚‼×1】【我方回合中】若自己的生命值卡在2張以下時，這張角色卡的力量值+2000。"
  },
  {
    "id": "EB01-059",
    "effect": "【主要】KO最多1張對手的角色卡。之後，將自己生命值區上面的卡片放置在廢棄區使生命值卡只有1張。"
  },
  {
    "id": "EB01-060",
    "effect": "【主要】使最多1張自己手牌或廢棄區中費用7以下的「艾涅爾」登場。之後，將自己生命值區上面的卡片放置在廢棄區使生命值卡只有1張。"
  },
  {
    "id": "EB01-061",
    "effect": "【登場時】從咚‼卡組追加最多1張活動狀態的咚‼卡。【攻擊時】選擇最多1張對手的角色卡。這張角色卡原本的力量值，在這個回合，變成和選擇的角色卡的力量值相同。"
  },
  {
    "id": "EB01-061_p1",
    "effect": "【登場時】從咚‼卡組追加最多1張活動狀態的咚‼卡。【攻擊時】選擇最多1張對手的角色卡。這張角色卡原本的力量值，在這個回合，變成和選擇的角色卡的力量值相同。"
  },
  {
    "id": "OP02-013_p3",
    "effect": "【登場時】最多2張對手的角色卡，在這個回合，力量值-3000。之後，若自己的領航卡擁有包含『白鬍子海賊團』特徵時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "OP03-112_p4",
    "effect": "【登場時】從自己的卡組上面查看4張卡片，公開最多1張除了「夏洛特・普琳」以外擁有《BIG MOM海賊團》特徵的卡片或「香吉士」，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-001",
    "effect": "【啟動主要】【每回合1次】附加最多各1張休息狀態的咚‼卡在最多3張自己擁有《動物》或《磁鼓王國》特徵的角色卡。"
  },
  {
    "id": "OP08-001_p1",
    "effect": "【啟動主要】【每回合1次】附加最多各1張休息狀態的咚‼卡在最多3張自己擁有《動物》或《磁鼓王國》特徵的角色卡。"
  },
  {
    "id": "OP08-002",
    "effect": "【咚‼×1】【啟動主要】【每回合1次】抽1張卡片，並將1張自己的手牌放置在卡組上面或下面。之後，最多1張對手的角色卡，在這個回合，力量值-2000。"
  },
  {
    "id": "OP08-002_p1",
    "effect": "【咚‼×1】【啟動主要】【每回合1次】抽1張卡片，並將1張自己的手牌放置在卡組上面或下面。之後，最多1張對手的角色卡，在這個回合，力量值-2000。"
  },
  {
    "id": "OP08-003",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)"
  },
  {
    "id": "OP08-004",
    "effect": "【登場時】若場上有自己的「傑斯」，KO最多1張對手力量值3000以下的角色卡。"
  },
  {
    "id": "OP08-005",
    "effect": "【登場時】最多1張對手的角色卡，在這個回合，力量值-2000。之後，若場上沒有自己的「克羅馬利蒙」，使最多1張自己手牌中的「克羅馬利蒙」登場。"
  },
  {
    "id": "OP08-006",
    "effect": "【我方回合中】若自己的廢棄區中有「克羅馬利蒙」和「傑斯」，這張角色卡的力量值+2000。"
  },
  {
    "id": "OP08-007",
    "effect": "【我方回合中】【登場時】/【攻擊時】從自己的卡組上面查看5張卡片，使最多1張力量值4000以下擁有《動物》特徵的角色卡，以休息狀態登場。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-007_p1",
    "effect": "【我方回合中】【登場時】/【攻擊時】從自己的卡組上面查看5張卡片，使最多1張力量值4000以下擁有《動物》特徵的角色卡，以休息狀態登場。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-008",
    "effect": "【登場時】最多1張對手的角色卡，在這個回合，力量值-1000。【咚‼×1】【啟動主要】【每回合1次】可將1張自己生命值區上面的卡片加入手牌：這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "OP08-009",
    "effect": ""
  },
  {
    "id": "OP08-010",
    "effect": "【咚‼×1】【啟動主要】【每回合1次】最多1張除了這張角色卡以外自己擁有《動物》特徵的角色卡，在這個回合，力量值+1000。"
  },
  {
    "id": "OP08-011",
    "effect": ""
  },
  {
    "id": "OP08-012",
    "effect": "【咚‼×2】【攻擊時】若自己的領航卡擁有《磁鼓王國》特徵時，KO最多1張對手力量值4000以下的角色卡。"
  },
  {
    "id": "OP08-013",
    "effect": "【咚‼×2】這張角色卡獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "OP08-014",
    "effect": "【咚‼×1】【攻擊時】最多1張對手的角色卡，在這個回合，力量值-2000。之後，這張角色卡，在下一個對手回合結束前，力量值+2000。"
  },
  {
    "id": "OP08-015",
    "effect": "【登場時】從自己的卡組上面查看4張卡片，公開最多1張除了「Dr.古蕾娃」以外擁有《磁鼓王國》特徵的卡片、或「多尼多尼・喬巴」，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-015_p1",
    "effect": "【登場時】從自己的卡組上面查看4張卡片，公開最多1張除了「Dr.古蕾娃」以外擁有《磁鼓王國》特徵的卡片、或「多尼多尼・喬巴」，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-016",
    "effect": "【啟動主要】可將這張角色卡置為休息狀態：若自己的領航卡是「多尼多尼・喬巴」時，自己的角色卡「多尼多尼・喬巴」全數，在這個回合，力量值+2000。"
  },
  {
    "id": "OP08-017",
    "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+4000。之後，最多1張對手的領航卡或角色卡，在這個回合，力量值-1000。"
  },
  {
    "id": "OP08-018",
    "effect": "【主要】最多3張自己的角色卡，在這個回合，力量值+1000。之後，最多1張對手的角色卡，在這個回合，力量值-2000。"
  },
  {
    "id": "OP08-019",
    "effect": "【主要】/【反擊】最多1張對手的角色卡，在這個回合，力量值-3000。之後，最多1張自己的角色卡，在這個回合，力量值+3000。"
  },
  {
    "id": "OP08-020",
    "effect": "【對方回合中】自己擁有《磁鼓王國》特徵的角色卡全數力量值+1000。"
  },
  {
    "id": "OP08-021",
    "effect": "【啟動主要】【每回合1次】若場上有自己擁有《純毛族》特徵的角色卡時，將最多1張對手費用5以下的角色卡置為休息狀態。"
  },
  {
    "id": "OP08-021_p1",
    "effect": "【啟動主要】【每回合1次】若場上有自己擁有《純毛族》特徵的角色卡時，將最多1張對手費用5以下的角色卡置為休息狀態。"
  },
  {
    "id": "OP08-022",
    "effect": "【登場時】若自己的領航卡擁有《純毛族》特徵時，最多2張對手休息狀態費用5以下的角色卡，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-023",
    "effect": "【登場時】/【攻擊時】最多1張對手休息狀態費用7以下的角色卡，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-023_p1",
    "effect": "【登場時】/【攻擊時】最多1張對手休息狀態費用7以下的角色卡，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-024",
    "effect": "【攻擊時】最多1張對手休息狀態費用4以下的角色卡，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-025",
    "effect": "【登場時】最多1張對手休息狀態費用3以下的角色卡，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-026",
    "effect": "【咚‼×1】【攻擊時】最多1張對手休息狀態費用1以下的角色卡，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-027",
    "effect": ""
  },
  {
    "id": "OP08-028",
    "effect": "【登場時】若對手休息狀態的卡片有7張以上時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "OP08-029",
    "effect": "若這張角色卡為活動狀態時，除了「波哥姆斯」以外自己費用3以下擁有《純毛族》特徵的角色卡，不會因效果而遭到KO。"
  },
  {
    "id": "OP08-030",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】選擇下列其中一項。・將最多1張對手的咚‼卡置為休息狀態。・KO最多1張對手休息狀態費用6以下的角色卡。"
  },
  {
    "id": "OP08-030_p1",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】選擇下列其中一項。・將最多1張對手的咚‼卡置為休息狀態。・KO最多1張對手休息狀態費用6以下的角色卡。"
  },
  {
    "id": "OP08-031",
    "effect": "【登場時】最多1張自己費用2以下擁有《純毛族》特徵的角色卡，置為活動狀態。"
  },
  {
    "id": "OP08-032",
    "effect": "【啟動主要】可將這張角色卡置為休息狀態：若自己的領航卡擁有《純毛族》特徵時，將最多1張自己的咚‼卡置為活動狀態。"
  },
  {
    "id": "OP08-033",
    "effect": "【登場時】若自己的領航卡擁有《純毛族》特徵、對手休息狀態的卡片有7張以上時，KO最多1張對手休息狀態費用2以下的角色卡。"
  },
  {
    "id": "OP08-034",
    "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「萬妲」以外擁有《純毛族》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-035",
    "effect": ""
  },
  {
    "id": "OP08-036",
    "effect": "【主要】對手休息狀態費用7以下的角色卡全數，在下一個對手的重整階段無法為活動狀態。"
  },
  {
    "id": "OP08-037",
    "effect": "【主要】可將1張自己擁有《純毛族》特徵的角色卡置為休息狀態：將最多1張對手的角色卡置為休息狀態。"
  },
  {
    "id": "OP08-038",
    "effect": "【主要】可將2張自己的角色卡置為休息狀態：自己的角色卡全數，在下一個對手回合結束前，不會因對手的效果而遭到KO。"
  },
  {
    "id": "OP08-039",
    "effect": "【啟動主要】可將這張舞台卡置為休息狀態：若自己的領航卡擁有《純毛族》特徵時，將最多1張自己的咚‼卡置為活動狀態。【我方回合結束時】將最多1張自己擁有《純毛族》特徵的角色卡置為活動狀態。"
  },
  {
    "id": "OP08-040",
    "effect": "【登場時】可以公開2張自己手牌中擁有包含『白鬍子海賊團』特徵的卡片：若自己的領航卡擁有包含『白鬍子海賊團』特徵時，將最多1張對手費用4以下的角色卡放回持有者的手牌。"
  },
  {
    "id": "OP08-041",
    "effect": "【啟動主要】可將這張角色卡放回持有者的手牌：若自己的領航卡擁有《九蛇海賊團》特徵，將最多1張對手費用1以下的角色卡放置在持有者的卡組下面。"
  },
  {
    "id": "OP08-042",
    "effect": "【咚‼×1】【攻擊時】將最多1張費用3以下的角色卡放回持有者的手牌。"
  },
  {
    "id": "OP08-043",
    "effect": "【登場時】若自己的領航卡擁有包含『白鬍子海賊團』特徵、自己的生命值卡在2張以下時，在下一個對手回合結束前，對手的角色卡全數要進行攻擊時，必須廢棄2張自身的手牌才可以進行攻擊。"
  },
  {
    "id": "OP08-043_p1",
    "effect": "【登場時】若自己的領航卡擁有包含『白鬍子海賊團』特徵、自己的生命值卡在2張以下時，在下一個對手回合結束前，對手的角色卡全數要進行攻擊時，必須廢棄2張自身的手牌才可以進行攻擊。"
  },
  {
    "id": "OP08-044",
    "effect": "【啟動主要】【每回合1次】可以公開2張自己手牌中擁有包含『白鬍子海賊團』特徵的卡片：這張角色卡，在這個回合，力量值+2000。"
  },
  {
    "id": "OP08-045",
    "effect": "若這張角色卡即將遭到KO時，或因對手的效果即將離開場上時，可以替換成將這張角色卡放置在廢棄區，抽1張卡片。"
  },
  {
    "id": "OP08-046",
    "effect": "【我方回合中】【每回合1次】角色卡因為自己的效果離開場上時，若對手的手牌有5張以上時，對手將1張自身的手牌放置在卡組下面。之後，將這張角色卡置為休息狀態。"
  },
  {
    "id": "OP08-047",
    "effect": "【登場時】可將1張除了這張角色卡以外自己的角色卡放回持有者的手牌：將最多1張費用6以下的角色卡放回持有者的手牌。"
  },
  {
    "id": "OP08-048",
    "effect": ""
  },
  {
    "id": "OP08-049",
    "effect": "【登場時】公開1張自己卡組上面的卡片，並將該張卡片放置在卡組上面或下面。若公開的卡片擁有包含『白鬍子海賊團』特徵時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "OP08-050",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【登場時】抽2張卡片，並將2張自己的手牌任意變換排列順序放置在卡組上面或下面。"
  },
  {
    "id": "OP08-051",
    "effect": "【我方回合中】【登場時】最多1張自己的「艾德華・衛伯」，在這個回合，力量值+2000。"
  },
  {
    "id": "OP08-052",
    "effect": "【登場時】公開1張自己卡組上面的卡片，並使最多1張費用4以下擁有包含『白鬍子海賊團』特徵的角色卡登場。之後，將其餘卡片放到卡組上面或下面。"
  },
  {
    "id": "OP08-052_p1",
    "effect": "【登場時】公開1張自己卡組上面的卡片，並使最多1張費用4以下擁有包含『白鬍子海賊團』特徵的角色卡登場。之後，將其餘卡片放到卡組上面或下面。"
  },
  {
    "id": "OP08-053",
    "effect": "【主要】若自己的領航卡擁有包含『白鬍子海賊團』特徵時，從自己的卡組上面查看3張卡片，公開最多1張擁有包含『白鬍子海賊團』特徵的卡片、或「蒙其・D・魯夫」，並加入手牌。之後，將其餘卡片任意變換排列順序放到卡組上面或下面。"
  },
  {
    "id": "OP08-054",
    "effect": "【反擊】最多1張自己的領航卡或角色卡，在這場對戰中，力量值+3000。之後，公開1張自己卡組上面的卡片，並使最多1張費用3以下擁有包含『白鬍子海賊團』特徵的角色卡登場。之後，將其餘卡片放到卡組上面或下面。"
  },
  {
    "id": "OP08-055",
    "effect": "【主要】可以公開2張自己手牌中擁有包含『白鬍子海賊團』特徵的卡片：將最多1張費用6以下的角色卡放到持有者的卡組下面。"
  },
  {
    "id": "OP08-056",
    "effect": "【我方回合中】【每回合1次】自己擁有包含『白鬍子海賊團』特徵的角色卡因為效果離開場上時，抽1張卡片。之後，將1張自己的手牌放置在卡組上面或下面。"
  },
  {
    "id": "OP08-057",
    "effect": "【啟動主要】【每回合1次】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：選擇下列其中一項。・若自己的手牌在5張以下時，抽1張卡片。・最多1張對手的角色卡，在這個回合，費用-2。"
  },
  {
    "id": "OP08-057_p1",
    "effect": "【啟動主要】【每回合1次】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：選擇下列其中一項。・若自己的手牌在5張以下時，抽1張卡片。・最多1張對手的角色卡，在這個回合，費用-2。"
  },
  {
    "id": "OP08-058",
    "effect": "【攻擊時】可將2張自己生命值區上面的卡片翻成正面朝上：從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "OP08-058_p1",
    "effect": "【攻擊時】可將2張自己生命值區上面的卡片翻成正面朝上：從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "OP08-059",
    "effect": "【啟動主要】可將這張角色卡放置在廢棄區：若自己的領航卡擁有《百獸海賊團》特徵、自己場上有10張咚‼卡時，使最多1張自己手牌中費用7以下的「KING」登場。"
  },
  {
    "id": "OP08-060",
    "effect": "【登場時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若對手的場上有5張以上咚‼卡時，這張角色卡，在這個回合，獲得【速攻】。(這張卡片在登場的回合即可攻擊)"
  },
  {
    "id": "OP08-061",
    "effect": "【攻擊時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：KO最多1張對手費用3以下的角色卡。"
  },
  {
    "id": "OP08-062",
    "effect": "【啟動主要】可將這張角色卡放置在廢棄區：若自己的領航卡擁有《BIG MOM海賊團》特徵時，使最多1張自己手牌中費用3以上、但是數值在對手場上的咚‼卡張數以下的「夏洛特・卡塔克利」登場。"
  },
  {
    "id": "OP08-063",
    "effect": "【登場時】可將1張自己生命值區上面的卡片翻成背面朝上：從自己的咚‼卡組追加最多1張活動狀態的咚‼卡。"
  },
  {
    "id": "OP08-064",
    "effect": "【啟動主要】【每回合1次】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使最多1張自己手牌中的「餅乾士兵」登場。"
  },
  {
    "id": "OP08-065",
    "effect": ""
  },
  {
    "id": "OP08-066",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "OP08-067",
    "effect": "【我方回合中】【每回合1次】自己場上的咚‼卡被放回咚‼卡組時，從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "OP08-067_p1",
    "effect": "【我方回合中】【每回合1次】自己場上的咚‼卡被放回咚‼卡組時，從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "OP08-068",
    "effect": "【KO時】從咚‼卡組追加最多1張休息狀態的咚‼卡。"
  },
  {
    "id": "OP08-069",
    "effect": "【登場時】咚‼-1,可以廢棄1張自己的手牌：將最多1張自己卡組上面的卡片加入生命值區上面。之後，將最多1張對手費用6以下的角色卡，以正面朝上加入對手的生命值區上面或下面。"
  },
  {
    "id": "OP08-069_p1",
    "effect": "【登場時】咚‼-1,可以廢棄1張自己的手牌：將最多1張自己卡組上面的卡片加入生命值區上面。之後，將最多1張對手費用6以下的角色卡，以正面朝上加入對手的生命值區上面或下面。"
  },
  {
    "id": "OP08-070",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【KO時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使最多1張自己手牌中費用5以下的「雛鳥子爵」登場。"
  },
  {
    "id": "OP08-071",
    "effect": "【對方回合中】【KO時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使最多1張自己卡組中費用4以下的「塔馬哥男爵」登場。之後，將卡組洗牌。"
  },
  {
    "id": "OP08-072",
    "effect": "在規則上，這張卡片可不限張數放入卡組中。【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)"
  },
  {
    "id": "OP08-073",
    "effect": "【對方回合中】【KO時】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：使最多1張自己卡組中費用6以下的「公雞伯爵」登場。之後，將卡組洗牌。"
  },
  {
    "id": "OP08-074",
    "effect": "【啟動主要】【每回合1次】若場上沒有自己其他的角色卡「黑瑪麗亞」時，從咚‼卡組追加最多5張休息狀態的咚‼卡。之後，這回合結束時，將咚‼卡放回咚卡組，使自己場上的咚‼卡和對手場上的咚‼卡張數一樣。"
  },
  {
    "id": "OP08-074_p1",
    "effect": "【啟動主要】【每回合1次】若場上沒有自己其他的角色卡「黑瑪麗亞」時，從咚‼卡組追加最多5張休息狀態的咚‼卡。之後，這回合結束時，將咚‼卡放回咚卡組，使自己場上的咚‼卡和對手場上的咚‼卡張數一樣。"
  },
  {
    "id": "OP08-075",
    "effect": "【主要】咚‼-1(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：將最多1張對手費用2以下的角色卡置為休息狀態。之後，將自己的生命值卡全數翻成背面朝上。"
  },
  {
    "id": "OP08-076",
    "effect": "【主要】從咚‼卡組追加最多1張活動狀態的咚‼卡。之後，若場上有對手力量值6000以上的角色卡時，從咚‼卡組追加最多1張活動狀態的咚‼卡。"
  },
  {
    "id": "OP08-077",
    "effect": "【主要】咚‼-2(可將自己場上的咚‼卡依指定的數量放回咚‼卡組)：若自己的領航卡擁有《百獸海賊團》或《BIG MOM海賊團》特徵時，KO最多2張對手費用6以下的角色卡。"
  },
  {
    "id": "OP08-078",
    "effect": ""
  },
  {
    "id": "OP08-079",
    "effect": "【啟動主要】【每回合1次】可以廢棄1張自己的手牌：若是這張角色卡登場的回合時，將最多1張對手費用7以下的角色卡放置在廢棄區。之後，對手廢棄1張自身的手牌。"
  },
  {
    "id": "OP08-079_p1",
    "effect": "【啟動主要】【每回合1次】可以廢棄1張自己的手牌：若是這張角色卡登場的回合時，將最多1張對手費用7以下的角色卡放置在廢棄區。之後，對手廢棄1張自身的手牌。"
  },
  {
    "id": "OP08-080",
    "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「QUEEN」以外擁有《百獸海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-080_p1",
    "effect": "【登場時】從自己的卡組上面查看5張卡片，公開最多1張除了「QUEEN」以外擁有《百獸海賊團》特徵的卡片，並加入手牌。之後，將其餘卡片依任意順序放到卡組下面。"
  },
  {
    "id": "OP08-081",
    "effect": "【攻擊時】可將3張自己廢棄區中擁有包含『CP』特徵的卡片依任意順序放置在卡組下面：KO最多1張對手費用0的角色卡。"
  },
  {
    "id": "OP08-082",
    "effect": "【啟動主要】可將1張自己的咚‼卡置為休息狀態，並將這張角色卡置為休息狀態：最多1張對手的角色卡，在這個回合，費用-2。"
  },
  {
    "id": "OP08-083",
    "effect": "【咚‼×1】【我方回合中】對手的角色卡全數費用-1。"
  },
  {
    "id": "OP08-084",
    "effect": "這張角色卡的費用+4。【啟動主要】可將這張角色卡置為休息狀態：抽1張卡片，並廢棄1張自己的手牌。之後，KO最多1張對手費用3以下的角色卡。"
  },
  {
    "id": "OP08-084_p1",
    "effect": "這張角色卡的費用+4。【啟動主要】可將這張角色卡置為休息狀態：抽1張卡片，並廢棄1張自己的手牌。之後，KO最多1張對手費用3以下的角色卡。"
  },
  {
    "id": "OP08-085",
    "effect": "【咚‼×1】【攻擊時】若場上有自己費用8以上的角色卡時，KO最多1張對手費用4以下的角色卡。"
  },
  {
    "id": "OP08-086",
    "effect": "【登場時】若場上有對手費用0的角色卡時，抽2張卡片，並廢棄2張自己的手牌。"
  },
  {
    "id": "OP08-087",
    "effect": "【防禦】(對手攻擊後，將這張卡片置為休息狀態即可使攻擊的對象換成這張卡片)【啟動主要】【每回合1次】最多1張對手的角色卡，在這個回合，費用-1。"
  },
  {
    "id": "OP08-088",
    "effect": "【登場時】最多1張自己的角色卡，在下一個對手回合結束前，費用+1。"
  },
  {
    "id": "OP08-089",
    "effect": ""
  },
  {
    "id": "OP08-090",
    "effect": "【登場時】使最多1張自己廢棄區中費用2以下擁有《SMILE》特徵的角色卡登場。"
  },
  {
    "id": "OP08-091",
    "effect": "【登場時】可以廢棄1張自己的手牌：KO最多1張對手費用3以下的角色卡。"
  },
  {
    "id": "OP08-092",
    "effect": "【登場時】使最多1張自己廢棄區中費用4以下的「烏爾蒂」登場。"
  },
  {
    "id": "OP08-093",
    "effect": "【咚‼×1】這張角色卡的費用+2。"
  },
  {
    "id": "OP08-094",
    "effect": "【主要】/【反擊】可將3張自己廢棄區中的卡片依任意順序放置在卡組下面：KO最多1張對手費用2以下的角色卡。"
  },
  {
    "id": "OP08-095",
    "effect": "【主要】若自己廢棄區有10張以上卡片時，最多1張自己的角色卡，在下一個對手回合結束前，力量值+2000。"
  },
];


function searchCard() {
    const id = document.getElementById('cardId').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    const card = cards.find(card => card.id === id);
    if (card) {
        resultDiv.innerHTML = `Effect: ${card.effect}`;
    } else {
        resultDiv.innerHTML = '未找到該 ID 的卡牌效果。';
    }
}
