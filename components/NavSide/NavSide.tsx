import NextImage from "next/image";
import Link from "next/link";

const NavSide: React.FC = () => {
  return (
    <div className="px-16 h-screen sticky top-0">
      <div className="flex flex-col h-full justify-center items-center">
        <NextImage
          src="/images/iconmreska.png"
          alt="icone Mr EsKa"
          height={140}
          width={140}
        />
        <ul className="space-y-2 mt-4">
          <li className="text-light font-display font-bold text-center cursor-pointer">
            <Link href="/">
              <a>Actus</a>
            </Link>
          </li>
          <li className="text-light font-display font-bold text-center cursor-pointer">
            Mes Sites Web
          </li>
          <li className="text-light font-display font-bold text-center cursor-pointer">
            Mes Jeux Video
          </li>
          <li className="text-light font-display font-bold text-center cursor-pointer">
            Contact
          </li>
        </ul>
        <ul className="space-y-2 mt-4">
          <li className="text-light font-display font-bold text-center cursor-pointer">
            Twitter
          </li>
          <li className="text-light font-display font-bold text-center cursor-pointer">
            Instagram
          </li>
          <li className="text-light font-display font-bold text-center cursor-pointer">
            Youtube
          </li>
        </ul>
        <div
          className="mt-4 p-1 h-8 border-2 rounded-full border-light cursor-pointer flex justify-end"
          style={{ width: "3.5rem" }}
        >
          <div className="w-5 h-5 bg-light rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default NavSide;
