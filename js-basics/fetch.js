const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjEiLCJleHAiOjE1MDk3MzA4MjEsImlhdCI6MTUwOTY0NDQyMSwiaXNzIjoiSW50ZXJWdSIsImp0aSI6ImRmYmNkNGM5LTkzNDUtNDRkNS1iZDAwLTg1NDEwNjAyYjZmOSIsInBlbSI6e30sInN1YiI6IlVzZXI6MSIsInR5cCI6ImFjY2VzcyJ9.KyTuCU6MjSHZ2VttZxIW5izchRu-c1My1h7agaoBUAvvc6_2Rz1jjz5SWiG34V1nth91sLpxmQj10vhBQYB1Eg'

const fetchRooms = () => fetch('https://jerelmiller.ngrok.io/api/rooms')

fetchRooms()

const fetchRoomsWithAuth = () => (
  fetch('https://jerelmiller.ngrok.io/api/rooms', {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
)

fetchRoomsWithAuth()

const createRoom = () => (
  fetch('https://jerelmiller.ngrok.io/api/rooms', {
    method: 'POST',
    headers: {
      accept: 'application/vnd.api+json',
      authorization: `Bearer ${token}`,
      'content-type': 'application/vnd.api+json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
)

createRoom()
