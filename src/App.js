import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			robots : [],
			searchString : "",	
		};
		this.onSearchChange = this.onSearchChange.bind(this);
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then(users => this.setState({ robots : users}));	
	}

	onSearchChange = (e) => {
		this.setState({
			searchString : e.target.value
		})
	}

	render(){
		const filteredRobots = this.state.robots.filter((robot) => {return (robot.name.toLowerCase().includes(this.state.searchString.toLowerCase()))});
		if(this.state.robots.length === 0){
			return <h1 className = 'tc f1'>Loading  robots</h1>;
		}
		else{
			return(
				<div className = 'tc'>
					<h1 className = 'f1'> RoboFriends </h1>
					<SearchBox onSearchChange = {this.onSearchChange}/>
					<CardList robots = {filteredRobots} />
				</div>
			);
		}
	}
};


export default App;