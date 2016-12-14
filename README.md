# The Things Network Documentation [![Build Status](https://travis-ci.org/TheThingsNetwork/docs.svg?branch=master)](https://travis-ci.org/TheThingsNetwork/docs)

This is a [Jekyll](https://jekyllrb.com) site which [Travis](https://travis-ci.org/TheThingsNetwork/docs) automatically tests and builds to the [gh-pages](https://github.com/TheThingsNetwork/docs/tree/gh-pages) branch to be served via [GitHub Pages](https://help.github.com/articles/what-is-github-pages/).

## Update content
If you do a lot of edits please use a local build to preview and test.

* The homepage for the site is [index.html](index.html).
* The guides are a Jekyll collection in the [_content](_content) folder.
* Store assets in the same folder as the markdown file you need it in and include them by their filename. You can also use relative paths to re-use images from other guides.
* To link to another child guide, use the relative markdown path (e.g. `../devices/registration.md`) and Jekyll will make it `.html`.
* To link to another parent guide, use the relative markdown path (e.g. `../devices/index.md`) or the directory path, ending with a slash (`../devices/`).
* Guides are sorted on descending `zindex` first, then `title` ascending and if those are equal `label` descending.
* Use blockquotes (`>`) to create callouts for important notes.
* To set an image to use on Facebook and Twitter use `image:/absolute/path/to/image.png` in your frontmatter.
* You can use most of the [icons](http://ionicons.com/cheatsheet.html) we use in the console. Simply use `<i class="ion-eye"></i>` in the Markdown and we'll style it as a button.

## Build local for preview and design

1. [Install Ruby 2.0.0 or higher](https://www.ruby-lang.org/en/downloads/)
2. Install [Bundler](http://bundler.io/):
	
	```bash
	$ gem install bundler
	```

3. Install [Jekyll](https://jekyllrb.com/) using Bundler:

	```bash
	$ bundle install
	```

4. Install [Node.js and NPM](https://nodejs.org/).

5. Install front-end and development dependencies:

  ```basg
  $ npm install
  ```
  
    > This will also overwrite any local git pre-commit hook to execute [npm run webpack](package.json#L12), [npm test](package.json#L15) and [npm run add](package.json#L16) to append the webpack build.

4. Run [Webpack](http://webpack.github.io/), build the local Jekyll site and watch for changes:

	```bash
	$ npm run dev
	```
	
	> Be aware that this will use Jekyll's experimental incremental mode. Only the file you edit will be regenerated. So a change in a guide's title will not cause the navigation on all other pages to be updated. Just kill the proces and run it again.
	
### Guidance

* Require and use any JS libraries you need in [assets/js/_main.js](assets/js/_main.js).
* Import any Sass files you need in [assets/css/main.scss](assets/css/main.scss).
* Override Bootstrap variables in [_sass/_variables.scss](_sass/_variables.scss).
* Edit styles in [_sass/_base.scss](_sass/_base.scss) or break out to additional Sass files to keep it organized.
* Store layout assets in [assets](assets) folder.
* Edit layouts in the [_layouts](_layouts) folder.
* All layouts should inherit the [default](_layouts/default.html) layout.

## Build and upload a preview

If you do some major refactoring and would like to upload a build somewhere for preview, then you can use:

```
npm run scp user@host:/path
```

This will create a build in `_scp`, upload it with `scp` and then delete the directory. Make sure the server has your public key or it will prompt for a password and cause the script to fail.

Alternatively, you can set the `SCP_TARGET` environment variable or [dotenv](https://www.npmjs.com/package/dotenv).

## Test [![Build Status](https://travis-ci.org/TheThingsNetwork/docs.svg?branch=master)](https://travis-ci.org/TheThingsNetwork/docs)

Pull Requests and Pushes will be tested automatically by Travis. It will let Jekyll try to build the site and then run [HTMLProofer](https://github.com/gjtorikian/html-proofer) to test for broken links etc.

The test will also run automatically before every commit. To run the test manually, follow *Build local* to install the dependencies and then run:

```
npm test
```

## Automatic updates

Some content we source directly from elsewhere, e.g. the [MQTT API Reference](https://github.com/TheThingsNetwork/ttn/blob/refactor/mqtt/README.md).

### Update

1.  Follow the previous section to install NPM and dependencies.
    
3.  Run the pull script:

    ```bash
    npm run pull
    ```
    
### Source

To source more content from elsewhere edit [_scripts/pull.js](_scripts/pull.js).
