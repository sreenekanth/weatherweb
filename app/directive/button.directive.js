(function(){
  'use strict';

	angular.module("weather",[])
	  .directive('wt-button', function() {
	  return {
		restrict: 'E',
		transclude:true;
		template:<button type="submit"> </button>
		link:function(scope,element,attrs)
		{
			element.bind("onclick",function(col){
				id.style.backgroundColor:red;
				
			});
		}
	  };
	});

})();