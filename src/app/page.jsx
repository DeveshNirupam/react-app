import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/about">about</Link>
      <Link href="/login">login</Link>
      <Link href="/signup">signup</Link>
      <Link href="/contact">contact</Link>
      <h1>My React page </h1>
      <button>some button</button>
    </div>
  )
}

export default Home;