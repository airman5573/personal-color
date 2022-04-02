import Step2Img from './step2.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import Choice3Img from './choice-3.png';
import Choice4Img from './choice-4.png';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Q2() {
  const allImageCount = 5;
  const [loadedImageCount, setLoadedImageCount] = useState<number>(0);
  return (
    <Container isAllImageLoaded={allImageCount === loadedImageCount}>
      <div className="q2 v-center">
        <img
          src={Step2Img}
          alt=""
          onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
        />
        <div className="grid-4">
          <Link to="/q3">
            <img
              src={Choice1Img}
              alt=""
              onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
            />
          </Link>
          <Link to="/q3">
            <img
              src={Choice2Img}
              alt=""
              onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
            />
          </Link>
          <Link to="/q3">
            <img
              src={Choice3Img}
              alt=""
              onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
            />
          </Link>
          <Link to="/q3">
            <img
              src={Choice4Img}
              alt=""
              onLoad={() => setLoadedImageCount((prevState) => prevState + 1)}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Q2;
