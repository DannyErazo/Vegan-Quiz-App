import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question/Question';

class App extends Component {

//Original State
state = {

showQuiz: false,
title:'Vegan Quiz App'

}


// Handlers 

clickStartHandler=()=>{

const doesShow = this.state.showQuiz


this.setState({
  
  showQuiz:!doesShow,
  title:''



})

alert('Lets Test Your Knowledge About Veganism : Good Luck!')


}







render() {

let show = '' ; 
let button =    ( <button className = 'btn' 
className ='start-btn' 
onClick = {this.clickStartHandler}> Start </button>);

if(this.state.showQuiz) {


  show = (
    <div>

   <Question/>

   <div className = 'controls'>

     <button className = 'control_btn'>Next</button>
     <button className = 'control_btn'>Submit</button>
     
   </div>
    </div>



  );

   button = '';
  

} 
  

    




  return (



    <div className = 'container'>
      
      
  <h1>{this.state.title}</h1>

       <p>{this.state.value}</p>


      {button}
      {show}
    
    </div>
 


  );

}};


export default App;