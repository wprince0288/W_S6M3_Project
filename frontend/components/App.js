import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()
    setApod({
      "date": "2024-07-08",
      "explanation": "Do other stars have planets like our Sun? Surely they do, and evidence includes slight star wobbles created by the gravity of orbiting exoplanets and slight star dimmings caused by orbiting planets moving in front. In all, there have now been over 5,500 exoplanets discovered, including thousands by NASA's space-based Kepler and TESS missions, and over 100 by ESO's ground-based HARPS instrument.  Featured here is an illustrated guess as to what some of these exoplanets might look like. Neptune-ty...",
      "hdurl": "https://apod.nasa.gov/apod/image/2407/ExoplanetZoo_Vargic_2000.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Exoplanet Zoo: Other Stars",
      "url": "https://apod.nasa.gov/apod/image/2407/ExoplanetZoo_Vargic_1080.jpg"
    })
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <div className='card'>
        <h2>{apod.title}</h2>
        <p>{apod.explanation}</p>
        <figure>
          <img src={apod.url}/>
        </figure>
      </div>
    </section>
  )
}

export default App
