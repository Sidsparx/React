import React from "react";
import {NavLink} from "react-router-dom";

const ComContent = (props) => {
    return(
        <>
           <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-12">
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                    <p>{props.para}</p>
                    <NavLink className="btn btn-info" to={props.visit}>{props.visittitle}</NavLink>
                    </div>
                </div>
           </div>
        </>
    )
}

export default ComContent