// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "格物";
export const SITE_DESCRIPTION =
  "穷究方法，服务生活";
export const TWITTER_HANDLE = "@gewu";
export const MY_NAME = "gewu";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
