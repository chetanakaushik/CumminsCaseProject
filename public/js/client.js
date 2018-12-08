var clientApp = new Vue({

el: '#clientApp',
data: {
  client : [

  ]
},

created : function() {

  // Do data fetch
   const url = new URL(window.location.href);
   const productId = url.searchParams.get('productId');
   console.log('Product: '+ productId);
   this.productId = productId;

   if (!productId) {
     //TODO: Error? 404?
     //e.g., window.location = '404.html';
   }

   // TODO: Fetch task-specific data
   // fetch('api/task?id=4')
   fetch('api/client.php?productId='+productId)
   .then( response => response.json() )
   .then( json => {clientApp.client = json} )
   .catch( err => {
     console.log('CLIENT FETCH ERROR:');
     console.log(err);
   });

}

});
