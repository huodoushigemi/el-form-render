// .docs/.vitepress/config.ts
import { defineConfig as defineConfig2 } from "file:///D:/npm-project/el-form-render/node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.4_async-validator@4.2.5_postcss@8.5.3_sass-embedd_z7s6uqzyixnuaurildl5h32ybu/node_modules/vitepress/dist/node/index.js";
import path2 from "path";
import fs from "fs/promises";
import fse from "file:///D:/npm-project/el-form-render/node_modules/.pnpm/fs-extra@11.3.0/node_modules/fs-extra/lib/index.js";
import Jsx from "file:///D:/npm-project/el-form-render/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.2_vite@6.3.3_jiti@2.4.2_sass-embedded@1.87.0__vue@3.5.13_typescript@5.7.3_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import MarkdownPreview from "file:///D:/npm-project/el-form-render/node_modules/.pnpm/vite-plugin-markdown-preview@1.1.1/node_modules/vite-plugin-markdown-preview/dist/index.js";
import UnoCSS from "file:///D:/npm-project/el-form-render/node_modules/.pnpm/unocss@66.1.0-beta.6_postcss@8.5.3_vite@6.3.3_jiti@2.4.2_sass-embedded@1.87.0__vue@3.5.13_typescript@5.7.3_/node_modules/unocss/dist/vite.mjs";

// vite.config.ts
import { defineConfig } from "file:///D:/npm-project/el-form-render/node_modules/.pnpm/vite@6.3.3_jiti@2.4.2_sass-embedded@1.87.0/node_modules/vite/dist/node/index.js";
import path from "path";
var cwd = process.cwd();
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "el-form-render/element-plus": path.join(cwd, "/src/ui/element-plus"),
      "el-form-render/naive-ui": path.join(cwd, "/src/ui/naive-ui"),
      "el-form-render/antdv": path.join(cwd, "/src/ui/antdv"),
      "el-form-render/vant": path.join(cwd, "/src/ui/vant"),
      "el-form-render": path.join(cwd, "/src/index")
    }
  },
  plugins: [
    (await import("file:///D:/npm-project/el-form-render/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vite@6.3.3_jiti@2.4.2_sass-embedded@1.87.0__vue@3.5.13_typescript@5.7.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs")).default(),
    (await import("file:///D:/npm-project/el-form-render/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.2_vite@6.3.3_jiti@2.4.2_sass-embedded@1.87.0__vue@3.5.13_typescript@5.7.3_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs")).default()
  ]
});

// .docs/.vitepress/config.ts
var cwd2 = process.cwd();
var config_default = defineConfig2({
  title: "el-form-render",
  description: "\u{1F680} AI \u53CB\u597D\u578B JSON \u6E32\u67D3\u8868\u5355\uFF0C\u65E0\u9650\u6269\u5C55",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/el-form-render/quickstart" }
    ],
    sidebar: [
      {
        text: "el-form-render",
        items: [
          { text: "\u5FEB\u901F\u5F00\u59CB", link: "/el-form-render/quickstart" },
          { text: "\u57FA\u7840\u4F7F\u7528", link: "/el-form-render/basic" },
          { text: "\u7EC4\u4EF6\u8054\u52A8", link: "/el-form-render/linkage" },
          { text: "options \u5C5E\u6027", link: "/el-form-render/options" },
          { text: "\u81EA\u5B9A\u4E49\u7EC4\u4EF6", link: "/el-form-render/is" },
          { text: "\u590D\u6742\u5E03\u5C40", link: "/el-form-render/layout" }
          // { text: 'Runtime API Examples', link: '/markdown-examples' },
        ]
      },
      {
        text: "JSON Schema",
        items: [
          { text: "\u57FA\u7840\u4F7F\u7528", link: "/jsf/basic" }
        ]
      },
      {
        text: "\u6587\u6863",
        items: [
          { text: "cursor", link: "/docs/docs" }
        ]
      },
      {
        text: "UI \u5E93",
        items: [
          { text: "element-plus", link: "/ui/element-plus" },
          { text: "naive-ui", link: "/ui/naive-ui" },
          { text: "antdv", link: "/ui/antdv" },
          { text: "vant", link: "/ui/vant" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/huodoushigemi/el-lowcode" }
    ]
  },
  base: "/el-form-render",
  outDir: "../docs",
  vite: {
    resolve: {
      alias: vite_config_default.resolve?.alias
    },
    ssr: {
      noExternal: ["vite-plugin-markdown-preview", "naive-ui"]
    },
    plugins: [
      Jsx(),
      MarkdownPreview(),
      UnoCSS(),
      {
        name: "md-raw",
        enforce: "pre",
        async load(id, options) {
          const docsdir = path2.join(cwd2, ".docs").replaceAll("\\", "/");
          const outdir = path2.join(docsdir, "raw").replaceAll("\\", "/");
          if (id.endsWith(".md") && !id.startsWith(outdir)) {
            const target = id.replace(docsdir, outdir);
            await fse.ensureDir(path2.dirname(target));
            await fs.writeFile(
              target,
              `<pre class="language-markdown">{{doc}}</pre>

<script setup>
import doc from '${path2.relative(target, id).replaceAll("\\", "/").replace("../", "./")}?raw'
</script>`,
              "utf8"
            );
          }
        }
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLmRvY3MvLnZpdGVwcmVzcy9jb25maWcudHMiLCAidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxucG0tcHJvamVjdFxcXFxlbC1mb3JtLXJlbmRlclxcXFwuZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxucG0tcHJvamVjdFxcXFxlbC1mb3JtLXJlbmRlclxcXFwuZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovbnBtLXByb2plY3QvZWwtZm9ybS1yZW5kZXIvLmRvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcydcclxuaW1wb3J0IGZzZSBmcm9tICdmcy1leHRyYSdcclxuaW1wb3J0IEpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgTWFya2Rvd25QcmV2aWV3IGZyb20gJ3ZpdGUtcGx1Z2luLW1hcmtkb3duLXByZXZpZXcnXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCByb290Q29uZmlnIGZyb20gJy4uLy4uL3ZpdGUuY29uZmlnJ1xyXG5cclxuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKVxyXG5cclxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHRpdGxlOiBcImVsLWZvcm0tcmVuZGVyXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiXHVEODNEXHVERTgwIEFJIFx1NTNDQlx1NTk3RFx1NTc4QiBKU09OIFx1NkUzMlx1NjdEM1x1ODg2OFx1NTM1NVx1RkYwQ1x1NjVFMFx1OTY1MFx1NjI2OVx1NUM1NVwiLFxyXG5cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xyXG4gICAgbmF2OiBbXHJcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcclxuICAgICAgeyB0ZXh0OiAnQ29tcG9uZW50cycsIGxpbms6ICcvZWwtZm9ybS1yZW5kZXIvcXVpY2tzdGFydCcgfVxyXG4gICAgXSxcclxuXHJcbiAgICBzaWRlYmFyOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnZWwtZm9ybS1yZW5kZXInLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLCBsaW5rOiAnL2VsLWZvcm0tcmVuZGVyL3F1aWNrc3RhcnQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTU3RkFcdTc4NDBcdTRGN0ZcdTc1MjgnLCBsaW5rOiAnL2VsLWZvcm0tcmVuZGVyL2Jhc2ljJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU3RUM0XHU0RUY2XHU4MDU0XHU1MkE4JywgbGluazogJy9lbC1mb3JtLXJlbmRlci9saW5rYWdlJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnb3B0aW9ucyBcdTVDNUVcdTYwMjcnLCBsaW5rOiAnL2VsLWZvcm0tcmVuZGVyL29wdGlvbnMnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjYnLCBsaW5rOiAnL2VsLWZvcm0tcmVuZGVyL2lzJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1OTBEXHU2NzQyXHU1RTAzXHU1QzQwJywgbGluazogJy9lbC1mb3JtLXJlbmRlci9sYXlvdXQnIH0sXHJcbiAgICAgICAgICAvLyB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0pTT04gU2NoZW1hJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4JywgbGluazogJy9qc2YvYmFzaWMnIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnY3Vyc29yJywgbGluazogJy9kb2NzL2RvY3MnIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnVUkgXHU1RTkzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnZWxlbWVudC1wbHVzJywgbGluazogJy91aS9lbGVtZW50LXBsdXMnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICduYWl2ZS11aScsIGxpbms6ICcvdWkvbmFpdmUtdWknIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdhbnRkdicsIGxpbms6ICcvdWkvYW50ZHYnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICd2YW50JywgbGluazogJy91aS92YW50JyB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgIF0sXHJcblxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9odW9kb3VzaGlnZW1pL2VsLWxvd2NvZGUnIH1cclxuICAgIF1cclxuICB9LFxyXG5cclxuICBiYXNlOiAnL2VsLWZvcm0tcmVuZGVyJyxcclxuICBvdXREaXI6ICcuLi9kb2NzJyxcclxuICBcclxuICB2aXRlOiB7XHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiByb290Q29uZmlnLnJlc29sdmU/LmFsaWFzXHJcbiAgICB9LFxyXG4gICAgc3NyOiB7XHJcbiAgICAgIG5vRXh0ZXJuYWw6IFsndml0ZS1wbHVnaW4tbWFya2Rvd24tcHJldmlldycsICduYWl2ZS11aSddLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgSnN4KCksXHJcbiAgICAgIE1hcmtkb3duUHJldmlldygpLFxyXG4gICAgICBVbm9DU1MoKSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdtZC1yYXcnLFxyXG4gICAgICAgIGVuZm9yY2U6ICdwcmUnLFxyXG4gICAgICAgIGFzeW5jIGxvYWQoaWQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgIGNvbnN0IGRvY3NkaXIgPSBwYXRoLmpvaW4oY3dkLCAnLmRvY3MnKS5yZXBsYWNlQWxsKCdcXFxcJywgJy8nKVxyXG4gICAgICAgICAgY29uc3Qgb3V0ZGlyID0gcGF0aC5qb2luKGRvY3NkaXIsICdyYXcnKS5yZXBsYWNlQWxsKCdcXFxcJywgJy8nKVxyXG4gICAgICAgICAgaWYgKGlkLmVuZHNXaXRoKCcubWQnKSAmJiAhaWQuc3RhcnRzV2l0aChvdXRkaXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGlkLnJlcGxhY2UoZG9jc2Rpciwgb3V0ZGlyKVxyXG4gICAgICAgICAgICBhd2FpdCBmc2UuZW5zdXJlRGlyKHBhdGguZGlybmFtZSh0YXJnZXQpKVxyXG4gICAgICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgIGA8cHJlIGNsYXNzPVwibGFuZ3VhZ2UtbWFya2Rvd25cIj57e2RvY319PC9wcmU+XFxuXFxuPHNjcmlwdCBzZXR1cD5cXG5pbXBvcnQgZG9jIGZyb20gJyR7cGF0aC5yZWxhdGl2ZSh0YXJnZXQsIGlkKS5yZXBsYWNlQWxsKCdcXFxcJywgJy8nKS5yZXBsYWNlKCcuLi8nLCAnLi8nKX0/cmF3J1xcbjwvc2NyaXB0PmAsXHJcbiAgICAgICAgICAgICAgJ3V0ZjgnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gIH0sXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcbnBtLXByb2plY3RcXFxcZWwtZm9ybS1yZW5kZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXG5wbS1wcm9qZWN0XFxcXGVsLWZvcm0tcmVuZGVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9ucG0tcHJvamVjdC9lbC1mb3JtLXJlbmRlci92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpXHJcblxyXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnZWwtZm9ybS1yZW5kZXIvZWxlbWVudC1wbHVzJzogcGF0aC5qb2luKGN3ZCwgJy9zcmMvdWkvZWxlbWVudC1wbHVzJyksXHJcbiAgICAgICdlbC1mb3JtLXJlbmRlci9uYWl2ZS11aSc6IHBhdGguam9pbihjd2QsICcvc3JjL3VpL25haXZlLXVpJyksXHJcbiAgICAgICdlbC1mb3JtLXJlbmRlci9hbnRkdic6IHBhdGguam9pbihjd2QsICcvc3JjL3VpL2FudGR2JyksXHJcbiAgICAgICdlbC1mb3JtLXJlbmRlci92YW50JzogcGF0aC5qb2luKGN3ZCwgJy9zcmMvdWkvdmFudCcpLFxyXG4gICAgICAnZWwtZm9ybS1yZW5kZXInOiBwYXRoLmpvaW4oY3dkLCAnL3NyYy9pbmRleCcpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgKGF3YWl0IGltcG9ydCgnQHZpdGVqcy9wbHVnaW4tdnVlJykpLmRlZmF1bHQoKSxcclxuICAgIChhd2FpdCBpbXBvcnQoJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnKSkuZGVmYXVsdCgpLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxnQkFBQUEscUJBQW9CO0FBQ3pWLE9BQU9DLFdBQVU7QUFDakIsT0FBTyxRQUFRO0FBQ2YsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLFlBQVk7OztBQ040UCxTQUFTLG9CQUFvQjtBQUM1UyxPQUFPLFVBQVU7QUFFakIsSUFBTSxNQUFNLFFBQVEsSUFBSTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCwrQkFBK0IsS0FBSyxLQUFLLEtBQUssc0JBQXNCO0FBQUEsTUFDcEUsMkJBQTJCLEtBQUssS0FBSyxLQUFLLGtCQUFrQjtBQUFBLE1BQzVELHdCQUF3QixLQUFLLEtBQUssS0FBSyxlQUFlO0FBQUEsTUFDdEQsdUJBQXVCLEtBQUssS0FBSyxLQUFLLGNBQWM7QUFBQSxNQUNwRCxrQkFBa0IsS0FBSyxLQUFLLEtBQUssWUFBWTtBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLEtBQ04sTUFBTSxPQUFPLDJNQUFvQixHQUFHLFFBQVE7QUFBQSxLQUM1QyxNQUFNLE9BQU8sbU5BQXdCLEdBQUcsUUFBUTtBQUFBLEVBQ25EO0FBQ0YsQ0FBQzs7O0FEWEQsSUFBTUMsT0FBTSxRQUFRLElB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
