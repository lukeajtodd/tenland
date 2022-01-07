import type { NextPage } from 'next'

import Newsletter from '../components/Newsletter'
import Card from '../components/Card'

const Home: NextPage = () => {
  const roadmap = [
    {
      title: 'Phase 0',
      date: '28th February 2022',
      content:
        'Gauge initial interest before the project goes too far.',
    },
    {
      title: 'The Platform',
      date: 'TBD',
      content:
        'Creation of the user-facing UI along with any dashboards, control centers and profiles (A general idea of the smart contract layer will be organised and verified at this stage as well).',
    },
    {
      title: 'The Platform Part 2',
      date: 'TBD',
      content:
        'Creation of the smart contracts that will handle the TEN token, property NFT generation and staking and reward systems. This will be the deciding moment for which chain this is going to run with.',
    },
    {
      title: 'Security Audit',
      date: 'TBD',
      content:
        'Get the smart contracts verified by at least one independent organisation.',
    },
    {
      title: 'Alpha Release',
      date: 'TBD',
      content:
        'Time to test everything out. Allowing a small number of people into a sandboxed version of the application to see how everything works together over a month or two.',
    },
    {
      title: 'The Platform Part 3: The Thirdening',
      date: 'TBD',
      content:
        'Make any adjustments to the UI, any alpha influenced features added and further adjustments to the  smart contracts layer (along with another audit).',
    },
    {
      title: 'Beta Release',
      date: 'TBD',
      content:
        'Still running on a test network to finalise any changes or bugs that may have arisen.',
    },
    {
      title: 'The Platform Part IV',
      date: 'TBD',
      content:
        'Final run through of everything UI, styling, smart contract, etc.',
    },
    {
      title: 'Smart Contract Layer Release',
      date: 'TBD',
      content:
        'Ship the smart contracts layer onto whatever the decided chain is. Throw out some TEN based rewards for the lovely people that have helped so far.',
    },
    {
      title: 'Full Deployment & Release',
      date: 'TBD',
      content: "Deploy the platform in it's entirety.",
    },
    {
      title: 'DAO',
      date: 'TBD',
      content:
        'Configure the DAO so that people involved in the platform can start to push new ideas forward. Maybe charitable work, up and coming investments, short term stay platform extensions, property purchase and sale extension?!',
    },
  ]

  return (
    <>
      <div className="container py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
        <div className="w-full xl:w-4/5">
          <h1 className="my-4 text-5xl md:text-7xl lg:text-9xl text-body font-bold leading-tight text-left">
            Time to shake up the rental space.
          </h1>
          <hr className="text-primary bg-primary h-1 w-48 my-4 lg:h-2 lg:mt-24" />
        </div>
      </div>
      <div className="container pt-0 mx-auto flex flex-wrap flex-col md:flex-row justify-center">
        <div className="w-full xl:w-4/5">
          <p className="text-xl md:text-2xl">
            Tenland is a platform that will alter the status quo between
            landlords &amp; tenants. Creating an ecosystem of{' '}
            <strong>fairness</strong> and <strong>happier living</strong>.
          </p>
          <p className="text-xl md:text-2xl">
            This will be achieved via a rewards scheme that puts actions to the
            test, rewarding the positive. The hope filled aim is an improved
            interaction between both parties.
          </p>
        </div>
      </div>
      <div className="container pt-10 md:pt-24 lg:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center">
        <div className="w-full xl:w-4/5 grid">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-body font-bold leading-tight">
              For Tenants
            </h2>
            <ul>
              <li>Earn while you rent. Be a great tenant and get rewarded.</li>
              <li>
                Either sell your reward <strong>TEN</strong> or your staked <strong>TEN</strong>
                (in the form of <strong>sTEN</strong>) or stake it and save.
              </li>
              <li>
                Use your <strong>TEN</strong> &amp; <strong>sTEN</strong> with
                our partners for further rewards.
              </li>
            </ul>
          </div>
          <div className="justify-self-end lg:w-2/3 pt-10 md:pt-24 lg:pt-36">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-body font-bold leading-tight">
              For Landlords
            </h2>
            <ul>
              <li>
                <strong>TEN</strong> will be used to list properties, with the
                power to promote these properties to increase your likelihood of
                finding a tenant.
              </li>
              <li>
                NFTs will be minted to certify that you have listed a specific
                property on the platform.
              </li>
              <li>
                By providing positive reviews for your tenants you will actively
                reward them without any financial input from you.
              </li>
              <li>
                The best tenants are happy ones. With the rewards Tenland
                offers, they&apos;ll be the happiest around.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center">
        <div className="w-full xl:w-4/5">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-body font-bold leading-tight text-center has-circle lg:has-circle--thick">
              TEN
            </h2>
            <div className="w-full xl:w-4/5">
              <p>
                <strong>TEN</strong> is the utility cryptocurrency for the
                platform.
              </p>
              <p>
                As a tenant or a landlord you will be rewarded for being a
                decent human being and from being involved.
              </p>
              <p>
                Acting in a way that promotes great relationships and aids in
                future human beings being able to live a happy life, will grant
                you all the goodies.
              </p>
              <ul className="mt-12">
                <li>
                  <strong>TEN</strong> will facilitate the day to day operations
                  of Tenland.
                </li>
                <li>
                  It can be purchased directly if you just want to be part of
                  this kick-ass ecosystem.
                </li>
                <li>
                  Alternatively, by doing good, being good and gaining positive
                  reviews and feedback you can acquire <strong>TEN</strong> for
                  nothing.
                </li>
                <li>
                  You will be able to put forward your accrued{' '}
                  <strong>TEN</strong> to support the platform. Compounding your
                  rewards further and receiving <strong>sTEN</strong>.
                </li>
                <li>
                  Later on down the line this will also provide you with voting
                  power. With this you can shape how this platform impacts the
                  world. With the aim to improve the wellbeing of all living
                  people.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-10 md:pt-24 lg:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center">
        <div className="w-full xl:w-4/5">
          <h2 className="text-2xl md:text-4xl lg:text-7xl text-body font-bold leading-tight">
            Roadmap
          </h2>
          <p>This could change, other bits could take priority. Any updates will be broadcast via email!</p>
          <div className="flex flex-row flex-wrap mt-8">
            {roadmap.map((item, index) => (
              <div className="md:pr-8 w-full" key={index}>
                <Card className="mb-8" {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container pt-10 md:pt-24 lg:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center">
        <div className="w-full xl:w-4/5">
          <div className="overflow-y-hidden">
            <div className="w-full flex flex-wrap flex-row">
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-body font-bold leading-tight lg:pr-8">
                  Keep up to date...
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
