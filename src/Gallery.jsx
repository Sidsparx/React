import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Gallery = () => {
    return(
        <>
          <div className="container">
              <div className="row">
                {
                    Sdata.map((value) => {
                       return (
                        <Cards
                            key={value.id} 
                            imgSrc={value.imsrc}
                            title ={value.sname}
                            para={value.stitle}
                            link ={value.slink}
                        />
                       )
                    })
                }
              </div>
          </div>
        </>
    )
}

export default Gallery