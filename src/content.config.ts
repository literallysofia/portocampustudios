/**
 * Content collections
 * All page copy lives in src/content as frontmatter-only Markdown,
 * one file per locale (pt.md / en.md). These schemas validate it at
 * build time, so a typo in the content fails the build instead of
 * shipping a broken page.
 */

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const localeFiles = (folder: string) => glob({ pattern: '*.md', base: `./src/content/${folder}` });

const sectionHead = z.object({
  eyebrow: z.string(),
  title: z.string(),
  text: z.string().optional(),
});

/** Home page: hero, intro and the heading of every section */
const home = defineCollection({
  loader: localeFiles('home'),
  schema: ({ image }) =>
    z.object({
      meta: z.object({ description: z.string() }),
      hero: z.object({
        title: z.string(),
        accent: z.string(),
        subtitle: z.string(),
        image: image(),
        imageAlt: z.string(),
        chips: z.array(z.string()),
      }),
      intro: z.object({
        text: z.string(),
        facts: z.array(z.object({ value: z.string(), label: z.string() })),
        /** Photos of the complex, shown as a mosaic under the intro */
        photos: z.array(z.object({ image: image(), alt: z.string() })),
      }),
      rooms: sectionHead,
      services: sectionHead,
      location: sectionHead,
      city: sectionHead.extend({
        image: image(),
        imageAlt: z.string(),
      }),
      faq: sectionHead,
      cta: z.object({ title: z.string(), text: z.string(), image: image(), imageAlt: z.string() }),
    }),
});

/** One file per room type per locale: rooms/pt/studio.md, rooms/en/studio.md */
const rooms = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/rooms' }),
  schema: ({ image }) =>
    z.object({
      /** URL slug, always English, e.g. "studio" → /rooms/studio/ */
      urlSlug: z.string(),
      order: z.number(),
      name: z.string(),
      /** Small label on the card, e.g. "×4" */
      badge: z.string().optional(),
      /** Fun names of the individual units */
      nicknames: z.array(z.string()).default([]),
      summary: z.string(),
      description: z.string(),
      highlights: z.array(z.string()),
      features: z.array(z.object({ title: z.string(), items: z.array(z.string()) })),
      cover: image(),
      /** Only needed when the cover isn't one of the gallery photos */
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })),
    }),
});

/** "What's included" grid. `icon` must match a name in components/Icon.astro */
const services = defineCollection({
  loader: localeFiles('services'),
  schema: z.object({
    items: z.array(z.object({ icon: z.string(), title: z.string(), text: z.string() })),
  }),
});

const location = defineCollection({
  loader: localeFiles('location'),
  schema: ({ image }) =>
    z.object({
      meta: z.object({ title: z.string(), description: z.string() }),
      intro: z.object({ title: z.string(), accent: z.string().optional(), text: z.string() }),
      highlights: z.array(z.object({ value: z.string(), label: z.string() })),
      transport: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          text: z.string(),
          lines: z.array(z.string()).default([]),
          link: z.object({ label: z.string(), url: z.string().url() }).optional(),
        })
      ),
      nearby: z.object({ title: z.string(), items: z.array(z.string()) }),
      institutions: z.object({
        title: z.string(),
        groups: z.array(z.object({ title: z.string(), items: z.array(z.string()) })),
      }),
      city: z.object({ title: z.string(), text: z.string() }),
      places: z.object({
        title: z.string(),
        // `id` is the same in every language: it's the card's anchor (#lello)
        items: z.array(z.object({ id: z.string(), name: z.string(), text: z.string(), image: image() })),
      }),
    }),
});

const faq = defineCollection({
  loader: localeFiles('faq'),
  schema: z.object({
    meta: z.object({ title: z.string(), description: z.string() }),
    title: z.string(),
    text: z.string(),
    groups: z.array(
      z.object({
        title: z.string(),
        items: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
            /** Shown in the home page FAQ teaser */
            featured: z.boolean().default(false),
          })
        ),
      })
    ),
  }),
});

const book = defineCollection({
  loader: localeFiles('book'),
  schema: z.object({
    meta: z.object({ title: z.string(), description: z.string() }),
    title: z.string(),
    text: z.string(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })),
    note: z.string(),
  }),
});

export const collections = { home, rooms, services, location, faq, book };
