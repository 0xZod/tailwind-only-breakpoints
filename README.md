# Tailwind Only Breakpoints

A Tailwind CSS plugin that adds `-only` variants for breakpoints.

## Installation

```bash
npm install tailwind-only-breakpoints
```

```js
module.exports = {
  plugins: [require("tailwind-only-breakpoints")],
};
```

Then use in your HTML:

```html
<div class="sm-only:block">Only visible on sm screens</div>
<div class="md-only:block">Only visible on md screens</div>
<div class="lg-only:block">Only visible on lg screens</div>
```

This plugin will create variants like `sm-only`, `md-only`, etc., that will only apply styles within that specific breakpoint range.

To use it in your project:

1. Add it to your Tailwind config:

   ```javascript:tooling/tailwind/web.ts
    module.exports = {
        // ... other config
        plugins: [
            require('tailwind-only-breakpoints')
            // ... other plugins
        ]
    }
   ```

2. Then use it in your components:

   ```html
   <div class="hidden sm-only:block">Only visible on sm screens</div>
   ```
