import React from 'react';
import axios from 'axios';
 class Form extends React.Component  {
state={userName:""}

submitHandle=(event)=>{
event.preventDefault();
console.log("event submit",this.state.userName);

axios.get(`https://api.github.com/users/${this.state.userName}`)
 .then(resp=>{
 // console.log(resp);
 this.props.onSubmit(resp.data);
 this.setState({userName:" "});
 });
};


    render(){
return(
<form onSubmit={this.submitHandle}>



<input type="text" 
// ref={(input)=>this.userNameInput=input }
vlaue={this.state.userName}
onChange={(event)=>this.setState({userName:event.target.value})}
placeholder="Git Hub user Name "/> 

<button type="submit" > Click</button >
</form>

);


}



}
export default Form;