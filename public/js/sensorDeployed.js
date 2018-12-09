var sensorDepApp = new Vue({

el: '#sensorDepApp',
data: {
  sensorsDeployed : [

  ]
},

created : function() {

  // Do data fetch
   const url = new URL(window.location.href);
   const purchaseId = url.searchParams.get('purchaseId');
   console.log('Purchase: '+ purchaseId);
   this.purchaseId = purchaseId;

   if (!purchaseId) {
     //TODO: Error? 404?
     //e.g., window.location = '404.html';
   }

   // TODO: Fetch task-specific data
   // fetch('api/task?id=4')
   fetch('api/sensorDeployed.php?purchaseId='+purchaseId)
   .then( response => response.json() )
   .then( json => {sensorDepApp.sensorsDeployed = json} )
   .catch( err => {
     console.log('SENSOR DEPLOYED FETCH ERROR:');
     console.log(err);
   });

}

});
