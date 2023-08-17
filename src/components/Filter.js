import React from 'react'

export default function Filter({ filter, selectFilter }) {
    return (
        <p className='filters__item' onClick={() => {
            selectFilter(filter)
        }}>
            {filter}
        </p >
    )
}