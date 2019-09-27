import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './LottoPage.scss';

@inject('lotto')
@observer
class LottoPage extends Component {
  componentDidMount() {
    this.setKaKaoMap();
  }

  delayPageLotto = pageName => {
    const {
      history: { push }
    } = this.props;
    const { common } = this.props.lotto.root;
    common.loadingDelay(push, pageName);
  };

  setKaKaoMap = () => {
    const { lotto } = this.props;
    const { kakao } = window;
    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(37.51126602153574, 127.04823318422497), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
      };
      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      lotto.addressAdd.map(info => {
        const content =
          '<div class="bubble"><p class="t">' +
          info.total +
          '</p><p class="s">' +
          info.name +
          '</p><p class="latlng">' +
          info.latlng +
          '</p></div>';
        if (!info.x) {
          return false;
        } else {
          new kakao.maps.CustomOverlay({
            map: map,
            position: new kakao.maps.LatLng(Number(info.y), Number(info.x)),
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91
          });

          return false;
        }
      });

      kakao.maps.event.addListener(map, 'dragend', function() {
        bubble();
      });

      function bubble() {
        let cols = document.querySelectorAll('.bubble .s');

        Array.from(cols).map(info =>
          info.addEventListener('mouseenter', bubbleAdd, false)
        );
        Array.from(cols).map(info =>
          info.addEventListener('mouseleave', bubbleRemove, false)
        );
      }
      function bubbleAdd(ev) {
        ev.path[0].classList.add('act');
      }
      function bubbleRemove(ev) {
        ev.path[0].classList.remove('act');
      }
      bubble();
    });
  };

  render() {
    const { delayPageLotto } = this;

    return (
      <div className="LottoPage">
        <div className="App" id="map"></div>

        <div className="home_btn">
          <Link
            to={{
              pathname: ''
            }}
            onClick={e => delayPageLotto('', e)}
          >
            메인
          </Link>
        </div>
      </div>
    );
  }
}

export default LottoPage;
