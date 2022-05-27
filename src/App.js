
import './App.css';
import Header from "./MyComponent/Header";
import {Bigbox} from "./MyComponent/bigbox";
import {Footer} from "./MyComponent/footer";


function App() {
  let bigbox =[
    {
      sno: 1,
      title: "This Is The Title",
      desc: "This Is The Description"
    },
    {
      sno: 2,
      title: "This Is The Title",
      desc: "This Is The Description"
    },
    {
      sno: 3,
      title: "This Is The Title",
      desc: "This Is The Description"
    }
  ]
  return (
    <>
    <Header title="My Boxes"   />
    <Bigbox  bigbox="{bigbox}"/>
    <Footer/>
    </>
  );
}

export default App;
