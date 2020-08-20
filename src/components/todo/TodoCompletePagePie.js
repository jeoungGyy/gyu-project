import React from 'react';
import * as Highcharts from 'highcharts';
import variablePie from 'highcharts/modules/variable-pie.js';
import HighchartsReact from 'highcharts-react-official';

const TodoCompletePagePie = (tagChoice) => {
  if (!tagChoice.tagChoice.length) return false;

  variablePie(Highcharts);

  const options = {
    colors: [
      '#2f7d81',
      '#386276',
      '#a8404a',
      '#1aba8f',
      '#f672a7',
      '#3bafda',
      '#515a63',
    ],
    chart: {
      type: 'variablepie',
      backgroundColor: 'rgba(0,0,0,0)',
      height: 380,
    },
    title: {
      text: '완료 건수',
      verticalAlign: 'bottom',
      style: {
        fontSize: '15px',
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        '건수 (square km): <b>{point.y}</b><br/>',
    },
    series: [
      {
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        data: tagChoice.tagChoice,
      },
    ],
  };

  return (
    <div className="variablepie_chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TodoCompletePagePie;
