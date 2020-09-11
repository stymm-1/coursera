(function (){
	'use strict';
	angular.module('coassign',[])
	.controller('myController',myController);
	myController.$inject=['$scope'];
	function myController($scope){

	    $scope.items="";
	    $scope.message="";
	    $scope.check=function (){
	    	var lunchItems=$scope.items;
	    	var count=0;;
	    	var lunchI=lunchItems.split(",");
	    	for (var i = lunchI.length - 1; i >= 0; i--) {
	    		if(lunchI[i].trim().length>0){
	    			count++;
	    		}
	    	}
	    	function style(color){
				$scope.inputStyle={
					'border-color':color
				};
				$scope.messageStyle={
					'color':color
				};
			}
	    	console.log(count);
		    if(count<=3&&count>=1){
		    	style('rgb(9,255,9)');
			    $scope.message='Enjoy!';
		    }
		    else if(count==0){
			    $scope.message='Please enter data first';
			    style('rgb(255,11,11)');
		    }
		    else{
			    $scope.message='Too Much';
			     style('rgba(9,255,9)');
			}
			
		}
	}

})();