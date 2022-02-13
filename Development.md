# Development

Interested in developing? Start here!

## Adding new modules

All Nx commands should be used in the `recipiece` directory.
Nx takes care of most of the heavy lifting, but there are some gotchas to getting everything wired together.

### Shared Libraries

If you want to share common functionality, you will most likely need to hoist the library into the shell.
To do this, simple add the library name to the `sharedMappings` in the shell's webpack configuration file like so:
```
sharedMappings.register(
  tsConfigPath,
  [
    ...,
    '@recipiece/<newlibraryname>',
  ],
  workspaceRootPath
);
```

### Styles

To get access to global styles within your project, you will need to add the following to the `project.json` for your newly generated project

```
"architect": {
  "build": {
    "options": {
      "stylePreprocessorOptions": {
        "includePaths": ["libs/theme/src/lib"],
        "extractCss": true
      }
    }
  }
},
```

After doing this, you should be able to access the global styles via `@use "libs/theme/src/lib/<modulename>";` in your components' styles.

### Routing
Routing can be a little tricky with module federation.
To get routing setup correctly, verify that the `shell` application has the desired route in it's MF plugin configuration in the webpack config.
1. In your new application, find the `RemoteEntryModule` and add your routes to the `RouterModule.forChild([...])` call. Do not include the path specified in the `shell` MF config.
2. In your new application, lazy load in the remote entry module in the `RouterModule.forRoot([...])` call with `''` as the `path`. Do not place other routes into this configuration.
3. Enable CORS in your application by specifying
```
devServer: {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
},
```
in your module's webpack configuration (not the MF configuration). This allows the remote entry module to be loaded by the shell.

## Common Nx Commands
* Generate a new library: `nx g @nrwl/angular:lib <libraryName>`
* Generate a new application `nx g @nrwl/angular:app <appName>`
* Generate a new module in an application `nx g @nrwl/angular:module <path> --project=<projectName>`
* Generate a new component in an application `nx g @nrwl/angular:component <path> --project=<projectName>`
* Generate a new service in an application `nx g @nrwl/angular:service <path> --project=<projectName>`
* Remove a generated application/library `nx g rm <projectName>`

When generating a module, you'll probably want to add the `--routing` flag.
