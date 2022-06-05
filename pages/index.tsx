import type { NextPage } from 'next'
import Head from 'next/head'
import { useStateContext } from '../contexts/ContextProvider'

const Home: NextPage = () => {
  const { activeMenu } = useStateContext()

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-5 flex flex-col items-center justify-center text-center">
        <p className="text-2xl">Welcome to the Shop Dashboard App</p>
        <p className="text-2g">Click a Link on the Sidebar to View Common Dashboard Apps & Pages</p>
        <p className="text-2g">Or Click on The Navbar Icons to See Different Menus</p>

        <p className="mt-10">You Can Also Click on the Settings Icon to Change Theme and Mode.</p>
      </div>
    </div>
  )
}

export default Home
