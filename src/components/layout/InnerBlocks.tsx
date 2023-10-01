import BannerOne from "../blocks/BannerOne";
import Benefits from "../blocks/Benefits";
import Services from "../blocks/Services";
import GetStarted from "../blocks/GetStarted";
import Faq from "../blocks/Faq";

const InnerBlocks = ({ content }: any) => {
  if (!content) {
    return null;
  }
  return content.map((block: any) => {
    switch (block.type) {
      case "bannerOne":
        return <BannerOne key={block.id} {...block} />;
      case "benefits":
        return <Benefits key={block.id} {...block} />;
      case "services":
        return <Services key={block.id} {...block} />;
      case "getStarted":
        return <GetStarted key={block.id} {...block} />;
      case "faq":
        return <Faq key={block.id} {...block} />;
      default:
      // return <pre>{JSON.stringify(block, null, 2)}</pre>;
    }
  });
};

export default InnerBlocks;
