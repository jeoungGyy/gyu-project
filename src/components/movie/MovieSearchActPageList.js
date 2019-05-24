import React from 'react';

const MovieSearchActPageList = ({
  peopleNm,
  peopleNmEn,
  repRoleNm,
  filmoNames
}) => {
  return (
    <li>
      <ul>
        <li>
          <span>이름:</span> {peopleNm} ({peopleNmEn})
        </li>
        <li>
          <span>분야:</span> {repRoleNm}
        </li>
        <li className="full">
          <span>필모리스트:</span> {filmoNames}
        </li>
      </ul>
    </li>
  );
};

export default MovieSearchActPageList;
