import React from 'react';


class Counting extends React.Component {
 constructor(){
   super();
   this.state={
     count:0
   }
 }

 componentDidMount() {
    setInterval(() => {
        this.setState({count: this.state.count +1})
     }, 1000)
   }

 Changecounting = () => {
   this.setState({count: this.state.count +1})
  }

render(){
  return (
    <div >
    <h1>counting : {this.state.count}</h1>   
    <button onClick={this.Changecounting}>Cliquer pour compter</button> 
    </div>
  );
}
}

export default Counting;