import React from 'react'

interface CountDisplayProps {
    count: number
}

const CountDisplay = ({count}: CountDisplayProps) => {
  return (
    <p>{count}</p>
  )
}

export default CountDisplay