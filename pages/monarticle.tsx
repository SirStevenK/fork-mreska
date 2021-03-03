import NavSide from "@/components/NavSide/NavSide";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import articles from "@/lib/data/articles.json";

const article = articles[0];

const images = [
  "/images/cc5.jpg",
  "/images/cc1.jpg",
  "/images/cc3.jpg",
  "/images/cc4.jpg",
  "/images/cc2.jpg",
];

const ArticlePage: NextPage = () => {
  return (
    <>
      <NextSeo title="Home Page" description="La Home Page" />
      <div className="flex justify-center xl:mx-20">
        <NavSide />
        <div className="lg:py-4 flex flex-col items-center">
          <div style={{ maxWidth: "640px" }}>
            <img src={article.imageURL} />
            <h1 className="text-light font-bold font-display mb-4 text-center text-xl">
              {article.title}
            </h1>
            <div className="space-y-4 mb-4">
              {article.content.map((text, index) => (
                <p key={index} className="text-light text-center">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div style={{ maxWidth: "320px" }}>
            {images.map((imageURL, index) => (
              <img key={index} src={imageURL} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
