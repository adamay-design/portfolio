// hamburger menu　//////////////////////

$(function () {

  $('#hamburger').on('click', function(){
    $('.icon').toggleClass('close');
    $('.hamburger-list').slideToggle();
  });

});

//mouse-stalker
$(function(){
  const mouse = $("#mouse-stalker");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      mouse.css({
          "opacity": "1",
          "transform": "translate(" + x + "px," + y + "px)",
      });
  });
});


//bxSlider
$(function(){
  $('.slider').bxSlider({
     auto:true,
     speed:1500,
     pager:false,
     mode: 'fade',
     controls: false,
     captions: false
     
  });
});

//lightbox オプションの設定※https://lokeshdhakar.com/socialdesign/lightbox2/#options参照
lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
  })



// Slide //////////////////////////////////////////

$(function () {
  
  // 初期設定
  $(".slide-image:first").show();

  // 画像をフェード切り替える関数
  function slideSwitch() {
      var $active = $(".slide-image:visible");

      if ($active.length === 0) $active = $(".slide-image:last");

      var $next = $active.next(".slide-image").length ? $active.next(".slide-image") : $(".slide-image:first");

      $active.fadeOut(function () {
          $next.fadeIn();
      });
  }

  // 3秒ごとに画像を切り替える
  setInterval(slideSwitch, 5000);

});



// lightbox //////////////////////////////////////////

$(function(){

  // lightbox オプションの設定※https://lokeshdhakar.com/socialdesign/lightbox2/#options参照
  lightbox.option({
      'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
      'albumLabel': ' %1 / total %2 ',//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
      'showImageNumberLabel': true,  //false の場合、現在の画像番号とセット内の画像の総数を示すテキスト (例: "image 2 of 4") が非表示にできる
      'alwaysShowNavOnTouchDevices':  true //true時、スマホ閲覧で左右の矢印を常に表示
  });

});


// gallery-btn //////////////////////////////////////////

$(function(){

  // gallery-btn-container ////
  var $btn = $('.gallery-btn-container [data-filter]'),
      $list = $('.gallery [data-category]');
    
  $btn.on('click', function(e) {
    e.preventDefault();
        
    var $btnTxt = $(this).attr('data-filter');
        
    $btn.removeClass('active'); // すべてのボタンから active クラスを削除
    $(this).addClass('active'); // クリックされたボタンに active クラスを追加
        
    if ($btnTxt == 'all'){
      $list.fadeOut().promise().done(function() {
        $list.addClass('animate').fadeIn();
      });
    } else {
      $list.fadeOut().promise().done(function() {
        $list.filter('[data-category = "' + $btnTxt + '"]').addClass('animate').fadeIn();
      });
    }
  });

});