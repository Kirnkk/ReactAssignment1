import React, { useReducer, useState } from 'react'

const UnlockKey = () => {


  const [pass,setPass]=useState(0)

  const reducer=(state,action)=>{

    switch(action.type){
      case 'PRESS_BUTTON':{
        switch(action.payload){
          case "1":{
            if(pass===5){
              return state='Access Granted! Safe UnLocked.'
            }
            else{
              setPass(0);
              return state="Reset!"
            }
          }
          case "5":{
            if(pass===2){
              setPass(pass+1)
              return state='***'
            }
            else{
              setPass(0);
              return state="Reset!"
            }
          }
          case "9":{
            if(pass===3){
              setPass(pass+1)
              return state='****'
            }
            else{
              setPass(0);
              return state="Reset!"
            }
          }
          case "A":{
            if(pass===0){
              setPass(pass+1)
              return state='*'
            }
            else{
              setPass(0);
              return state="Reset!"
            }
          }
          case "D":{
            if(pass===4){
              setPass(pass+1)
              return state='*****'
            }
            else{
              setPass(0);
              return state="Reset!"
            }
          }
          case "S":{
            if(pass===1){
              setPass(pass+1)
              return state='**'
            }
            else{
              setPass(0);
              return state="Reset!"
            }
          }
          default : return 'Try Again'
        }
      }
    default :return state='Try Again With Right Password!';
    }

  }
  const[state,dispatch] = useReducer(reducer,'Enter Password')
  return (
    <div>
       <h2>KeyPad</h2>
       <br/>
       <hr/>
      <p>Input:{state}</p>
      <button onClick={()=>{dispatch({type:'PRESS_BUTTON',payload:'1'})}}>1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{dispatch({type:'PRESS_BUTTON',payload:'5'})}}>5</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{dispatch({type:'PRESS_BUTTON',payload:'9'})}}>9</button><br/><br/>
      <button onClick={()=>{dispatch({type:'PRESS_BUTTON',payload:'A'})}}>A</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{dispatch({type:'PRESS_BUTTON',payload:'S'})}}>S</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{dispatch({type:'PRESS_BUTTON',payload:'D'})}}>D</button><br/><br/>
    </div>
)
}

export default UnlockKey