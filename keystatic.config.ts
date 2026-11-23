
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  
  storage: import.meta.env.PROD
  ? {
      kind: 'github',
      repo: 'crisregil-marte/charterapostle',
      branch: 'content-staging',
    }
  : {
      kind: 'local',
    },

collections: {

    // EXISTING ARTICLE COLLECTION
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' }
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),

    // NEW: REFERRAL CARDS
    referrals: collection({
      label: 'Referral Cards',
      path: 'src/content/referrals/*',
      slugField: 'title',
      columns: ['title', 'buttonLabel'],

      schema: {
        title: fields.slug({
          name: { label: 'Referral Title' }
        }),

        description: fields.text({
          label: 'Description',
          multiline: true,
        }),

        buttonLabel: fields.text({
          label: 'Button Label',
        }),

        destinationUrl: fields.url({
          label: 'Destination URL',
          description: 'Full website address, including https://',
        }),

        logo: fields.image({
          label: 'Optional Image or Logo',
          directory: 'public/images/referrals',
          publicPath: '/images/referrals/',
        }),
    
      },
    }),

    // NEW: VIDEO COLLECTION
    videos: collection({
      label: 'Video Collections',
      path: 'src/content/videos/*',
      slugField: 'title',
      columns: ['title', 'displayOrder'],

      schema: {
        title: fields.slug({
          name: { label: 'Video Title' },
        }),

        description: fields.text({
          label: 'Video Description',
          multiline: true,
        }),

       videoUrl: fields.url({
  label: 'YouTube Video URL (Optional)',
  description: 'Use this for YouTube-hosted videos.',
  validation: { isRequired: false },
}),

videoFile: fields.file({
  label: 'Upload MP4 Video (Optional)',
  description: 'Choose an MP4 file from your computer.',
  directory: 'public/videos',
  publicPath: '/videos/',
  validation: { isRequired: false },
}),

        thumbnail: fields.image({
          label: 'Optional Video Thumbnail',
          directory: 'public/images/videos',
          publicPath: '/images/videos/',
        }),

        displayOrder: fields.integer({
          label: 'Display Order',
        }),
      },
    }),

  },

  // NEW: REFERRALS PAGE SETTINGS
  singletons: {
    homepage: singleton({

      label: 'Homepage Settings',
      path: 'src/content/settings/homepage',

      schema: {
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
        heroButtonLabel: fields.text({ label: 'Hero Button Label' }),
        heroButtonUrl: fields.text({ label: 'Hero Button Destination' }),

        hubTitle: fields.text({ label: 'Navigation Heading' }),
        aboutNavLabel: fields.text({ label: 'About Navigation Label' }),
        articleNavLabel: fields.text({ label: 'Article Navigation Label' }),
        videosNavLabel: fields.text({ label: 'Videos Navigation Label' }),
        contactNavLabel: fields.text({ label: 'Contact Navigation Label' }),

        aboutTitle: fields.text({ label: 'About Heading' }),
        aboutLead: fields.text({ label: 'About Introduction', multiline: true }),
        missionHeading: fields.text({ label: 'Mission Heading' }),
        missionDescription: fields.text({ label: 'Mission Description', multiline: true }),
        focusHeading: fields.text({ label: 'Weekly Focus Heading' }),
        focusDescription: fields.text({ label: 'Weekly Focus Description', multiline: true }),

        articleHeading: fields.text({ label: 'Article Section Heading' }),

        contactHeading: fields.text({ label: 'Contact Heading' }),
        contactDescription: fields.text({ label: 'Contact Description', multiline: true }),
        contactEmail: fields.text({ label: 'Contact Email' }),
	contactProcessImage: fields.image({
  	label: 'Consultation Process Flow Image',
  	directory: 'public/images/contact',
  	publicPath: '/images/contact/',
}),

contactProcessHeading: fields.text({
  label: 'Consultation Process Heading',
  description: 'Heading displayed above the consultation process image.',
  defaultValue: 'How Consultation Works',
}),
        emailButtonLabel: fields.text({ label: 'Email Button Label' }),
        githubUrl: fields.url({ label: 'GitHub Profile URL' }),
        githubButtonLabel: fields.text({ label: 'GitHub Button Label' }),

        referralsHeading: fields.text({ label: 'Referrals Heading' }),
        referralsDescription: fields.text({ label: 'Referrals Description', multiline: true }),
        referralsButtonLabel: fields.text({ label: 'Referrals Button Label' }),
        referralsButtonUrl: fields.text({ label: 'Referrals Button Destination' }),

        footerText: fields.text({ label: 'Footer Text' }),
      },
    }),


    referralsPage: singleton({
      label: 'Referrals Page Settings',
      path: 'src/content/settings/referrals-page',

      schema: {
        pageTitle: fields.text({
          label: 'Page Heading',
        }),

        pageSubtitle: fields.text({
          label: 'Page Introduction',
          multiline: true,
        }),

        partnershipHeading: fields.text({
          label: 'Collaboration Heading',
        }),

        partnershipDescription: fields.text({
          label: 'Collaboration Description',
          multiline: true,
        }),

        partnershipButtonLabel: fields.text({
          label: 'Partnership Button Label',
        }),

        partnershipEmail: fields.text({
          label: 'Partnership Email Address',
        }),
     
      },
    }),

    // NEW: APPEARANCE SETTINGS
    appearance: singleton({
      label: 'Appearance Settings',
      path: 'src/content/settings/appearance',

      schema: {
        siteBackground: fields.text({
          label: 'Site Background Color',
          description: 'Hex color, for example #111111',
        }),

        cardBackground: fields.text({
          label: 'Card Background Color',
          description: 'Hex color, for example #1e1e1e',
        }),

        mainText: fields.text({
          label: 'Main Text Color',
          description: 'Hex color, for example #ffffff',
        }),

        secondaryText: fields.text({
          label: 'Secondary Text Color',
          description: 'Hex color, for example #b0b0b0',
        }),

        accent: fields.text({
          label: 'Accent Color',
          description: 'Hex color, for example #ffffff',
        }),

        border: fields.text({
          label: 'Border Color',
          description: 'Hex color, for example #333333',
        }),
      },
    }),

  },
});

