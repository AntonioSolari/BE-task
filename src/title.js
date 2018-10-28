
import React, { Component } from 'react';
class Title extends Component{
  constructor()
  {
    super();
    this.state={
      colors:[],
      titleColor:'#000000',
      title:"Naslov",
    }
  }

  componentDidMount()
  {
    var col=[];
    for(let i=0;i<2;i++)
    {
      fetch('http://www.colr.org/json/color/random')
      .then(res=>res.json()).then(data => col.push('#'+data.colors[0].hex))
    }
    this.setState({colors:col})
    
  }

  changeColor = (e) =>{
    e.preventDefault();
    if(this.state.titleColor==='#000000')
    {
    this.setState({titleColor:this.state.colors[Math.floor(Math.random()*2)]})

    }
    else{
      this.setState({titleColor:'#000000'})

    }
  }
  
  titleChange = (e) => {
    this.setState({title:e.target.value})
    if(this.state.title===''){
      this.setState({title:"Naslov"})
    }
  }

  render() {  
    return (
      <div className="title">
      {
        console.log(this.state.titleColor)
      }
        
      <h1 onClick={this.changeColor}style={{color:this.state.titleColor}}>{this.state.title}</h1>
      <div className="input">
      <input onChange={this.titleChange}>
      </input>
      </div>
      </div>
      
    );
  }
}
export default Title