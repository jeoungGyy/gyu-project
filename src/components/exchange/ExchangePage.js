import React, { useState } from 'react';
import axios from 'axios';

const ExchangePage = () => {
  const [img, setImg] = useState('');
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64

  const onChange = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImg(e.target.files[0]); // 파일 상태 업데이트
    }
  };

  const profile_preview = <img alt="" src={imgBase64}></img>;

  const onClick = async () => {
    const formData = new FormData();
    formData.append('file', img);
    // 서버의 upload API 호출
    const res = await axios.post('/api/img/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
  };

  return (
    <>
      <div>
        <input type="file" name="file" onChange={onChange} />
        <button onClick={onClick}>제출</button>
        <br />
        {profile_preview}
      </div>
    </>
  );
};

export default ExchangePage;
