import en from "./locales/en.json";
import fr from "./locales/fr.json";

const translations = { en, fr };

export function t(key, lang = "en") {
  const keys = key.split(".");
  let value = translations[lang];
  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return key;
    }
  }
  return value || key;
}
