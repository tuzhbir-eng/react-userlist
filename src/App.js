import { Component } from "react";
import List from "./components/lists";
import deleteBtn from "./components/deleteBtn";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
    };
  }
 
  render() {
    const { users } = this.state;
    return (
      <>
        <List users={users} selectUser={this.selectUser} deleteUser={this.deleteUser} />
      </>
    );
  }
}

export default App;
