import { useState } from 'react'
export const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    event.preventDefault()

    setText(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    searchText(text)
  }
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={handleSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2  border-teal-500 py-2'>
          <input onChange={handleChange} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 le-t7 focus:outline-none focus:bg-gray-200 focus:rounded-md' type='text' placeholder='Sarch Image ...' />
          <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>
            Search
          </button>
        </div>
      </form>

    </div>
  )
}
