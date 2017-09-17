var showTitle = false;
var showLegend = false;
var showAxesNames = false;

function generateRandomNumber(min=0, max=1, decimal=2) {
  return ((Math.random() * (max - min) + min).toFixed(decimal));
};

function randSiO2() {
  return generateRandomNumber(1.5, 7.2);
}
function randAl2O3() {
  return generateRandomNumber(0.2, 0.9);
}
function randR2O() {
  return generateRandomNumber(0.1, 0.9);
}

var scatterChartData = {
  datasets: [
    {
      label: "r2o1",
      data: [{
        x: 5,
        y: .5,
      }],
      pointBackgroundColor: ['red'],
      pointStyle: ['triangle']
    }, {
      label: "r2o2",
      data: [{
        x: 6,
        y: .6,
      }]
    }, {
      label: "r2o3",
      data: [{
        x: 6,
        y: .8,
      }]
    }, {
      label: "r2o4",
      data: [{
        x: 5,
        y: .55,
      }]
    }, {
      label: "crazed",
      data: [{
        x: 1.8,
        y: 0.2,
      }, {
        x: 4.2,
        y: 0.6,
      }, {
        x: 6.0,
        y: 0.8,
      }, {
        x: 7.2,
        y: 0.92,
      }],
      borderColor: ['rgba(55,55,55,1)'],
      borderDash: [4, 4],
      borderWidth: 1,
      backgroundColor: ['rgba(255,255,255,0)'],
      pointRadius: 0,
      fill: 'origin'
    }, {
      label: "crazed",
      data: [{
        x: 0.6,
        y: 1,
      }, {
        x: 1.6,
        y: 1,
      }, {
        x: 2.4,
        y: .25,
      }, {
        x: 2.8,
        y: .23,
      }, {
        x: 3.3,
        y: 0.25,
      }, {
        x: 4.19,
        y: 0.3,
      }, {
        x: 4.2,
        y: 0.3,
      }, {
        x: 5.4,
        y: 0.49,
      }, {
        x: 7.2,
        y: 0.62,
      }],
      backgroundColor: ['rgba(155,155,155,.2)'],
      pointRadius: 0,
      borderWidth: 1,
      borderColor: ['rgba(255,255,255,0)'],
      fill: 'origin'
    }, {
      label: "underfired",
      data: [{
        x: 1.6,
        y: 0,
      }, {
        x: 7.2,
        y: .65,
      }],
      backgroundColor: ['rgba(175,175,255,1)'],
      pointRadius: 0,
      lineTension: 0,
      borderWidth: 1,
    }, {
      label: "good",
      data: [{
        x: 0.6,
        y: .09,
      }, {
        x: 5,
        y: 1,
      }, {
        x: 7.2,
        y: 1,
      }],
      backgroundColor: ['white'],
      pointRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: ['rgba(255,255,255,0)'],
    }, {
      label: "semimattes",
      data: [{
        x: 0.6,
        y: .09,
      }, {
        x: 4,
        y: 1,
      }, {
        x: 5,
        y: 1,
      }],
      backgroundColor: ['rgba(175,255,175,1)'],
      pointRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: ['rgba(255,255,255,0)'],
    }, {
      label: "mattes",
      data: [{
        x: .6,
        y: .42,
      }, {
        x: 2.8,
        y: 1,
      }, {
        x: 7.2,
        y: 1,
      }],
      backgroundColor: ['rgba(255,255,175,1)'],
      pointRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: ['rgba(255,255,255,0)'],
    }, {
      label: "unfused",
      data: [{
        x: 0.6,
        y: 1,
      }, {
        x: 6,
        y: 1,
      }],
      backgroundColor: ['rgba(255,175,175,1)'],
      pointRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: ['rgba(255,255,255,0)'],
    }
  ]
};

scatterChartData.datasets[0].backgroundColor = 'rgba(55,55,55, .5)'
scatterChartData.datasets[1].backgroundColor = 'rgba(100,100,100, .5)'
scatterChartData.datasets[2].backgroundColor = 'rgba(150,150,150, .5)'
scatterChartData.datasets[3].backgroundColor = 'rgba(200,200,200, .5)'
scatterChartData.datasets[0].elements = [pointStyle = 'triangle']

window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = Chart.Scatter(ctx, {
    data: scatterChartData,
    options: {
      title: {
        display: showTitle,
        text: 'Stull Si:Al Chart'
      },
      legend: {
        display: showLegend
      },
      elements: {
        point: {
          radius: 4
        },
        line: {
          borderWidth: 0
        },
      },
      scale: {
        height: 10,
        width: 10
      },
      scales: {
        xAxes: [{
          position: 'bottom',
          ticks: {
            min: 0.6,
            max: 7.2,
            stepSize: 1.0,
            fontSize: 10
          },
          gridLines: {
            //                            drawTicks: false
            tickMarkLength: 5
          },
          scaleLabel: {
            display: showAxesNames,
            labelString: 'SiO₂'
          }
        }],
        yAxes: [{
          position: 'left',
          ticks: {
            min: 0,
            max: 1,
            stepSize: .1,
            fontSize: 10
          },
          gridLines: {
            tickMarkLength: 5
          },
          scaleLabel: {
            display: showAxesNames,
            labelString: 'Al₂O₃'
          }
        }]
      }
    }
  });
};

$('#randomizeData').click(function () {
  scatterChartData.datasets[0].data = [{
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }];
  scatterChartData.datasets[1].data = [{
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }, {
    x: randSiO2(),
    y: randAl2O3(),
  }]
  window.myScatter.update();
});