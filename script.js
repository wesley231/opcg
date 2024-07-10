// 假設 json_data 是從服務器加載的 JSON 數據
const cards = [
    // 從 Python 腳本輸出的 JSON 數據
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
