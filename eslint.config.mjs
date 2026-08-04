import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    /**
     * `src/components/ui/**` is vendored shadcn/ui, added and updated through
     * the shadcn CLI. Two upstream primitives trip React 19's compiler rules
     * (carousel re-syncs embla state from an effect; the sidebar skeleton
     * randomises its width). Patching them locally would fork files the CLI
     * overwrites on every update, so the rules are relaxed here only — our own
     * components and hooks are still held to them.
     */
    files: ["src/components/ui/**"],
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
