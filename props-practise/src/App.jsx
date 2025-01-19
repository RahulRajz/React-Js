import Card from "./components/Card";
import Ram from './assets/img1.jpg'
import Shyam from './assets/img2.jpg'
import Mohan from './assets/img3.jpg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = ()=>{
  return <>
    <div className="container">
      <Card name ="Ram" desc ="Ram Desc" img={Ram}/>
      <Card name ="Shyam" desc ="Shyam Desc" img={Shyam}/>
      <Card name ="Mohan" desc ="Mohan Desc" img={Mohan}/>
    </div>
  </>
}
export default App;