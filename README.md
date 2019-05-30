# `@nice-boys/components`

Our React component library to quickly plug together products. Used in conjunction with our [product-boilerplate](https://github.com/nice-boys/product-boilerplate).

## Documentation

**[Visit the Storybook for examples of all components](https://components.nice-boys.now.sh)**

This component library is based on:

- [styled-components](https://styled-components.com)
- [styled-system](https://github.com/jxnblk/styled-system)
- [rebass](https://rebassjs.org)

Recommended usage is with [rebass](https://rebassjs.org), this library does not re-export those core primitives (Flex, Box, etc).

---

## Contributing

### Local development

We use Storybook to develop the component library locally. To start Storybook locally, run:

```
yarn run dev
```

Any `.stories.js` file will be picked up by Storybook. See their doc on [how to write stories](https://storybook.js.org/docs/basics/writing-stories/) to learn more.

### Using your local version in an app

There are three steps to use your local version of `@nice-boys/components` in an app for development:

1. **Link `@nice-boys/components` globally**: Run `yarn link` in the `@nice-boys/components` directory to link the package globally (you only have to do that once on your machine)
2. **Tell your app to use your local version of `@nice-boys/components`**: Run `yarn link @nice-boys/components` in your app directory that depends on the package (you only have to do this once per app)
3. **Rebuild the components on any change**: Run `yarn run build:watch` in the components dir to make sure the library rebuilds every time you change/add/remove a component

That's it!

| @nice-boys/components | yourapp                         |
| --------------------- | ------------------------------- |
| yarn link             | yarn link @nice-boys/components |
| yarn run build:watch  | yarn run dev                    |

If you want to use the remote version in your app again, simply run `yarn unlink @nice-boys/components` in the app directory.

## License

Licensed under the MIT license. Copyright © 2019 Max Stoiber
