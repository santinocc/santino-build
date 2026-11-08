/**
 * Locale and URL helpers. Every URL returned here already includes the base
 * path (/santino-build/) and a trailing slash, via Astro's astro:i18n helpers.
 */
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLocale, locales, ui, type Locale, type UiKey } from './ui';

/** The six pages from the sitemap, with their locale-neutral paths. */
export const pages = {
	home: '',
	about: 'about/',
	experience: 'experience/',
	projects: 'projects/',
	certifications: 'certifications/',
	contact: 'contact/',
} as const;
export type PageKey = keyof typeof pages;

/** Locales served under a prefix (/ja/, /es/). */
export const prefixedLocales = locales.filter((locale) => locale !== defaultLocale);

/** getStaticPaths result for pages under src/pages/[locale]/. */
export function prefixedLocalePaths() {
	return prefixedLocales.map((locale) => ({ params: { locale } }));
}

export function isLocale(value: unknown): value is Locale {
	return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/** Current page's locale. Pass `Astro.currentLocale`. */
export function getLocale(currentLocale: string | undefined): Locale {
	return isLocale(currentLocale) ? currentLocale : defaultLocale;
}

/** Returns a lookup function for interface strings in one locale. */
export function useTranslations(locale: Locale) {
	return (key: UiKey): string => ui[locale][key];
}

/** Link to one of the sitemap pages in a given locale, e.g. /santino-build/ja/about/. */
export function localizedPath(locale: Locale, page: PageKey): string {
	return getRelativeLocaleUrl(locale, pages[page]);
}

/**
 * Removes the base path and any locale prefix from a pathname, leaving the
 * locale-neutral path: '/santino-build/ja/about/' → 'about/', '/santino-build/' → ''.
 */
export function toNeutralPath(pathname: string): string {
	const base = import.meta.env.BASE_URL;
	let path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
	const [first, ...rest] = path.split('/');
	if (isLocale(first) && first !== defaultLocale) {
		path = rest.join('/');
	}
	return path;
}

/**
 * The same page in every locale: used by the language switcher (relative `href`)
 * and by the hreflang tags (absolute `absoluteHref`). Pass `Astro.url.pathname`.
 */
export function getAlternates(pathname: string) {
	const neutral = toNeutralPath(pathname);
	return locales.map((locale) => ({
		locale,
		href: getRelativeLocaleUrl(locale, neutral),
		absoluteHref: getAbsoluteLocaleUrl(locale, neutral),
	}));
}
