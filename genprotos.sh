#!/usr/bin/env bash

PROTOC_GEN_TS_PATH=$(readlink -m "./node_modules/.bin/protoc-gen-ts")
IN_DIR=$(readlink -m "./protobufs")
OUT_DIR=$(readlink -m "./src/protocol")
PROTOCOL_BUILD_TMP=$(readlink -m "./protocol-build-tmp")

mkdir -p $OUT_DIR
mkdir -p $PROTOCOL_BUILD_TMP
cp -r $IN_DIR/* $PROTOCOL_BUILD_TMP
for dir in $(find ${PROTOCOL_BUILD_TMP} -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq); do
  echo $(find "${dir}" -name '*.proto')
  sed -i -E "s/ \[ \(validate.rules(.*)\];/;/g" $(find "${dir}" -name '*.proto')
  sed -i -E "/validate.proto/d" $(find "${dir}" -name '*.proto')
  protoc \
  --experimental_allow_proto3_optional \
  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --ts_out="service=grpc-web:${OUT_DIR}" \
  --proto_path=$PROTOCOL_BUILD_TMP \
  $(find "${dir}" -name '*.proto')
done

rm -r $PROTOCOL_BUILD_TMP