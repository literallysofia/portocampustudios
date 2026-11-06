/**
 * Site configuration
 * Business details shown across the site (header, footer, booking).
 * Update contacts here — every page reads from this file.
 */

export const siteConfig = {
  name: 'Porto Campus Studios',
  url: 'https://portocampustudios.com',
  email: 'portocampustudios@gmail.com',
  /**
   * TODO: the business phone / WhatsApp number, international format (+351…).
   * While empty, the footer hides the phone line and the WhatsApp buttons
   * open WhatsApp without a recipient (the build prints a reminder).
   */
  phone: '',
  facebook: 'https://www.facebook.com/portocampustudios',
  address: {
    street: 'Rua Dionísio dos Santos Silva, 291',
    postcode: '4200-072',
    city: 'Porto',
    country: 'Portugal',
  },
  coordinates: { lat: 41.17651, lng: -8.607434 },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&z=16&output=embed`;

/**
 * Work-in-progress gate.
 * While `wip` is true, production builds show a "coming soon" screen that
 * asks for a password on every page, and tell search engines not to index
 * the site. The dev server (`npm run dev`) never shows it.
 * Only a salted PBKDF2 hash is stored here, never the password itself.
 * To change the password: node scripts/gate-hash.mjs "new password"
 * and paste the printed salt + hash below. To launch: set `wip` to false.
 *
 * Note: GitHub Pages is static hosting, so this keeps casual visitors and
 * search engines out but isn't real access control.
 */
const wip = true;

export const siteGate = {
  /** Only in production builds; `npm run dev` never shows the gate */
  enabled: wip && import.meta.env.PROD,
  salt: 'a9837ddbb099837208739520a4601880',
  hash: '7cf5f938f7ec1a41690594da8c501035f6edd3aa3adb15601d9618d3eddc2b22',
  iterations: 210000,
} as const;
