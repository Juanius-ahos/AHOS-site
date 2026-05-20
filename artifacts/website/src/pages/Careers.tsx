import { HtmlBlock } from "../components/HtmlBlock";
import { Footer } from "../components/Footer";
import { pageBlocks } from "../data/careers";

export default function Careers() {
  return (
    <>
      {pageBlocks.map((block, i) => (
        <HtmlBlock key={i} html={block} />
      ))}
      <Footer />
    </>
  );
}
