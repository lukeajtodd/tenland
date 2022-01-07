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
        <meta name="description" content="A platform for Landlords and Tenants to live happier more profitable lives." />
        <meta name="keywords" content="Tenant, Landlord, Rental, Lease, Tenancy, Crypto, TEN, Cryptocurrency" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d97307" />
        <meta name="msapplication-TileColor" content="#d97307" />
        <meta name="theme-color" content="#d97307" />

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
        {/* <meta property="og:title" content="Tenland - The new face of rentals" />
        <meta property="og:description" content="A platform for Landlords and Tenants to live happier more profitable lives." /> */}
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
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
