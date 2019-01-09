import React from "react";
//this react modules lives somewhere 
//between the node modules.
import Titles from "./components/Titles";


class App extends React.Component{
	render (){
		//we can only return one parent element.
		return (
			<div>
				<Titles />
			</div>
		);
	}
};

export default App;