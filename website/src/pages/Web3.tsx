import { HtmlBlock } from "../components/HtmlBlock";
import { Footer } from "../components/Footer";
import { pageBlocks } from "../data/web3";

export default function Web3() {
  return (
    <>
      {pageBlocks.map((block, i) => (
        <HtmlBlock key={i} html={block} />
      ))}
      <Footer />
    </>
  );
}
