import Step1Img from './step1.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import Choice3Img from './choice-3.png';
import Choice4Img from './choice-4.png';
import Container from '../Container';
import { Link } from 'react-router-dom';

function Q1() {
  return (
    <Container>
      <div className="q1 v-center">
        <img src={Step1Img} alt="" />
        <div className="grid-4">
          <Link to="/q2">
            <img src={Choice1Img} alt="" />
          </Link>
          <Link to="/q2">
            <img src={Choice2Img} alt="" />
          </Link>
          <Link to="/q2">
            <img src={Choice3Img} alt="" />
          </Link>
          <Link to="/q2">
            <img src={Choice4Img} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Q1;