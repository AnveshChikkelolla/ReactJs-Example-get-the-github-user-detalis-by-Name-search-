import React from 'react';
//import './Person.css';
 
const person = (props) =>{
 //       alert(props.id);

    return (
       <div className="Person">
<img width="75" src={props.avatar_url}/>>
<p> Id={props.id} </p><br/>
<p> Name={props.name} </p>
<p> Location={props.location} </p>

  </div>
    )
};

export default person;