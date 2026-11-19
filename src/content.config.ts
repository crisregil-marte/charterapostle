
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// EXISTING: Keystatic articles
const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdoc}',
    base: './src/content/posts',
  }),
  schema: z.object({
    title: z.string(),
  }),
});

// EXISTING: Keystatic referral cards
const referrals = defineCollection({
  loader: glob({
    pattern: '**/*.yaml',
    base: './src/content/referrals',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    buttonLabel: z.string(),
    destinationUrl: z.string().url(),
    logo: z.string().optional(),
  }),
});

// NEW: Homepage Settings
const homepageSettings = defineCollection({
  loader: glob({
    pattern: 'homepage.yaml',
    base: './src/content/settings',
  }),
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroButtonLabel: z.string(),
    heroButtonUrl: z.string(),

    hubTitle: z.string(),
    aboutNavLabel: z.string(),
    articleNavLabel: z.string(),
    videosNavLabel: z.string(),
    contactNavLabel: z.string(),

    aboutTitle: z.string(),
    aboutLead: z.string(),
    missionHeading: z.string(),
    missionDescription: z.string(),
    focusHeading: z.string(),
    focusDescription: z.string(),

    articleHeading: z.string(),

    contactHeading: z.string(),
    contactDescription: z.string(),
    contactEmail: z.string(),
    contactProcessImage: z.string().optional(),
    contactProcessHeading: z.string().optional(),
    emailButtonLabel: z.string(),
    githubUrl: z.string().url(),
    githubButtonLabel: z.string(),

    referralsHeading: z.string(),
    referralsDescription: z.string(),
    referralsButtonLabel: z.string(),
    referralsButtonUrl: z.string(),

    footerText: z.string(),
  }),
});

// NEW: Video Collections
const videos = defineCollection({
  loader: glob({
    pattern: '**/*.yaml',
    base: './src/content/videos',
  }),
  schema: z.object({
  title: z.string(),
  description: z.string(),
  videoUrl: z.string().url().optional(),
  videoFile: z.string().optional(),
  thumbnail: z.string().optional(),
  displayOrder: z.number().int(),
  }),
});


// NEW: Appearance Settings
const appearanceSettings = defineCollection({
  loader: glob({
    pattern: 'appearance.yaml',
    base: './src/content/settings',
  }),
  schema: z.object({
    siteBackground: z.string(),
    cardBackground: z.string(),
    mainText: z.string(),
    secondaryText: z.string(),
    accent: z.string(),
    border: z.string(),
  }),
});

// Register collections
export const collections = {
  posts,
  referrals,
  homepageSettings,
  appearanceSettings,
  videos,
};
