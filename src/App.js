import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./component/weather.component";

const API_key = "7da9cc8ca53a06d6e5d867f3451b13d9";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,


    };
    this.getWeather();

  }
  getWeather = async()=>{
    const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7da9cc8ca53a06d6e5d867f3451b13d9');
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      temperature: response.main.temp,
      description: response.weather[0].description

    });
  };
  render(){
    return (
      <div className="App">
        <Weather city={this.state.city}
        country={this.state.country}
        temperature={this.state.temperature}
        description = {this.state.description}
        />

      </div>
    );

  }

}

export default App;
