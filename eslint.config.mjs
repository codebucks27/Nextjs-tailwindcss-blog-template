import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            { char: "'", alternatives: ["&apos;"] },
            { char: '"', alternatives: ["&quot;"] },
          ],
        },
      ],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      ".velite/**",
      "public/**",
    ],
  },
];

export default eslintConfig;
