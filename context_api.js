import React,{useContext,useState} from "react";
import {data1} from "./data1";

const PersonContext=React.createContext();//creation of context in parent

const ContextAPI = ()=>{
    const [people,setPeople]=useState(data1);
    const removePerson =(id) =>{
        setPeople((people) => {
            return people.filter((person) =>person.id !== id);
        });
    }

    return (
        <PersonContext.Provider value={{ removePerson,people}}>
            <h3>context API/useContext</h3>
            <List/>
        </PersonContext.Provider>
    );
};

const List =()=>
{
    const mainData =useContext(PersonContext);
    console.log(mainData);

return (
    <>
    {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
    })}
    </>
);
}
const SinglePerson =({id,name}) =>{
    const{removePerson} =useContext(PersonContext);//usecontext hook
    return(
        <div className="item">
            <h3 style={{color:"red"}}><i><b>Hello!{name}</b></i></h3>
            <img src="tour1.jpg"  alt="My Awesome Image"/>
            <br></br>
            <button onClick={() =>removePerson(id)}>remove</button>
        </div>
    )
}
export default ContextAPI;