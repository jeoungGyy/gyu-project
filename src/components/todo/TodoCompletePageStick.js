import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TodoCompletePageStick = ({ valueTagChoice, valueYZ }) => {
  const options = {
    colors: ['#3bafda'],
    chart: {
      type: 'column',
      backgroundColor: 'rgba(0,0,0,0)',
      height: 380,
    },
    title: {
      text: '최근 30일간 작업 건수',
      verticalAlign: 'bottom',
      style: {
        fontSize: '15px',
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },
    yAxis: {
      title: false,
    },
    xAxis: {
      categories: valueTagChoice,
    },
    series: [
      {
        data: valueYZ,
        showInLegend: false,
      },
    ],
  };

  return (
    <div className="column_chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TodoCompletePageStick;
