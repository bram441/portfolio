import './App.css';
import Mainpage from './components/Mainpage';
import { useSpring, animated } from 'react-spring'

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <>
      <animated.div style={props}><Mainpage/></animated.div>
    </>
  );
}

export default App;
