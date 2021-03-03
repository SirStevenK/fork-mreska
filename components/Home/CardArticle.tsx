import { ArticleProps } from "@/types/utils";
import { useState } from "react";
import BasicTag from "../Tag/BasicTag";

type Props = {
  article: ArticleProps;
};

const CardArticle: React.FC<Props> = ({ article }) => {
  const [displayArticle, setDisplayArticle] = useState(false);
  return (
    <div className="bg-dark-sub lg:rounded-xl overflow-hidden">
      <img src={article.imageURL} />
      <div className="px-3 pt-1 pb-1">
        <h2 className="cursor-pointer font-display font-demi text-3xl text-light mb-2 mt-1">
          {article.title}
        </h2>
        <h3
          className={`cursor-pointer font-body text-light ${
            displayArticle === false ? "inline-block" : "hidden"
          }`}
        >
          {article.description}
        </h3>
        <span
          className={`cursor-pointer  align-middle font-body font-bold text-secondary hover:underline ${
            displayArticle === false ? "inline-block" : "hidden"
          }`}
          onClick={() => setDisplayArticle(true)}
        >
          <span className="mr-1 align-top">{"Lire l'article"}</span>
          <i className="fas fa-long-arrow-right" />
        </span>
        {article.content.map((text, index) => (
          <p
            className={`text-light mt-2 ${
              displayArticle === true ? "inline-block" : "hidden"
            }`}
            key={index}
          >
            {text}
          </p>
        ))}
        <div className="flex mt-3 items-center">
          <div className="flex-grow">
            <BasicTag className="mr-2 mb-2" name="News AA" />
            <BasicTag className="mr-2 mb-2" name="Article EsKa" />
          </div>
          <div className="text-light flex-shrink-0 mb-2">
            <i aria-hidden className="fas fa-clock" />
            <time
              className="ml-2 font-display font-demi pb-2"
              dateTime="2018-07-07T20:00:00"
            >
              2h
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
