#!/bin/bash
# Make sure module is installed globally
# yarn global add angular-cli-ghpages
ng build --prod --base-href "https:/mrichar1.github.io/beedentify"

# Fix for https://github.com/angular/angular/issues/30835
sed -i -e 's#type="module"#type="text/javascript"#g' dist/beedentify/index.html
ngh --dir dist/beedentify

