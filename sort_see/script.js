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

    if (selectedSort === "Insert_sort") {
        await insertionSort(inputs);
    } else if (selectedSort === "Selection_sort") {
        await selectionSort(inputs); // async なので await をつける
    } else if (selectedSort === "Bubble_sort") {
        await bubbleSort(inputs);    // async なので await をつける
    }
});

// --- 挿入ソート ---
async function insertionSort(inputs) {
    for (let i = 1; i < inputs.length; i++) {
        let key = Number(inputs[i].value);
        let j = i - 1;

        inputs[i].classList.add("highlight");
        await sleep(500);

        while (j >= 0 && Number(inputs[j].value) > key) {
            inputs[j + 1].value = inputs[j].value;
            j--;
            await sleep(300);
        }

        inputs[j + 1].value = key;
        inputs[i].classList.remove("highlight");
        await sleep(500);
    }
    alert("挿入ソートが完了しました！");
}

// --- 選択ソート ---
async function selectionSort(inputs) {
    for (let i = 0; i < inputs.length - 1; i++) {
        let minIndex = i;

        inputs[minIndex].classList.add("highlight");
        await sleep(500);

        for (let j = i + 1; j < inputs.length; j++) {
            if (Number(inputs[j].value) < Number(inputs[minIndex].value)) {
                inputs[minIndex].classList.remove("highlight");
                minIndex = j;
                inputs[minIndex].classList.add("highlight");
                await sleep(500); // sleep の前に await を追加
            }
        }

        if (minIndex !== i) {
            let temp = inputs[i].value;
            inputs[i].value = inputs[minIndex].value;
            inputs[minIndex].value = temp;
            await sleep(400); // sleep の前に await を追加
        }

        inputs[minIndex].classList.remove("highlight");
        inputs[i].classList.remove("highlight");
    }
    alert("選択ソートが完了しました！");
}

// --- バブルソート ---
async function bubbleSort(inputs) {
    for (let i = 0; i < inputs.length - 1; i++) {
        for (let j = 0; j < inputs.length - i - 1; j++) {
            inputs[j].classList.add("highlight");
            inputs[j + 1].classList.add("highlight");
            await sleep(300);

            if (Number(inputs[j].value) > Number(inputs[j + 1].value)) {
                let temp = inputs[j].value;
                inputs[j].value = inputs[j + 1].value;
                inputs[j + 1].value = temp;
                await sleep(500);
            }

            inputs[j].classList.remove("highlight");
            inputs[j + 1].classList.remove("highlight");
        }
    }
    alert("バブルソートが完了しました！");
}