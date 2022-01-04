import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center overflow-y-hidden px-3">
          <h1 className="my-4 text-3xl md:text-6xl text-body font-bold leading-tight text-left">
            Time to shake up the rental space.
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              future
            </span> */}
          </h1>
          {/* <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Don't get stuck renting forever, gain a future as you go!
          </p> */}
          <hr className="text-primary bg-primary h-1 w-48 my-4"/>
          <Newsletter />
        </div>
        {/* <Footer /> */}
      </div>
      <div className="container pt-24 md:pt-36 mx-auto">
        <div>
          <h2 className="text-body font-bold leading-tight">For Tenants</h2>
        </div>
        <div>
          <h2 className="text-body font-bold leading-tight">For Landlords</h2>
        </div>
      </div>
    </>
  )
}

export default Home
