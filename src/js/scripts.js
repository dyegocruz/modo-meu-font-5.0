$( document ).ready(function() {
	$('.post-content').find('iframe').each(function(i, elm) {
		var domElem = $(elm);
		if (domElem.attr('src').indexOf('youtube') >= 0) {
			domElem.parent().addClass('video-container');
		}
	});

  $('.menu-category li').hover(
    function() {

      var newOffSet = ($('.menu-category').offset().left - $(this).find('a').first().offset().left);
      if (newOffSet < 0) {
          $(this).find('.submenu-container').css('left',newOffSet);
      }

      $(this).find('.submenu-container').css('width',$('.menu-category').width());
      $(this).find('.submenu-container').fadeIn();
      $(this).find('.submenu-container').find('.child-row:eq(0)').show();
  }, function() {
      $(this).find('.submenu-container').fadeOut();
  });

  $('.submenu li').hover(function() {
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');

    var subMenuCatIndex = $(this).index();

    var thisCategoryChildren = $(this).parent().parent().find('.category-children');
    $(thisCategoryChildren).find('.child-row').hide();
    $(thisCategoryChildren).find('.child-row:eq(' + subMenuCatIndex + ')').show();
  });

  $('.button-back-to-top').click( function(e) {
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
  });

  var token = 'your token here', // learn how to obtain it below
      userid = 'User ID', // User ID - Modo Meu - get it in source HTML of your Instagram profile or look at the next example :)
      num_photos = 7; // how much photos do you want to get*/
  $.ajax({
      url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos},
      success: function(data) {
          for( x in data.data ) {
						var string = '<li><a href="'+data.data[x].link+'"><img class="photo-instagram" src="'+data.data[x].images.thumbnail.url+'"></a></li>';
						$('.feed-instagram ul').append(string);
						//$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
						// data.data[x].images.thumbnail.url - URL of image 150х150
						// data.data[x].images.standard_resolution.url - URL of image 612х612
						// data.data[x].link - Instagram post URL
          }
			},
      error: function(data){
          console.log(data); // send the error notifications to console
			}
  });

});

$(window).scroll(function(){

    scroll_page = $(document).scrollTop();
    window_height = $(window).height();

    if (scroll_page >= 300){
        $('.menu-floating').fadeIn();
    }else {
        $('.menu-floating').fadeOut();
    }

    if(scroll_page > $('.menu-category').offset().top){
        $('.button-back-to-top').fadeIn();
    }else{
        $('.button-back-to-top').fadeOut();
    }

    if (scroll_page + window_height > $('.main-footer-container').offset().top) {
         $('.button-back-to-top').css('position','absolute').css('bottom','99%');
    } else {
         $('.button-back-to-top').css('position','fixed').css('bottom','5%');
    }
});
