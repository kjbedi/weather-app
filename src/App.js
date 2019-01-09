import React from "react";
//this react modules lives somewhere 
//between the node modules.
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const API_KEY = "7d89999e8c97c1a7846dae9f806d9ea4";

class App extends React.Component{
	getWeather = async (e) => {
		e.preventDefault();
		const api_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`); 
		const data  = await api_Call.json();
		console.log(data);
	}
	render (){
		//we can only return one parent element.
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather}/>
				<Weather />
			</div>
		);
	}
};

export default App;