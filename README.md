# Narad - Figma to Cloud Plugin

## Overview

Narad is a Figma plugin that allows you to export selected nodes as PNG or SVG and upload them to the cloud.

## Installation

1. Clone the repository or download the source code.
2. Open Figma and go to `Plugins` > `Development` > `New Plugin`.
3. Choose `Link existing plugin` and select the `manifest.json` file from this project.
4. update the auth-token in ui.html
5. update the upload-url in ui.html

## Usage

1. Select a node in your Figma document.
2. Run the plugin from the `Plugins` menu.
3. The plugin will export the selected node as PNG and SVG and upload them to the cloud.

## Files

- `code.js`: Main plugin code that handles the export and upload logic.
- `manifest.json`: Plugin manifest file that defines the plugin's metadata.
- `ui.html`: HTML file for the plugin's user interface.
- `README.md`: This file.

## Development

To develop and test the plugin:

1. Make changes to the code in `code.js`.
2. Reload the plugin in Figma to see your changes.

## License

This project is licensed under the MIT License.
