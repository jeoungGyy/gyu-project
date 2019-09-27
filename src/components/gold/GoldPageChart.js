import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class GoldPageChart extends Component {
  render() {
    const { onDate, onBuy, onSell } = this.props;

    const config = {
      colors: ['#4285f4', '#00bcd4'],
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },
      xAxis: [
        {
          categories: onDate,
          crosshair: true
        }
      ],
      yAxis: [
        {
          // min: sellMin,
          // max: buyMax,
          labels: {
            formatter: function() {
              return parseInt(this.value) + '원';
            }
          },
          title: {
            text: ''
          }
        }
      ],
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        shared: true
      },
      legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'top',
        y: 5,
        floating: true,
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      series: [
        {
          name: '살때',
          data: onBuy,
          tooltip: {
            valueSuffix: ' 원'
          }
        },
        {
          name: '팔때',
          data: onSell,
          tooltip: {
            valueSuffix: '원'
          }
        }
      ]
    };

    return (
      <div className="chart">
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default GoldPageChart;
