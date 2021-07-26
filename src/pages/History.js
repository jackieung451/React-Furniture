import React, { useState } from "react";
import HistoryBack from "../components/BlogCoverPage";
import HistoryBackground from "../components/HistoryBackground";
import "../styles.css";
import { i18n } from "../translations/i18n";

const History = () => {
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <button className="Button" value="en" onClick={handleOnclick}>
        English
      </button>
      <button className="Button" value="es" onClick={handleOnclick}>
        Spanish
      </button>
      <HistoryBackground lang={language} />
    </div>
  );

  // <HistoryBackground />;
};

export default History;
