import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TodoCompletePageStick = ({
  valueTagChoice,
  valueYZ,
  stateData,
  completeData,
}) => {
  const options = {
    colors: ['#3bafda'],
    chart: {
      type: 'column',
      backgroundColor: 'rgba(0,0,0,0)',
      height: 380,
    },
    title: {
      text: '최근 ' + completeData + '일간 작업 완료 건수',
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
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>',
    },
    yAxis: {
      title: false,
    },
    xAxis: {
      // categories: valueTagChoice,
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
      <div className="cbtns">
        <button
          type="button"
          name="10"
          className={`${completeData === '10' && 'active'}`}
          onClick={stateData}
        >
          10일
        </button>
        <button
          type="button"
          name="20"
          className={`${completeData === '20' && 'active'}`}
          onClick={stateData}
        >
          20일
        </button>
        <button
          type="button"
          name="30"
          className={`${completeData === '30' && 'active'}`}
          onClick={stateData}
        >
          30일
        </button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TodoCompletePageStick;
