import React from "react";
import UserCard from "./UserCard";
import UserClass from "./UserClass";

// const About = () => {
//     return(<div>
//         <h1>This is about us page</h1>
//         <UserCard/>
//         <UserClass/>
//     </div>)
// }

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("parent mounted");
  }
  render() {
    return (
      <div>
        <h1>This is about us page</h1>
        <UserClass />
      </div>
    );
  }
}
export default About;
