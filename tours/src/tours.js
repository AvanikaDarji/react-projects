import React from "react";
import Tour from "./tour";

const Tours = ({ tours, removeTour }) => {
    return ( <
        section >
        <
        div className = "title" >
        <
        h2 > Our tours < /h2> <
        div className = "underline" > < /div> < /
        div >

        {
            tours.map((tour) => {
                return <Tour key = { tour.id } {...tour }
                removeTour = { removeTour } > < /Tour>;
            })
        }

        <
        /section>
    );
};

export default Tours;