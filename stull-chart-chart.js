var showTitle = false;
var showLegend = false;
var showAxesNames = false;
var defaultPointRadius = 4;
var hoverPointRadius = 8;
var pointBorderColor = 'rgba(150, 150, 150, 1)';
var pointBorderColorHighlight = 'rgba(50, 50, 50, 1)';

function generateRandomNumber(min=0, max=1, decimal=2) {
  return ((Math.random() * (max - min) + min).toFixed(decimal));
}

function randSiO2() {
  return generateRandomNumber(1.5, 7.2);
}

function randAl2O3() {
  return generateRandomNumber(0.2, 0.9);
}

function randR2O() {
  return generateRandomNumber(0.1, 0.9);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function getFillColor(r2o_total) {

  switch (round(Number(r2o_total) * 2, 1) / 2) {
    case 1:     return 'rgba(195, 150, 150, 1)';
    case .95:   return 'rgba(210, 150, 150, 1)';
    case .9:    return 'rgba(225, 150, 150, 1)';
    case .85:   return 'rgba(240, 150, 150, 1)';
    case .8:    return 'rgba(255, 150, 150, 1)';
    case .75:   return 'rgba(255, 165, 150, 1)';
    case .7:    return 'rgba(255, 180, 150, 1)';
    case .65:   return 'rgba(255, 195, 150, 1)';
    case .6:    return 'rgba(255, 210, 150, 1)';
    case .55:   return 'rgba(255, 225, 150, 1)';
    case .5:    return 'rgba(255, 240, 150, 1)';
    case .45:   return 'rgba(255, 255, 165, 1)';
    case .4:    return 'rgba(255, 255, 195, 1)';
    case .35:   return 'rgba(255, 255, 225, 1)';
    case .3:    return 'rgba(255, 255, 255, 1)';
    case .25:   return 'rgba(240, 240, 255, 1)';
    case .2:    return 'rgba(225, 225, 255, 1)';
    case .15:   return 'rgba(210, 210, 255, 1)';
    case .1:    return 'rgba(195, 195, 255, 1)';
    case .05:   return 'rgba(180, 180, 255, 1)';
    case .0:    return 'rgba(165, 165, 255, 1)';
  }

  return '200, 200, 200';
}

var recipeIndex = [
  6246,
  1824,
  11136,
  10404,
  10771
];

var scatterChartData = {
  datasets: [
    {
      label: 'Recipes',
      type: 'scatter',
      borderWidth: 1,
      backgroundColor: 'transparent',
      pointBorderWidth: 1,
      showLine: false,
      data: [{
        x: 5,
        y: .55,
        id: 6246
      }, {
        x: 4.8,
        y: .6,
        id: 1824
      }, {
        x: 6,
        y: .8,
        id: 11136
      }, {
        x: 6,
        y: .6,
        id: 10404
      }, {
        x: 5,
        y: .5,
        id: 10771
      }],
      // In order to programmatically access individual point attributes,
      // each attribute type needs an array with an entry for each point
      pointBackgroundColor: [
        getFillColor(.3),
        getFillColor(.4),
        getFillColor(.25),
        getFillColor(.5),
        getFillColor(.18)
      ],
      pointBorderColor: [
        pointBorderColor,
        pointBorderColor,
        pointBorderColor,
        pointBorderColor,
        pointBorderColor
      ],
      pointStyle: [
        'circle',
        'circle',
        'triangle',
        'circle',
        'circle'
       ],
      pointRadius: [
        defaultPointRadius,
        defaultPointRadius,
        defaultPointRadius,
        defaultPointRadius,
        defaultPointRadius
      ]
    }, {
      label: 'Q line',
      data: [{
        x: 1.8,
        y: 0.2
      }, {
        x: 4.2,
        y: 0.6
      }, {
        x: 6.0,
        y: 0.8
      }, {
        x: 7.2,
        y: 0.92
      }],
      borderColor: 'rgba(55,55,55,1)',
      borderDash: [4, 4],
      borderWidth: 1,
      backgroundColor: 'rgba(255,255,255,0)',
      pointRadius: 0,
      pointHoverRadius: 0,
    }, {
      label: 'Crazed Region',
      data: [{
        x: 0.6,
        y: 1
      }, {
        x: 1.5,
        y: 1
      }, {
        x: 1.6,
        y: 1
      }, {
        x: 2.4,
        y: .25
      }, {
        x: 2.8,
        y: .23
      }, {
        x: 3.3,
        y: 0.25
      }, {
        x: 4.19,
        y: 0.3
      }, {
        x: 4.2,
        y: 0.3
      }, {
        x: 5.4,
        y: 0.49
      }, {
        x: 7.2,
        y: 0.62
      }],
      backgroundColor: 'rgba(155,155,155,.2)',
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0)',
    }, {
      label: 'Underfired Region',
      data: [{
        x: 1.6,
        y: 0
      }, {
        x: 7.2,
        y: .65
      }],
      backgroundColor: 'rgba(175,175,255,1)',
      pointRadius: 0,
      pointHoverRadius: 0,
      lineTension: 0,
      borderWidth: 1,
    }, {
      label: 'Bright Region',
      data: [{
        x: 0.6,
        y: .09
      }, {
        x: 5,
        y: 1
      }, {
        x: 7.2,
        y: 1
      }],
      backgroundColor: 'rgba(255,255,255,1)',
      pointRadius: 0,
      pointHoverRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0)',
    }, {
      label: 'Semi-matte Region',
      data: [{
        x: 0.6,
        y: .09
      }, {
        x: 4,
        y: 1
      }, {
        x: 5,
        y: 1
      }],
      backgroundColor: 'rgba(175,255,175,1)',
      pointRadius: 0,
      pointHoverRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0)',
    },
    {
      label: 'Matte Region',
      data: [{
        x: .6,
        y: .42
      }, {
        x: 2.8,
        y: 1
      }, {
        x: 7.2,
        y: 1
      }],
      backgroundColor: 'rgba(255,255,175,1)',
      pointRadius: 0,
      pointHoverRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0)',
    }, {
      label: 'Unfused Region',
      data: [{
        x: 0.6,
        y: 1
      }, {
        x: 6,
        y: 1
      }],
      backgroundColor: 'rgba(255,175,175,1)',
      pointRadius: 0,
      pointHoverRadius: 0,
      lineTension: 0,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0)',
    }

  ]
};


window.onload = function () {
  var ctx = document.getElementById("stull-canvas").getContext('2d');

  var stullScatter = new Chart(ctx, {
    type: 'line',
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
          radius: defaultPointRadius
        },
        line: {
          borderWidth: 0
        }
      },
      plugins: {
        filler: {
          propagate: true
        }
      },
      scales: {
        xAxes: [{
          afterTickToLabelConversion: function(scaleInstance) {
            // set the first and last tick to null so it does not display
            // note, ticks[0] is the last tick and ticks[length - 1] is the first
            scaleInstance.ticks[0] = null;
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;

            // need to do the same thing for this similiar array which is used internally
            scaleInstance.ticksAsNumbers[0] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          type: 'linear',
          position: 'bottom',
          ticks: {
            min: 0.6,
            max: 7.2,
            stepSize: 1.0,
            fontSize: 10
          },
          gridLines: {
            tickMarkLength: 5
          },
          scaleLabel: {
            display: showAxesNames,
            labelString: 'SiO₂'
          }
        }],
        yAxes: [{
          type: 'linear',
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

  document.getElementById("stull-canvas").onclick = function (evt) {
    var activePoint = stullScatter.getElementAtEvent(event);

    // make sure click was on an actual point
    if (activePoint.length > 0) {
      var clickedDatasetIndex = activePoint[0]._datasetIndex;
      var clickedElementindex = activePoint[0]._index;
      //var label = stullScatter.data.labels[clickedElementindex];
      var value = stullScatter.data.datasets[clickedDatasetIndex].data[clickedElementindex];
      //alert("Clicked: " + label + " - " + value);
      alert("Clicked: " + JSON.stringify(value, null, 2));
    }
  };

  function highlight(id) {
    index  = jQuery.inArray( id, recipeIndex );
    if (index >= 0) {
      stullScatter.data.datasets[0].pointRadius[index] = hoverPointRadius;
      stullScatter.data.datasets[0].pointBorderColor[index] = pointBorderColorHighlight;
      stullScatter.update();
    }
  }

  function dehighlight(id) {
    index  = jQuery.inArray( id, recipeIndex );
    if (index >= 0) {
      stullScatter.data.datasets[0].pointRadius[index] = defaultPointRadius;
      stullScatter.data.datasets[0].pointBorderColor[index] = pointBorderColor;
      stullScatter.update();
    }
  }

  $('.glazy-link').bind({
    mouseenter: function (e) {
      highlight($(this).data('glazy-id'));
    },
    mouseleave: function (e) {
      dehighlight($(this).data('glazy-id'));
    }
  });
};
