import Color from "../../components/utils/page.colors.util";
import ComingSoon from "../../components/sections/comingsoon";

import colors from "../../content/aboutme/_colors.json";
import settings from "../../content/_settings.json";
import About from "../../components/sections/index/about";
import Technical from "../../components/sections/index/technical";
import Career from "../../components/sections/index/career";
import Head from "next/head";

//
export default function AboutMe({}) {
  return (
    <>
      <Head>
        <title>About Me | Ayush Goyal</title>
        <link rel="icon" href="/img/logos/logo.png" />
      </Head>
      <Color colors={colors} />
      <About />
      <Technical />
      <Career />
      {/* <ComingSoon /> */}
    </>
  );
}
