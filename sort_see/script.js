const container = document.getElementById("grid-container");
const sortBtn = document.getElementById("sort-btn");
const sortSelect = document.getElementById("sort-select");

// 1. 横に10個の入力欄（箱）を作る
for (let i = 0; i < 10; i++) {
    const inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.classList.add("number-input-box");
    inputBox.value = 10 - i; // テスト用に逆順の数字を入れておく
    container.appendChild(inputBox);
}

// 2. 一定時間停止するための便利関数（アニメーションの速さ調整）
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 3. ソート開始ボタンが押されたときの処理
sortBtn.addEventListener("click", async function() {
    const inputs = document.querySelectorAll(".number-input-box");
    const selectedSort = sortSelect.value;

    if(selectedSort === "Insert_sort") {
    // 挿入ソートのアルゴリズム（アニメーション付き）
    for (let i = 1; i < inputs.length; i++) {
        let key = Number(inputs[i].value);
        let j = i - 1;

        // 【演出】現在注目している arr[i] の箱を黄色にする
        inputs[i].classList.add("highlight");
        await sleep(500); // 0.5秒待つ

        while (j >= 0 && Number(inputs[j].value) > key) {
            // 値を後ろにずらす
            inputs[j + 1].value = inputs[j].value;
            j--;
            await sleep(300);
        }

        // 正しい位置に key を挿入する
        inputs[j + 1].value = key;

        // 【演出】前のハイライト（黄色）を消す
        inputs[i].classList.remove("highlight");
        await sleep(500);
    }
    
    alert("ソートが完了しました！");
}
    else if(selectedSort === "Selection_sort") {
        Selection_sort(inputs);
    }
});

function Selection_sort(inputs) {
    for(let i = 0; i < inputs.length - 1; i++) {
        let minIndex = i;

        inputs[minIndex].classList.add("highlight");
        sleep(500);
        for(let j = i + 1; j < inputs.length; j++) {
            if(Number(inputs[j].value) < Number(inputs[minIndex].value)) {
                inputs[minIndex].classList.remove("highlight");
                inputs[j].classList.add("highlight");
                minIndex = j;

                inputs[minIndex].classList.add("highlight");
                sleep(500);
            }
        }
        if(minIndex !== i) {
            let temp = inputs[i].value;
            inputs[i].value = inputs[minIndex].value;
            inputs[minIndex].value = temp;
            sleep(400);
        }
        inputs[minIndex].classList.remove("highlight");
        inputs[i].classList.remove("highlight");
    }
    alert("選択ソートが完了しました！");
}
