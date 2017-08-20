(function(){
  var app = angular.module('store',[]);

  app.controller('StoreController',function(){
    this.products = gems;
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  var gems = [{
    name: 'Dodecahedron',
    price: 2,
    discription: 'Hello Dodecahedron',
    canPurchase: true,
    images: [{
      full: 'img1.jpeg',
      thumb: 'img1.jpeg'
    },{

    }]
  },{
    name: 'Pentaginal Gem',
    price: 5.95,
    discription: 'Hello Pentaginal Gem',
    canPurchase: false,
    images: [{
      full: 'img2.jpg'
    },{

    }]
  }]
})();
