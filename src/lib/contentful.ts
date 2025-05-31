import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export const getProfile = async () => {
  const response = await client.getEntries({
    content_type: 'profile',
    limit: 1,
  });
  return response.items[0];
};

export const getProjects = async () => {
  const response = await client.getEntries({
    content_type: 'project',
    order: ['-sys.createdAt'],
  });
  return response.items;
};

export const getSkills = async () => {
  const response = await client.getEntries({
    content_type: 'skillCategory',
    include: 2,
  });
  return response.items;
}; 