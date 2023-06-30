import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Technical from "../components/sections/index/technical";
import Career from "../components/sections/index/career";
import FeaturedProjects from "../components/sections/projects/featured";

import Color from "../components/utils/page.colors.util";

import colors from "../content/index/_colors.json";
import Head from "next/head";
import ComingSoon from "../components/sections/comingsoon";

//
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Portfolio | Ayush Goyal</title>
        <link rel="icon" href="/img/logos/logo.png" />
      </Head>
      <Color colors={colors} />
      <Hero />
      <About />
      <Technical />
      <FeaturedProjects />
      <Career />
      <Looking />
    </>
  );
}
