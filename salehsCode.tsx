import React, { Component, ChangeEvent } from 'react';


interface SpotifyAuthState {
  token: string;
}

class SpotifyAuth extends Component<{}, SpotifyAuthState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    const client_id: string = '4b8ab60857d248d789e298cc29c88f8f';
    const client_secret: string = 'e1102c7222d24e10bd366fcbcd9ebfb9';
    const details = 'grant_type=client_credentials';

    const formBody = details;

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
      },
      body: formBody
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ token: data.access_token });
    })
    .catch(error => console.error(error));
  }

  render() {
    return <div>{this.state.token}</div>;
  }
}

export default SpotifyAuth;