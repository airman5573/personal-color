import Step11Img from './step11.png';
import Choice1Img from './choice-1.png';
import Choice2Img from './choice-2.png';
import Container from '../Container';
import { useContext } from 'react';
import { AppContext } from '../Store';
import { useNavigate } from 'react-router-dom';
import { ColorType, Path } from '../types';
import { getColorType } from '../utils';

function Q11Warm() {
  const navigation = useNavigate();
  const { responses, updateResponses } = useContext(AppContext);
  const handleClick = (choice: number) => {
    responses[11] = choice;
    updateResponses([...responses]);
    const colorType = getColorType(responses);
    if (colorType === ColorType.SpringWarm) {
      navigation(Path.spring);
    } else if (colorType === ColorType.AutumnWarm) {
      navigation(Path.autumn);
    }
  };

  return (
    <Container>
      <div className="q11 q11-warm v-center">
        <img src={Step11Img} alt="" />
        <div className="grid-1">
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

export default Q11Warm;
