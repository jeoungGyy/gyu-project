import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TodoCompletePageStick = () => {
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
      categories: [
        '플팩',
        '오아시스',
        '하이스트',
        '피기맘',
        '프리키즈',
        '피그마',
        'T-box',
      ],
    },
    series: [
      {
        data: [29.9, 71.5, 144.0, 176.0, 135.6, 95.6, 54.4],
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
