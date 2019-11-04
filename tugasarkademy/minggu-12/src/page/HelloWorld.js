import React, {Component} from'react';

class HelloWorld extends Component{
state = {
    nama : 'Code',
    age: 16,
    gender: 'Laki-Laki',
    number: 0
}

   //Metode lain inisiasi state
   // constructor(props) {
   // super (props)
   // this.state = {
   // nama: 'asdwasdwasd'
  // }
  // }

componentDidMount(){
    this.setState({
        nama : 'HELLOOOOOO',
        age: 50,
        gender : 'ciwiciwi',
    })
} 
handleAddvalue() {
    this.setState({
        number:
        this.state.number +1
    })
}

handleMinvalue() {
    if(this.state.number > 0)
    {
    this.setState({
        number:
        this.state.number -1
    })
}
}

handleResetvalue () {
    this.setState ({
        number : 0
    })
  }

  render(){
      return (
          <div>
              <h1>Hello World{this.state.nama}My age is: {this.state.age} My gender is:{this.state.gender}</h1>
              <div>
                  <h1><b>{this.state.number}</b></h1>
                  <button onClick={() => this.handleAddvalue()}>Tambahkan 1</button>
                  <button onClick={() => this.handleMinvalue()}>Kurangkan 1</button>
                  <button onClick={() => this.handleResetvalue()}>Reset</button>
              </div>
          </div>
      )
  }
}

export default HelloWorld;