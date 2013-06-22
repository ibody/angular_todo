todo.directive('todoBlur', function() {
  return function( scope, elem, attrs ) {
    elem.bind('blur', function() {
      scope.$apply(attrs.todoBlur);
    });
  };
});

todo.directive('todoFocus', function( $timeout ) {
  return function( scope, elem, attrs ) {
    scope.$watch(attrs.todoFocus, function( newval ) {
      if ( newval ) {
        $timeout(function() {
          elem[0].focus();
        }, 0, false);
      }
    });
  };
});