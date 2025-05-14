import{c as n,o as r,j as i,t as e,k as t}from"./chunks/framework.C9-9fwSE.js";const s=`# Markdown Extension Examples\r
\r
This page demonstrates some of the built-in markdown extensions provided by VitePress.\r
\r
## Syntax Highlighting\r
\r
VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:\r
\r
**Input**\r
\r
\`\`\`\`md\r
\`\`\`js{4}\r
export default {\r
  data () {\r
    return {\r
      msg: 'Highlighted!'\r
    }\r
  }\r
}\r
\`\`\`\r
\`\`\`\`\r
\r
**Output**\r
\r
\`\`\`js{4}\r
export default {\r
  data () {\r
    return {\r
      msg: 'Highlighted!'\r
    }\r
  }\r
}\r
\`\`\`\r
\r
## Custom Containers\r
\r
**Input**\r
\r
\`\`\`md\r
::: info\r
This is an info box.\r
:::\r
\r
::: tip\r
This is a tip.\r
:::\r
\r
::: warning\r
This is a warning.\r
:::\r
\r
::: danger\r
This is a dangerous warning.\r
:::\r
\r
::: details\r
This is a details block.\r
:::\r
\`\`\`\r
\r
**Output**\r
\r
::: info\r
This is an info box.\r
:::\r
\r
::: tip\r
This is a tip.\r
:::\r
\r
::: warning\r
This is a warning.\r
:::\r
\r
::: danger\r
This is a dangerous warning.\r
:::\r
\r
::: details\r
This is a details block.\r
:::\r
\r
## More\r
\r
Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).\r
`,a={class:"language-markdown"},p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"raw/markdown-examples.md","filePath":"raw/markdown-examples.md"}'),o={name:"raw/markdown-examples.md"},m=Object.assign(o,{setup(d){return(h,l)=>(r(),n("div",null,[i("pre",a,e(t(s)),1)]))}});export{p as __pageData,m as default};
