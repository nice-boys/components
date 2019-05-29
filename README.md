# `@nice-boys/components`

Our component library to quickly plug together products. Used in conjunction with our [product-boilerplate](https://github.com/nice-boys/product-boilerplate).

## Contributing

### Local development

We use Storybook to develop the component library locally. To start Storybook locally, run:

```
yarn run dev
```

Any `.stories.js` file will be picked up by Storybook. See their doc on [how to write stories](https://storybook.js.org/docs/basics/writing-stories/) to learn more.

#### Using your local version in an app

There are three steps to use your local version of `@nice-boys/components` in an app for development:

1. **Link `@nice-boys/components` globally**: Run `yarn link` in the `@nice-boys/components` directory to link the package globally (you only have to do that once)
2. **Tell your app to use your local version of `@nice-boys/components`**: Run `yarn link @nice-boys/components` in your app directory that depends on the package
3. **Rebuild the components on any change**: Run `yarn run build:watch` in the components dir to make sure the library rebuilds every time you change/add/remove a component

That's it!

### Publishing a new version

Since this is public but also scoped, you need to pass the `--access public` flag when publishing a new version:

```
yarn publish --access public
```

## License

Licensed under the MIT license. Copyright © 2019 Max Stoiber
