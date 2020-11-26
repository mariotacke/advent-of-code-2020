#!/bin/bash

set -a
. ./.env.template
set +a

for input_file in `find . -type f ! -name 'README.md' ! -name 'bootstrap.sh' ! -path '*/.git*' ! -path '*./node_modules*'`
do
  if [ ! -d "${input_file}" ]; then
    echo "Rendering file: ${input_file}"
    sed -E 's/__(([^_]|_[^_])*)__/${\1}/g' "${input_file}" | envsubst > "${input_file}"
  fi
done

rm .env.template
mv README_TEMPLATE.md README.md
mv github .github
rm bootstrap.sh
