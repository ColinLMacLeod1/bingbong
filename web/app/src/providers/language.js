import React, { useState, useEffect, useContext, useCallback } from "react";
import _ from "lodash";
import Logger from "../util/logger";
const logger = Logger("providers/language");

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = "en"; // TODO: get default languageg from conofig
  const userLang = "en"; // TODO: gert user lang from browser
  const [language, setLanguage] = useState(userLang || defaultLanguage);
  const [text, setText] = useState({});

  useEffect(() => {
    logger.debug(`Lang: ${language}`);
    logger.debug(`Default Lang: ${defaultLanguage}`);

    if (language) {
      fetch(`/lang/${language}.json`, {})
        .then((res) => res.json())
        .then((languageConf) => {
          logger.info("language fetched", languageConf);
          setText(languageConf.text);
        })
        .catch((err) => {
          logger.error("failed to fetch language", err);
        });
    }
  }, [language]);

  const t = useCallback(( path) => {
    return _.get(text, path, "");
  }, [text]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        text,
        setLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageConsumer = LanguageContext.Consumer;

export const useLanguage = () => useContext(LanguageContext);
