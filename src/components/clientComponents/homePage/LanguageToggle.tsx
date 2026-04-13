import React, { useState } from 'react';

const LanguageToggle = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <button
      className="bg-[#395CBC] w-17.25 h-7.5 rounded-full p-0.5 opacity-100 flex items-center justify-between"
      onClick={() => setSelectedLanguage(selectedLanguage === "EN" ? "ES" : "EN")}
    >
      <div
        className={`${
          selectedLanguage === "EN" ? "bg-[#1A2A56] text-white" : "bg-[#395CBC] text-white"
        } w-1/2 h-full flex items-center justify-center rounded-full`}
      >
        EN
      </div>
      <div
        className={`${
          selectedLanguage === "ES" ? "bg-[#1A2A56] text-white" : "bg-[#395CBC] text-white"
        } w-1/2 h-full flex items-center justify-center rounded-full`}
      >
        ES
      </div>
    </button>
  );
};

export default LanguageToggle;