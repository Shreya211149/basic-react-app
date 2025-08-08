//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import MsgBox from './MsgBox'
//import ProductTab from './productTab';
//import Button from './button';
//import LikeButton from './LikeButton';
//import LudoBoard from './LudoBoard';
//import TodoList from './TodoList';
import Ticket from './Ticket';
import Lottery from './Lottery';

function App() {
  return (
    <>
    <h3>Welcome to Lottery !!!</h3>
    <Lottery n={5} winningSum={30}/>
   
    </>
  );
}

export default App;
