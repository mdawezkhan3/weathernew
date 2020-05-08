import React from "react";
import Titles from "./components/Titles"
import Form from "./components/form"
import Weather from "./components/weather"
import "./App.css";

const API_KEY="2a729e1d2fe69728b58f1e5150026a1d"


class App extends React.Component {
state={
  city: "",
  country: "",
  description: "",
   humidity: "",
   error: "",
   temperature: ""

}

 getWeather= async (e)=> {
e.preventDefault()
const city =e.target.elements.city.value
const country=e.target.elements.country.value
if(city && country){

  const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
  const data= await api_call.json()

  if (data.cod == 404) {
    this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Input doesn't match any known location!"
    })
    
} 
 else{
  this.setState({
    city: data.name,
    country:data.sys.country,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    error: ""
  })
}
}
  else {

    this.setState({
      city: "",
      country:"",
      temperature:"",
      description: "",
      humidity:"",
      error: "Please enter the values."
    })
  }

  
}

  render() {
    
return(
  <div>
        <div className="wrapper">
                <div className="title-container">
                  <Titles />
                </div>
                <div className=" form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                
                </div>
            
          
        </div>
  </div>
)
  }
}
export default App