/**
 * Navigation
 * The links shared by the header, the mobile menu and the footer.
 * Rooms and Services scroll to home sections; the rest are pages.
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
    { label: tr('nav.rooms'), href: path(lang, 'home', undefined, 'rooms'), route: 'room' },
    { label: tr('nav.services'), href: path(lang, 'home', undefined, 'services'), route: 'home' },
    { label: tr('nav.location'), href: path(lang, 'location'), route: 'location' },
    { label: tr('nav.faq'), href: path(lang, 'faq'), route: 'faq' },
  ];
}
