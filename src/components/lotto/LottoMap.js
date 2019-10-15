import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './LottoMap.scss';

@inject('lotto')
@observer
class LottoMap extends Component {
  componentDidMount() {
    this.setKaKaoMap();
  }

  setKaKaoMap = () => {
    const { lotto } = this.props;
    const { kakao } = window;
    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(37.51126602153574, 127.04823318422497), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };
      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

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
        let level = map.getLevel();
        level >= 6 ? markerSimpleMinus() : markerSimplePlus();
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

      kakao.maps.event.addListener(map, 'zoom_changed', function() {
        let level = map.getLevel();

        level >= 6 ? markerSimpleMinus() : markerSimplePlus();
      });
      function markerSimpleMinus() {
        let cols = document.querySelectorAll('.bubble');

        Array.from(cols).map(info => info.classList.add('simply'));
      }
      function markerSimplePlus() {
        let cols = document.querySelectorAll('.bubble');

        Array.from(cols).map(info => info.classList.remove('simply'));
      }
      bubble();
    });
  };

  render() {
    return (
      <div className="LottoMap">
        <div className="App" id="map"></div>
      </div>
    );
  }
}

export default LottoMap;
