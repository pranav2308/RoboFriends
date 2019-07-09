import React from 'react';
import CardList from './CardList';
import { robots } from './robots'
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			robots : robots,
			searchString : "",	
		};
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange = (e) => {
		this.setState({
			searchString : e.target.value,
			robots: robots.filter((robot) => {return (robot.name.toLowerCase().includes(e.target.value.toLowerCase()))})
		})
	}

	render(){
		return(
			<div className = 'tc'>
				<h1 className = 'f1'> RoboFriends </h1>
				<SearchBox onSearchChange = {this.onSearchChange}/>
				<CardList robots = {this.state.robots} />
			</div>
		);
	}
};


export default App;