import { HtmlBlock } from "../components/HtmlBlock";
import { Footer } from "../components/Footer";
import { pageBlocks } from "../data/aria";

export default function AriaAI() {
  return (
    <>
      {pageBlocks.map((block, i) => (
        <HtmlBlock key={i} html={block} />
      ))}
      <Footer />
    </>
  );
}
