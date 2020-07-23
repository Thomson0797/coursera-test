(function()
{
    'use strict';


    angular.module('myfirstapp', [])

    .controller('myfirstcontroller', function($scope)
    {
        $scope.name="";
        $scope.name2="";
        $scope.totalvalue="";

        $scope.displaynumeric=function(){
            var totalnvalue=calculateoutput($scope.name,$scope.name2);
            $scope.totalvalue=totalnvalue;
        };
    
        function calculateoutput(inputOne,inputTwo)
        {
            var flames = ['Friends','Love','Affair','Marriage','Enemy','Sister'];
            if(inputOne!="" && inputTwo!="")
            {
       
                var lengthInput = inputOne.length+inputTwo.length; 
                //alert(lengthInput);
                while(flames.length != 1)
                {
                    flames = flames.splice(lengthInput%6,1);
                }
            }
            else
            {
                return "";
            }
            return "Your relationship status is "+flames;
        }
    });

})();