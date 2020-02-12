import React from 'react';
import axios from 'axios';
import Card from './components/Card';


class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/marior81')
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => console.log(err));
  }


  render(){
  return (
    <div className="App">
      <h2>Git Hub Highlights</h2>
        <p>{this.state.user.login}</p>
        
        <img src={this.state.user.avatar_url}/>
        <p>{this.state.user.bio}</p>
        <p>{this.state.user.login}</p>
        <p>{this.state.user.login}</p>
        <p>{this.state.user.login}</p>
        <p>
           {/* <Card /> */}
        </p>
    </div>
  );
  }
}

export default App;
