(function($){
$(function(){
  //---------------------------------------------------------------------------------------------- load(function()
      $(window).load(function(){

          //---------------------------------------------------------------------------------------------- mCustomScrollbar
          $(".pane").mCustomScrollbar({
              theme: "dark",
              scrollButtons: {enable:false}
          });
          //---------------------------------------------------------------------------------------------- JumpToAnchor
          $('a[href*="#"]').not($('.mCSB_1_scrollbar_vertical a,.menubtn,.mm-panel a')).click(function() {
                if( $(this).attr("href").match(/^#/) ){
                    var offset=$($(this).attr("href")).offset().top;
                    $('html,body').delay(100).animate({ scrollTop: offset }, 1200, 'easeInOutQuart');
                     return false;
                }
            });

        });

  //---------------------------------------------------------------------------------------------- Stay page navigation add Class "stay"

   var loc = location.href;
      $('a[href$="'+loc+'"]').addClass('stay');


  //---------------------------------------------------------------------------------------------- アコーディオン
      $('.faq_list dd').hide();
      $(".faq_list dt").click(function () {
          $(this).next("dd").slideToggle(600);
          $(this).toggleClass("open");
      });


  //---------------------------------------------------------------------------------------------- fadeButton

   var topBtn = $('#page_top');
      topBtn.hide();
      $(window).scroll(function () {
          if ($(this).scrollTop() > 200) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
      });

  //---------------------------------------------------------------------------------------------- *nav ul li auto ID

  $('nav ul li').each(function(i){
          id = ($(this).closest("nav").attr("id"));
          $(this).attr('id',id + (i+1));
      });
      $('#subnav ul li').each(function(i){
          id = ($(this).closest("div").attr("id"));
          $(this).attr('id',id + (i+1) );
      });

  //---------------------------------------------------------------------------------------------- slick.js http://kenwheeler.github.io/slick/
      /*$('#slider_main').slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 5000,
          centerMode: true,
          centerPadding: '0',
          responsive: [
              {
                  breakpoint: 980,
                  settings: {
                      variableWidth: false
                  }
              }
          ]
      });*/

  //---------------------------------------------------------------------------------------------- フォームの途中のエンターを無効

      $('form').keypress(function(event) {
          if (event.keyCode == 13) {
              target = event.target || event.srcElement;
              if (target.type != 'submit' && target.type != 'textarea') {
                  return false;
              }
          }
      });

  //---------------------------------------------------------------------------------------------- #postcodeから住所自動入力

      $('#postcode').each(function(){
          $('#postcode').on('blur change keyup', function(){
              AjaxZip3.zip2addr(this,'','address','address');
          });

  //---------------------------------------------------------------------------------------------- #数字を半角に変換

          $('#postcode, .wpcf7-tel, #zip, .only_num').on('keyup blur change', function(){
              var data = $(this).val();
              var hankaku = data.replace(/[０-９]|\－/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});

              // 半角数字と+-のみ残す
              var zenkakuDel = new String( hankaku ).match(/\d|\-/g);
              if(zenkakuDel){
              zenkakuDel = zenkakuDel.join("");
              }
              $(this).val(zenkakuDel);
          });
      });

  });

  //---------------------------------------------------------------------------------------------- #特定deviceのみtelリンク追加
      $(function(){
      var device = navigator.userAgent;
      if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0){
      $(".tel").wrap('<a href="tel:0120111111"></a>');
      }
    });

  })(jQuery);

  //---------------------------------------------------------------------------------------------- CDN URL http://cdnjs.com/
