'use strict';

FindALens.filter('yesNo', function() {
  return function(value) {
    switch(value) {
      case true:
        return '\u2705';
      case false:
        return '\u2718';
    }
  }
});
