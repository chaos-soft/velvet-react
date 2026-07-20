#!/bin/bash
if [[ $1 ]]
then
    curl -o index.html "$1"
    sed -i '18d' index.html
    sed -i '16d' index.html
    sed -i '13d' index.html
    sed -i "/<title>/r mixin.txt" index.html
fi

rm -r dist
npm run build
install -pDvm644 dist/assets/index-*.css ../velvet/store/style.css
install -pDvm644 dist/assets/index-*.js  ../velvet/store/react.js
