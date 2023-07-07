import React, { Component } from 'react';

interface SpotifyAuthState {
  token: string;
  track: any; // Type for track object
}

class SpotifyAuth extends Component<{}, SpotifyAuthState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      token: '',
      track: null,
    };
  }

  componentDidMount() {
    // Make the request to get the access token
    const client_id: string = '4b8ab60857d248d789e298cc29c88f8f';
    const client_secret: string = 'e1102c7222d24e10bd366fcbcd9ebfb9';
    const details = 'grant_type=client_credentials';
    const formBody = details;

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.access_token });
        this.getTrackInfo(data.access_token);
      })
      .catch(error => console.error(error));
  }

  getTrackInfo(token: string) {
    // Make the request to get track information
    fetch('https://api.spotify.com/v1/tracks/0AAMnNeIc6CdnfNU85GwCH', { // Replace {track_id} with the actual track ID
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ track: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { track } = this.state;

    return (
      <div>
        {track ? (
          <div>
            <h2>{track.name}</h2>
            <p>Artist: {track.artists[0].name}</p>
            <p>Album: {track.album.name}</p>
          </div>
        ) : (
          <p>Loading track information...</p>
        )}
      </div>
    );
  }
}

export default SpotifyAuth;