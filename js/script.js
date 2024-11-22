// Worksにアコーディオンをつける****************************************************************************
const menu = document.querySelectorAll('.conpile');
const icon = document.querySelectorAll(".material-icons");
const content = document.querySelectorAll(".work > div");

// すべてのメニュー要素にイベントをつける
menu.forEach( ( item, index ) => {

  // 各メニューのクリックイベント
  item.addEventListener( 'click', () => {

    // クリックした要素の処理
    // アイコンのclass属性にopenを追加する
    icon[ index ].classList.toggle( 'open' );
    // コンテンツのclass属性にactiveを追加する
    content[ index ].classList.toggle( 'active' );
  });

});
// ****************************************************************************************
// スクロールで表示されるTOPボタン
// スクロール量の計測用；初期値0
let scrollCount = 0;
// topボタン表示基準
const topBp = 1000;

// スクロールイベント
window.addEventListener('scroll', () => {
  // 現在のY軸方向スクロール量を再代入する
  scrollCount = window.scrollY;

  const btn = document.querySelector( '[ href*="#top"]' );
  // スクロール量が1000px以上の時、リンクを表示する
  if ( scrollCount >= topBp ) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
});