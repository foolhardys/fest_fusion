import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const SearchBar = () => {
    return (
        <div className="flex w-full max-w-xl items-center -space-x-9 p-2">
            <Input type="search" placeholder="Search by Event/College" className='text-gray-900' />
            <Button variant='ghost' className='text-gray-900 rounded-sm' type="submit" size='icon'>
                <MagnifyingGlassIcon/>
            </Button>
        </div>
    )
}

export default SearchBar