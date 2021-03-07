import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './matrixcss/style.css' ;
import myimg from './imageInPublic.png';

function App() {
  return (
    <div className="appjsx">
     <h1 className={"title red"}> mohamed dhahri</h1>
      <br></br>
      <img src={myimg} alt="bootstraplogo" />
      <br></br>
      <img src="/imageInPublic.png" alt="" />
       <br></br>
      
      <video style={{width:320,height:240}} controls>
       <source src="myvedio.mp4" type="video/mp4"></source>
       </video>
    </div>
   
   
  );

}

export default App ;

