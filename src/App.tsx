import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Store from './Store';
import Intro from './intro/Intro';
import Q1 from './q1/Q1';
import Q2 from './q2/Q2';
import Q3 from './q3/Q3';
import Q4 from './q4/Q4';
import Q5 from './q5/Q5';
import Q6 from './q6/Q6';
import Q7 from './q7/Q7';
import Q8Cool from './q8-cool/Q8-Cool';
import { Path } from './types';
import Q9Cool from './q9-cool/Q9-Cool';
import Q10Cool from './q10-cool/Q10-Cool';
import Q11Cool from './q11-cool/Q11-Cool';
import Q8Warm from './q8-warm/Q8-Warm';
import Q9Warm from './q9-warm/Q9-Warm';
import Q10Warm from './q10-warm/Q10-Warm';
import Q11Warm from './q11-warm/Q11-Warm';
import ResultSummerCool from './result-summer-cool/ResultSummerCool';
import ResultWinterCool from './result-winter-cool/ResultWinterCool';
import ResultSpringWarm from './result-spring-warm/ResultSpringWarm';
import ResultAutumnWarm from './result-autumn-warm/ResultAutumnWarm';

function AppRoutes() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={600}>
        <Routes location={location}>
          <Route path={Path.home} element={<Intro></Intro>}></Route>
          <Route path={Path.q1} element={<Q1></Q1>}></Route>
          <Route path={Path.q2} element={<Q2></Q2>}></Route>
          <Route path={Path.q3} element={<Q3></Q3>}></Route>
          <Route path={Path.q4} element={<Q4></Q4>}></Route>
          <Route path={Path.q5} element={<Q5></Q5>}></Route>
          <Route path={Path.q6} element={<Q6></Q6>}></Route>
          <Route path={Path.q7} element={<Q7></Q7>}></Route>
          <Route path={Path.q8cool} element={<Q8Cool></Q8Cool>}></Route>
          <Route path={Path.q9cool} element={<Q9Cool></Q9Cool>}></Route>
          <Route path={Path.q10cool} element={<Q10Cool></Q10Cool>}></Route>
          <Route path={Path.q11cool} element={<Q11Cool></Q11Cool>}></Route>
          <Route path={Path.q8warm} element={<Q8Warm></Q8Warm>}></Route>
          <Route path={Path.q9warm} element={<Q9Warm></Q9Warm>}></Route>
          <Route path={Path.q10warm} element={<Q10Warm></Q10Warm>}></Route>
          <Route path={Path.q11warm} element={<Q11Warm></Q11Warm>}></Route>
          <Route path={Path.q11warm} element={<Q11Warm></Q11Warm>}></Route>
          <Route
            path={Path.summer}
            element={<ResultSummerCool></ResultSummerCool>}
          ></Route>
          <Route
            path={Path.winter}
            element={<ResultWinterCool></ResultWinterCool>}
          ></Route>
          <Route
            path={Path.spring}
            element={<ResultSpringWarm></ResultSpringWarm>}
          ></Route>
          <Route
            path={Path.autumn}
            element={<ResultAutumnWarm></ResultAutumnWarm>}
          ></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Store>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
