"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any;
      };
    };
  }
}

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"EN" | "ES">("EN");
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { label: "EN", code: "en", full: "ENGLISH" },
    { label: "ES", code: "es", full: "SPANISH" },
  ];

  // Load Google Translate
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Load saved language
    const savedLang = localStorage.getItem("selectedLanguage") as
      | "EN"
      | "ES"
      | null;
    if (savedLang) {
      setSelectedLang(savedLang);
    }

    const checkGoogleTranslate = () => {
      if (window.google?.translate) {
        setTimeout(() => {
          setIsLoaded(true);
          if (savedLang === "ES") {
            changeLanguage("es");
          }
        }, 600);
      } else {
        setTimeout(checkGoogleTranslate, 150);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    checkGoogleTranslate();

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (languageCode: string) => {
    const tryTranslate = () => {
      if (!window.google?.translate) {
        setTimeout(tryTranslate, 100);
        return;
      }

      let select = document.querySelector(
        ".goog-te-combo",
      ) as HTMLSelectElement;

      // Fallback: search inside iframes
      if (!select) {
        const iframes = document.querySelectorAll("iframe");
        for (const iframe of Array.from(iframes)) {
          try {
            const iframeSelect = iframe.contentDocument?.querySelector(
              "select",
            ) as HTMLSelectElement;
            if (iframeSelect) {
              select = iframeSelect;
              break;
            }
          } catch (e) {
            // Ignore cross-origin
          }
        }
      }

      if (select) {
        select.value = languageCode;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        setTimeout(tryTranslate, 200);
      }
    };

    tryTranslate();
  };

  const handleLanguageSelect = (lang: (typeof languages)[0]) => {
    const newLang = lang.label as "EN" | "ES";

    setSelectedLang(newLang);
    localStorage.setItem("selectedLanguage", newLang);
    setIsOpen(false);

    if (isLoaded) {
      changeLanguage(lang.code);
    }
  };

  const currentLang = languages.find((l) => l.label === selectedLang);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Switch Design - Like your image */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-[#E5E7EB] rounded-full p-1 cursor-pointer hover:bg-gray-200 transition-all"
        disabled={!isLoaded}
      >
        <div className="flex bg-white rounded-full shadow-sm">
          {/* EN Button */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageSelect(languages[0]);
            }}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedLang === "EN"
                ? "bg-[#1F274B] text-white shadow"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            EN
          </div>

          {/* ES Button */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageSelect(languages[1]);
            }}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedLang === "ES"
                ? "bg-[#1F274B] text-white shadow"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            ES
          </div>
        </div>
      </button>

      {/* Optional Dropdown (if you still want it) */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 w-32">
          {languages.map((lang) => (
            <button
              key={lang.label}
              onClick={() => handleLanguageSelect(lang)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                selectedLang === lang.label ? "bg-gray-50 font-medium" : ""
              }`}
              disabled={!isLoaded}
            >
              <span>{lang.full}</span>
              <span className="text-xs text-gray-400">({lang.label})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
