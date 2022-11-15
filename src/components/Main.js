
import {useState, useEffect} from 'react'

function Main() {

const [apis, setapis] = useState([])

useEffect(() => {
    fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(data => setapis(data.entries))
    
      }, [])

      return (
        <div className='App'>
      {
      apis.filter(api => api.Auth === "apiKey").map(api => {
        return (
          <p key={api.Link}>
          <a href={api.Link}>{api.API}</a>
          </p>
        )
      })
      }
      </div>
      )
    }
      export default Main