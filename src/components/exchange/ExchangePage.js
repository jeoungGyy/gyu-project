import React, { useState } from 'react';
import axios from 'axios';

const ExchangePage = () => {
  const [img, setImg] = useState('');
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64

  const [bo, setBo] = useState([]);

  const onChange = (e) => {
    let reader = new FileReader();

    console.log(e.target.files[0]);

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
  const profile_preview = <img alt="" src={imgBase64} />;

  const onClick = async () => {
    const formData = new FormData();
    formData.append('file', img);
    // 서버의 upload API 호출
    await axios.post('/api/img/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const list = async () => {
    try {
      await axios.get('/api/img').then(function (result) {
        setBo(result.data);
      });
    } catch (e) {
      console.log('Error: ddd 실패했습니다.');
    }
  };

  function _imageEncode(arrayBuffer) {
    // let u8 = new Uint8Array(arrayBuffer);
    let b64encoded = btoa(
      [].reduce.call(
        new Uint8Array(arrayBuffer),
        function (p, c) {
          return p + String.fromCharCode(c);
        },
        ''
      )
    );
    let mimetype = 'image/jpeg';
    return 'data:' + mimetype + ';base64,' + b64encoded;
  }

  const aa = bo.map((info, index) => {
    const test = _imageEncode(info.img.data.data);
    return <img alt="" src={test} key={index} />;
  });

  return (
    <>
      <div>
        <input type="file" name="file" onChange={onChange} />
        <button onClick={onClick}>제출</button>
        <br />
        {profile_preview}
        <br />
        <br />
        <hr />
        <div>
          <div>{aa}</div>
          <div>
            <button onClick={list}>불러오기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangePage;
