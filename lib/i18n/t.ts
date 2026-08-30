import { type Locale } from "./config";
import { dictionaries, type Dictionary } from "./dictionary";

export type TranslateVars = Record<string, string | number>;
export type TranslateFn = (key: string, vars?: TranslateVars) => string;

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? (dictionaries.en as Dictionary) : dictionaries.tr;
}

export function translate(dict: Dictionary, key: string): string {
  const value = key.split(".").reduce<unknown>((current, part) => {
    if (current && typeof current === "object" && part in current) {
      return (current as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);

  return typeof value === "string" ? value : key;
}

export function interpolate(template: string, vars?: TranslateVars) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    name in vars ? String(vars[name]) : `{${name}}`,
  );
}

export function createT(locale: Locale): TranslateFn {
  const dict = getDictionary(locale);
  return (key, vars) => interpolate(translate(dict, key), vars);
}
