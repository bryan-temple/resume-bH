import type { NextPage } from 'next';
import { FrontPage } from '../components/FrontPage';
import { Profile } from '../components/Profile';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex w-full h-[45vh] items-center justify-center">

      <FrontPage />

    </main>
  );
};

export default Home;
