import TitleImg from './title.png';
import PersonImg from './person.png';
import NameInputImg from './name-input.png';
import GoToQuestionImg from './go-to-question.png';
import Container from '../Container';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <Container>
      <div className="intro v-center">
        <img className="title-img mb-5 mw-70" src={TitleImg} alt="" />
        <img className="person-img" src={PersonImg} alt="" />
        <div className="name-input-container">
          <input
            className="name-input"
            type="text"
            placeholder="자신의 이름을 넣어주세요!"
          />
          <img className="name-input-img" src={NameInputImg} alt="" />
        </div>
        <Link to="/q1">
          <img src={GoToQuestionImg} alt="" />
        </Link>
      </div>
    </Container>
  );
}

export default Intro;
