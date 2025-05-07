import{c as e,o as r,j as t,t as n,k as a}from"./chunks/framework.aai8Pu2t.js";const s=`---\r
outline: deep\r
---\r
\r
# Runtime API Examples\r
\r
This page demonstrates usage of some of the runtime APIs provided by VitePress.\r
\r
The main \`useData()\` API can be used to access site, theme, and page data for the current page. It works in both \`.md\` and \`.vue\` files:\r
\r
\`\`\`md\r
<script setup>\r
import { useData } from 'vitepress'\r
\r
const { theme, page, frontmatter } = useData()\r
<\/script>\r
\r
## Results\r
\r
### Theme Data\r
<pre>{{ theme }}</pre>\r
\r
### Page Data\r
<pre>{{ page }}</pre>\r
\r
### Page Frontmatter\r
<pre>{{ frontmatter }}</pre>\r
\`\`\`\r
\r
<script setup>\r
import { useData } from 'vitepress'\r
\r
const { site, theme, page, frontmatter } = useData()\r
<\/script>\r
\r
## Results\r
\r
### Theme Data\r
<pre>{{ theme }}</pre>\r
\r
### Page Data\r
<pre>{{ page }}</pre>\r
\r
### Page Frontmatter\r
<pre>{{ frontmatter }}</pre>\r
\r
## More\r
\r
Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).\r
`,p={class:"language-markdown"},d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/api-examples.md","filePath":"raw/api-examples.md"}'),o={name:"raw/api-examples.md"},l=Object.assign(o,{setup(m){return(i,c)=>(r(),e("div",null,[t("pre",p,n(a(s)),1)]))}});export{d as __pageData,l as default};
