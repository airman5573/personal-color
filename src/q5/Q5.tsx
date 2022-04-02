import Step5Img from './step5.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import Container from '../Container';
import { useContext } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { Path } from '../types';
import { resetArrFrom } from '../utils';

function Q5() {
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    const arr = resetArrFrom(responses, 5);
    arr[5] = choice;
    updateResponses([...arr]);
    navigation(Path.q6);
  };
  return (
    <Container>
      <div className="q5 v-center">
        <img src={Step5Img} alt="" />
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

export default Q5;
