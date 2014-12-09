FindALens.directive('imgPop', function() {
     return {
          restrict: 'A',
          link: function(scope, element) {
               element.magnificPopup({
                    type:'image',
                    zoom: {
                        enabled: true, // By default it's false

                        duration: 300, // duration of the effect
                        easing: 'ease-in-out',
                        opener: function(openerElement) {
                          // openerElement is the element on which popup was initialized, in this case its <a> 
                          return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                      }
               });
          }
     }
});
