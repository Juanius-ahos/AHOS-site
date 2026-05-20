import { HeroPhone } from "../components/HeroPhone";
import { HtmlBlock } from "../components/HtmlBlock";
import { Footer } from "../components/Footer";
import { pageBlocks } from "../data/home";

export default function Home() {
  return (
    <>
      <HeroPhone />

      {pageBlocks.slice(1).map((block, i) => (
        <HtmlBlock key={i} html={block} />
      ))}

      <Footer />
    </>
  );
}
