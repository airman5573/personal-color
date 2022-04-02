import Step9Img from './step9.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import Container from '../Container';
import { useContext } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { Path } from '../types';

function Q9Cool() {
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    responses[9] = choice;
    updateResponses([...responses]);
    navigation(Path.q10cool);
  };

  return (
    <Container>
      <div className="q9 q9-cool v-center">
        <img src={Step9Img} alt="" />
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

export default Q9Cool;
