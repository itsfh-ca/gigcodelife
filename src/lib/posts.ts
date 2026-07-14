import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All non-draft posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** The `limit` most recent posts excluding `excludeId`. */
export function relatedPosts(posts: Post[], excludeId: string, limit = 3): Post[] {
  return posts.filter((p) => p.id !== excludeId).slice(0, limit);
}
