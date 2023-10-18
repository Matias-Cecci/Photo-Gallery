import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { ImageSearch } from './components/ImageSearch.jsx'
const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

function App () {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }, [term])

  return (

    <div className='container mx-auto'>
      <h1 className='text-7xl text-center mx-auto mt-16  font-medium'>Photo Gallery</h1>

      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h2 className='text-3xl text-center mx-auto mt-32'>No search results</h2>}

      {isLoading
        ? <h2 className='text-5xl text-center mx-auto mt-32'>Loading...</h2>
        : (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-2'>
            {images.map(image => (
              <Card key={images.id} image={image} />
            ))}
          </div>
          )}
    </div>

  )
}

export default App
