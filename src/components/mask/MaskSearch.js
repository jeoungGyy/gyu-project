import React from 'react';
import './MaskSearch.scss';

const MaskSearch = ({ onSelectChoice, onInputChoice, onSelectPress }) => {
  return (
    <div className="MaskSearch">
      <h2>공적마스크 재고 확인</h2>
      <p className="h2t">
        (API가 중지됐습니다. 현재 내용은 7월 12일 마지막 데이터입니다. 이벤트
        발생 시 에러 납니다.)
      </p>

      <div className="search">
        <input
          type="text"
          placeholder="지역검색"
          onChange={onInputChoice}
          onKeyPress={onSelectPress}
        />
        <button type="button" onClick={onSelectChoice}>
          검색
        </button>
      </div>

      <ul>
        <li>
          * 마스크 사용 지침 및 공적 마스크 관련 안내는
          <a
            href="http://blog.naver.com/kfdazzang/221839489769"
            target="_blank"
            rel="noopener noreferrer"
          >
            [식약처 홈페이지]
          </a>
          를 참고하세요.
        </li>
        <li>
          * 마스크사자에서 제공하는 공적마스크 판매정보는 5분 이상 지연된
          정보입니다.
        </li>
        <li>* 일선에서 수고하시는 약사님들께 감사의 마음을 전합니다.</li>
        <li>
          * 실제 약국에 있는 재고량과 오차가 발생할 수 있으니 절대로 현장에 계신
          약사님들께 문제를 제기하지 말아주세요.
        </li>
      </ul>
    </div>
  );
};

export default MaskSearch;
