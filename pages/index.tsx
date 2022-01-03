import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Search from '../components/Search'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center overflow-y-hidden px-3">
          <h1 className="my-4 text-3xl md:text-6xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Time to shake up the rental space.
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              future
            </span> */}
          </h1>
          {/* <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Don't get stuck renting forever, gain a future as you go!
          </p> */}

          <Search />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Home
