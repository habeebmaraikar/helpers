/*
	CUSTOM JS page
*/
var assets;
assets = '/assets';

(function($) {
	$("#header").load("/assets/includes/header.html");
	$("#footer").load("/assets/includes/footer.html");
})(jQuery);


//global variable using namespace
var NavyData = {};
NavyData.posterImgHeight = $(".youtube-video-img img").height();


		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
		    BlackBerry: function() {
		        return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		    any: function() {
		        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};

		if(isMobile.Android()){
			$("body").addClass("android");
		}

		if(isMobile.iOS()){
			$("body").addClass("ios");
		}


/*====================================
	JQUERY STARTS HERE 	
======================================*/
(function($) {
	//"use strict";

		/*====================================
		 Add class to body from url
		======================================*/

		//var request_uri = location.pathname + location.search;
		var request_uri = window.location.pathname.substr(1);
		var res_uri = request_uri.split("/").join("-");

		$("body").addClass(res_uri);


		/*====================================
		 Bootstrap Fix For WinPhone 8 And IE10
		======================================*/
		
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement("style");
			msViewportStyle.appendChild(
				document.createTextNode(
					"@-ms-viewport{width:auto!important}"
				)
			);
			document.getElementsByTagName("head")[0].
				appendChild(msViewportStyle);
		}	
		
		
		/*====================================
					Android stock browser
		======================================*/
		
		$(function () {
		  var nua = navigator.userAgent
		  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
		  if (isAndroid) {
			$('select.form-control').removeClass('form-control').css('width', '100%')
		  }
		});	


		
		/*====================================
					Preloader
		======================================*/

		$(window).load(function() {
		
			var preloaderDelay = 350,
				preloaderFadeOutTime = 800;
	
			function hidePreloader() {
				var loadingAnimation = $('#loading-animation'),
					preloader = $('#preloader');
	
				loadingAnimation.fadeOut();
				preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
			}
	
			hidePreloader();
	
		});


        /*====================================
					Backtotop button 
		======================================*/
		
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('html, body').animate({
                scrollTop: 0
            }, 1250);
            return false;
        });
        
        $('#back-to-top').tooltip('show');


        /*====================================
		    check empty element
		======================================*/
        function isEmpty(el){
		    return !$.trim(el.html());
		}

		function escapeHtml(text) {
		    'use strict';
		    return text.replace(/[\"&'\/<>]/g, function (a) {
		        return {
		            '"': '&quot;', '&': '&amp;', "'": '&#39;',
		            '/': '&#47;',  '<': '&lt;',  '>': '&gt;'
		        }[a];
		    });
		}

		function getPathFromUrl(url) {
			if(url!==undefined){
		  		return url.split('?')[0];
			}
		}

		if (isEmpty($('span.episode-text'))) {
		   $("span.episode-text").remove();
		}

        /*====================================
		checkNum even/odd and prime number
		======================================*/
		function checkNum(num){ 
			return num % 2;  //1 represents an odd number, while 0 represents an even number.
		}

		function isPrime(value) {
		    for(var i = 2; i < value; i++) {
				if(value % i === 0) {
				    return false;
				}
			}
			return value > 1;
		}


		
    /*====================================
		Some Workarounds
	======================================*/
	 

})(jQuery); // jquery ends here