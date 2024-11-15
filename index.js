const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addVariant, theme }) {
      // Get the breakpoint values from the theme
      const screens = theme("screens");

      // For each screen size
      Object.entries(screens).forEach(([breakpoint, minWidth], index, arr) => {
        // Get the next breakpoint's value for the upper bound
        const nextBreakpoint = arr[index + 1];
        const maxWidth = nextBreakpoint ? nextBreakpoint[1] : null;

        // Create the only variant
        addVariant(`${breakpoint}-only`, ({ container }) => {
          // Min width for current breakpoint
          container.walkRules((rule) => {
            rule.selector = `@media (min-width: ${minWidth})${
              maxWidth ? ` and (max-width: calc(${maxWidth} - 1px))` : ""
            } { ${rule.selector} }`;
          });
        });
      });
    }),
  ],
};
