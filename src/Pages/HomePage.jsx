import React from 'react';

import './HomePage.css';


function HomePage () {
    return(
        <>
        <div
            class = "backgroundImage"
            style = {{
               height: "800px",
               width: "1520px",
               backgroundImage:
               'url("https://wallpapercave.com/wp/wp2636472.jpg")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
            }} >
            <div className="TITLE">
            <h1>HI! It's Me SpongeBob!</h1>
            <img src= "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true" alt='logo'/>
            </div>
             
            
        </div>
        
        </>
    )
}

export default HomePage;