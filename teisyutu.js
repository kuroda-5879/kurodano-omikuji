// おみくじの結果リスト
const results = [
    "最っ高。無敵",
    "大吉",
    "中吉",
    "小吉",
    "末吉",
    "凶",
    "本当にダメ。終わり"
];

// HTML要素を取得
const drawButton = document.getElementById('draw-button');
const resultText = document.getElementById('result-text');

// ボタンがクリックされた時の処理
drawButton.addEventListener('click', () => {
    // 0からresults.length-1までのランダムな整数を生成
    const randomIndex = Math.floor(Math.random() * results.length);
    
    // ランダムに選ばれた結果をテキストに表示
    resultText.textContent = results[randomIndex];
});