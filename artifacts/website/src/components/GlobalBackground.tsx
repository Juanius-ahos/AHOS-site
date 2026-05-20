import { HtmlBlock } from "./HtmlBlock";
import { globalBgBlock, cursorTrailBlock } from "../data/shared";

export function GlobalBackground() {
  return (
    <>
      <HtmlBlock html={globalBgBlock} />
      <HtmlBlock html={cursorTrailBlock} />
    </>
  );
}
