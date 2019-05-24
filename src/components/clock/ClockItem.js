import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Clock from 'react-clock';

@inject('clock')
@observer
class ClockItem extends Component {
  componentDidMount() {
    // const { clock } = this.props;
    // clock.setIntervalTime();
    // setInterval(this.timer, 1000);
  }

  // timer = () => {
  //   const { clock } = this.props;
  //   clock.setIntervalTime();
  // };

  render() {
    const { clock } = this.props;
    return (
      <div>
        <Clock
          value={clock.date}
          size={180}
          hourHandWidth={8}
          hourMarksWidth={6}
          minuteHandWidth={7}
          minuteHandLength={75}
          secondHandWidth={3}
          secondHandLength={75}
        />
      </div>
    );
  }
}

export default ClockItem;
