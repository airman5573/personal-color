import Step3Img from './step3.png';
import Choice1Img from './q3-choice-1.png';
import Choice2Img from './q3-choice-2.png';
import Container from '../Container';
import { useContext, useState } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { Path } from '../types';
import { resetArrFrom } from '../utils';

function Q3() {
  const allImageCount = 3;
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  const handleClick = (choice: number) => {
    const arr = resetArrFrom(responses, 3);
    arr[3] = choice;
    updateResponses([...arr]);
    navigation(Path.q4);
  };
  return (
    <Container isAllImageLoaded={allImageCount === loadedImageCount}>
      <div className="q3 v-center">
        <img
          src={Step3Img}
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

export default Q3;
