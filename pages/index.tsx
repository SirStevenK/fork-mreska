import CardArticle from "@/components/Home/CardArticle";
import NavSide from "@/components/NavSide/NavSide";
import { NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import articles from "@/lib/data/articles.json";
import { useRouter } from "next/dist/client/router";
import ModalArticle from "@/components/Home/ModalArticle";

const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo title="Home Page" description="La Home Page" />
      <div className="flex justify-center xl:mx-20">
        <NavSide />
        <div className="lg:py-4 flex flex-col">
          <div className="space-y-8" style={{ maxWidth: "640px" }}>
            {articles.map((article) => (
              <CardArticle key={article.key} article={article} />
            ))}
          </div>
        </div>
      </div>
      {router.query.showArticle && (
        <ModalArticle showArticle={router.query.showArticle as string} />
      )}
    </>
  );
};

export default HomePage;
