import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "../../../components/LandingPage";
import en from "../../../messages/en.json";
import ko from "../../../messages/ko.json";
import ja from "../../../messages/ja.json";
import zh from "../../../messages/zh.json";

const locales = ["en", "ko", "ja", "zh"] as const;
type Locale = typeof locales[number];
const messages = { en, ko, ja, zh };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) return {};
  const locale = raw as Locale;
  const copy = messages[locale];
  const languages = Object.fromEntries(locales.map((item) => [item === "zh" ? "zh-CN" : item, `/${item}`]));
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: { canonical: `/${locale}`, languages: { ...languages, "x-default": "/en" } },
    openGraph: { title: copy.meta.title, description: copy.meta.description, type: "website", locale: locale === "zh" ? "zh_CN" : locale === "ko" ? "ko_KR" : locale === "ja" ? "ja_JP" : "en_US", url: `/${locale}` },
  };
}
export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  return <LandingPage locale={locale} copy={messages[locale]} />;
}
