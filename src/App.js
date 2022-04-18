import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'ahmida',
      age:'16',
      address:(this.props.address) + ' madrid'
     }
  }

  changeaddress = () => {
    setTimeout(() => {
          this.setState({address:'italy'})
      }, 3000)

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({address: "algeria"})
    }, 8000)
  }

  render(){
   return (
     <div>
       <button id='btn' onMouseMove={this.changeaddress}>Clicque pour changer l'adresse</button>
       <h1>HELLO YOU {this.state.name}, you are {this.state.age} years old !!!!! born in {this.state.address} and you live in {this.props.address}</h1>

     </div>
   );
}
}

export default App;
