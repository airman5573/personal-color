import TitleImg from './title.png';
import PersonImg from './person.png';
import NameInputImg from './name-input.png';
import GoToQuestionImg from './go-to-question.png';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Path } from '../types';
import { useEffect } from 'react';

function Intro() {
  const allImageCount = 4;
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  const [fontSize, setFontSize] = useState('5vw');
  useEffect(() => {
    if (allImageCount !== loadedImageCount) return;
    requestAnimationFrame(() => {
      const $container = document.querySelector(
        '.wrapper > .container',
      ) as HTMLElement;
      setFontSize(`${$container.offsetWidth * 6.2 * 0.01}px`);
    });
  }, [loadedImageCount]);
  const navigation = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleBtnClick = () => {
    if (!inputRef.current) return;
    const $input = inputRef.current;
    if ($input.value.length === 0) {
      alert('이름을 입력해 주세요');
      return;
    }
    const specialRule = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if ($input.value.length > 5 || specialRule.test($input.value)) {
      alert('올바른 입력을 입력해 주세요');
      return;
    }
    localStorage.setItem('personal-color-name', $input.value);
    navigation(Path.q1);
  };
  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    handleBtnClick();
  };
  return (
    <Container isAllImageLoaded={allImageCount === loadedImageCount}>
      <div className="intro v-center">
        <img
          className="title-img mb-5 mw-70"
          src={TitleImg}
          alt=""
          onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
        />
        <img
          className="person-img"
          src={PersonImg}
          alt=""
          onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
        />
        <div className="name-input-container">
          <input
            className="name-input"
            type="text"
            placeholder="자신의 이름을 넣어주세요!"
            ref={inputRef}
            style={{ fontSize }}
            onKeyUp={handleEnterKeyPress}
          />
          <img
            className="name-input-img"
            src={NameInputImg}
            alt=""
            onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
          />
        </div>
        <button onClick={handleBtnClick}>
          <img
            src={GoToQuestionImg}
            alt=""
            onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
          />
        </button>
      </div>
    </Container>
  );
}

export default Intro;
