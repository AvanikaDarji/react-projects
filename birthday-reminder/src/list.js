import React from "react";

const Link =({people})=>{
    return(<div>
{people.map((person)=>{
const  {id, name, age,image} = person;
return( 
    <div>
    <article key={id} className="person">
<img src={image} alt={name}></img>
<div>
                <h4>{name}</h4>
<p>{age} years</p>
</div>
</article>
</div>
)
})}
</div>
    )
}
export default Link;