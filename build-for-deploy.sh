#!/bin/bash

npm run build && \
git add build && \
git commit -am "build for deploy" && \
git push
