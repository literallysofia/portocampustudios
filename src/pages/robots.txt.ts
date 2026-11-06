/**
 * robots.txt
 * While the WIP gate is on, ask every crawler to stay away; after launch,
 * allow everything.
 */
import type { APIRoute } from 'astro';
import { siteGate } from '../config';

export const GET: APIRoute = () =>
  new Response(siteGate.enabled ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
