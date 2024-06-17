import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  try {
    const entries = await client.getEntries({
      content_type: 'blogs', // Replace with your actual content type ID for blogs
    });

    if (entries.items) {
      return entries.items;
    } else {
      console.log('No blog entries found.');
    }
  } catch (error) {
    console.error('Error getting Blog entries:', error);
  }
}

export async function fetchProperties() {
  try {
    const entries = await client.getEntries({
      content_type: 'property', // Replace with your actual content type ID for properties
    });

    if (entries.items) {
      return entries.items;
    } else {
      console.log('No property entries found.');
    }
  } catch (error) {
    console.error('Error getting Property entries:', error);
  }
}
