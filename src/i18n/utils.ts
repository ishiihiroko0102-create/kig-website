export type Locale = 'ja' | 'en'

export const defaultLocale: Locale = 'ja'
export const locales: Locale[] = ['ja', 'en']

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/')
  if (locales.includes(lang as Locale)) {
    return lang as Locale
  }
  return defaultLocale
}

export function getLocalizedPath(path: string, lang: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (lang === defaultLocale) {
    return cleanPath
  }
  return `/${lang}${cleanPath}`
}

export function getAlternateUrl(currentPath: string, targetLang: Locale): string {
  const pathWithoutLang = currentPath.replace(/^\/(en)\//, '/').replace(/^\/(en)$/, '/')
  return getLocalizedPath(pathWithoutLang, targetLang)
}
