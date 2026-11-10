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
	'page.comingSoon': 'Content coming soon.',
	'meta.home': 'Santino Cervera: software engineer. Projects, experience, and background.',
	'meta.about': 'About Santino Cervera: from civil engineering to software engineering.',
	'meta.experience': 'Work experience and education of Santino Cervera.',
	'meta.projects': 'Software projects by Santino Cervera.',
	'meta.certifications': 'Certifications earned by Santino Cervera.',
	'meta.contact': 'How to contact Santino Cervera.',
	'experience.software': 'Software',
	'experience.constructionEnergy': 'Construction & energy',
	'experience.education': 'Education',
	'date.present': 'Present',
	'projects.stack': 'Stack',
	'projects.role': 'Role',
	'projects.repo': 'Source code',
	'projects.demo': 'Live demo',
	'projects.showcase': 'Hackathon showcase',
	'certifications.other': 'Other certifications',
	'certifications.verify': 'Verify',
	'certifications.expired': 'Expired',
	'certifications.expires': 'Expires',
	'home.focus': 'Current focus',
	'home.viewProjects': 'See my projects',
	'home.viewExperience': 'See my experience',
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
		'page.comingSoon': 'コンテンツは準備中です。',
		'meta.home': 'サンティノ・セルベラ：ソフトウェアエンジニア。プロジェクト、経歴、バックグラウンド。',
		'meta.about': 'サンティノ・セルベラについて：土木工学からソフトウェアエンジニアへ。',
		'meta.experience': 'サンティノ・セルベラの職歴と学歴。',
		'meta.projects': 'サンティノ・セルベラのソフトウェアプロジェクト。',
		'meta.certifications': 'サンティノ・セルベラが取得した資格・認定。',
		'meta.contact': 'サンティノ・セルベラへのお問い合わせ方法。',
		'experience.software': 'ソフトウェア',
		'experience.constructionEnergy': '建設・エネルギー',
		'experience.education': '学歴',
		'date.present': '現在',
		'projects.stack': '技術スタック',
		'projects.role': '役割',
		'projects.repo': 'ソースコード',
		'projects.demo': 'デモ',
		'projects.showcase': 'ハッカソン作品ページ',
		'certifications.other': 'その他の資格',
		'certifications.verify': '認定を確認',
		'certifications.expired': '有効期限切れ',
		'certifications.expires': '有効期限',
		'home.focus': '現在の取り組み',
		'home.viewProjects': 'プロジェクトを見る',
		'home.viewExperience': '経歴を見る',
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
		'page.comingSoon': 'Contenido próximamente.',
		'meta.home': 'Santino Cervera: ingeniero de software. Proyectos, experiencia y trayectoria.',
		'meta.about': 'Sobre Santino Cervera: de la ingeniería civil a la ingeniería de software.',
		'meta.experience': 'Experiencia laboral y formación de Santino Cervera.',
		'meta.projects': 'Proyectos de software de Santino Cervera.',
		'meta.certifications': 'Certificaciones obtenidas por Santino Cervera.',
		'meta.contact': 'Cómo contactar a Santino Cervera.',
		'experience.software': 'Software',
		'experience.constructionEnergy': 'Construcción y energía',
		'experience.education': 'Formación',
		'date.present': 'Actualidad',
		'projects.stack': 'Tecnologías',
		'projects.role': 'Rol',
		'projects.repo': 'Código fuente',
		'projects.demo': 'Demo',
		'projects.showcase': 'Página del hackathon',
		'certifications.other': 'Otras certificaciones',
		'certifications.verify': 'Verificar',
		'certifications.expired': 'Vencida',
		'certifications.expires': 'Vence',
		'home.focus': 'Enfoque actual',
		'home.viewProjects': 'Ver mis proyectos',
		'home.viewExperience': 'Ver mi experiencia',
	},
};
