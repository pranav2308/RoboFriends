import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props);

		//initializing the state.
		this.state = {
			robots : [],
			searchString : "",	
		};
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	//Fetching the user data from API.
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then(users => this.setState({ robots : users}));	
	}

	onSearchChange = (e) => {
		/*
			Called by searchbox component when user edits the input.
			Updates the state with serach-string typed. 
		*/
		this.setState({
			searchString : e.target.value
		})
	}

	render(){
		const { robots, searchString } = this.state;

		//Filter the robots as per the search-string typed.
		const filteredRobots = robots.filter((robot) => {return (robot.name.toLowerCase().includes(searchString.toLowerCase()))});

		if(!robots.length){
			return <h1 className = 'tc f1'>Loading  robots</h1>;
		}
		else{
			return(
				<div className = 'tc'>
					<h1 className = 'f1'> RoboFriends </h1>
					<SearchBox onSearchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
};


export default App;