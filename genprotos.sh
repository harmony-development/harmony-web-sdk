#!/usr/bin/env bash

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
  npx protoc \
    -I $PROTOCOL_BUILD_TMP \
    --ts_out protocol \
    --ts_opt long_type_string \
    --ts_opt optimize_code_size \
    --ts_opt generate_dependencies \
    $target
done

rm -r $PROTOCOL_BUILD_TMP
prettier --write "./protocol/**/*.ts"