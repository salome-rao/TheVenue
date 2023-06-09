import React,{useEffect,useState} from "react";
import {Fade,Slide} from "react-awesome-reveal";
import MyButton from "../utils/MyButton";
const Discount =()=>{

    const end=30;
    const [start,setStart] =useState(0);
const percentage=()=>{
  if(start<end){
  
    setStart(prevCount=> prevCount+1)
  }
}

useEffect(()=>{
    if( start > 0 && start < 30){
        setTimeout(()=>{
            setStart(prevCount => prevCount+1)
        },30)
    }
},[start])

return(
    <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade 
          onVisibilityChange={ (inView)=>{
            if(inView){
                percentage()
            }
          }}
          
          >
             <div className="discount_porcentage">
                <span>{start}%</span>
                <span>OFF</span>
             </div>


          </Fade>
           <Slide right>
             <div className="discount_description">
                <h3>
                    Purchase ticket before  20th June
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
               <MyButton
               text="purchase ticket"
               link="https://www.youtube.com/"
               style={{
                background:'#ffa800',
                color:'#ffffff',
                
               }}
               />
             </div>

           </Slide>

        </div>
    
    </div>
)


}
export default Discount;