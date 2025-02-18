#!/bin/bash
npm run build
scp -pr ~/Documents/python/velvet-react/dist/assets/index-*.js polina:~/python/velvet/store/js/react.js
