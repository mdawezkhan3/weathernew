import React from "react"

class Form extends React.Component {

    render() {
        return (
        <form onSubmit={this.props.getWeather}>
            <input placeholder="City..."  type="text" name="city" />
            <input placeholder="Country..." type="text" name="country" />
            <button>Get Weather</button>
        </form>
        )
    }
}

export default Form