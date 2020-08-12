import React from "react";

const Cards = (props) => {
    return(
        <>
          <div className="card col-4">
                <img src={props.imgSrc} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text">{props.para} </p>
                    <a className="btn btn-info" target="_blank" href={props.link}>link</a> 
                </div>
           </div>
        </>
    )
}

export default Cards