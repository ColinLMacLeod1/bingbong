import { useEffect } from "react";
import call from "../../util/call";
import { useLanguage } from "../../providers/language";
import { GithubForkBanner } from "react-github-fork-banner";
import MainFrame from "../../frames/main";

import { IconContext } from "react-icons";
import { BsStoplights } from "react-icons/bs";

function Landing() {
  const { t } = useLanguage();

  useEffect(() => {
    call("/api/test", "get");
  }, []);

  return (
    <div className="">
      <MainFrame title={t("landing.pageTitle")}>
        <div id="create-join-room">
          

        </div>
      </MainFrame>
    </div>
  );
}

export default Landing;
