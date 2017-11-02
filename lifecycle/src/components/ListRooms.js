import React, { Component } from 'react'

const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjEiLCJleHAiOjE1MDk3MzA4MjEsImlhdCI6MTUwOTY0NDQyMSwiaXNzIjoiSW50ZXJWdSIsImp0aSI6ImRmYmNkNGM5LTkzNDUtNDRkNS1iZDAwLTg1NDEwNjAyYjZmOSIsInBlbSI6e30sInN1YiI6IlVzZXI6MSIsInR5cCI6ImFjY2VzcyJ9.KyTuCU6MjSHZ2VttZxIW5izchRu-c1My1h7agaoBUAvvc6_2Rz1jjz5SWiG34V1nth91sLpxmQj10vhBQYB1Eg'

export default class ListRooms extends Component {
  state = {
    loading: true,
    rooms: []
  }

  componentDidMount() {
    fetch('https://jerelmiller.ngrok.io/api/rooms', {
      headers: {
        accept: 'application/vnd.api+json',
        authorization: `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(json => this.setState({
      loading: false,
      rooms: json.data
    }))
  }

  render() {
    const { loading, rooms } = this.state

    return this.state.rooms.map(room => (
      <div key={ room.id }>
        { room.attributes['friendly-name'] }
      </div>
    ))
  }
}
