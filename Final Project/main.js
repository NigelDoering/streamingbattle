function graph_averages() {

    Highcharts.chart('averages_chart', {
        chart: {
            type: 'bar',
            backgroundColor: '#f3e5e5',
        },
        title: {
            text: 'Average Rating for All Shows',
            style: {
                color: 'black',
                fontSize: 20,

            }
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/ruchi798/tv-shows-on-netflix-prime-video-hulu-and-disney">Kaggle.com</a>',
            style: {
                color: 'black',
                fontSize: 10,

            }
        },
        xAxis: {
            categories: ['Netflix', 'Hulu', 'Prime Video', 'Disney+'],
            title: {
                text: null
        }
        },
        yAxis: {
        min: 0,
        title: {
            text: 'Rating',
            color: 'black',
            style: {
                color: 'black',
                fontSize: 15,

            }
        },
        labels: {
            overflow: 'justify'
        }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                enabled: true,
                },
            },
            series: {
                pointWidth: 42
            }
        },
        legend: {
            enabled: false
        },
        credits: {
        enabled: false
        },
        series: [{
        name: 'Rating', 
        data: [
            {name: 'Netflix', y: 7.16, color: '#ff3333'},
            {name: 'Hulu', y: 7.06, color: '#99cc33'},
            {name: 'Prime Video', y: 7.18, color: '#001a33'},
            {name: 'Disney+', y: 6.92, color: '#336699'}
        ]
    }]
    });
}

/* Function to graph the total highly rated shows */
function graph_totals() {

    Highcharts.chart('totals_chart', {
        chart: {
            type: 'bar',
            backgroundColor: '#f3e5e5',
        },
        title: {
            text: 'Number of Highly Rated Shows',
            style: {
                color: 'black',
                fontSize: 20,

            }
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/ruchi798/tv-shows-on-netflix-prime-video-hulu-and-disney">Kaggle.com</a>',
            style: {
                color: 'black',
                fontSize: 10,

            }
        },
        xAxis: {
            categories: ['Netflix', 'Hulu', 'Prime Video', 'Disney+'],
            title: {
                text: null
        }
        },
        yAxis: {
        min: 0,
        title: {
            text: 'Total',
            color: 'black',
            style: {
                color: 'black',
                fontSize: 15,

            }
        },
        labels: {
            overflow: 'justify'
        }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                enabled: true,
                },
            },
            series: {
                pointWidth: 42
            }
        },
        legend: {
            enabled: false
        },
        credits: {
        enabled: false
        },
        series: [{
        name: 'Highly Rated', 
        data: [
            {name: 'Netflix', y: 1330, color: '#ff3333'},
            {name: 'Hulu', y: 974, color: '#99cc33'},
            {name: 'Prime Video', y: 879, color: '#001a33'},
            {name: 'Disney+', y: 89, color: '#336699'}
        ]
    }]
    });
}


/* Creating a radar chart */
function create_radar() {
    var myConfig = {
            type: 'radar',
            backgroundColor: '#f3e5e5',
            title: {
                text: 'Total Amount of Shows for Each Age Group',
                fontColor: 'black'
            },
            legend: {
                align: "center",
                "vertical-align": "bottom",
                backgroundColor: '#f3e5e5',
                borderColor: '#f3e5e5',
            },
            plotarea: {
                "margin-bottom": 0,
                "margin-top": 0,
                backgroundColor: '#f3e5e5',
            },
            plot: {
            aspect: 'rose',
            animation: {
                effect: 3,
                sequence: 1,
                speed: 700
            },
            tooltip: {
              text: "%t: %v"
            },
        },
        scaleV: {
            visible: false
        },
        scaleK: {
            values: '0:3:1',
            labels: ['7+', '16+', '18+', 'all'],
            item: {
                fontColor: '#607D8B',
                backgroundColor: "white",
                borderColor: "#aeaeae",
                borderWidth: 1,
                padding: '5 10',
                borderRadius: 10
        },
        refLine: {
            lineColor: '#c10000'
        },
        tick: {
            lineColor: '#59869c',
            lineWidth: 2,
            lineStyle: 'dotted',
            size: 20
        },
        guide: {
            lineColor: "#607D8B",
            lineStyle: 'solid',
            alpha: 0.3,
            backgroundColor: "#c5c5c5 #718eb4"
        }
        },
        series: [{
            values: [296, 396, 359, 169],
            backgroundColor: '#ff3333',
            text: 'Netflix',
            'legend-marker': {
                'background-color': '#ff3333'
            }
        },
        {
            values: [364, 511, 238, 156],
            backgroundColor: '#99cc33',
            text: 'Hulu',
            'legend-marker': {
                'background-color': '#99cc33'
            }
        },
        {
            values: [217, 209, 182, 185],
            backgroundColor: '#001a33',
            text: 'Prime Video',
            'legend-marker': {
                'background-color': '#001a33'
            }
        },
        {
            values: [66, 3, 0, 80],
            backgroundColor: '#336699',
            text: 'Disney+',
            'legend-marker': {
                'background-color': '#336699'
            }
        }
        ]
    };
    
    // Rendering the chart
    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: '100%',
        width: '100%',
    });
}
        
function init() {
    graph_averages();
    graph_totals();
    create_radar();
}

document.addEventListener('DOMContentLoaded', init, false);
