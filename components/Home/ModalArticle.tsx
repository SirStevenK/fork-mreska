import Modal from "../Modal/Modal";
import articles from "@/lib/data/articles.json";
import BasicTag from "../Tag/BasicTag";

type Props = {
  showArticle: string;
};

const ModalArticle: React.FC<Props> = ({ showArticle }) => {
  const article = articles.find((article) => article.key === showArticle);

  if (!article) return null;
  else
    return (
      <Modal>
        <div className="mx-auto py-4" style={{ maxWidth: "640px" }}>
          <div className="bg-dark-sub lg:rounded-xl overflow-hidden">
            <img src={article.imageURL} />
            <div className="px-4 pt-1 pb-4">
              <h2 className="cursor-pointer font-display font-demi text-3xl text-light mb-2 mt-1">
                {article.title}
              </h2>
              <h3 className="cursor-pointer font-body text-light space-y-4">
                {article.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </h3>
            </div>
          </div>
        </div>
      </Modal>
    );
};

export default ModalArticle;
