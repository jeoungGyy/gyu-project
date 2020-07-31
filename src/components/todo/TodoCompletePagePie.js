import React from 'react';
import * as Highcharts from 'highcharts';
import variablePie from 'highcharts/modules/variable-pie.js';
import HighchartsReact from 'highcharts-react-official';

const TodoCompletePagePie = (tagChoice) => {
  // const aa = tagChoice.tagChoice.map((info) => {
  //   return (info = { name: info, y: 10, z: 30 });
  // });
  const aa = [
    {
      name: '플팩',
      y: 10,
      z: 30,
    },
    {
      name: '오아시스',
      y: 3,
      z: 10,
    },
  ];
  // console.log(aa);
  // console.log(tagChoice.tagChoice);

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
      shared: true,
    },
    series: [
      {
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        data: [
          {
            name: '플팩',
            y: 10,
            z: 30,
          },
          {
            name: '오아시스',
            y: 3,
            z: 10,
          },
        ],
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
