# `@nice-boys/components`

Our component library to quickly plug together products. Used in conjunction with our [product-boilerplate](https://github.com/nice-boys/product-boilerplate).

## Contributing

### Local development

We use Storybook to develop the component library locally. To start Storybook locally, run:

```
yarn run dev
```

Any `.stories.js` file will be picked up by Storybook. See their doc on [how to write stories](https://storybook.js.org/docs/basics/writing-stories/) to learn more.

### Publishing a new version

Since this is public but also scoped, you need to pass the `--access public` flag when publishing a new version:

```
yarn publish --access public
```

## License

Licensed under the MIT license. Copyright © 2019 Max Stoiber
