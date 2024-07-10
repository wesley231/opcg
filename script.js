function appendToInput(num) {
    document.getElementById('cardId').value+=num;
}

function deleteLast(val) {
    var input =document.getElementById('cardId').value;
    document.getElementById('cardId').value=input.substring(0,input.length-1);
}

function clearall() {
        document.getElementById('cardId').value = ''; // Clear the input field
        }
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
                const idElement = document.createElement('div'); // 創建顯示 ID 的元素
                const effectElement = document.createElement('div'); // 創建顯示效果的元素

                idElement.textContent = `ID: ${card.id}`;
                effectElement.innerHTML = `<strong>Effect: ${card.effect}</strong>`; // 使用 strong 標籤來加粗效果

                cardElement.appendChild(idElement);
                cardElement.appendChild(effectElement);
                cardElement.classList.add('card-info'); // 添加樣式類

                resultDiv.appendChild(cardElement);
            });
        }
    } catch (error) {
        console.error('Error fetching document: ', error);
        resultDiv.textContent = '獲取卡牌資料時出錯。';
    }
}
