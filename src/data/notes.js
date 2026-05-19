const files = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { metadata: {}, content: markdown };
  }

  const metadata = Object.fromEntries(
    match[1]
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(':');
        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        return [key, value];
      })
  );

  return { metadata, content: match[2].trim() };
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '');
}

export const notes = Object.entries(files)
  .map(([path, markdown]) => {
    const { metadata, content } = parseFrontmatter(markdown);

    return {
      slug: metadata.slug || slugFromPath(path),
      title: metadata.title || slugFromPath(path),
      date: metadata.date || '',
      updated: metadata.updated || metadata.date || '',
      summary: metadata.summary || '',
      content,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getNoteBySlug(slug) {
  return notes.find((note) => note.slug === slug);
}
