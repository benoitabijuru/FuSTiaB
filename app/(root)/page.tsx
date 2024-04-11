import React from 'react'
import Technology from './technology/page'
import GameChangersPage from './game-changers/page'
import Business from './business/page'
import Science from './science/page'
import Hero from '@/components/hero/Hero'
import Qoute from '@/components/qoute/Qoute'
import Link from 'next/link'

const Home = () => {
  return (
    <div >
      <Hero/>
      <Qoute />
      <hr />
      <Link href="/technology"><h1 className='text-center font-semibold italic'>Technology</h1></Link>
      <Technology/>
      <hr />
      <Link href="/game-changers"><h1 className='text-center font-semibold italic'>Game Changers</h1></Link>
      <GameChangersPage/>
      <hr />
      <Link href="/business"><h1 className='text-center font-semibold italic'>Business</h1></Link>
      <Business/>
      <hr />
      <Link href="/science"><h1 className='text-center font-semibold italic'>Science</h1></Link>
      <Science/>
    </div>
  )
}

export default Home

