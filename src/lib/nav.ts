/**
 * Navigation
 * The links shared by the header, the mobile menu and the footer.
 * Every item is a page of its own; Home sections link to them too.
 */
import { path, t, type Locale, type RouteKey } from '../i18n';

export interface NavItem {
  label: string;
  href: string;
  route: RouteKey;
}

export function navItems(lang: Locale): NavItem[] {
  const tr = t(lang);
  return [
    { label: tr('nav.rooms'), href: path(lang, 'room'), route: 'room' },
    { label: tr('nav.location'), href: path(lang, 'location'), route: 'location' },
    { label: tr('nav.faq'), href: path(lang, 'faq'), route: 'faq' },
  ];
}
