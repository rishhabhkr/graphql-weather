import { React, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER } from '../graphql/Queries'

// useQuery hook is used to query the data when the page is loaded
// we want to load the data when search button is clicked so we'll use useLazyQuery Hook

function Home() {
  const [city, setCity] = useState('')
  // getWeather function that we want to use to make the Call for data querying
  const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER, {
    variables: { name: city },
  })
  if (error) return <h1>error Encountered.</h1>
  if (data) {
    console.log(data)
  }

  return (
    <div className='home'>
      <h1>Search for weather</h1>
      <input
        type='text'
        placeholder='City Name'
        onChange={(e) => {
          setCity(e.target.value)
        }}
      />
      <button onClick={() => getWeather()}>Search</button>
      <div className='weather'>
        {data && (
          <>
            <h1>City: {data.getCityByName.name}</h1>
            <h1>
              Temperature: {data.getCityByName.weather.temperature.actual}
            </h1>
            <h1>Summary: {data.getCityByName.weather.summary.description}</h1>
            <h1>Wind {data.getCityByName.weather.wind.speed}</h1>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
