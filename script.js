/* ========================================
   共創工学部 Webサイト - JavaScriptコード
   ページの動的な機能を提供
   ======================================== */

/**
 * ページ読み込み時の初期化処理
 * ページが完全に読み込まれたら実行される
 */
document.addEventListener('DOMContentLoaded', function() {
    // コンソールにメッセージを出力（デバッグ用）
    console.log('共創工学部サイト - ページが読み込まれました');
    
    // 初期化関数を実行
    initializeCards();
});

/**
 * カードの初期化と動的な効果
 */
function initializeCards() {
    // すべてのカード要素を取得
    const cards = document.querySelectorAll('.card');
    
    // 各カードに対して処理を実行
    cards.forEach((card, index) => {
        // アニメーション効果：各カードを少しずつ遅延させて表示
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // setTimeout：指定ミリ秒後に処理を実行
        setTimeout(() => {
            // フェードイン + スライドアップのアニメーション
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // 各カードを100msずつ遅延させる
    });
    
    // 特徴アイテムにも同じ効果を適用
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/**
 * ページのトップにスムーズにスクロールする関数
 * （HTMLの scroll-behavior: smooth により効果を実現）
 */
function scrollToTop() {
    // window.scrollTo：ページを指定位置にスクロール
    // {top: 0} で最上部（Y座標0）に移動
    // behavior: 'smooth' でスムーズなスクロール
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * 「詳しく知る」ボタンをクリックしたときの処理
 * （実際のリンク先を設定する場合は、ここを編集してください）
 */
function openInfo() {
    // ユーザーに通知（alert）
    alert('ご興味をいただきありがとうございます！\n詳しい情報は大学の公式サイトをご覧ください。');
    
    // 実際の運用では、以下のような処理に変更できます：
    // window.location.href = 'https://example.com/kyoso-gakubu';
    // または window.open('https://example.com/kyoso-gakubu', '_blank');
}

/**
 * スクロール位置に応じた動的な処理
 * ページのスクロール時に実行される
 */
window.addEventListener('scroll', function() {
    // 現在のスクロール位置を取得
    const scrollPosition = window.scrollY;
    
    // ページの上部に戻る「トップに戻るボタン」の表示非表示を制御する場合は
    // ここに処理を追加します
    
    // 例：スクロール位置が200px以上なら「トップに戻る」ボタンを表示
    // const backToTopButton = document.getElementById('back-to-top');
    // if (scrollPosition > 200) {
    //     backToTopButton.style.display = 'block';
    // } else {
    //     backToTopButton.style.display = 'none';
    // }
});

/**
 * マウスホバー効果を動的に追加
 * CSSのホバー効果に加えて、JavaScriptで追加の処理が可能
 */
document.querySelectorAll('.card').forEach(card => {
    // マウスがカード上に乗った時
    card.addEventListener('mouseenter', function() {
        // コンソールにログを出力（デバッグ用）
        console.log('カードにマウスが乗りました');
        // 必要に応じてここに追加の処理を記述
    });
    
    // マウスがカードから外れた時
    card.addEventListener('mouseleave', function() {
        console.log('カードからマウスが外れました');
        // 必要に応じてここに追加の処理を記述
    });
});

/**
 * ウィンドウのリサイズ時の処理
 */
window.addEventListener('resize', function() {
    // ウィンドウのサイズが変わるたびに実行される
    // レスポンシブデザインの調整などをここに記述できます
    console.log('ウィンドウのサイズが変更されました');
});
