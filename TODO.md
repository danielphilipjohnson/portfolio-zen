# TODO

## SEO & Content

- [ ] Create `src/app/projects/[slug]/page.tsx` — individual project detail pages
      Content MDX files exist at `content/projects/*.mdx` but there is no route to
      render them as standalone pages. Each `/projects/<slug>` currently returns 404.
      Follow the pattern from `src/app/blog/[slug]/page.tsx`.
      Once implemented, add `/projects/*` back to the sitemap with priority 0.6.
