(function()
{
    'use strict';

    angular.module('ShoppingListCheckOff', [])

    .controller("ToBuyShoppingController", ToBuyShoppingController)
	
	.controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
	
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);
	
	function ToBuyShoppingController($scope, ShoppingListCheckOffService) 
	{
		var list1=this;
     
		var spservice = ShoppingListCheckOffService;
		
		list1.items = spservice.togetbuy();
		
		list1.itemremove =function(itemindex){
			spservice.toremove(itemindex);
		};
	}


    

    function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService)
    {
        var list2 = this;
		
		var spservice2 = ShoppingListCheckOffService;
		
		list2.items = spservice2.togetbought();
       
    }
	
	

    function ShoppingListCheckOffService()
    {
        var service = this;
        service.tobuy = [
			{
				"item_name" : "Cookies",
				"quantity" : "10"
			},
			{
				"item_name" : "Chips",
				"quantity" : "100g"
			},
			{
				"item_name" : "Shirts",
				"quantity" : "5"
			},
			{
				"item_name" : "Pants",
				"quantity" : "4"
			},
			{
				"item_name" : "Shoes",
				"quantity" : "3"
			}
		];


        service.bought = [];
		
		service.togetbuy = function(){
			return service.tobuy;
        
		}
		
		service.togetbought = function(){
			return service.bought;
        
		}
		
		service.toremove = function(itemindex){
			
			
			
			var temp = service.tobuy.splice(itemindex,1);
			
			service.bought.push(temp[0]);
		}
	}

})();