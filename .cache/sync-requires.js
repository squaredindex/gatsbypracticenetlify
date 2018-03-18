// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/lev/dev/gatsbypractice-lut/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-posts-post-page-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut/src/posts/PostPage.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lev/dev/gatsbypractice-lut/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "posts-post.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/posts-post.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "posts-our-second-post.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/posts-our-second-post.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "404.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/404.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "about.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/about.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/index.json"),
  "layout-index.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/lev/dev/gatsbypractice-lut/.cache/json/404-html.json")
}