import Top1Img from './summer-cool-top-1.png';
import Top2Img from './summer-cool-top-2.png';
import Top3Img from './summer-cool-top-3.png';
import BottomImg from './summer-cool-bottom.png';
import Choice1Img from './summer-cool-choice-1.png';
import Choice2Img from './summer-cool-choice-2.png';
import LoadMoreImg from './summer-cool-load-more.png';
import { useEffect } from 'react';
import { useState } from 'react';

function ResultSummerCool() {
  const [name, setName] = useState('김컬러');
  useEffect(() => {
    const _name = localStorage.getItem('personal-color-name');
    setName(_name ?? '김컬러');
    const $app = document.querySelector('#root');
    if (!$app) return;
    $app.classList.contains('h100') && $app.classList.remove('h100');
    return () => {
      !$app.classList.contains('h100') && $app.classList.add('h100');
    };
  }, []);
  return (
    <div className="result-page result-summer-cool">
      <div className="top">
        <div className="text-center">
          <img src={Top1Img} />
        </div>
        <div className="flex-center">
          <span>{name}</span>
          <img src={Top2Img} />
        </div>
        <div>
          <img src={Top3Img} />
        </div>
      </div>
      <div className="grid-2">
        <a
          href="https://lenssis-kr.com/26/?idx=124"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Choice1Img} alt="" />
        </a>
        <a
          href="https://lenssis-kr.com/23/?idx=286"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Choice2Img} alt="" />
        </a>
      </div>
      <img src={BottomImg} alt="" />
      <a
        href="https://lenssis-kr.com/personal_summer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LoadMoreImg} alt="" />
      </a>
    </div>
  );
}

export default ResultSummerCool;
