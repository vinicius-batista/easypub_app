#!/bin/sh

echo "Generate Production build"
yarn build

echo "Deploy to firebase"
firebase deploy --only hosting
