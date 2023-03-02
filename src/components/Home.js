import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import {Button} from '@mui/material'

export default function Home(){


    
    return(
        <div className="landing-div">
            <div className="weather">
                <Button variant="contained" className="btn-3"><Link to={'/weather'}>Weather</Link></Button>
            </div>
            <div className="news">
                <Button variant="contained" color="success" className="btn-3"><Link to={'/news'}>News</Link></Button>
            </div>
        </div>
    )
}