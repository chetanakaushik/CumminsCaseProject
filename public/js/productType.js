var productTypeApp = new Vue({
el: '#productTypeApp',
  data: {
    productType : [
    ]
  },

  created : function() {
    fetch('api/productType.php')
    .then(function (response) {return response.json();})
    .then(function (json){
      productTypeApp.productType = json;
       console.log(json);})
    .catch( function(err) {
      console.log('PRODUCT TYPE LIST ERROR:');
      console.log(err);
    });
  }

});
