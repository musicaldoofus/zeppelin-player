import React, { Component, Fragment } from 'react';
import './Banner.css';

class Banner extends Component {
	constructor() {
		super();
		this.state = {
			classNames: 'banner'
		};
	}
	
	componentDidMount() {
		window.setTimeout(() => this.setState({classNames: 'banner fade-in'}), 100);
		window.setTimeout(() => this.setState({classNames: 'banner fade-out'}), 1000);
		window.setTimeout(this.props.trigger, 1300);		
	}
	
	render() {
		const message = 'Ramble on!';
		return (
			<Fragment>
				<div className="banner-bg"></div>
				<div className="banner-container">
					<div className={this.state.classNames}>
						<p>{message}</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Banner;