import Head from 'next/head'
import Navigation from '../components/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Rainblur Landing Page Template: Tailwind Toolbox</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
        <link href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css" rel="stylesheet" />
      </Head>
      <div class="primary-header leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
        <div class="h-screen">
          <div class="p-6">
            <Navigation />
            <main>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout