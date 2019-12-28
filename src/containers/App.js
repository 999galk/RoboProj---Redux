import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
//import { robots } from './robots'; --> this is what we would use if we wanted to use a static file in our library
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';
import './App.css';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots : state.requestRobots.robots,
		isPending : state.requestRobots.isPending,
		error : state.requestRobots.error
	}
}
//dispatch is what triggers the actions
const mapDispatchToProps = (dispatch) =>{
	return {
		OnSearchChange : (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots : () => dispatch(requestRobots())
	}
}

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
	So it will run render() again
	It was remoed due to redux */
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		robots : []
	// 	}
	// }

	//This is a function called once the component is mounted. 
	componentDidMount(){
		this.props.onRequestRobots();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => response.json())
		// 	.then(users =>{this.setState({robots : users})});
	}
	
	render(){
		const { searchField, OnSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
		<h1> Loading.....</h1> :
		(
		<div className='tc'>
			<h1 className='f2'>Robofriends</h1>
			<SearchBox searchChange={OnSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots}/>
				</ErrorBoundary>
			</Scroll>
		</div>
		);
	}
}

//The connect is used to subscribe the App container to the redux store to get state changes from it
export default connect(mapStateToProps, mapDispatchToProps)(App);