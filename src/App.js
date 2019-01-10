import React from "react";
//this react modules lives somewhere 
//between the node modules.
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const API_KEY = "7d89999e8c97c1a7846dae9f806d9ea4";

class App extends React.Component{
	state = {
		temperature: undefined,
		city:undefined,
		country:undefined,
		humidity:undefined,
		description:undefined,
		error:undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`); 
		const data  = await api_Call.json();
		if(city && country){
			console.log(data);
			this.setState({
				temperature: parseInt(data.main.temp - 273.15),
				city:data.name,
				country:data.sys.country,
				humidity:data.main.humidity,
				description:data.weather[0].description,
				error:undefined
			});
		}else{
			this.setState({
				temperature: undefined,
				city:undefined,
				country:undefined,
				humidity:undefined,
				description:undefined,
				error:"Please enter the value."
			});
		}
	}
	render (){
		//we can only return one parent element.
		return (
			<div>
				<div className = "wrapper">
					<div className = "main">
						<div className = "container">
							<div className = "row">
								<div className = "col-xs-5 title-container">
									<Titles />
								</div>
								<div className = "col-xs-7 form-container">
									<Titles />
									<Form getWeather={this.getWeather}/>
									<Weather 
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default App;