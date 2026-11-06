/**
 * Booking links
 * Builds the prefilled email and WhatsApp links used by every
 * "book" button. There's no form backend: the visitor's own email
 * or WhatsApp app sends the request.
 */
import { siteConfig } from '../config';
import { ui, type Locale } from '../i18n';

export interface BookingDetails {
  room?: string;
  checkIn?: string;
  checkOut?: string;
}

export function bookingMessage(lang: Locale, { room, checkIn, checkOut }: BookingDetails = {}): string {
  const strings = ui[lang];
  const lines: string[] = [strings['book.messageIntro']];
  if (room) lines.push(`${strings['book.messageRoom']}: ${room}`);
  if (checkIn || checkOut) lines.push(`${strings['book.messageDates']}: ${checkIn || '?'} → ${checkOut || '?'}`);
  return lines.join('\n');
}

export function emailLink(lang: Locale, details?: BookingDetails): string {
  const subject = encodeURIComponent(`${ui[lang]['book.subject']} · ${siteConfig.name}`);
  const body = encodeURIComponent(bookingMessage(lang, details));
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

let warned = false;

/**
 * wa.me link to the business number from src/config.ts.
 * Until a number is set, WhatsApp opens with the message ready and lets
 * the visitor pick the chat, and the build prints a reminder.
 */
export function whatsappLink(lang: Locale, details?: BookingDetails): string {
  const phone = siteConfig.phone.replace(/\D/g, '');
  if (!phone && !warned) {
    warned = true;
    console.warn('[booking] siteConfig.phone is empty: set the business WhatsApp number in src/config.ts');
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(bookingMessage(lang, details))}`;
}
