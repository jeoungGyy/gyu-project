import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import MaskSearch from './MaskSearch';
import './MaskMap.scss';

let map;
let overlay = null;
let markers = [];
@inject('mask')
@observer
class MaskMap extends Component {
  componentDidMount() {
    this.setKaKaoMap();
  }

  handleInputChoice = (e) => {
    const { mask } = this.props;
    let value = e.target.value;
    mask.actInputChoice(value);
  };
  handleSelectChoice = () => {
    const { mask } = this.props;
    const { kakao } = window;

    if (!mask.inputChoice) {
      return false;
    }

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(mask.inputChoice, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      } else {
        alert('검색할 수 없습니다. 다른 검색어를 입력해 주세요.');
      }
    });
  };
  handleSelectPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSelectChoice();
    }
  };

  setKaKaoMap = () => {
    const { mask } = this.props;
    const { kakao } = window;

    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div

      const mapOption = {
        center: new kakao.maps.LatLng(37.51126602153574, 127.04823318422497), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      mapMarker();

      kakao.maps.event.addListener(map, 'idle', function () {
        // 지도의 중심좌표를 얻어옵니다
        var latlng = map.getCenter();
        mask.actAddrChange(latlng.Ha, latlng.Ga);

        markers.map((info) => info.setMap(null));

        mapMarker();
      });

      function mapMarker() {
        let foo = setInterval(() => {
          if (mask.maskList.length) {
            mask.maskList.map((info) => {
              const content =
                '<div class="bubble ' +
                info.remain_stat +
                '"><p class="s">' +
                info.name +
                '(<span class="num"></span>)</p>';

              overlay = new kakao.maps.CustomOverlay({
                // map: map,
                position: new kakao.maps.LatLng(
                  Number(info.lat),
                  Number(info.lng)
                ),
                content: content,
              });
              overlay.setMap(map);
              markers.push(overlay);

              return false;
            });

            clearInterval(foo);
          } else {
            return false;
          }
        }, 0);
      }
    });
  };

  render() {
    const { handleSelectChoice, handleInputChoice, handleSelectPress } = this;

    return (
      <div className="MaskMap">
        <MaskSearch
          onSelectChoice={handleSelectChoice}
          onInputChoice={handleInputChoice}
          onSelectPress={handleSelectPress}
        />
        <div className="App" id="map" />
      </div>
    );
  }
}

export default MaskMap;
