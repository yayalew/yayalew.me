import React from "react"; 
import './App.css';

import Typist from "react-typist";


export default function Intro(){

    return( 

        <div>
            <Typist avgTypingDelay={120}>
           
            {"Hi"}
            
            </Typist>

        </div>
    )
}