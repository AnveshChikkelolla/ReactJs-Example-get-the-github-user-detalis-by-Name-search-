import  Person  from  './Person';
import React from 'react';
const CardList = (props) =>{
    return (
       <div>
{props.cards.map(cards=><Person{...cards}/>)}
      </div>
    )
};
export default CardList; 