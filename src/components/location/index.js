import React from "react";

const Location =()=>{
return(
<div className="location_wrapper">
            
            <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482634.6948887454!2d72.60097887025198!3d19.082039055721467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1658347071954!5m2!1sen!2sin"
                
                 width="100%" 
                height="500px" 
                frameBorder="0"
                title="gglemaps" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
)
}
export default Location;