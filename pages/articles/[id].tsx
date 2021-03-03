import CardArticle from "@/components/Home/CardArticle";
import NavSide from "@/components/NavSide/NavSide";
import articles from "@/lib/data/articles.json";
import { ArticleProps } from "@/types/utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

type Props = {
  article: ArticleProps;
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <>
      <NextSeo title="Home Page" description="La Home Page" />
      <div className="flex justify-center xl:mx-20">
        <NavSide />
        <div className="lg:py-4 flex flex-col">
          <div className="space-y-8" style={{ maxWidth: "640px" }}>
            <CardArticle article={article} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;

  const article = articles.find((article) => article.key === id);

  if (article)
    return {
      props: {
        article,
      },
      revalidate: 900,
    };
  else
    return {
      redirect: {
        destination: "/",
        permanent: false,
        revalidate: 900,
      },
    };
};

export default ArticlePage;
