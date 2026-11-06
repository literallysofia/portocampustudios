/**
 * i18n helpers
 * Locales, localized URL slugs (data, so the code stays English) and
 * the UI strings used by components. Page copy lives in src/content.
 */

export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

/** Localized slug for each route. Change a URL here, not in src/pages. */
export const routeSlugs = {
  home: { pt: '', en: '' },
  room: { pt: 'habitacoes', en: 'rooms' },
  location: { pt: 'localizacao', en: 'location' },
  faq: { pt: 'faq', en: 'faq' },
  book: { pt: 'reservar', en: 'book' },
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
    'nav.services': 'Serviços',
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
    'cta.howToGetHere': 'Como chegar',
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
    'notFound.title': 'Esta página fugiu de casa',
    'notFound.text': 'Não encontrámos o que procuras. Volta ao início e começa de novo.',
    'notFound.cta': 'Voltar ao início',
  },
  en: {
    'nav.rooms': 'Rooms',
    'nav.services': 'Services',
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
    'cta.howToGetHere': 'How to get here',
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
    'notFound.title': 'This page moved out',
    'notFound.text': "We couldn't find what you're looking for. Head back home and start again.",
    'notFound.cta': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];

export function t(lang: Locale) {
  return (key: UiKey): string => ui[lang][key];
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
