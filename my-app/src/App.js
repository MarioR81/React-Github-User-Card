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
      // console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => console.log(err));
    axios
    .get('https://api.github.com/users/marior81/followers')
    .then(res => {
      // console.log('card axios', res.data)
      // console.log('card axios', typeof(res.data))
      this.setState({
        followers: res.data
      })
      // console.log(Array.isArray(this.state.followers))
    })
    .catch(err => console.log(err));
  }

  // componentDidUpdate() {
    
  // }

  render(){
  return (
    <div className="App">
        <h2>Git Hub Highlights</h2>
        <h2>{this.state.user.login}</h2>
        <img src={this.state.user.avatar_url}/>
        <p>Following {this.state.user.following} users</p>
        <p>Following {this.state.user.following} users</p>
        <p>Following {this.state.user.following} users</p>
        <p>Location: {this.state.user.location}</p>
        <p>Number of GitHub repos: {this.state.user.public_repos}</p>
        <p>Following {this.state.user.following} users</p>
        <p>{this.state.user.followers} users following me</p> 


      {this.state.followers.map((follower, key) => (
        <Card follower={follower} key={key}/>
      ))}

    </div>
  );
  }
}

export default App;
