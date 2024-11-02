import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'zh', 'fr'] as const;
export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always'; // Default

export type AppPathnames = keyof typeof pathnames; 