import React, { useState } from 'react'

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city.trim())  // supports "London" or "Paris,FR"
      setCity('')
    }
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city (e.g., London or Paris,FR)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none border-r-0"
        aria-label="City name"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 cursor-pointer"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
