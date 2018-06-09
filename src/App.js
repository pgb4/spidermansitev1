import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { villains } from './villains.js'
import './App.css'
import Sticky from './Sticky';

class App extends Component {
  constructor() {
    super()
    this.state = {
      villains: villains,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  render() {
    const filteredVillains = this.state.villains.filter(villain => {
      return Object.values(villain).join(" ").toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className = 'tc'>
        <Sticky>
          <h1 className='f1'>Spider-Man's Greatest Nemeses</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
        </Sticky>
        <div style={{paddingTop: '280px', zIndex: '0', overflow: 'auto', width: '100%', background: 'linear-gradient(to right, rgba(165,0,0,1) 0%, rgba(50,104,189,1) 100%'}}>
          <CardList villains={filteredVillains} />
        </div>
      </div>
    );
  }
}

export default App;
