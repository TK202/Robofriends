import React, {Component} from "react";
import Cardlist from "../Components/Cardlist";
import {robots} from "./robots";
import SearchBox from "../Components/SearchBox";
import "tachyons" ;
import "../Containers/App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			Searchfield: ""
		};
	}

	onSearchChange = (event) => {
		this.setState({Searchfield: event.target.value})
		
		}
		// console.log(filterRobots);


	

	render() {

		const { robots, Searchfield } = this.state;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(Searchfield.toLowerCase())});
	
		return(
		<div className="tc">
			<h1 className="f1">Robofriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<ErrorBoundry>
				<Scroll>
					<Cardlist robots={ filterRobots } />
				</Scroll>
			</ErrorBoundry>
		</div>
		)
	};}

export default App;