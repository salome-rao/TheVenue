import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";
const MyButton =(props)=>{
return (
    <div>
    <Button
    href={props.link}
    variant="contained"
    size={props.size?props.size:'large'}
    style={{
        ...props.style
    }}
    >
     {props.text}
    </Button>
    </div>
    
)

}
export default MyButton;