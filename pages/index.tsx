import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <div className="container pt-24 md:pt-36 lg:pt-12 2xl:pt-24 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
        <div className="w-full xl:w-4/5">
          <h1 className="my-4 text-3xl md:text-6xl lg:text-9xl text-body font-bold leading-tight text-left">
            Time to shake up the rental space.
          </h1>
          <hr className="text-primary bg-primary h-1 w-48 my-4 lg:h-2 lg:mt-24" />
        </div>
        <div className="w-full xl:w-4/5 flex justify-center lg:justify-end overflow-y-hidden px-3">
          <div className="w-full lg:w-3/5 xl:w-2/4">
            <Newsletter />
          </div>
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
