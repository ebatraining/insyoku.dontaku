// JavaScript Document
jQuery(document).ready(function($){
  // 地図表示用メソッド
  function map_initialize() {
    // 地図の座標を設定
    var latlng = new google.maps.LatLng(33.5915266,130.3916885);
    // 地図の設定
    var map = new google.maps.Map(
      document.getElementById("g_map"),
      {
        zoom: 16,  // 地図の拡大率
        center: latlng, // 地図の中心座標
        scrollwheel: false  // マウスホイールでの拡縮を禁止
      }
    );
   // マーカー画像の設定
   var markerImg = {
      url: './images/originallogos.png'// 画像のパスは絶対パスかhtmlから見た相対パスとする
    };
   // マーカーの設定
   var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: markerImg,
   });
	   google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
  }

  // 地図表示用メソッドの呼び出し
  map_initialize();
 });