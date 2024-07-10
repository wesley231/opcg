async function searchCard() {
    const cardId = document.getElementById('cardId').value.trim();
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
                cardElement.textContent = `ID: ${card.id}, Name: ${card.name}, Effect: ${card.effect}`;
                resultDiv.appendChild(cardElement);
            });
        }
    } catch (error) {
        console.error('Error fetching document: ', error);
        resultDiv.textContent = '獲取卡牌資料時出錯。';
    }
}
