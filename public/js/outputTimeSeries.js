var timeSeriesApp = new Vue({

el: '#timeSeriesApp',
data: {
  timeSeries : [

  ]
},

 methods: {
   fetchTimeSeries : function(taskId){
     fetch('api/timeSeries.php?sensorDeployedId='+taskId)
     .then( response => response.json() )
     .then( json => {timeSeriesApp.timeSeries = json;
       this.buildOutPutChart();
     this.buildHeatRateChart();
   this.buildCompEffChart();
 this.buildAvailibiltyChart();
this.buildReliability();
this.buildfiredHours();
this.buildTrips();
this.buildStarts();
} )
     .catch( err => {
       console.log('SENSOR DEPLOYED FETCH ERROR:');
       console.log(err);

     }

 );

},

      buildCompEffChart : function() {
         // Highcharts.chart('compEffChart', {
         //       chart: {
         //           zoomType: 'x'
         //       },
         //       title: {
         //           text: 'Output KPI'
         //       },
         //       xAxis: {
         //           type: 'datetime'
         //       },
         //       yAxis: {
         //           title: {
         //               text: 'Output'
         //           }
         //       },
         //       legend: {
         //           enabled: false
         //       },
         //       plotOptions: {
         //           area: {
         //               fillColor: {
         //                   linearGradient: {
         //                       x1: 0,
         //                       y1: 0,
         //                       x2: 0,
         //                       y2: 1
         //                   },
         //                   stops: [
         //                       [0, Highcharts.getOptions().colors[0]],
         //                       [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
         //                   ]
         //               },
         //               marker: {
         //                   radius: 2
         //               },
         //               lineWidth: 1,
         //               states: {
         //                   hover: {
         //                       lineWidth: 1
         //                   }
         //               },
         //               threshold: null
         //           }
         //       },
         //       series: [{
         //           type: 'area',
         //           name: 'Output (hrs)',
         //           data:  timeSeriesApp.timeSeries.map( entry =>
         //             [Date.parse(entry.dataCollectedDate), Number(entry.compressorEfficiency)]
         //           ) //Expects [ [date1, val1], [date2, val2], [] ]
         //       }]
         //   });

Highcharts.chart('compEffChart', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Compressor Efficiency'
    },

       xAxis: {
               type: 'datetime'
           },
           yAxis: {
               title: {
                   text: 'Compressor Efficiency'
               }
           },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        }
    },
    series: [{
      name: 'Compressor Efficiency',
       color: 'rgba(223, 83, 83, .5)',
      data:  timeSeriesApp.timeSeries.map( entry =>
      [Date.parse(entry.dataCollectedDate), Number(entry.compressorEfficiency)]
      )
    }]
});


         },

         buildOutPutChart : function() {
            Highcharts.chart('outputChart', {
                  chart: {
                      zoomType: 'x'
                  },
                  title: {
                      text: 'Output KPI'
                  },
                  xAxis: {
                      type: 'datetime'
                  },
                  yAxis: {
                      title: {
                          text: 'Output'
                      }
                  },
                  legend: {
                      enabled: false
                  },
                  plotOptions: {
                      area: {
                          fillColor: {
                              linearGradient: {
                                  x1: 0,
                                  y1: 0,
                                  x2: 0,
                                  y2: 1
                              },
                              stops: [
                                  [0, Highcharts.getOptions().colors[0]],
                                  [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                              ]
                          },
                          marker: {
                              radius: 2
                          },
                          lineWidth: 1,
                          states: {
                              hover: {
                                  lineWidth: 1
                              }
                          },
                          threshold: null
                      }
                  },
                  series: [{
                      type: 'area',
                      name: 'Output (hrs)',
                      data:  timeSeriesApp.timeSeries.map( entry =>
                        [Date.parse(entry.dataCollectedDate), Number(entry.output)]
                      ) //Expects [ [date1, val1], [date2, val2], [] ]
                  }]
              });
            },

            buildHeatRateChart : function(){
              Highcharts.chart('heatRateChart', {

          title: {
              text: 'Heat Rate KPI'
          },

          xAxis: {
              type: 'datetime'
          },

          yAxis: {
              title: {
                  text: 'Heat Rate'
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },

          plotOptions: {
              series: {
                  label: {
                      connectorAllowed: false
                  },
                  pointStart: 2010
              }
          },

          series: [{
            name: 'Heat Rate (hrs)',
            data:  timeSeriesApp.timeSeries.map( entry =>
              [Date.parse(entry.dataCollectedDate), Number(entry.heatRate)]
            ) //Expects [ [date1, val1], [date2, val2], [] ]
          }],

          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      legend: {
                          layout: 'horizontal',
                          align: 'center',
                          verticalAlign: 'bottom'
                      }
                  }
              }]
          }

      });

    },

    buildAvailibiltyChart : function(){
      Highcharts.chart('availabilityChart', {
    title: {
        text: 'Availability Histogram'
    },
    xAxis: {
        type: 'datetime'
    },

    yAxis: {
        title: {
            text: 'Availability'
        }
    },

    series: [{
      name: 'Availability',
      data:  timeSeriesApp.timeSeries.map( entry =>
        [Date.parse(entry.dataCollectedDate), Number(entry.availability)]
      )
    }]
});
    },

    buildReliability : function(){
      Highcharts.chart('reliabilityChart', {
    title: {
        text: 'Reliability Chart'
    },
    xAxis: {
        type: 'datetime'
    },

    yAxis: {
        title: {
            text: 'Reliability'
        }
    },

    series: [{
      name: 'Reliability',
      data:  timeSeriesApp.timeSeries.map( entry =>
        [Date.parse(entry.dataCollectedDate), Number(entry.reliability)]
      )
    }]
});
    },

    buildfiredHours : function(){
      Highcharts.chart('firedHoursChart', {
    title: {
        text: 'Fired Hours Chart'
    },
    xAxis: {
        type: 'datetime'
    },

    yAxis: {
        title: {
            text: 'Fired Hours'
        }
    },

    series: [{
      name: 'Fired Hours',
      data:  timeSeriesApp.timeSeries.map( entry =>
        [Date.parse(entry.dataCollectedDate), Number(entry.firedHours)]
      )
    }]
});
    },
    buildTrips : function(){
      Highcharts.chart('tripsChart', {
    title: {
        text: 'Trips Chart'
    },
    xAxis: {
        type: 'datetime'
    },

    yAxis: {
        title: {
            text: 'Trips'
        }
    },

    series: [{
      name: 'Trips',
      data:  timeSeriesApp.timeSeries.map( entry =>
        [Date.parse(entry.dataCollectedDate), Number(entry.trips)]
      )
    }]
});
    },
    buildStarts : function(){
      Highcharts.chart('startsChart', {
    title: {
        text: 'Starts Chart'
    },
    xAxis: {
        type: 'datetime'
    },

    yAxis: {
        title: {
            text: 'Starts'
        }
    },

    series: [{
      name: 'Starts',
      data:  timeSeriesApp.timeSeries.map( entry =>
        [Date.parse(entry.dataCollectedDate), Number(entry.starts)]
      )
    }]
});
    },

 },


created : function() {

  // Do data fetch
   const url = new URL(window.location.href);
   const taskId = url.searchParams.get('sensorDeployedId');
   console.log('SensorDeployed: '+ taskId);
   this.taskId = taskId;

   if (!taskId) {
     //TODO: Error? 404?
     //e.g., window.location = '404.html';
   }

   this.fetchTimeSeries(taskId);

}

});
