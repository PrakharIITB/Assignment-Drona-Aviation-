import React from "react";
import { useState } from "react";

export default function Search(){
    const [city, setcity] = useState();

    const submit = () =>{
        console.log(city);
        this.props.parentCallback(city);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          submit();
        }
      };
    return(
        <div>
           <input type="text" 
           className="search-bar"
           placeholder="Search for cities"
           onChange={(e) => setcity(e.target.value)}
           onKeyDown={handleKeyDown}
           />
        </div>
    )
}