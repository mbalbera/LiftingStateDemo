import './App.css';
import USwitch from './components/UniqueSwitch';
import React from 'react';
import CSwitch from './components/ConnectedSwitch';

class App extends React.Component{
  state = {
    switches: [
      true, false, false, false, false
    ],
    hover:false
  }

  flip = (idx)=>{
    console.log('flipping switch #', idx)
    let updated = [...this.state.switches]
    console.log('from: ', updated[idx])
    updated[idx] = !updated[idx]
    console.log('flipping switch #', updated[idx])
    this.setState({switches:updated})
  }

  render(){

    return (
      <div className="App" style={{ marginLeft: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{width:'25%', height:50}}>
          <h1 style={{textAlign:'left'}}>unique</h1>
          <USwitch/>
          <USwitch/>
          <USwitch/>
          <USwitch/>
          <USwitch/>
        </div>
        <div style={{width:'25%', height:50}}>
          <h1 style={{textAlign:'left'}}>connected</h1>
          <CSwitch on={this.state.switches[0]} flip={()=>this.flip(0)}/>
          <CSwitch on={this.state.switches[1]} flip={()=>this.flip(1)}/>
          <CSwitch on={this.state.switches[2]} flip={()=>this.flip(2)}/>
          <CSwitch on={this.state.switches[3]} flip={()=>this.flip(3)}/>
          <CSwitch on={this.state.switches[4]} flip={()=>this.flip(4)}/>
          <div 
            style={{ cursor: 'pointer', backgroundColor: this.state.hover ? '#bbbbbb' :'#dddddd', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, padding:15, marginTop:20}} 
            onClick={() => this.setState({ switches: [false, false, false, false, false]})}
            onMouseEnter={()=>this.setState({hover:true})}
            onMouseLeave={()=>this.setState({hover:false})}
          >
            Click me to switch all Dots off
          </div>
        </div>
      </div>
    );
  }
}

export default App;
