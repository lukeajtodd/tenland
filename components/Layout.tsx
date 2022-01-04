import { FC } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Tenland - The new face of rentals</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Sora:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="primary-header leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
        <div className="h-screen p-6">
          <Navigation />
          <main className="py-24">{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
