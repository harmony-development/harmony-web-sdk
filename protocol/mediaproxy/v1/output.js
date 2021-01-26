/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  protocol: {
    nested: {
      mediaproxy: {
        nested: {
          v1: {
            options: {
              go_package: "github.com/harmony-development/legato/gen/mediaproxy/v1"
            },
            nested: {
              SiteMetadata: {
                fields: {
                  siteTitle: {
                    type: "string",
                    id: 1
                  },
                  pageTitle: {
                    type: "string",
                    id: 2
                  },
                  kind: {
                    type: "string",
                    id: 3
                  },
                  description: {
                    type: "string",
                    id: 4
                  },
                  url: {
                    type: "string",
                    id: 5
                  },
                  image: {
                    type: "string",
                    id: 6
                  }
                }
              },
              FetchLinkMetadataRequest: {
                fields: {
                  url: {
                    type: "string",
                    id: 1
                  }
                }
              },
              InstantViewRequest: {
                fields: {
                  url: {
                    type: "string",
                    id: 1
                  }
                }
              },
              InstantViewResponse: {
                fields: {
                  metadata: {
                    type: "SiteMetadata",
                    id: 1
                  },
                  content: {
                    type: "string",
                    id: 2
                  },
                  isValid: {
                    type: "bool",
                    id: 3
                  }
                }
              },
              CanInstantViewResponse: {
                fields: {
                  canInstantView: {
                    type: "bool",
                    id: 1
                  }
                }
              },
              MediaProxyService: {
                methods: {
                  FetchLinkMetadata: {
                    requestType: "FetchLinkMetadataRequest",
                    responseType: "SiteMetadata"
                  },
                  InstantView: {
                    requestType: "InstantViewRequest",
                    responseType: "InstantViewResponse"
                  },
                  CanInstantView: {
                    requestType: "InstantViewRequest",
                    responseType: "CanInstantViewResponse"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
