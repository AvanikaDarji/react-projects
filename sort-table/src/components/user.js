import React, { useState, useEffect } from "react";
import axios from "axios";


export default function User() {
    const [userData, setData] = useState([]);
    useEffect(async() => {
        const result = await axios("https://jsonplaceholder.typicode.com/users");
        setData(result.data);
    },[setData]);



const handleChange=(data)=>{
if(data =="Name"){
   sortName();
}if(data=="UserName"){
    sortUserName();
}
}
/*const sortId=()=>{
    const sortedById = [...userData].sort((a,b)=>{
        return b.id - a.id;
    })
    //console.log(sortedById);
    setData(sortedById);
}*/
const sortUserName=()=>{
    const compare=(a,b)=>{
        const aName= a.username.toUpperCase();
        const bName= b.username.toUpperCase();
        let comparison=0;
        if(aName > bName){
            comparison=1;
        }else if(bName > aName){
            comparison = -1;
        }
        return comparison;
    }
    setData([...userData].sort(compare));
}
const sortName=()=>{
    const compare=(a,b)=>{
        const  aName = a.name.toUpperCase();
        const  bName = b.name.toUpperCase();
        let comparison =0;
        if(aName > bName ){
           comparison = 1;
        }else if(aName<  bName){
            comparison = -1;
        }
return comparison;
    }
setData([...userData].sort(compare));
console.log(userData);
}
    return ( < div >
 <table> 
       <thead>
<tr><th>Id</th><th onClick={()=>{handleChange("Name")}}>Name</th><th onClick={()=>{handleChange("UserName")}}>UserName</th><th>Email</th></tr>
       </thead>
       <tbody>
       {
       userData.map((element)=>{
           return(<tr><td>{element.id}</td><td>{element.name}</td> <td>{element.username}</td><td>{element.email}</td></tr>)
       })
       }
       </tbody>
        </table>
        </ div > 
        )

}