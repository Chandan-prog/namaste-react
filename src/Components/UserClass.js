import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1 : 0,
      count2 : 2
    }
  }

  componentDidMount(){
    console.log('child mounted')
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Count1: {this.state.count1}</h1>
        <h1>Count2: {this.state.count2}</h1>
        <button onClick={() => {
          this.setState(
            {
              count1: this.state.count1+1,
              count2: this.state.count2+1
            }
          )
        }}>Increase</button>
        <h2>name: {name}</h2>
        <h2>location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;