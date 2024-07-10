async function searchCard() {
    const cardIdInput = document.getElementById('cardId');
    const cardId = cardIdInput.value.trim().toUpperCase(); // 自動轉換為大寫
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // 清空之前的結果

    if (cardId === '') {
        resultDiv.textContent = '請輸入卡牌 ID';
        return;
    }

    try {
        const q = window.query(window.collection(window.db, 'cards'), window.where('id', '==', cardId));
        const querySnapshot = await window.getDocs(q);

        if (querySnapshot.empty) {
            resultDiv.textContent = '未找到該 ID 的卡牌效果。';
        } else {
            querySnapshot.forEach((doc) => {
                const card = doc.data();
                const cardElement = document.createElement('div');
                cardElement.textContent = `ID: ${card.id}, Effect: ${card.effect}`; // 同時展示 ID 和效果
                cardElement.classList.add('card-info'); // 添加樣式類
                resultDiv.appendChild(cardElement);
            });
        }
    } catch (error) {
        console.error('Error fetching document: ', error);
        resultDiv.textContent = '獲取卡牌資料時出錯。';
    }
}
