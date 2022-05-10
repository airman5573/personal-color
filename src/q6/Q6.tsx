import Step6Img from './step6.png';
import Choice1Img from './q6-choice-1.png';
import Choice2Img from './q6-choice-2.png';
import Container from '../Container';
import { useContext, useState } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { Path } from '../types';
import { resetArrFrom } from '../utils';

function Q6() {
  const allImageCount = 3;
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    const arr = resetArrFrom(responses, 6);
    arr[6] = choice;
    updateResponses([...arr]);
    navigation(Path.q7);
  };
  return (
    <Container isAllImageLoaded={allImageCount === loadedImageCount}>
      <div className="q6 v-center">
        <img
          src={Step6Img}
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

export default Q6;
