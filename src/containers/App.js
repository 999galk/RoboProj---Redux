import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; --> this is what we would use if we wanted to use a static file in our library
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

/*const state = {
	robots : robots,
	searchfield : ''
}*/
//state is what describes your app, says that robots and searchfield can change and affect our app.
//It usually lives in the parent component (in our case 'App') 

class App extends Component{
	/*The order of calls to the functions (its react built in do no need to call them) is :
	constructor -> componentWillMount(we don't have it) -> render() -> componentDidMount()
	Due to the fact we have an update inside the componentDidMount() it will also run the Update methods flow
	So it will run render() again */
	constructor(){
		super()
		this.state = {
			robots : [],
			searchfield : ''
		}
	}

	//This is a function called once the component is mounted. 
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users =>{this.setState({robots : users})});
	}

	OnSearchChange = (event) => {
		this.setState({ searchfield : event.target.value })
	}
	
	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1 className='f2'>Robofriends</h1>
			<SearchBox searchChange={this.OnSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots}/>
				</ErrorBoundary>
			</Scroll>
		</div>
		);
	}
}

export default App;