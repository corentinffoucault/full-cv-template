// vite.config.js
import { defineConfig } from "file:///Users/cyrano/resumed-main/jsonresume-theme-even/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/cyrano/resumed-main/jsonresume-theme-even/node_modules/vite-plugin-dts/dist/index.mjs";
import { viteStaticCopy } from "file:///Users/cyrano/resumed-main/jsonresume-theme-even/node_modules/vite-plugin-static-copy/dist/index.js";

// package.json
var package_default = {
  name: "jsonresume-theme-even",
  version: "0.23.0",
  description: "A flat JSON Resume theme, compatible with the latest resume schema",
  keywords: [
    "resume",
    "json",
    "theme",
    "flat",
    "curriculum-vitae",
    "cv"
  ],
  license: "MIT",
  type: "module",
  exports: {
    ".": {
      import: {
        types: "./dist/index.d.ts",
        default: "./dist/index.js"
      },
      require: {
        types: "./dist/index.d.ts",
        default: "./dist/index.cjs"
      }
    }
  },
  scripts: {
    prebuild: "json2ts utils/schema.json",
    build: "vite build --watch",
    "build-editor": "vite build editor",
    dev: "vite serve editor",
    format: "prettier .",
    prepare: "husky && npm run build",
    test: "vitest",
    "type-check": "tsc"
  },
  dependencies: {
    "@rbardini/html": "^1.0.0",
    "feather-icons": "^4.28.0",
    micromark: "^2.11.0",
    striptags: "^3.2.0"
  },
  devDependencies: {
    "@codemirror/commands": "6.6.1",
    "@codemirror/lang-json": "6.0.1",
    "@codemirror/theme-one-dark": "6.1.2",
    "@codemirror/view": "6.33.0",
    "@jsonresume/schema": "1.2.1",
    "@types/feather-icons": "4.29.4",
    "@vitest/coverage-v8": "1.6.0",
    codemirror: "6.0.1",
    debounce: "2.1.1",
    "html-validate": "8.22.0",
    husky: "9.1.5",
    "json-schema-to-typescript": "15.0.2",
    "lint-staged": "15.2.10",
    prettier: "3.3.3",
    "prettier-plugin-organize-imports": "4.0.0",
    "prettier-plugin-packagejson": "2.5.2",
    typescript: "5.6.2",
    vite: "5.4.3",
    "vite-plugin-dts": "4.0.0-beta.2",
    "vite-plugin-static-copy": "1.0.6",
    vitest: "1.6.0"
  }
};

// vite.config.js
var vite_config_default = defineConfig(({ mode }) => {
  return {
    build: {
      copyPublicDir: false,
      lib: {
        entry: "./index.js",
        fileName: "index",
        formats: ["es", "cjs", "umd"],
        name: "jsonresumeThemeEven"
      },
      rollupOptions: {
        external: [...Object.keys(package_default.dependencies), /^node:.*/]
      },
      target: "esnext"
    },
    plugins: [
      dts(),
      viteStaticCopy({
        targets: [{ src: "./schema.d.ts", dest: "." }]
      })
    ],
    test: {
      clearMocks: true
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2N5cmFuby9yZXN1bWVkLW1haW4vanNvbnJlc3VtZS10aGVtZS1ldmVuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY3lyYW5vL3Jlc3VtZWQtbWFpbi9qc29ucmVzdW1lLXRoZW1lLWV2ZW4vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2N5cmFuby9yZXN1bWVkLW1haW4vanNvbnJlc3VtZS10aGVtZS1ldmVuL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSdcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nIHdpdGggeyB0eXBlOiAnanNvbicgfVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IHtcbiAgICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiAnLi9pbmRleC5qcycsXG4gICAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcycsICd1bWQnXSxcbiAgICAgICAgbmFtZTogJ2pzb25yZXN1bWVUaGVtZUV2ZW4nLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwa2cuZGVwZW5kZW5jaWVzKSwgL15ub2RlOi4qL10sXG4gICAgICB9LFxuICAgICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGR0cygpLFxuICAgICAgdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgICB0YXJnZXRzOiBbeyBzcmM6ICcuL3NjaGVtYS5kLnRzJywgZGVzdDogJy4nIH1dLFxuICAgICAgfSksXG4gICAgXSxcbiAgICB0ZXN0OiB7XG4gICAgICBjbGVhck1vY2tzOiB0cnVlLFxuICAgIH0sXG4gIH1cbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJqc29ucmVzdW1lLXRoZW1lLWV2ZW5cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4yMy4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGZsYXQgSlNPTiBSZXN1bWUgdGhlbWUsIGNvbXBhdGlibGUgd2l0aCB0aGUgbGF0ZXN0IHJlc3VtZSBzY2hlbWFcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJyZXN1bWVcIixcbiAgICBcImpzb25cIixcbiAgICBcInRoZW1lXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJjdXJyaWN1bHVtLXZpdGFlXCIsXG4gICAgXCJjdlwiXG4gIF0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi5cIjoge1xuICAgICAgXCJpbXBvcnRcIjoge1xuICAgICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCJcbiAgICAgIH0sXG4gICAgICBcInJlcXVpcmVcIjoge1xuICAgICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2luZGV4LmNqc1wiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwicHJlYnVpbGRcIjogXCJqc29uMnRzIHV0aWxzL3NjaGVtYS5qc29uXCIsXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGQgLS13YXRjaFwiLFxuICAgIFwiYnVpbGQtZWRpdG9yXCI6IFwidml0ZSBidWlsZCBlZGl0b3JcIixcbiAgICBcImRldlwiOiBcInZpdGUgc2VydmUgZWRpdG9yXCIsXG4gICAgXCJmb3JtYXRcIjogXCJwcmV0dGllciAuXCIsXG4gICAgXCJwcmVwYXJlXCI6IFwiaHVza3kgJiYgbnBtIHJ1biBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdFwiLFxuICAgIFwidHlwZS1jaGVja1wiOiBcInRzY1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkByYmFyZGluaS9odG1sXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJmZWF0aGVyLWljb25zXCI6IFwiXjQuMjguMFwiLFxuICAgIFwibWljcm9tYXJrXCI6IFwiXjIuMTEuMFwiLFxuICAgIFwic3RyaXB0YWdzXCI6IFwiXjMuMi4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNvZGVtaXJyb3IvY29tbWFuZHNcIjogXCI2LjYuMVwiLFxuICAgIFwiQGNvZGVtaXJyb3IvbGFuZy1qc29uXCI6IFwiNi4wLjFcIixcbiAgICBcIkBjb2RlbWlycm9yL3RoZW1lLW9uZS1kYXJrXCI6IFwiNi4xLjJcIixcbiAgICBcIkBjb2RlbWlycm9yL3ZpZXdcIjogXCI2LjMzLjBcIixcbiAgICBcIkBqc29ucmVzdW1lL3NjaGVtYVwiOiBcIjEuMi4xXCIsXG4gICAgXCJAdHlwZXMvZmVhdGhlci1pY29uc1wiOiBcIjQuMjkuNFwiLFxuICAgIFwiQHZpdGVzdC9jb3ZlcmFnZS12OFwiOiBcIjEuNi4wXCIsXG4gICAgXCJjb2RlbWlycm9yXCI6IFwiNi4wLjFcIixcbiAgICBcImRlYm91bmNlXCI6IFwiMi4xLjFcIixcbiAgICBcImh0bWwtdmFsaWRhdGVcIjogXCI4LjIyLjBcIixcbiAgICBcImh1c2t5XCI6IFwiOS4xLjVcIixcbiAgICBcImpzb24tc2NoZW1hLXRvLXR5cGVzY3JpcHRcIjogXCIxNS4wLjJcIixcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwiMTUuMi4xMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCIzLjMuM1wiLFxuICAgIFwicHJldHRpZXItcGx1Z2luLW9yZ2FuaXplLWltcG9ydHNcIjogXCI0LjAuMFwiLFxuICAgIFwicHJldHRpZXItcGx1Z2luLXBhY2thZ2Vqc29uXCI6IFwiMi41LjJcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCI1LjYuMlwiLFxuICAgIFwidml0ZVwiOiBcIjUuNC4zXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCI0LjAuMC1iZXRhLjJcIixcbiAgICBcInZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5XCI6IFwiMS4wLjZcIixcbiAgICBcInZpdGVzdFwiOiBcIjEuNi4wXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLG9CQUFvQjtBQUMvVixPQUFPLFNBQVM7QUFDaEIsU0FBUyxzQkFBc0I7OztBQ0YvQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsVUFBWTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNULEtBQUs7QUFBQSxNQUNILFFBQVU7QUFBQSxRQUNSLE9BQVM7QUFBQSxRQUNULFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFXO0FBQUEsUUFDVCxPQUFTO0FBQUEsUUFDVCxTQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixPQUFTO0FBQUEsSUFDVCxnQkFBZ0I7QUFBQSxJQUNoQixLQUFPO0FBQUEsSUFDUCxRQUFVO0FBQUEsSUFDVixTQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGNBQWdCO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQSxJQUNqQixXQUFhO0FBQUEsSUFDYixXQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsd0JBQXdCO0FBQUEsSUFDeEIseUJBQXlCO0FBQUEsSUFDekIsOEJBQThCO0FBQUEsSUFDOUIsb0JBQW9CO0FBQUEsSUFDcEIsc0JBQXNCO0FBQUEsSUFDdEIsd0JBQXdCO0FBQUEsSUFDeEIsdUJBQXVCO0FBQUEsSUFDdkIsWUFBYztBQUFBLElBQ2QsVUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsSUFDakIsT0FBUztBQUFBLElBQ1QsNkJBQTZCO0FBQUEsSUFDN0IsZUFBZTtBQUFBLElBQ2YsVUFBWTtBQUFBLElBQ1osb0NBQW9DO0FBQUEsSUFDcEMsK0JBQStCO0FBQUEsSUFDL0IsWUFBYztBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsbUJBQW1CO0FBQUEsSUFDbkIsMkJBQTJCO0FBQUEsSUFDM0IsUUFBVTtBQUFBLEVBQ1o7QUFDRjs7O0FENURBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLEtBQUs7QUFBQSxRQUNILE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBLFFBQzVCLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMsR0FBRyxPQUFPLEtBQUssZ0JBQUksWUFBWSxHQUFHLFVBQVU7QUFBQSxNQUN6RDtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLGVBQWU7QUFBQSxRQUNiLFNBQVMsQ0FBQyxFQUFFLEtBQUssaUJBQWlCLE1BQU0sSUFBSSxDQUFDO0FBQUEsTUFDL0MsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
