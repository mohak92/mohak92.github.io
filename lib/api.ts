import { Entry, EntryCollection, EntrySkeletonType } from 'contentful';
import client from './contentful';

// Generic function to fetch entries of any content type
export async function getEntries<T extends EntrySkeletonType>(
  content_type: string,
  options: Record<string, unknown> = {}
): Promise<EntryCollection<T>> {
  const entries = await client.getEntries<T>({
    content_type,
    ...options,
  });
  return entries;
}

// Function to fetch a single entry by ID
export async function getEntry<T extends EntrySkeletonType>(entryId: string): Promise<Entry<T>> {
  const entry = await client.getEntry<T>(entryId);
  return entry;
} 