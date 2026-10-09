"use client";

type Locale = "en" | "ko" | "ja" | "zh";
const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

export function LanguageNav({ locale }: { locale: Locale }) {
  return (
    <nav className="langs" aria-label="Language">
      {languages.map((language, index) => (
        <span key={language.code} className="lang-wrap">
          {index > 0 && <span className="lang-sep" aria-hidden="true">·</span>}{" "}
          <a
            className={locale === language.code ? "active" : ""}
            aria-current={locale === language.code ? "page" : undefined}
            href={`/${language.code}`}
            onClick={(event) => {
              event.preventDefault();
              window.location.assign(`/${language.code}${window.location.search}${window.location.hash}`);
            }}
          >
            {language.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
