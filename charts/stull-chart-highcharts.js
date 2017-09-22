$(function () {

  $('#scatter').highcharts({
    chart: {
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: '#EEEEEE',
      marginTop: 10,
      zoomType: 'xy',
    },
    plotOptions: {
      scatter: {
        turboThreshold: 5000,
        marker: {
          enabled: true,
          radius: 4,
          symbol: 'circle',
        },
        color: 'rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
        point: {
          events: {
            click: function (e) {
              recipeData = '<div class="panel panel-info"><div class="panel-heading">';
              recipeData += '<h4>' + this.name + '</h4>';
              recipeData += '</div><div class="panel-body">';
              recipeData += 'SiO<sub>2</sub>: ' + this.x;
              recipeData += ' Al<sub>2</sub>O<sub>3</sub>: ' + this.y;
              recipeData += '<br/><strong>' + this.ratio + '</strong> SiO<sub>2</sub>:Al<sub>2</sub>O<sub>3</sub>';
              recipeData += '<br/><strong>' + this.r2oro + '</strong> R<sub>2</sub>O:RO';
              recipeData += '<br/><a class="btn btn-raised btn-info btn-sm" href="/recipes/' + this.id + '">View Recipe</a>';
              recipeData += '</div></div>';
              $('#recipe_details').html(recipeData);
            }
          }
        },
      }
    },
    title: {
      text: ''
    },
    xAxis: {
      tickInterval: 0.2,
      gridLineWidth: 1,
      title: {
        enabled: true,
        useHTML: true,
        text: 'SiO<sub>2</sub>'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      tickInterval: 0.05,
      title: {
        useHTML: true,
        text: 'Al<sub>2</sub>O<sub>3</sub>'
      }
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'Unfused',
        type: 'polygon',
        data: [[0.6, .42], [0.6, 1.0], [2.8, 1.0]],
        pointPadding: 0,
        groupPadding: 0,
        color: 'rgba(255, 153, 153, 0.5)',
        lineWidth: 0,
        zIndex: 1,
        enableMouseTracking: false
      },
      {
        name: 'Mattes',
        type: 'polygon',
        data: [[0.6, .08], [0.6, .42], [2.8, 1.0], [4, 1.0]],
        pointPadding: 0,
        groupPadding: 0,
        color: 'rgba(255, 255, 153, 0.5)',
        lineWidth: 0,
        zIndex: 1,
        enableMouseTracking: false
      },
      {
        name: 'Semi-Mattes',
        type: 'polygon',
        data: [[1.2, .242], [4, 1.0], [5, 1.0]],
        pointPadding: 0,
        groupPadding: 0,
        color: 'rgba(153, 255, 153, 0.5)',
        lineWidth: 0,
        zIndex: 1,
        enableMouseTracking: false
      },
      {
        name: 'Underfired',
        type: 'polygon',
        data: [[1.6, .0], [7.2, .65], [7.2, 0.00]],
        pointPadding: 0,
        groupPadding: 0,
        color: 'rgba(153, 153, 255, 0.5)',
        lineWidth: 0,
        zIndex: 1,
        enableMouseTracking: false
      },
      {
        name: 'Crazing',
        type: 'areaspline',
//                        data: [[0.6, 1], [1.6, 1], [2.4,.25], [2.8, 0.23], [3.3, 0.25], [4.19, 0.299], [4.2, 0.3], [5.4, .49], [7.2, .62],
//                            [7.2, 0.09], [0.6, 0.09], [0.6,.95]],
        data: [[0.6, 0.09], [0.6, 1], [1.6, 1], [2.4, .25], [2.8, 0.23], [3.3, 0.25], [4.19, 0.299], [4.2, 0.3], [5.4, .49], [7.2, .62],
          [7.2, 0.09]],
        marker: {
          enabled: false
        },
        pointPadding: 0,
        groupPadding: 0,
        color: 'rgba(0, 0, 0, 0.4)',
        fillOpacity: 0.2,
        lineWidth: 0,
        states: {
          hover: {
            enabled: false
          }
        },
        enableMouseTracking: false,
        zIndex: 2
      },
      {
        name: 'Q Line',
        type: 'line',
        data: [[1.8, .20], [4.2, .6], [6.0, 0.8], [7.2, .92]],
        marker: {
          enabled: false
        },
        dashStyle: 'ShortDot',
        color: 'rgba(0, 0, 0, 0.4)',
        pointPadding: 0,
        groupPadding: 0,
        lineWidth: 2,
        states: {
          hover: {
            enabled: false
          }
        },
        enableMouseTracking: false,
        zIndex: 2
      },
      {
        id: 'recipes',
        name: 'Recipes',
        type: 'scatter',
        color: 'rgba(0, 0, 0, 0.5)',
        labels: {
          useHTML: true
        },
        dataLabels: {
          enabled: false,
          y: 18,
          allowOverlap: false,
          padding: 0,
          formatter: function () {
            return this.point.cones;
          },
          style: {
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: "bold",
            fontSize: '10px'
          }
        },
        zIndex: 3,
        data: [{
          x: 3.64,
          y: 0.39,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10983,
          ratio: 9.22,
          r2oro: "0.21:0.79",
          type: "Glossy, Transparent",
          cones: "Δ10 ",
          name: "Δ10 Turner\'s Celadon"
        }, {
          x: 3.68,
          y: 0.35,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10981,
          ratio: 10.48,
          r2oro: "0.22:0.78",
          type: "Glossy, Translucent",
          cones: "Δ10 ",
          name: "Δ10 David Beatie\'s Blue Celadon"
        }, {
          x: 4.24,
          y: 0.46,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10834,
          ratio: 9.16,
          r2oro: "0.17:0.83",
          type: "Semi-glossy, Translucent",
          cones: "Δ11 ",
          name: "Δ11 Pinnell Blue Celadon, NZK, CNZK, Wo, c11"
        }, {
          x: 2.61,
          y: 0.21,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10837,
          ratio: 12.56,
          r2oro: "0.20:0.80",
          type: "Glossy, Transparent",
          cones: "Δ5-7 ",
          name: "Δ5-7 John\'s Blue"
        }, {
          x: 4.08,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10833,
          ratio: 9.17,
          r2oro: "0.17:0.83",
          type: "Semi-glossy, Translucent",
          cones: "Δ9-10 ",
          name: "Δ9-10 Pinnell Blue Celadon CNZK NZK 10"
        }, {
          x: 4.24,
          y: 0.34,
          marker: {
            states: {hover: {fillColor: "rgba(255, 255, 225, 1)"}},
            fillColor: "rgba(255, 255, 225, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 5569,
          ratio: 12.48,
          r2oro: "0.34:0.66",
          type: "Glossy, Transparent",
          cones: "Δ10 ",
          name: "Δ10 Pumice Celadon"
        }, {
          x: 4.14,
          y: 0.28,
          marker: {
            states: {hover: {fillColor: "rgba(255, 255, 225, 1)"}},
            fillColor: "rgba(255, 255, 225, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10668,
          ratio: 15.02,
          r2oro: "0.34:0.66",
          type: "Semi-glossy, Semi-opaque",
          cones: "Δ5½-6 ",
          name: "Δ5½-6 Heath A2V /frit SiC Chun"
        }, {
          x: 3.83,
          y: 0.61,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 3810,
          ratio: 6.25,
          r2oro: "0.20:0.80",
          type: "",
          cones: "Δ9-11 ",
          name: "Δ9-11 Pale Celadon"
        }, {
          x: 4.17,
          y: 0.47,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 5695,
          ratio: 8.91,
          r2oro: "0.19:0.81",
          type: "Glossy, Translucent",
          cones: "Δ10 ",
          name: "Δ10 Tom Buck Celadon (variation)"
        }, {
          x: 4.08,
          y: 0.47,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8877,
          ratio: 8.61,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Transparent",
          cones: "Δ10 ",
          name: "Δ10 No More Tears Celadon"
        }, {
          x: 3.59,
          y: 0.33,
          marker: {
            states: {hover: {fillColor: "rgba(165, 165, 255, 1)"}},
            fillColor: "rgba(165, 165, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 10260,
          ratio: 10.90,
          r2oro: "0.02:0.98",
          type: "Satin, Translucent",
          cones: "Δ7-9 ",
          name: "Δ7-9 Elba island Celadon"
        }, {
          x: 4.46,
          y: 0.43,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9952,
          ratio: 10.43,
          r2oro: "0.19:0.81",
          type: "Glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 derived for glossy blue celadon"
        }, {
          x: 3.4,
          y: 0.27,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6206,
          ratio: 12.72,
          r2oro: "0.19:0.81",
          type: "Glossy, Translucent",
          cones: "Δ5 ",
          name: "Δ5 Mary\'s Error Chun"
        }, {
          x: 3.19,
          y: 0.37,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6211,
          ratio: 8.66,
          r2oro: "0.21:0.79",
          type: "Satin, Translucent",
          cones: "Δ5-7 ",
          name: "Δ5-7 John\'s Satin 2, RIO 3"
        }, {
          x: 3.85,
          y: 0.41,
          marker: {
            states: {hover: {fillColor: "rgba(255, 255, 225, 1)"}},
            fillColor: "rgba(255, 255, 225, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9709,
          ratio: 9.43,
          r2oro: "0.35:0.65",
          type: "Translucent",
          cones: "Δ6 ",
          name: "Δ6 Odyssey SiC Celadon/3134 frit"
        }, {
          x: 3.85,
          y: 0.41,
          marker: {
            states: {hover: {fillColor: "rgba(255, 255, 225, 1)"}},
            fillColor: "rgba(255, 255, 225, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6212,
          ratio: 9.43,
          r2oro: "0.35:0.65",
          type: "Translucent",
          cones: "Δ5 ",
          name: "Δ5 Odyssey Celadon/3134 frit"
        }, {
          x: 2.9,
          y: 0.19,
          marker: {
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9518,
          ratio: 15.12,
          r2oro: "0.26:0.74",
          type: "Glossy, Semi-opaque",
          cones: "Δ5 ",
          name: "Δ5 Selsor Chun SiC, RIO 0.5/1/1.5/2"
        }, {
          x: 2.9,
          y: 0.19,
          marker: {
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6207,
          ratio: 15.12,
          r2oro: "0.26:0.74",
          type: "",
          cones: "Δ5 ",
          name: "Δ5 Selsor Chun, RIO 0.5/1/1.5/2"
        }, {
          x: 2.68,
          y: 0.28,
          marker: {
            states: {hover: {fillColor: "rgba(165, 165, 255, 1)"}},
            fillColor: "rgba(165, 165, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9496,
          ratio: 9.54,
          r2oro: "0.02:0.98",
          type: "Glossy, Translucent",
          cones: "Δ8 ",
          name: "Δ8 P41P42.B2.Ca. Elba island Celadon"
        }, {
          x: 4.51,
          y: 0.46,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 3565,
          ratio: 9.80,
          r2oro: "0.19:0.81",
          type: "Glossy, Translucent",
          cones: "Δ9-11 ",
          name: "Δ9-11 Pumice celadon (Barium)"
        }, {
          x: 4.02,
          y: 0.45,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9466,
          ratio: 9.00,
          r2oro: "0.17:0.83",
          type: "Semi-glossy, Translucent",
          cones: "Δ9-10 ",
          name: "Δ9-10 Pinnell Blue Celadon (CNZK & Wollastonite)"
        }, {
          x: 3.94,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9381,
          ratio: 8.46,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 derived Clear"
        }, {
          x: 4.35,
          y: 0.49,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9462,
          ratio: 8.88,
          r2oro: "0.19:0.81",
          type: "Glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 derived for glossy celadon"
        }, {
          x: 4.39,
          y: 0.62,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9461,
          ratio: 7.11,
          r2oro: "0.19:0.81",
          type: "Satin, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 derived for satin celadon"
        }, {
          x: 3.62,
          y: 0.48,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9404,
          ratio: 7.60,
          r2oro: "0.15:0.85",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Hangzhou - Guan 1 (recipe)"
        }, {
          x: 3.6,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9403,
          ratio: 7.60,
          r2oro: "0.15:0.85",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Hangzhou - Guan 1 (recipe)"
        }, {
          x: 3.53,
          y: 0.41,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6352,
          ratio: 8.64,
          r2oro: "0.15:0.85",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Yaozhou #3 YZ3 27/20/31"
        }, {
          x: 3.66,
          y: 0.52,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9024,
          ratio: 7.07,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (lower) (change cnzk)"
        }, {
          x: 3.92,
          y: 0.36,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9023,
          ratio: 10.85,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (high sio2 lower) (change cnzk)"
        }, {
          x: 4.65,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9021,
          ratio: 9.95,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (higher) (change cnzk)"
        }, {
          x: 4.34,
          y: 0.65,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9020,
          ratio: 6.70,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (higher) (change cnzk)"
        }, {
          x: 4.53,
          y: 0.55,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9017,
          ratio: 8.27,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (middle)"
        }, {
          x: 4.66,
          y: 0.49,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9016,
          ratio: 9.49,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (higher)"
        }, {
          x: 4.33,
          y: 0.63,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9015,
          ratio: 6.86,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (higher)"
        }, {
          x: 3.66,
          y: 0.52,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9014,
          ratio: 7.07,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (lower)"
        }, {
          x: 3.94,
          y: 0.4,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9013,
          ratio: 9.94,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (high sio2 lower)"
        }, {
          x: 4.28,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 9012,
          ratio: 9.70,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs (variation)"
        }, {
          x: 3.12,
          y: 0.45,
          marker: {
            states: {hover: {fillColor: "rgba(255, 255, 255, 1)"}},
            fillColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8920,
          ratio: 6.89,
          r2oro: "0.28:0.72",
          type: "Glossy, Transparent",
          cones: "Δ5½-6 ",
          name: "Δ5½-6 Honey Amber"
        }, {
          x: 4.2,
          y: 0.46,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8898,
          ratio: 9.10,
          r2oro: "0.20:0.80",
          type: "Glossy, Translucent",
          cones: "Δ10 ",
          name: "Δ10 IUS Celadon"
        }, {
          x: 2.42,
          y: 0.4,
          marker: {
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8878,
          ratio: 6.08,
          r2oro: "0.15:0.85",
          type: "Satin-matte, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Peasant Grey"
        }, {
          x: 3.49,
          y: 0.36,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 3305,
          ratio: 9.67,
          r2oro: "0.24:0.76",
          type: "Glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Celadon from Tichane-inspired triaxial (variation)"
        }, {
          x: 4.03,
          y: 0.54,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8782,
          ratio: 7.41,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGGLQ3 CNZK 6hrs"
        }, {
          x: 3.05,
          y: 0.26,
          marker: {
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7658,
          ratio: 11.56,
          r2oro: "0.16:0.84",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-12 ",
          name: "Δ10-12 Pale Green Celadon"
        }, {
          x: 4.07,
          y: 0.51,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8265,
          ratio: 8.04,
          r2oro: "0.20:0.80",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 4 (p. 58) (higher, more silica, plus wh little)"
        }, {
          x: 3.72,
          y: 0.46,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8656,
          ratio: 8.06,
          r2oro: "0.19:0.81",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 4 (p. 58) (even higher)"
        }, {
          x: 3.98,
          y: 0.5,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8626,
          ratio: 8.00,
          r2oro: "0.17:0.83",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG Balanced NZK less wo"
        }, {
          x: 3.54,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8625,
          ratio: 7.96,
          r2oro: "0.14:0.86",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG Balanced NZK more wo"
        }, {
          x: 4,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8619,
          ratio: 9.03,
          r2oro: "0.19:0.81",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG Balanced NZK (tested)"
        }, {
          x: 3.75,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8615,
          ratio: 7.98,
          r2oro: "0.16:0.84",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG Balanced NZK"
        }, {
          x: 3.77,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8612,
          ratio: 8.07,
          r2oro: "0.22:0.78",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG82/Wh18"
        }, {
          x: 3.71,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8610,
          ratio: 7.95,
          r2oro: "0.22:0.78",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG78/EH20"
        }, {
          x: 4.2,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8589,
          ratio: 9.63,
          r2oro: "0.21:0.79",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG78/Wo22"
        }, {
          x: 3.59,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8273,
          ratio: 7.59,
          r2oro: "0.16:0.84",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Hangzhou - Guan 1 (recipe)"
        }, {
          x: 4,
          y: 0.53,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8272,
          ratio: 7.62,
          r2oro: "0.20:0.80",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Longquan - Guan 3 (recipe) (higher)"
        }, {
          x: 3.67,
          y: 0.48,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8271,
          ratio: 7.62,
          r2oro: "0.19:0.81",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Longquan - Guan 3 (recipe)"
        }, {
          x: 4.01,
          y: 0.5,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8270,
          ratio: 7.94,
          r2oro: "0.16:0.84",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Guan Longquan GLQ2 Wo24"
        }, {
          x: 4.09,
          y: 0.5,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8267,
          ratio: 8.21,
          r2oro: "0.15:0.85",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Guan Longquan GLQ Wo24"
        }, {
          x: 3.86,
          y: 0.49,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8268,
          ratio: 7.88,
          r2oro: "0.16:0.84",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Guan Longquan GLQ2 Wo25"
        }, {
          x: 3.74,
          y: 0.46,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8269,
          ratio: 8.09,
          r2oro: "0.15:0.85",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 Guan Longquan GLQ2 Wo26"
        }, {
          x: 3.38,
          y: 0.39,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8257,
          ratio: 8.73,
          r2oro: "0.19:0.81",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 4 (p. 58) (more silica)"
        }, {
          x: 3.94,
          y: 0.53,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8201,
          ratio: 7.46,
          r2oro: "0.09:0.91",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 2 (recipe)"
        }, {
          x: 3.58,
          y: 0.45,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8200,
          ratio: 7.92,
          r2oro: "0.11:0.89",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 3 (higher)"
        }, {
          x: 3.51,
          y: 0.43,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8199,
          ratio: 8.07,
          r2oro: "0.19:0.81",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 4 (p. 58) (higher)"
        }, {
          x: 3.97,
          y: 0.5,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8198,
          ratio: 7.89,
          r2oro: "0.13:0.87",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 1 (higher 2)"
        }, {
          x: 3.74,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8197,
          ratio: 7.89,
          r2oro: "0.13:0.87",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 1 (higher)"
        }, {
          x: 3.32,
          y: 0.41,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8196,
          ratio: 8.08,
          r2oro: "0.19:0.81",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 4 (p. 58) (recipe)"
        }, {
          x: 3.53,
          y: 0.45,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8194,
          ratio: 7.90,
          r2oro: "0.13:0.87",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 1 (recipe)"
        }, {
          x: 3.38,
          y: 0.43,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8193,
          ratio: 7.92,
          r2oro: "0.11:0.89",
          type: "Satin, Semi-opaque",
          cones: "",
          name: "Jingdezhen yingqing 3 (recipe)"
        }, {
          x: 3.61,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8192,
          ratio: 8.24,
          r2oro: "0.14:0.86",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 1 (NZK)"
        }, {
          x: 3.99,
          y: 0.5,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8191,
          ratio: 7.93,
          r2oro: "0.09:0.91",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 2 (NZK)"
        }, {
          x: 3.36,
          y: 0.4,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8190,
          ratio: 8.31,
          r2oro: "0.12:0.88",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 3 (NZK)"
        }, {
          x: 3.4,
          y: 0.41,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8189,
          ratio: 8.25,
          r2oro: "0.18:0.82",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 4 (NZK)"
        }, {
          x: 3.36,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8188,
          ratio: 7.59,
          r2oro: "0.18:0.82",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 4"
        }, {
          x: 3.31,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8187,
          ratio: 7.50,
          r2oro: "0.12:0.88",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 3"
        }, {
          x: 3.93,
          y: 0.56,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8186,
          ratio: 7.04,
          r2oro: "0.09:0.91",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 2"
        }, {
          x: 3.56,
          y: 0.48,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 8185,
          ratio: 7.46,
          r2oro: "0.14:0.86",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 CGYQ 1"
        }, {
          x: 4.27,
          y: 0.44,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7990,
          ratio: 9.72,
          r2oro: "0.21:0.79",
          type: "Semi-glossy, Translucent",
          cones: "Δ9-10 ",
          name: "Δ9-10 Pinnell Blue Celadon (NZK & Wollastonite) (variation)"
        }, {
          x: 4.17,
          y: 0.46,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 255, 1)"}},
            fillColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7116,
          ratio: 9.00,
          r2oro: "0.29:0.71",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG54/PF26/Wo20"
        }, {
          x: 2.87,
          y: 0.35,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7791,
          ratio: 8.29,
          r2oro: "0.19:0.81",
          type: "Satin, Semi-opaque",
          cones: "Δ6 ",
          name: "Δ6 celadon blue"
        }, {
          x: 3.19,
          y: 0.37,
          marker: {
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6210,
          ratio: 8.66,
          r2oro: "0.21:0.79",
          type: "Satin, Translucent",
          cones: "Δ5 ",
          name: "Δ5 John\'s Satin 2, RIO 0.75"
        }, {
          x: 4.01,
          y: 0.45,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7115,
          ratio: 9.00,
          r2oro: "0.16:0.84",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG/PF/K10/Wo"
        }, {
          x: 4.13,
          y: 0.46,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 255, 1)"}},
            fillColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7015,
          ratio: 8.93,
          r2oro: "0.30:0.70",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG50/PF30/Wo20"
        }, {
          x: 3.89,
          y: 0.43,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7014,
          ratio: 9.02,
          r2oro: "0.18:0.82",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG/K/Wo/T"
        }, {
          x: 3.77,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(225, 225, 255, 1)"}},
            fillColor: "rgba(225, 225, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7013,
          ratio: 8.07,
          r2oro: "0.22:0.78",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG/Wh"
        }, {
          x: 4.25,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7010,
          ratio: 8.98,
          r2oro: "0.25:0.75",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG/PF/K/Wo20"
        }, {
          x: 4.24,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 255, 1)"}},
            fillColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7009,
          ratio: 9.10,
          r2oro: "0.28:0.72",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG60/PF20/Wo20"
        }, {
          x: 4.47,
          y: 0.47,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 7008,
          ratio: 9.45,
          r2oro: "0.23:0.77",
          type: "Semi-glossy, Translucent",
          cones: "Δ10-11 ",
          name: "Δ10-11 YG80/Wo20"
        }, {
          x: 3.34,
          y: 0.52,
          marker: {
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6209,
          ratio: 6.47,
          r2oro: "0.11:0.89",
          type: "Satin, Translucent",
          cones: "Δ5 ",
          name: "Δ5 John\'s Satin"
        }, {
          x: 3.12,
          y: 0.36,
          marker: {
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6214,
          ratio: 8.63,
          r2oro: "0.16:0.84",
          type: "Semi-glossy, Translucent",
          cones: "Δ5 ",
          name: "Δ5 Basic Celadon"
        }, {
          x: 3.34,
          y: 0.28,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6742,
          ratio: 12.06,
          r2oro: "0.16:0.84",
          type: "",
          cones: "Δ10-11 ",
          name: "Δ10-11 Juny B6 Wo26 PF34"
        }, {
          x: 3.42,
          y: 0.28,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6741,
          ratio: 12.07,
          r2oro: "0.14:0.86",
          type: "",
          cones: "Δ10-11 ",
          name: "Δ10-11 Juny B6 Wo26 PF30"
        }, {
          x: 3.82,
          y: 0.3,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(195, 195, 255, 1)"}},
            fillColor: "rgba(195, 195, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6740,
          ratio: 12.82,
          r2oro: "0.12:0.88",
          type: "",
          cones: "Δ10-11 ",
          name: "Δ10-11 Juny B3 PF24"
        }, {
          x: 3.64,
          y: 0.28,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(210, 210, 255, 1)"}},
            fillColor: "rgba(210, 210, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6739,
          ratio: 12.80,
          r2oro: "0.16:0.84",
          type: "",
          cones: "Δ10-11 ",
          name: "Δ10-11 Juny B3 PF32"
        }, {
          x: 5.04,
          y: 0.64,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 255, 1)"}},
            fillColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6548,
          ratio: 7.90,
          r2oro: "0.32:0.68",
          type: "Glossy, Translucent",
          cones: "",
          name: "YG86 + X tianbai lower temp"
        }, {
          x: 6.1,
          y: 0.77,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 165, 1)"}},
            fillColor: "rgba(255, 255, 165, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6550,
          ratio: 7.90,
          r2oro: "0.44:0.56",
          type: "Glossy, Translucent",
          cones: "",
          name: "YG86 + X tianbai mid-temp"
        }, {
          x: 7.62,
          y: 0.96,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 210, 150, 1)"}},
            fillColor: "rgba(255, 210, 150, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6547,
          ratio: 7.90,
          r2oro: "0.61:0.39",
          type: "Glossy, Translucent",
          cones: "",
          name: "YG86 + X tianbai"
        }, {
          x: 5.28,
          y: 0.57,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 255, 1)"}},
            fillColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6545,
          ratio: 9.22,
          r2oro: "0.31:0.69",
          type: "Glossy, Translucent",
          cones: "",
          name: "YG86T14 + Potash"
        }, {
          x: 4.33,
          y: 0.46,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6540,
          ratio: 9.34,
          r2oro: "0.25:0.75",
          type: "Glossy, Translucent",
          cones: "",
          name: "YG80Wo20 +Potash"
        }, {
          x: 4.51,
          y: 0.51,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(240, 240, 255, 1)"}},
            fillColor: "rgba(240, 240, 255, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6542,
          ratio: 8.85,
          r2oro: "0.24:0.76",
          type: "",
          cones: "Δ10-11 ",
          name: "Δ10-11 SB85Wo15 +K +S"
        }, {
          x: 4.72,
          y: 0.62,
          marker: {
            symbol: 'square',
            radius: 4,
            states: {hover: {fillColor: "rgba(255, 255, 195, 1)"}},
            fillColor: "rgba(255, 255, 195, 1)",
            lineColor: "rgba(0,0,0,.6)",
            lineWidth: 1
          },
          id: 6541,
          ratio: 7.61,
          r2oro: "0.42:0.58",
          type: "",
          cones: "Δ10-11 ",
          name: "Δ10-11 SB85Wo15"
        }]

      }],
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br/>{point.x} SiO2, {point.y} Al2O3<br/><b>{point.ratio}</b> SiO2:Al2O3<br/><b>{point.r2oro}</b> R2O:RO<br/><i>{point.type}</i>'
    },
    credits: {
      enabled: false
    },

  });

  var chart = $('#scatter').highcharts(),
    $button = $('#toggleCones');
  $button.click(function () {
    var series = chart.get('recipes');
    var opt = {dataLabels: {enabled: false}};
    var optOrig = series.options;
    opt.dataLabels.enabled = optOrig.dataLabels.enabled;
    if (opt.dataLabels.enabled) {
      $button.html('Show Cones');
    } else {
      $button.html('Hide Cones');
    }
    opt.dataLabels.enabled = !opt.dataLabels.enabled;
    series.update(opt);
  });
});
