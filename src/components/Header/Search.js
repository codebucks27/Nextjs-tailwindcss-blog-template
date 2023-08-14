import Link from 'next/link'
import React from 'react'
import { SearchIcon } from '../Icons'

const Search = () => {
  return (
    <Link href="/" className='w-16 h-16 rounded-full border border-solid border-dark dark:border-light flex items-center justify-center'>
      <SearchIcon className={"p-3 fill-dark dark:fill-light"}/>
    </Link>
  )
}

export default Search