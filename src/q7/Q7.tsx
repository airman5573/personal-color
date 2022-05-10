import Step7Img from './step7.png';
import Choice1Img from './q7-choice-1.png';
import Choice2Img from './q7-choice-2.png';
import Container from '../Container';
import { getColorType, resetArrFrom } from '../utils';
import { useContext, useState } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { ColorType, Path } from '../types';

function Q7() {
  const allImageCount = 3;
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    const arr = resetArrFrom(responses, 7);
    arr[7] = choice;
    updateResponses([...arr]);
    const colorType = getColorType(responses);
    if (colorType === ColorType.Cool) {
      navigation(Path.q8cool);
    } else if (colorType === ColorType.Warm) {
      navigation(Path.q8warm);
    }
  };

  return (
    <Container isAllImageLoaded={allImageCount === loadedImageCount}>
      <div className="q7 v-center">
        <img
          src={Step7Img}
          alt=""
          onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
        />
        <div className="grid-2">
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

export default Q7;
