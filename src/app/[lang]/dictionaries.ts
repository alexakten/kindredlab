type Locale = "en" | "se"; // Restrict to known locales

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  se: () => import("./dictionaries/se.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
