import React from "react";
//import Popup from 'reactjs-popup';

export default function Hello()
{
let handleclick =()=>
{
    console.log("model");
}
 return(
      <>
     <center><button onClick={handleclick}>show model</button></center>
    </>
 )
}


///index.js

import React,{useState,useReducer} from "react";
import Modal from "./Modal";
import {reducer } from "./reducer";

const defaultState={
    people:[],
    isModelOpen:false,
    modalContent:"",
};

const Index =()=>
{
    const [name,setName]=useState("");
    const [state,dispatch]=useReducer(reducer,defaultState);
    const handleSubmit=(e)=>{
        e.preventDefault();
        {
            if(name){
                const newItem={id:new Date().getTime().toString(),name};
                dispatch({type:"ADD_ITEM" ,payload:newItem});
                setName("");
            }
            else{
                dispatch({type:"NO VALUE"});
            }
        };
        const closeModel=()=>{
           dispatch({type:"CLOSE_MODEL"});
        }
    }
}