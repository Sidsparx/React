import React from "react";
import ComContent from "./ComContent";

const About = () => {
    return(
        <>
             <ComContent
               title="This page is for"
               subtitle="About Page"
               para="This is my first Raect Project"
               visit="/contact"
               visittitle="visit contact"
           />
        </>
    )
}

export default About