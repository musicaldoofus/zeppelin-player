import React, { Component } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Button from './Button';
import PlayerContainer from './PlayerContainer';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			showMode: 'button',
			isPlayerCollapsed: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		console.log('got click');
		let showMode;
		if (this.state.showMode === 'button') showMode = 'banner';
		if (this.state.showMode === 'banner') showMode = 'player';
		this.setState({showMode});
	}
	
	render() {
		const display = this.state.showMode === 'button' ? <Button onClick={this.handleClick}/> : this.state.showMode === 'banner' ? <Banner trigger={this.handleClick}/> : <PlayerContainer/>;
		return (
			<div className="App">
				<Nav/>
				{display}
			</div>
		);
	}
}

export default App;
