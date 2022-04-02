import TopImg from './top.png';
import BottomImg from './bottom.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import LoadMoreImg from './load-more.png';
import { useEffect } from 'react';

function ResultSpringWarm() {
  useEffect(() => {
    const $app = document.querySelector('#root');
    if (!$app) return;
    $app.classList.contains('h100') && $app.classList.remove('h100');
    return () => {
      !$app.classList.contains('h100') && $app.classList.add('h100');
    };
  }, []);
  return (
    <div className="result-page result-spring-warm">
      <img src={TopImg} />
      <div className="grid-2">
        <a
          href="https://lenssis-kr.com/1502677752/?idx=230"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Choice1Img} alt="" />
        </a>
        <a
          href="https://lenssis-kr.com/23/?idx=302"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Choice2Img} alt="" />
        </a>
      </div>
      <img src={BottomImg} alt="" />
      <a
        href="https://lenssis-kr.com/personal_spring"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LoadMoreImg} alt="" />
      </a>
    </div>
  );
}

export default ResultSpringWarm;
