/** Helpers for reading Content Collections by locale and formatting their dates. */
import { getCollection, type CollectionKey } from 'astro:content';
import type { Locale } from '../i18n/ui';

/** Entries of a collection for one locale (ids look like "<locale>/<slug>"). */
export function getLocalizedCollection<C extends CollectionKey>(collection: C, locale: Locale) {
	return getCollection(collection, (entry) => entry.id.startsWith(`${locale}/`));
}

/** "2022-11" → "Nov 2022" / "2022年11月" / "nov 2022"; "2014" → "2014". */
export function formatYearMonth(value: string, locale: Locale): string {
	const [year, month] = value.split('-').map(Number);
	if (!month) return String(year);
	return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', timeZone: 'UTC' }).format(
		new Date(Date.UTC(year, month - 1, 1)),
	);
}

/** A date range; an open end is shown with `presentLabel`. A start-less range shows the end alone. */
export function formatRange(
	start: string | undefined,
	end: string | undefined,
	locale: Locale,
	presentLabel: string,
): string {
	const endText = end ? formatYearMonth(end, locale) : presentLabel;
	return start ? `${formatYearMonth(start, locale)} – ${endText}` : endText;
}

/** Sort key for "YYYY" / "YYYY-MM" values: newest first when used with b.localeCompare(a). */
export function byStartDesc<T extends { data: { start?: string; end?: string } }>(a: T, b: T): number {
	const key = (e: T) => e.data.start ?? e.data.end ?? '';
	return key(b).localeCompare(key(a));
}
