/**
 * Locales and interface strings (navigation, labels, notices).
 * Page content lives in Content Collections, not here.
 *
 * Keep `locales` and `defaultLocale` in sync with `i18n` in astro.config.mjs.
 */

export const locales = ['en', 'ja', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Each language's name in its own language, for the language switcher. */
export const localeNames: Record<Locale, string> = {
	en: 'English',
	ja: '日本語',
	es: 'Español',
};

/**
 * Review status of the interface strings for each locale.
 * ja and es are machine-drafted and stay 'draft' until Santino approves them.
 */
export const uiTranslationStatus: Record<Locale, 'draft' | 'approved'> = {
	en: 'approved',
	ja: 'draft',
	es: 'draft',
};

const en = {
	'nav.label': 'Main navigation',
	'nav.home': 'Home',
	'nav.about': 'About',
	'nav.experience': 'Experience',
	'nav.projects': 'Projects',
	'nav.certifications': 'Certifications',
	'nav.contact': 'Contact',
	'lang.label': 'Language',
	'a11y.skipToContent': 'Skip to content',
	'draft.notice': 'Draft translation, pending review.',
} as const;

export type UiKey = keyof typeof en;

/** ja and es must define every key that en defines; a missing key is a type error. */
export const ui: Record<Locale, Record<UiKey, string>> = {
	en,
	// DRAFT: machine-drafted, pending review.
	ja: {
		'nav.label': 'メインナビゲーション',
		'nav.home': 'ホーム',
		'nav.about': '自己紹介',
		'nav.experience': '経歴',
		'nav.projects': 'プロジェクト',
		'nav.certifications': '資格・認定',
		'nav.contact': 'お問い合わせ',
		'lang.label': '言語',
		'a11y.skipToContent': '本文へスキップ',
		'draft.notice': '翻訳の下書きです（確認待ち）。',
	},
	// DRAFT: machine-drafted, pending review.
	es: {
		'nav.label': 'Navegación principal',
		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'nav.certifications': 'Certificaciones',
		'nav.contact': 'Contacto',
		'lang.label': 'Idioma',
		'a11y.skipToContent': 'Saltar al contenido',
		'draft.notice': 'Traducción en borrador, pendiente de revisión.',
	},
};
