export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const localeLanguageTags: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "/") {
  const normalizedPath = path === "/" ? "" : path.replace(/^\/|\/$/g, "");
  return `/${locale}/${normalizedPath}${normalizedPath ? "/" : ""}`;
}

export function pathWithBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
