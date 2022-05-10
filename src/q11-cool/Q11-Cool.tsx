import Step11Img from './cool-step11.png';
import Choice1Img from './q11-cool-choice-1.png';
import Choice2Img from './q11-cool-choice-2.png';
import Container from '../Container';
import { useContext, useState } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { ColorType, Path } from '../types';
import { getColorType } from '../utils';

function Q11Cool() {
  const allImageCount = 3;
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    responses[11] = choice;
    updateResponses([...responses]);
    const colorType = getColorType(responses);
    if (colorType === ColorType.SummerCool) {
      navigation(Path.summer);
    } else if (colorType === ColorType.WinterCool) {
      navigation(Path.winter);
    }
  };

  return (
    <Container isAllImageLoaded={allImageCount === loadedImageCount}>
      <div className="q11 q11-cool v-center">
        <img
          src={Step11Img}
          alt=""
          onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
        />
        <div className="grid-1">
          <button onClick={() => handleClick(1)}>
            <img
              src={Choice1Img}
              alt=""
              onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
            />
          </button>
          <button onClick={() => handleClick(2)}>
            <img
              src={Choice2Img}
              alt=""
              onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Q11Cool;
