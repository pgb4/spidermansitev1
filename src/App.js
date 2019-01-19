import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { villains } from './villains.js'
import { allies } from './allies.js'
import './App.css'
import Sticky from './Sticky';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'nemeses',
      villains: villains,
      allies: allies,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }
//review your most advanced project to try to understand how you can better set up a way to switch between heroes/villains--like login page
  // onGroupChange = () => {
  //   if(this.state.route==='nemeses') {
  //     this.setState({
  //       route: 'allies'
  //     })
  //   } else {
  //     this.setState({
  //       route: 'nemeses'
  //     })
  //   }
  // }

  render() {
    const filteredVillains = this.state.villains.filter(villain => {
      return Object.values(villain).join(" ").toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    const filteredAllies = this.state.allies.filter(ally => {
      return Object.values(ally).join(" ").toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className = 'tc'>
        <Sticky>
          <h1 className='f1'>Spider-Man's Greatest Nemeses</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
        </Sticky>
          <div style={{paddingTop: '280px', zIndex: '0', overflow: 'auto', width: '100%', background: 'linear-gradient(to right, rgba(165,0,0,1) 0%, rgba(50,104,189,1) 100%'}}>
            <CardList villains={filteredVillains} allies={filteredAllies} route={this.state.route}/>
          </div>
      </div>
    );
  }
}

export default App;
