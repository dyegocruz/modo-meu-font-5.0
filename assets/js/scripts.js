/*! Modo-Meu-Front-5.0 2018-03-22 */
$(document).ready(function(){$(".item-video .item-text").css("height",$(".item-image img").innerHeight()),$(".menu-category li").hover(function(){var a=$(".menu-category").offset().left-$(this).find("a").first().offset().left;a<0&&$(this).find(".submenu-container").css("left",a),$(this).find(".submenu-container").css("width",$(".menu-category").width()),$(this).find(".submenu-container").fadeIn(),$(this).find(".submenu-container").find(".child-row:eq(0)").show()},function(){$(this).find(".submenu-container").fadeOut()}),$(".submenu li").hover(function(){$(this).parent().find("li").removeClass("active"),$(this).addClass("active");var a=$(this).index(),b=$(this).parent().parent().find(".category-children");$(b).find(".child-row").hide(),$(b).find(".child-row:eq("+a+")").show()}),$(".button-back-to-top").click(function(a){return $("html, body").animate({scrollTop:0},1e3),!1})}),$(window).scroll(function(){scroll_page=$(document).scrollTop(),window_height=$(window).height(),scroll_page>=300?$(".menu-floating").fadeIn():$(".menu-floating").fadeOut(),scroll_page>$(".menu-category").offset().top?$(".button-back-to-top").fadeIn():$(".button-back-to-top").fadeOut(),scroll_page+window_height>$(".main-footer-container").offset().top?$(".button-back-to-top").css("position","absolute").css("bottom","99%"):$(".button-back-to-top").css("position","fixed").css("bottom","5%")});