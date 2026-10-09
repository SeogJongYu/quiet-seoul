import "../../globals.css";

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const lang = locale === "zh" ? "zh-CN" : locale;
  return <html lang={lang}><body>{children}</body></html>;
}
