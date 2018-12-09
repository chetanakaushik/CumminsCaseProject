var pdtPurApp = new Vue({

el: '#pdtPurApp',
data: {
  pdtPur : [

  ]
},

created : function() {

  // Do data fetch
   const url = new URL(window.location.href);
   const clientId = url.searchParams.get('clientId');
   console.log('Client: '+ clientId);
   this.clientId = clientId;

   if (!clientId) {
     //TODO: Error? 404?
     //e.g., window.location = '404.html';
   }

   // TODO: Fetch task-specific data
   // fetch('api/task?id=4')
   fetch('api/productPurchased.php?clientId='+clientId)
   .then( response => response.json() )
   .then( json => {pdtPurApp.pdtPur = json} )
   .catch( err => {
     console.log('PRODUCT PURCHASED FETCH ERROR:');
     console.log(err);
   });

}

});
