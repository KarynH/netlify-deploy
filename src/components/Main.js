
import {useState, useEffect} from 'react'

funciton Main() {

const [apis, setapis] = useState([])

useEffect(() => {
    fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(data => setapis(data.entries))
    
      }, [])

      return (
        <div>
      {apis.filter(api => api.Auth === "apiKey").map(api => {
        return (
          <p>
          <a href={api.Link}>{api.API}</a>
          </p>
        )
      })
      }
      </div>
      )
    }
      export default Main