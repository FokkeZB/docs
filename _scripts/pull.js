require('dotenv').config({
  silent: true
});

/**
 * Add files to pull from public repositories here:
 */

var items = [{
  owner: 'TheThingsNetwork',
  repo: 'node-app-lib',
  branch: 'master',
  path: 'API.md',
  target: '_content/applications/nodejs/api.md',
  yaml: {
    title: 'API Reference',
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'master',
  path: 'docs/TheThingsNetwork.md',
  target: '_content/devices/arduino/api.md',
  yaml: {
    title: 'API Reference'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'arduino-device-lib',
  branch: 'node',
  path: 'docs/TheThingsNode.md',
  target: '_content/devices/node/api.md',
  yaml: {
    title: 'API Reference'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'mqtt/README.md',
  target: '_content/applications/mqtt/api.md',
  yaml: {
    title: 'API Reference'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'java-app-lib',
  branch: 'master',
  path: 'API.md',
  target: '_content/applications/java/api.md',
  yaml: {
    title: 'API Reference'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'ttnctl/cmd/docs/README.md',
  target: '_content/network/cli/api.md',
  yaml: {
    title: 'API Reference'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'api/API_AUTHENTICATION.md',
  target: '_content/applications/manager/authentication.md',
  yaml: {
    title: 'Authentication'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'api/handler/ApplicationManager.md',
  target: '_content/applications/manager/api.md',
  replace: [
    [/^# ApplicationManager API Reference/m, '# API Reference']
  ],
  yaml: {
    title: 'API Reference'
  }
}, {
  owner: 'TheThingsNetwork',
  repo: 'ttn',
  branch: 'v2-preview',
  path: 'api/discovery/Discovery.md',
  target: '_content/network/discovery/api.md',
  replace: [
    [/^# Discovery API Reference/m, '# API Reference']
  ],
  yaml: {
    title: 'API Reference'
  }
}];

/**
 * Add files to pull from private repositories here:
 */

if (process.env.GITHUB_OAUTH_TOKEN) {
  items.push({
    owner: 'TheThingsIndustries',
    repo: 'node-ttn-oauth2',
    branch: 'v2-preview',
    path: 'apidocs.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    target: '_content/network/account/api.md',
    yaml: {
      title: 'API Reference'
    }
  }, {
    owner: 'TheThingsIndustries',
    repo: 'node-ttn-oauth2',
    branch: 'v2-preview',
    path: 'AUTHENTICATION.md',
    token: process.env.GITHUB_OAUTH_TOKEN,
    target: '_content/network/account/authentication.md',
    yaml: {
      title: 'Authentication'
    }
  });
} else {
  console.log('Skipping private repositories...');
}

/**
 * Do not edit:
 */

var async = require('async');
var request = require('request');
var fs = require('fs');
var yaml = require('js-yaml');

async.each(items, function (item, doneWithItem) {
  var options = {};

  if (item.token) {
    options.url = 'https://api.github.com/repos/' + item.owner + '/' + item.repo + '/contents/' + item.path + '?ref=' + item.branch;
    options.headers = {
      'User-Agent': 'TheThingsNetwork',
      'Authorization': 'token ' + item.token,
      'Accept': 'application/vnd.github.v3.raw'
    };
  } else {
    options.url = 'https://raw.githubusercontent.com/' + item.owner + '/' + item.repo + '/' + item.branch + '/' + item.path;
  }

  console.log('Downloading: ' + options.url);

  var editUrl = 'https://github.com/' + item.owner + '/' + item.repo + '/blob/' + item.branch + '/' + item.path;

  request(options, function (err, response, body) {

    if (err) {
      return doneWithItem(err);
    }

    if (!item.yaml) {
      item.yaml = {};
    }

    item.yaml.source = editUrl;

    // replacements
    if (item.replace) {
      item.replace.forEach(function (args) {
        body = body.replace.apply(body, args);
      });
    }

    body = '---\n' + yaml.safeDump(item.yaml, {
      lineWidth: 1000,
      noCompatMode: true
    }) + '---\n\n' + body;

    console.log('Writing: ' + item.target);

    fs.writeFile(item.target, body, doneWithItem);
  });

}, function (err) {

  if (err) {
    console.error('Error: ' + err);
  } else {
    console.log('Done!');
  }
});