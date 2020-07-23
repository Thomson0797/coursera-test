(function()
{
    'use strict';

    angular.module('LunchCheck', [])
    
    .controller ('LunchCheckcontroller', LunchCheckcontroller);
    LunchCheckcontroller.$inject=['$scope'];
    function LunchCheckcontroller($scope)
    {
        $scope.food=""
        $scope.message=""
        $scope.check=function()
        {
            var msg=checkitems($scope.food);
            $scope.message=msg;
        };

        function checkitems(string)
        {
            var string2=string.split(', ');
            var len=string2.length;
            var n=0;
            for(var i=0;i<len;i++)
            {
                if(!string2[i])
                {
                    n=n+1;
                }
            }
            len=len-n;  //not considering empty strings

            if(len==0)
            {
                return "";
            }
            else if(len<=3)
            {
                return "Enjoy!";
            }
            else
            {
                return "Too much!"
            }
        }
    }
})();