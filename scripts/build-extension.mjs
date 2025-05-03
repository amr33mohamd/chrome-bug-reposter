import { build } from 'esbuild';
import * as dotenv from 'dotenv';
import { cpSync } from 'fs';

dotenv.config();

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = process.env;

if (!VITE_SUPABASE_URL || !VITE_SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase env variables");
}

const define = {
  'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(VITE_SUPABASE_URL),
  'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(VITE_SUPABASE_ANON_KEY)
};

await Promise.all([
  build({
    entryPoints: ['src/background/index.ts'],
    outfile: 'dist/background.js',
    platform: 'browser',
    bundle: true,
    format: 'iife',
    define
  }),
  build({
    entryPoints: ['src/content/index.ts'],
    outfile: 'dist/content.js',
    platform: 'browser',
    bundle: true,
    format: 'iife',
    define
  })
]);

cpSync('manifest.json', 'dist/manifest.json');
console.log('✅ Extension scripts and manifest built!');
