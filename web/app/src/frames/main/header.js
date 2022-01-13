import { useLanguage } from "../../providers/language";
import { GithubForkBanner } from "react-github-fork-banner";

import { IconContext } from "react-icons";
import { BsStoplights } from "react-icons/bs";

const Header = (props) => {
  const { t } = useLanguage();

  return (
    <header className="flex justify-between items-center bg-emerald-400 h-20 shadow-xl">
      <IconContext.Provider value={{ color: "white", size: "3em" }}>
        <div className="ml-4 flex items-center">
          <BsStoplights />
          <div className="ml-4 text-4xl font-bingbong text-white">
            {t("header.title")}
          </div>
        </div>
      </IconContext.Provider>
      <GithubForkBanner
        direction=""
        size={82}
        animation="all"
        customHref={t("links.github")}
        bannerColor=""
        octoColor=""
      />
    </header>
  );
};

export default Header;
