import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikush Dalia</title>
        <meta name="description" content="Nikush Dalia's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed"
        style={{ backgroundImage: `url('header.png')` }}
      >
        <div className="h-full">
          <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
              <a
                className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <span className="bg-clip-text bg-gradient-to-r text-transparent from-red-400 via-yellow-500 to-green-500">
                  Nikush
                </span>
                <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
                  Dalia
                </span>
              </a>

              <div className="flex w-1/2 justify-end content-center">
                <a
                  className="inline-block text-blue-300 no-underline hover:text-green-200 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  onClick={() => alert('No link yet, but coming soon.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                  </svg>
                </a>
                {/* <a
                  className="inline-block text-blue-300 no-underline hover:text-green-200 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          <div className="container pt-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full lg:max-w-lg mx-auto justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                Crafting the
                <span className="bg-clip-text ml-2 text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
                  future
                </span>
                , one experience at a time.
              </h1>
              <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-6 pt-4 pb-6 mb-4 mt-8">
                <div>
                  <p className="text-white mb-4">
                    Want to talk about a project or idea?
                  </p>
                </div>
                <div className="mb-4">
                  <a
                    href="https://calendly.com/nikush-org"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full bg-gradient-to-r from-red-500 via-yellow-900 to-green-700 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Calendly
                  </a>
                </div>
              </div>
              <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-6 pt-4 pb-6 mb-4">
                <div>
                  <p className="text-white mb-4">What am I working on?</p>
                </div>
                <div className="mb-4">
                  <a
                    href="https://www.blinkcommerce.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    blink
                  </a>
                  <a
                    onClick={() => alert('No link yet, but coming soon.')}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full mt-2 bg-gradient-to-r from-green-700 to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    based plant
                  </a>
                </div>
              </div>
              <div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-6 pt-4 pb-6 mb-4">
                <div>
                  <p className="text-white mb-4">Want to find me?</p>
                </div>
                <div className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/nikush-dalia-a40280108"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/nikushx"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full mt-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Github
                  </a>
                  <a
                    onClick={() => alert('No link yet, but coming soon.')}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
