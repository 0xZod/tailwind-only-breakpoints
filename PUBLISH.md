# To publish this to npm

```bash
npm login
npm version patch
npm publish
```

The plugin works by:

1. Reading your Tailwind breakpoint configuration
2. Creating a new variant for each breakpoint with `-only` suffix
3. Generating the appropriate media queries that target only that specific breakpoint range
