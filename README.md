# Song book

https://music.artelx.ru/

List of my favorite songs with lyrics, chords, video.

- Project uses [Hugo](https://gohugo.io/) staic site generator.
- Project uses [Netlify](https://netlify.com/) for builds and deploys

## Requirements

- [NodeJs](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)

## Development

```
yarn start
```

## Deploy to the hosting

Push to master branch triggers deployment to Netlify

## Content structure

- site/content/ - main directory for content
- site/content/[subfolders] - categories and subcategories
- cite/content/[subfolder]/file.md - files for page

### Taxonomies

- category
- tag
- author
