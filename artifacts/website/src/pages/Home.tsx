import { HtmlBlock } from "../components/HtmlBlock";
import { Footer } from "../components/Footer";
import { pageBlocks } from "../data/home";

export default function Home() {
  return (
    <>
      {pageBlocks.map((block, i) => (
        <HtmlBlock key={i} html={block} />
      ))}
      <Footer />
    </>
  );
}
