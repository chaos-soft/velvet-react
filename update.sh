#!/bin/bash
rm -r dist
npm run build
install -pDvm644 dist/assets/index-*.css ../velvet/store/css/style.css
install -pDvm644 dist/assets/index-*.js  ../velvet/store/js/react.js
scp -pr dist/assets/index-*.css polina:~/python/velvet/store/css/style.css
scp -pr dist/assets/index-*.js  polina:~/python/velvet/store/js/react.js
