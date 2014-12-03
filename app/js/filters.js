'use strict';

FindALens.filter('uses', function() {
  return function(uses) {
    switch(uses) {
      case 1:
        return "Landscape";
      case 2:
        return "Portrait";
      case 3:
        return "Wildlife";
      case 4:
        return "Sports";
      case 5:
        return "Travel";
      case 6:
        return "Macro";
      case 7:
        return "Wedding";
    }
  }
});
