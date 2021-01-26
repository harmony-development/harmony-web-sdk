#!/usr/bin/env bash

PBJS_PATH=$(readlink -m "./node_modules/.bin/pbjs")
PBTS_PATH=$(readlink -m "./node_modules/.bin/pbts")
IN_DIR=$(readlink -m "./protobufs")
OUT_DIR=$(readlink -m "./protocol")
PROTOCOL_BUILD_TMP=$(readlink -m "./protocol-build-tmp")

mkdir -p $OUT_DIR
mkdir -p $PROTOCOL_BUILD_TMP
cp -r $IN_DIR/* $PROTOCOL_BUILD_TMP
for dir in $(find ${PROTOCOL_BUILD_TMP} -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq); do
  relative=$(realpath --relative-to=. $dir)
  cleaned=${relative#*/}
  target=$(find "${dir}" -name '*.proto')
  echo $cleaned
  sed -i -E "s/ \[\(validate.rules(.*)\];/;/g" $(find "${dir}" -name '*.proto')
  sed -i -E "/validate.proto/d" $(find "${dir}" -name '*.proto')
  mkdir -p $OUT_DIR/$cleaned
  $PBJS_PATH -p $PROTOCOL_BUILD_TMP \
  -t json-module \
  -w es6 \
  -o $OUT_DIR/$cleaned/output.js \
  --no-comments \
  --es6 \
  --no-verify \
  --no-create \
  --force-number \
  --sparse \
  $target
  $PBJS_PATH -p $PROTOCOL_BUILD_TMP \
  -t static-module \
  $target |
  $PBTS_PATH -o $OUT_DIR/$cleaned/output.d.ts -
done

rm -r $PROTOCOL_BUILD_TMP