import Step8Img from './step8.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import Container from '../Container';
import { useContext } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { Path } from '../types';

function Q8Warm() {
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    responses[8] = choice;
    updateResponses([...responses]);
    navigation(Path.q9warm);
  };

  return (
    <Container>
      <div className="q8 q8-cool v-center">
        <img src={Step8Img} alt="" />
        <div className="grid-2">
          <button onClick={() => handleClick(1)}>
            <img src={Choice1Img} alt="" />
          </button>
          <button onClick={() => handleClick(2)}>
            <img src={Choice2Img} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Q8Warm;
