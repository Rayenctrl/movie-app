import React from 'react'
import {Link} from "react-router-dom";

export default function Title({match,data}) {
    var movie=data.find(p=>p.name===match.params.title)
    
    return (
        
        <div>
           {console.log(match.params)} 
            <h1><Link to="/">Home</Link></h1><br/>
            <h2>{movie.name}</h2> <br/>
            <h2>{movie.description}</h2>
        </div>
    )
}
