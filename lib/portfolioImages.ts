import portfolioImageManifest from './portfolioImageManifest.json';

type ProjectImageEntry = {
  source: string;
  file: string;
};

type ProjectImageManifest = Record<string, {
  cover: ProjectImageEntry;
  gallery: ProjectImageEntry[];
}>;

const manifest = portfolioImageManifest as ProjectImageManifest;

function toPublicPath(slug: string, file: string) {
  return `/portfolio/${slug}/${file}`;
}

export function getProjectImageSet(slug: string) {
  const entry = manifest[slug];

  if (!entry) {
    throw new Error(`Portfolio image manifest is missing an entry for "${slug}".`);
  }

  return {
    image: toPublicPath(slug, entry.cover.file),
    images: entry.gallery.map((item) => toPublicPath(slug, item.file)),
  };
}
