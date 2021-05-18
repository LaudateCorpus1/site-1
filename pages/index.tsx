import Head from 'next/head'

export default function home() {
    return (
          <Head>
            <title>Home | Cat Dev Group</title>
            <meta name="description" content="The Homepage for the Cat Dev Group." />
          </Head>
          <body className="space-y-6 md:space-y-4 pt-2">
          <div className="bg-gray w-screen">
            <h1 className="text-white text-3xl text-center">
              Welcome to the Cat Dev Group Website!
            </h1>
          <blockquote className="pt-3">
          <p className="text-white font-bold text-center text-lg">
            <em>Your official hub for Cat Spam.</em>
          </p>
          </blockquote>
          <p className="pt-5 text-white font-semibold text-xl text-center">
            We're currently under construction at the moment! We apologize for the inconvenience.
          </p>
          </div>
          <div className="grid grid-rows-1 gap-2 place-items-center items-center">
          <a href="https://discord.gg/yt8s6C33fw" target="_blank" className="bg-lightgray rounded-md w-2/6 hover:ringColor-blue-500 hover:ring-2 transform transition hover:scale-110">
            <h2 className="font-semibold text-center text-white text-lg">
            Discord &rarr;
            </h2>
            <p className="text-white text-center text-md">
              Come join our Discord, and hang out with us!
            </p>
            </a>
            <a href="https://github.com/cat-dev-group" target="_blank" className="bg-lightgray rounded-md w-2/6 hover:ringColor-blue-500 hover:ring-2 transform transition hover:scale-110">
              <h2 className="font-semibold text-center text-white text-lg">
                GitHub &rarr;
              </h2>
              <p className="text-white text-center text-md">
                Take a look at our GitHub projects, or even contribute to them!
              </p>
              </a>
            </div>
            </body>
    )
}
