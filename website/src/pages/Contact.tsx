import { HtmlBlock } from "../components/HtmlBlock";
import { Footer } from "../components/Footer";
import { pageBlocks } from "../data/contact";

export default function Contact() {
  return (
    <>
      {pageBlocks.map((block, i) => (
        <HtmlBlock key={i} html={block} />
      ))}
      <Footer />
    </>
  );
}
