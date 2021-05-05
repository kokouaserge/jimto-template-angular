import { Injectable } from '@angular/core';
declare var $;

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable()
export class StyleManagerService {


    /*----------------------------------------------------*/
    /*  Star Plugin
    /*----------------------------------------------------*/

  startvalue(nbreData:number){
    
    var fiveStars = starsOutput('star','star','star','star','star');
    var fourHalfStars = starsOutput('star','star','star','star','star half');
    var fourStars = starsOutput('star','star','star','star','star empty');
    var threeHalfStars = starsOutput('star','star','star','star half','star empty');
    var threeStars = starsOutput('star','star','star','star empty','star empty');
    var twoHalfStars = starsOutput('star','star','star half','star empty','star empty');
    var twoStars = starsOutput('star','star','star empty','star empty','star empty');
    var oneHalfStar = starsOutput('star','star half','star empty','star empty','star empty');
    var oneStar = starsOutput('star','star empty','star empty','star empty','star empty');


          // Rules
          if (nbreData >= 4.75) {
            return fiveStars;

        } else if (nbreData >= 4.25) {
          return fourHalfStars;
        } else if (nbreData >= 3.75) {
          return fourStars;
        } else if (nbreData >= 3.25) {
          return threeHalfStars;
        } else if (nbreData >= 2.75) {
          return threeStars;
        } else if (nbreData >= 2.25) {
          return twoHalfStars;
        } else if (nbreData >= 1.75) {
          return twoStars;
        } else if (nbreData >= 1.25) {
          return oneHalfStar;
        } else if (nbreData < 1.25) {
          return oneStar;
        }
  }
  
    /*----------------------------------------------------*/
    /*  Chosen Plugin
    /*----------------------------------------------------*/
  loadSelectPlugin(){
    
    var config = {
       '.chosen-select'           : {disable_search_threshold: 10, width:"100%"},
       '.chosen-select-deselect'  : {allow_single_deselect:true, width:"100%"},
       '.chosen-select-no-single' : {disable_search_threshold:100, width:"100%"},
       '.chosen-select-no-single.no-search' : {disable_search_threshold:10, width:"100%"},
       '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
       '.chosen-select-width'     : {width:"95%"}
     };
 
     for (var selector in config) {
        if (config.hasOwnProperty(selector)) {
         $(selector).chosen(config[selector]);
       }
     }

  }

      /*----------------------------------------------------*/
    /*  RangeSlide Plugin
    /*----------------------------------------------------*/
    loadRangerPlugin(){
    
      $('input[type="range"].distance-radius').rangeslider({
        polyfill : false,
        onInit : function() {
            this.output = $( '<div class="range-output" />' ).insertBefore( this.$range ).html( this.$element.val() );

          var radiustext = $('.distance-radius').attr('data-title');
          $('.range-output').after('<i class="data-radius-title">'+ radiustext + '</i>');

        },
        onSlide : function( position, value ) {
            this.output.html( value );
        }
    });
  
    }


  	/*----------------------------------------------------*/
    /*  Magnific Popup
    /*----------------------------------------------------*/
    loadMagnicPlugin(){
    
      // the containers for all your galleries

        $('.mfp-gallery-container').magnificPopup({
           type: 'image',
           delegate: 'a.mfp-gallery',
    
           fixedContentPos: true,
           fixedBgPos: true,
    
           overflowY: 'auto',
    
           closeBtnInside: false,
           preloader: true,
    
           removalDelay: 0,
           mainClass: 'mfp-fade',
    
           gallery:{enabled:true, tCounter: ''}
        });


        $('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',
     
          fixedContentPos: false,
          fixedBgPos: true,
     
          overflowY: 'auto',
     
          closeBtnInside: true,
          preloader: false,
     
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
       });
     
       $('.mfp-image').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-fade',
          image: {
             verticalFit: true
          }
       });
     
       $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
     
          fixedContentPos: false
       });
    
  
    }


    /*----------------------------------------------------*/
    /*   Sticky
    /*----------------------------------------------------*/
    loadStickyPlugin(){

                /*----------------------------------------------------*/
                /* Listing Page Nav
                /*----------------------------------------------------*/

                  $(window).on('load resize scroll', function() {
                    var containerWidth = $(".container").width();
                    $('.listing-nav-container.cloned .listing-nav').css('width', containerWidth);
                  });

                if(document.getElementById("listing-nav") !== null) {
                  $(window).scroll(function(){
                    var window_top = $(window).scrollTop();
                    var div_top = $('.listing-nav').not('.listing-nav-container.cloned .listing-nav').offset().top + 90;
                      if (window_top > div_top) {
                          $('.listing-nav-container.cloned').addClass('stick');
                      } else {
                          $('.listing-nav-container.cloned').removeClass('stick');
                      }
                  });
                }

                $( ".listing-nav-container" ).clone(true).addClass('cloned').prependTo("body");


                  // Smooth scrolling using scrollto.js
                $('.listing-nav a, a.listing-address, .star-rating a').on('click', function(e) {
                      e.preventDefault();
                      $('html,body').scrollTo(this.hash, this.hash, { gap: {y: -20} });
                  });

                $(".listing-nav li:first-child a, a.add-review-btn, a[href='#add-review']").on('click', function(e) {
                      e.preventDefault();
                      $('html,body').scrollTo(this.hash, this.hash, { gap: {y: -100} });
                  });


                  // Highlighting functionality.
                $(window).on('load resize', function() {
                  var aChildren = $(".listing-nav li").children();
                  var aArray = [];
                  for (var i=0; i < aChildren.length; i++) {
                      var aChild = aChildren[i];
                      var ahref = $(aChild).attr('href');
                      aArray.push(ahref);
                  }

                  $(window).scroll(function(){
                      var windowPos = $(window).scrollTop();
                      for (var i=0; i < aArray.length; i++) {
                          var theID = aArray[i];
                          var divPos = $(theID).offset().top - 150;
                          var divHeight = $(theID).height();
                          if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                              $("a[href='" + theID + "']").addClass("active");
                          } else {
                              $("a[href='" + theID + "']").removeClass("active");
                          }
                      }
                  });
                });


    
  
    }


  /*--------------------------------------------------*/
	/*  Mobile Menu - mmenu.js
	/*--------------------------------------------------*/
    loadMenuMobilePlugin(){

          $(function() {
            function mmenuInit() {
              var wi = $(window).width();
              if(wi <= '1024') {
        
                $(".mmenu-init" ).remove();
                $("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2')
                        .find('ul, div').removeClass('style-1 style-2 mega-menu mega-menu-content mega-menu-section').removeAttr('id');
                $(".mmenu-init").find("ul").addClass("mm-listview");
                $(".mmenu-init").find(".mobile-styles .mm-listview").unwrap();
        
        
                $(".mmenu-init").mmenu({
                  "counters": true
                }, {
                // configuration
                offCanvas: {
                    pageNodetype: "#wrapper"
                }
                });
        
                var mmenuAPI = $(".mmenu-init").data( "mmenu" );
                var $icon = $(".hamburger");
        
                $(".mmenu-trigger").click(function() {
                  mmenuAPI.open();
                });
        
                mmenuAPI.bind( "open:finish", function() {
                  setTimeout(function() {
                      $icon.addClass( "is-active" );
                  });
                });
                mmenuAPI.bind( "close:finish", function() {
                  setTimeout(function() {
                      $icon.removeClass( "is-active" );
                  });
                });
        
        
              }
              $(".mm-next").addClass("mm-fullsubopen");
            }
            mmenuInit();
            $(window).resize(function() { mmenuInit(); });
          });
        
            /*  User Menu */
            $('.user-menu').on('click', function(){
            $(this).toggleClass('active');
          });


}






  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string) {
    getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}

  // Rating Stars Output
 function starsOutput(firstStar:string, secondStar:string, thirdStar:string, fourthStar:string, fifthStar:string) {

    let valueData =  ''+
    '<span class="'+firstStar+'"></span>'+
    '<span class="'+secondStar+'"></span>'+
    '<span class="'+thirdStar+'"></span>'+
    '<span class="'+fourthStar+'"></span>'+
    '<span class="'+fifthStar+'"></span>';
  
  return valueData;
  }




