#!/usr/bin/env bash
mkdir -p "protocol"

USE_PROTO_NAMES=${1:-"false"}

for dir in $(find "protobufs" -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq); do
    echo "Generating files in ${dir}..."
    find "${dir}" -name '*.proto'

    protoc --experimental_allow_proto3_optional \
    -I ./protobufs \
    --hrpc-ts_out=logtostderr=true,use_proto_names=$USE_PROTO_NAMES,loglevel=debug:./protocol \
    $(find "${dir}" -name '*.proto')
done
