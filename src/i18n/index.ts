/**
 * i18n helpers
 * Locales, URL slugs (English in every language) and
 * the UI strings used by components. Page copy lives in src/content.
 */

export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

/**
 * URL slug for each route, per locale. URLs are always English, so both
 * languages share the same slug and only the /en/ prefix differs
 * (/location/ vs /en/location/). Change a URL here, not in src/pages.
 */
export const routeSlugs = {
  home: { pt: '', en: '' },
  room: { pt: 'rooms', en: 'rooms' },
  location: { pt: 'location', en: 'location' },
  faq: { pt: 'faq', en: 'faq' },
  book: { pt: 'book', en: 'book' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSlugs;

/** Builds a localized path, e.g. path('en', 'room', 'studio') → /en/rooms/studio/ */
export function path(lang: Locale, route: RouteKey, slug?: string, hash?: string): string {
  const parts = [lang === defaultLocale ? '' : lang, routeSlugs[route][lang], slug].filter(Boolean);
  const base = parts.length ? `/${parts.join('/')}/` : '/';
  return hash ? `${base}#${hash}` : base;
}

/** UI strings shared by components (labels, buttons, aria text). */
export const ui = {
  pt: {
    'nav.rooms': 'Habitações',
    'nav.location': 'Localização',
    'nav.faq': 'FAQ',
    'nav.book': 'Reservar',
    'nav.menu': 'Menu',
    'nav.close': 'Fechar',
    'nav.home': 'Início',
    'nav.skip': 'Saltar para o conteúdo',
    'bar.subtitle': 'Pedido por email ou WhatsApp',
    'lang.switch': 'English',
    'lang.short': 'EN',
    'lang.label': 'Idioma',
    'cta.seeRooms': 'Ver habitações',
    'cta.book': 'Reservar',
    'cta.bookThis': 'Reservar esta habitação',
    'cta.email': 'Email',
    'cta.whatsapp': 'WhatsApp',
    'cta.more': 'Saber mais',
    'cta.allFaq': 'Ver todas as perguntas',
    'cta.compareRooms': 'Comparar habitações',
    'cta.howToGetHere': 'Como chegar',
    'faq.topics': 'Tópicos',
    'notFound.meta': 'Página não encontrada',
    'notFound.title': 'Esta porta não dá para',
    'notFound.accent': 'lado nenhum',
    'notFound.text': 'A página que procuras mudou de morada ou nunca existiu. Mas a casa continua no mesmo sítio.',
    'notFound.home': 'Voltar ao início',
    'map.open': 'Abrir no Google Maps',
    'map.load': 'Mostrar mapa',
    'gallery.open': 'Abrir fotografia',
    'gallery.close': 'Fechar',
    'gallery.prev': 'Anterior',
    'gallery.next': 'Seguinte',
    'book.room': 'Habitação',
    'book.checkIn': 'Entrada',
    'book.checkOut': 'Saída',
    'book.any': 'Ainda não sei',
    'book.messageIntro': 'Olá! Gostaria de pedir informações sobre uma reserva no Porto Campus Studios.',
    'book.messageRoom': 'Habitação',
    'book.messageDates': 'Datas',
    'book.subject': 'Pedido de reserva',
    'footer.contacts': 'Contactos',
    'footer.explore': 'Explorar',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.top': 'Voltar ao topo',
    'footer.tagline': 'Estúdios para estudantes no coração académico do Porto.',
    'gate.title': 'Brevemente',
    'gate.text': 'Estamos a preparar o novo site do Porto Campus Studios. Tens a palavra-passe?',
    'gate.label': 'Palavra-passe',
    'gate.submit': 'Entrar',
    'gate.error': 'Palavra-passe errada. Tenta outra vez.',
  },
  en: {
    'nav.rooms': 'Rooms',
    'nav.location': 'Location',
    'nav.faq': 'FAQ',
    'nav.book': 'Book',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.home': 'Home',
    'nav.skip': 'Skip to content',
    'bar.subtitle': 'Request by email or WhatsApp',
    'lang.switch': 'Português',
    'lang.short': 'PT',
    'lang.label': 'Language',
    'cta.seeRooms': 'See rooms',
    'cta.book': 'Book',
    'cta.bookThis': 'Book this room',
    'cta.email': 'Email',
    'cta.whatsapp': 'WhatsApp',
    'cta.more': 'Learn more',
    'cta.allFaq': 'See all questions',
    'cta.compareRooms': 'Compare rooms',
    'cta.howToGetHere': 'How to get here',
    'faq.topics': 'Topics',
    'notFound.meta': 'Page not found',
    'notFound.title': 'This door leads',
    'notFound.accent': 'nowhere',
    'notFound.text': "The page you're looking for has moved or never existed. But the house is still right where it was.",
    'notFound.home': 'Back to home',
    'map.open': 'Open in Google Maps',
    'map.load': 'Show map',
    'gallery.open': 'Open photo',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous',
    'gallery.next': 'Next',
    'book.room': 'Room',
    'book.checkIn': 'Check-in',
    'book.checkOut': 'Check-out',
    'book.any': 'Not sure yet',
    'book.messageIntro': "Hi! I'd like to ask about booking a stay at Porto Campus Studios.",
    'book.messageRoom': 'Room',
    'book.messageDates': 'Dates',
    'book.subject': 'Booking request',
    'footer.contacts': 'Contacts',
    'footer.explore': 'Explore',
    'footer.rights': 'All rights reserved.',
    'footer.top': 'Back to top',
    'footer.tagline': "Student studios in the heart of Porto's university district.",
    'gate.title': 'Coming soon',
    'gate.text': "We're getting the new Porto Campus Studios site ready. Have the password?",
    'gate.label': 'Password',
    'gate.submit': 'Enter',
    'gate.error': 'Wrong password. Try again.',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];

export function t(lang: Locale) {
  return (key: UiKey): string => ui[lang][key];
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
