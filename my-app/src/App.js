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

  render(){
  return (
    <div className='main'>
        <h1>Git Hub Highlights</h1>

        <div className='mainCard'>
          <div className='mainCardFlex'>
            <h1>{this.state.user.login}</h1>
            <img src={this.state.user.avatar_url}/>
          </div>
          <div className='mainCardFlex'>
            <h2>User Name: {this.state.user.login}</h2>
            <h2>Bio: {this.state.user.bio}</h2>
            <h2>Location: {this.state.user.location}</h2>
            <h2>Number of GitHub repos: {this.state.user.public_repos}</h2>
            <h2>Following {this.state.user.following} users</h2>
            <h2>{this.state.user.followers} users following me</h2> 
          </div>
        </div>

        <br/>
        <h2>Followers List</h2>
      {this.state.followers.map((follower, key) => (
        <Card follower={follower} key={key}/>
      ))}

    </div>
  );
  }
}

export default App;
