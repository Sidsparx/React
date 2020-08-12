import React from "react";
import ComContent from "./ComContent";

const Home = () => {
    return(
        <>
           <ComContent
               title="This page is for"
               subtitle="Home Page"
               para="This is my first Raect Project"
               visit="/about"
               visittitle="visit about"
           />
        </>
    )
}

export default Home