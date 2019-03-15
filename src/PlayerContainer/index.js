import React, { Component } from 'react';
import listOfSongs from '../Utils/listOfSongs';
import './PlayerContainer.css';

class PlayerContainer extends Component {
	constructor() {
		super();
		this.state = {
			activeSong: null
		};
	}
	
	componentDidMount() {
		const randomSong = '';
		this.setState({activeSong: randomSong});
	}
	
	render() {
		return (
			<div className="player-container">
				<div className="player-now-playing">Now playing:</div>
				<div className="player-title"></div>
				<div className="player-metadata"></div>
				<div className="player-song"></div>
			</div>
		);
	}
}

export default PlayerContainer;