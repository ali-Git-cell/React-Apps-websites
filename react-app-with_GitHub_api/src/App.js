import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true});
     const res = await axios.get("https://api.github.com/users");
     console.log(res);
     this.setState({users: res.data, loading: false});
  }



  render() {
    const numbers = [1,2,43,543,654]


    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );

  }
}

export default App;
