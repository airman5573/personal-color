import TitleImg from './title.png';
import PersonImg from './person.png';
import NameInputImg from './name-input.png';
import GoToQuestionImg from './go-to-question.png';

function Intro() {
  return (
    <>
      <div className="intro">
        <img src={TitleImg} alt="" />
        <img src={PersonImg} alt="" />
        <img src={NameInputImg} alt="" />
        <button>
          <img src={GoToQuestionImg} alt="" />
        </button>
      </div>
    </>
  );
}

export default Intro;
