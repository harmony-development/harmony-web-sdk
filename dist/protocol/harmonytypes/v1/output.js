/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  protocol: {
    nested: {
      harmonytypes: {
        nested: {
          v1: {
            options: {
              go_package: "github.com/harmony-development/legato/gen/harmonytypes/v1"
            },
            nested: {
              UserStatus: {
                values: {
                  USER_STATUS_ONLINE_UNSPECIFIED: 0,
                  USER_STATUS_STREAMING: 1,
                  USER_STATUS_DO_NOT_DISTURB: 2,
                  USER_STATUS_IDLE: 3,
                  USER_STATUS_OFFLINE: 4
                }
              },
              Override: {
                oneofs: {
                  reason: {
                    oneof: [
                      "userDefined",
                      "webhook",
                      "systemPlurality",
                      "systemMessage",
                      "bridge"
                    ]
                  }
                },
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  avatar: {
                    type: "string",
                    id: 2
                  },
                  userDefined: {
                    type: "string",
                    id: 3
                  },
                  webhook: {
                    type: "google.protobuf.Empty",
                    id: 4
                  },
                  systemPlurality: {
                    type: "google.protobuf.Empty",
                    id: 5
                  },
                  systemMessage: {
                    type: "google.protobuf.Empty",
                    id: 6
                  },
                  bridge: {
                    type: "google.protobuf.Empty",
                    id: 7
                  }
                }
              },
              ActionType: {
                values: {
                  Normal: 0,
                  Primary: 1,
                  Destructive: 2
                }
              },
              ActionPresentation: {
                values: {
                  Button: 0,
                  Dropdown: 1,
                  Menu: 2,
                  SmallEntry: 3,
                  LargeEntry: 4
                }
              },
              FieldPresentation: {
                values: {
                  Data: 0,
                  CaptionedImage: 1,
                  Row: 2
                }
              },
              Action: {
                fields: {
                  text: {
                    type: "string",
                    id: 1
                  },
                  url: {
                    type: "string",
                    id: 2
                  },
                  id: {
                    type: "string",
                    id: 3
                  },
                  type: {
                    type: "ActionType",
                    id: 4
                  },
                  presentation: {
                    type: "ActionPresentation",
                    id: 5
                  },
                  children: {
                    rule: "repeated",
                    type: "Action",
                    id: 6
                  }
                }
              },
              EmbedHeading: {
                fields: {
                  text: {
                    type: "string",
                    id: 1
                  },
                  subtext: {
                    type: "string",
                    id: 2
                  },
                  url: {
                    type: "string",
                    id: 3
                  },
                  icon: {
                    type: "string",
                    id: 4
                  }
                }
              },
              EmbedField: {
                fields: {
                  title: {
                    type: "string",
                    id: 1
                  },
                  subtitle: {
                    type: "string",
                    id: 2
                  },
                  body: {
                    type: "string",
                    id: 3
                  },
                  imageUrl: {
                    type: "string",
                    id: 4
                  },
                  presentation: {
                    type: "FieldPresentation",
                    id: 5
                  },
                  actions: {
                    rule: "repeated",
                    type: "Action",
                    id: 6
                  }
                }
              },
              Embed: {
                fields: {
                  title: {
                    type: "string",
                    id: 1
                  },
                  body: {
                    type: "string",
                    id: 2
                  },
                  color: {
                    type: "int64",
                    id: 3
                  },
                  header: {
                    type: "EmbedHeading",
                    id: 4
                  },
                  footer: {
                    type: "EmbedHeading",
                    id: 5
                  },
                  fields: {
                    rule: "repeated",
                    type: "EmbedField",
                    id: 6
                  },
                  actions: {
                    rule: "repeated",
                    type: "Action",
                    id: 7
                  }
                }
              },
              Attachment: {
                fields: {
                  id: {
                    type: "string",
                    id: 1
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  type: {
                    type: "string",
                    id: 3
                  },
                  size: {
                    type: "int32",
                    id: 4
                  }
                }
              },
              Metadata: {
                fields: {
                  kind: {
                    type: "string",
                    id: 1
                  },
                  extension: {
                    keyType: "string",
                    type: "google.protobuf.Any",
                    id: 2
                  }
                }
              },
              Message: {
                fields: {
                  metadata: {
                    type: "Metadata",
                    id: 13
                  },
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  channelId: {
                    type: "uint64",
                    id: 2,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  messageId: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  authorId: {
                    type: "uint64",
                    id: 4,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  createdAt: {
                    type: "google.protobuf.Timestamp",
                    id: 5
                  },
                  editedAt: {
                    type: "google.protobuf.Timestamp",
                    id: 6
                  },
                  content: {
                    type: "string",
                    id: 7
                  },
                  embeds: {
                    rule: "repeated",
                    type: "Embed",
                    id: 8
                  },
                  actions: {
                    rule: "repeated",
                    type: "Action",
                    id: 9
                  },
                  attachments: {
                    rule: "repeated",
                    type: "Attachment",
                    id: 10
                  },
                  inReplyTo: {
                    type: "uint64",
                    id: 11,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  overrides: {
                    type: "Override",
                    id: 12
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          Empty: {
            fields: {}
          },
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
