type Locale = "en" | "sv"; // Restrict to known locales

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  sv: () => import("./dictionaries/sv.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
