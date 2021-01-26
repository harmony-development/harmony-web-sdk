/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  protocol: {
    nested: {
      chat: {
        nested: {
          v1: {
            options: {
              go_package: "github.com/harmony-development/legato/gen/chat/v1"
            },
            nested: {
              QueryPermissionsRequest: {
                fields: {
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
                  checkFor: {
                    type: "string",
                    id: 3
                  },
                  as: {
                    type: "uint64",
                    id: 4
                  }
                }
              },
              QueryPermissionsResponse: {
                fields: {
                  ok: {
                    type: "bool",
                    id: 1
                  }
                }
              },
              Permission: {
                fields: {
                  matches: {
                    type: "string",
                    id: 1
                  },
                  mode: {
                    type: "Mode",
                    id: 2
                  }
                },
                nested: {
                  Mode: {
                    values: {
                      Allow: 0,
                      Deny: 1
                    }
                  }
                }
              },
              PermissionList: {
                fields: {
                  permissions: {
                    rule: "repeated",
                    type: "Permission",
                    id: 1
                  }
                }
              },
              SetPermissionsRequest: {
                fields: {
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
                  roleId: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  perms: {
                    type: "PermissionList",
                    id: 4
                  }
                }
              },
              GetPermissionsRequest: {
                fields: {
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
                  roleId: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetPermissionsResponse: {
                fields: {
                  perms: {
                    type: "PermissionList",
                    id: 1
                  }
                }
              },
              Role: {
                fields: {
                  roleId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  color: {
                    type: "int32",
                    id: 3
                  },
                  hoist: {
                    type: "bool",
                    id: 4
                  },
                  pingable: {
                    type: "bool",
                    id: 5
                  }
                }
              },
              MoveRoleRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  roleId: {
                    type: "uint64",
                    id: 2,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  beforeId: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  afterId: {
                    type: "uint64",
                    id: 4,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              MoveRoleResponse: {
                fields: {}
              },
              GetGuildRolesRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetGuildRolesResponse: {
                fields: {
                  roles: {
                    rule: "repeated",
                    type: "Role",
                    id: 1
                  }
                }
              },
              AddGuildRoleRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  role: {
                    type: "Role",
                    id: 2
                  }
                }
              },
              AddGuildRoleResponse: {
                fields: {
                  roleId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              DeleteGuildRoleRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  roleId: {
                    type: "uint64",
                    id: 2,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              ModifyGuildRoleRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  role: {
                    type: "Role",
                    id: 2
                  },
                  modifyName: {
                    type: "bool",
                    id: 3
                  },
                  modifyColor: {
                    type: "bool",
                    id: 4
                  },
                  modifyHoist: {
                    type: "bool",
                    id: 5
                  },
                  modifyPingable: {
                    type: "bool",
                    id: 6
                  }
                }
              },
              ManageUserRolesRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  userId: {
                    type: "uint64",
                    id: 2,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  giveRoleIds: {
                    rule: "repeated",
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  takeRoleIds: {
                    rule: "repeated",
                    type: "uint64",
                    id: 4,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetUserRolesRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  userId: {
                    type: "uint64",
                    id: 2,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetUserRolesResponse: {
                fields: {
                  roles: {
                    rule: "repeated",
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              CreateGuildRequest: {
                fields: {
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 3
                  },
                  guildName: {
                    type: "string",
                    id: 1
                  },
                  pictureUrl: {
                    type: "string",
                    id: 2
                  }
                }
              },
              CreateGuildResponse: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              CreateInviteRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  possibleUses: {
                    type: "int32",
                    id: 3
                  }
                }
              },
              CreateInviteResponse: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  }
                }
              },
              GetGuildListRequest: {
                fields: {}
              },
              GetGuildListResponse: {
                fields: {
                  guilds: {
                    rule: "repeated",
                    type: "GuildListEntry",
                    id: 1
                  }
                },
                nested: {
                  GuildListEntry: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      host: {
                        type: "string",
                        id: 2
                      }
                    }
                  }
                }
              },
              GetGuildRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetGuildResponse: {
                fields: {
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 4
                  },
                  guildName: {
                    type: "string",
                    id: 1
                  },
                  guildOwner: {
                    type: "uint64",
                    id: 2,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  guildPicture: {
                    type: "string",
                    id: 3
                  }
                }
              },
              GetGuildInvitesRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetGuildInvitesResponse: {
                fields: {
                  invites: {
                    rule: "repeated",
                    type: "Invite",
                    id: 1
                  }
                },
                nested: {
                  Invite: {
                    fields: {
                      inviteId: {
                        type: "string",
                        id: 1
                      },
                      possibleUses: {
                        type: "int32",
                        id: 2
                      },
                      useCount: {
                        type: "int32",
                        id: 3
                      }
                    }
                  }
                }
              },
              GetGuildMembersRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetGuildMembersResponse: {
                fields: {
                  members: {
                    rule: "repeated",
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              UpdateGuildInformationRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  newGuildName: {
                    type: "string",
                    id: 2
                  },
                  updateGuildName: {
                    type: "bool",
                    id: 3
                  },
                  newGuildPicture: {
                    type: "string",
                    id: 4
                  },
                  updateGuildPicture: {
                    type: "bool",
                    id: 5
                  },
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 6
                  },
                  updateMetadata: {
                    type: "bool",
                    id: 7
                  }
                }
              },
              DeleteGuildRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              DeleteInviteRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  inviteId: {
                    type: "string",
                    id: 2
                  }
                }
              },
              JoinGuildRequest: {
                fields: {
                  inviteId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              JoinGuildResponse: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              PreviewGuildRequest: {
                fields: {
                  inviteId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              PreviewGuildResponse: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  avatar: {
                    type: "string",
                    id: 2
                  },
                  memeberCount: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              LeaveGuildRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              AddGuildToGuildListRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  homeserver: {
                    type: "string",
                    id: 2
                  }
                }
              },
              AddGuildToGuildListResponse: {
                fields: {}
              },
              RemoveGuildFromGuildListRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  homeserver: {
                    type: "string",
                    id: 2
                  }
                }
              },
              RemoveGuildFromGuildListResponse: {
                fields: {}
              },
              CreateEmotePackRequest: {
                fields: {
                  packName: {
                    type: "string",
                    id: 1
                  }
                }
              },
              CreateEmotePackResponse: {
                fields: {
                  packId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetEmotePacksRequest: {
                fields: {}
              },
              GetEmotePacksResponse: {
                fields: {
                  packs: {
                    rule: "repeated",
                    type: "EmotePack",
                    id: 1
                  }
                },
                nested: {
                  EmotePack: {
                    fields: {
                      packId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      packOwner: {
                        type: "uint64",
                        id: 2,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      packName: {
                        type: "string",
                        id: 3
                      }
                    }
                  }
                }
              },
              GetEmotePackEmotesRequest: {
                fields: {
                  packId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetEmotePackEmotesResponse: {
                fields: {
                  emotes: {
                    rule: "repeated",
                    type: "Emote",
                    id: 1
                  }
                },
                nested: {
                  Emote: {
                    fields: {
                      imageId: {
                        type: "string",
                        id: 1
                      },
                      name: {
                        type: "string",
                        id: 2
                      }
                    }
                  }
                }
              },
              AddEmoteToPackRequest: {
                fields: {
                  packId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  imageId: {
                    type: "string",
                    id: 2
                  },
                  name: {
                    type: "string",
                    id: 3
                  }
                }
              },
              DeleteEmoteFromPackRequest: {
                fields: {
                  packId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  imageId: {
                    type: "string",
                    id: 2
                  }
                }
              },
              DeleteEmotePackRequest: {
                fields: {
                  packId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              DequipEmotePackRequest: {
                fields: {
                  packId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              CreateChannelRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  channelName: {
                    type: "string",
                    id: 2
                  },
                  isCategory: {
                    type: "bool",
                    id: 3
                  },
                  previousId: {
                    type: "uint64",
                    id: 5,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  nextId: {
                    type: "uint64",
                    id: 4,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 6
                  }
                }
              },
              CreateChannelResponse: {
                fields: {
                  channelId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetGuildChannelsRequest: {
                fields: {
                  guildId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetGuildChannelsResponse: {
                fields: {
                  channels: {
                    rule: "repeated",
                    type: "Channel",
                    id: 1
                  }
                },
                nested: {
                  Channel: {
                    fields: {
                      metadata: {
                        type: "harmonytypes.v1.Metadata",
                        id: 4
                      },
                      channelId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      channelName: {
                        type: "string",
                        id: 2
                      },
                      isCategory: {
                        type: "bool",
                        id: 3
                      }
                    }
                  }
                }
              },
              UpdateChannelInformationRequest: {
                fields: {
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
                  name: {
                    type: "string",
                    id: 3
                  },
                  updateName: {
                    type: "bool",
                    id: 4
                  },
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 5
                  },
                  updateMetadata: {
                    type: "bool",
                    id: 6
                  }
                }
              },
              UpdateChannelOrderRequest: {
                fields: {
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
                  previousId: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  nextId: {
                    type: "uint64",
                    id: 4,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              DeleteChannelRequest: {
                fields: {
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
                  }
                }
              },
              TypingRequest: {
                fields: {
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
                  }
                }
              },
              GetChannelMessagesRequest: {
                fields: {
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
                  beforeMessage: {
                    type: "uint64",
                    id: 3,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetChannelMessagesResponse: {
                fields: {
                  reachedTop: {
                    type: "bool",
                    id: 1
                  },
                  messages: {
                    rule: "repeated",
                    type: "harmonytypes.v1.Message",
                    id: 2
                  }
                }
              },
              GetMessageRequest: {
                fields: {
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
                  }
                }
              },
              GetMessageResponse: {
                fields: {
                  message: {
                    type: "harmonytypes.v1.Message",
                    id: 1
                  }
                }
              },
              UpdateMessageRequest: {
                fields: {
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
                  content: {
                    type: "string",
                    id: 4
                  },
                  updateContent: {
                    type: "bool",
                    id: 5
                  },
                  embeds: {
                    rule: "repeated",
                    type: "harmonytypes.v1.Embed",
                    id: 6
                  },
                  updateEmbeds: {
                    type: "bool",
                    id: 7
                  },
                  actions: {
                    rule: "repeated",
                    type: "harmonytypes.v1.Action",
                    id: 8
                  },
                  updateActions: {
                    type: "bool",
                    id: 9
                  },
                  attachments: {
                    rule: "repeated",
                    type: "string",
                    id: 10
                  },
                  updateAttachments: {
                    type: "bool",
                    id: 11
                  },
                  overrides: {
                    type: "harmonytypes.v1.Override",
                    id: 12
                  },
                  updateOverrides: {
                    type: "bool",
                    id: 13
                  },
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 14
                  },
                  updateMetadata: {
                    type: "bool",
                    id: 15
                  }
                }
              },
              DeleteMessageRequest: {
                fields: {
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
                  }
                }
              },
              TriggerActionRequest: {
                fields: {
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
                  actionId: {
                    type: "string",
                    id: 4
                  },
                  actionData: {
                    type: "string",
                    id: 5
                  }
                }
              },
              SendMessageRequest: {
                fields: {
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
                  content: {
                    type: "string",
                    id: 3
                  },
                  actions: {
                    rule: "repeated",
                    type: "harmonytypes.v1.Action",
                    id: 4
                  },
                  embeds: {
                    rule: "repeated",
                    type: "harmonytypes.v1.Embed",
                    id: 5
                  },
                  attachments: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  },
                  inReplyTo: {
                    type: "uint64",
                    id: 7
                  },
                  overrides: {
                    type: "harmonytypes.v1.Override",
                    id: 8
                  },
                  echoId: {
                    type: "uint64",
                    id: 9
                  },
                  metadata: {
                    type: "harmonytypes.v1.Metadata",
                    id: 10
                  }
                }
              },
              SendMessageResponse: {
                fields: {
                  messageId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              StreamEventsRequest: {
                oneofs: {
                  request: {
                    oneof: [
                      "subscribeToGuild",
                      "subscribeToActions",
                      "subscribeToHomeserverEvents"
                    ]
                  }
                },
                fields: {
                  subscribeToGuild: {
                    type: "SubscribeToGuild",
                    id: 1
                  },
                  subscribeToActions: {
                    type: "SubscribeToActions",
                    id: 2
                  },
                  subscribeToHomeserverEvents: {
                    type: "SubscribeToHomeserverEvents",
                    id: 3
                  }
                },
                nested: {
                  SubscribeToGuild: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      }
                    }
                  },
                  SubscribeToActions: {
                    fields: {}
                  },
                  SubscribeToHomeserverEvents: {
                    fields: {}
                  }
                }
              },
              Event: {
                oneofs: {
                  event: {
                    oneof: [
                      "guildAddedToList",
                      "guildRemovedFromList",
                      "actionPerformed",
                      "sentMessage",
                      "editedMessage",
                      "deletedMessage",
                      "createdChannel",
                      "editedChannel",
                      "deletedChannel",
                      "editedGuild",
                      "deletedGuild",
                      "joinedMember",
                      "leftMember",
                      "roleMoved",
                      "profileUpdated",
                      "typing"
                    ]
                  }
                },
                fields: {
                  guildAddedToList: {
                    type: "GuildAddedToList",
                    id: 1
                  },
                  guildRemovedFromList: {
                    type: "GuildRemovedFromList",
                    id: 2
                  },
                  actionPerformed: {
                    type: "ActionPerformed",
                    id: 3
                  },
                  sentMessage: {
                    type: "MessageSent",
                    id: 4
                  },
                  editedMessage: {
                    type: "MessageUpdated",
                    id: 5
                  },
                  deletedMessage: {
                    type: "MessageDeleted",
                    id: 6
                  },
                  createdChannel: {
                    type: "ChannelCreated",
                    id: 7
                  },
                  editedChannel: {
                    type: "ChannelUpdated",
                    id: 8
                  },
                  deletedChannel: {
                    type: "ChannelDeleted",
                    id: 9
                  },
                  editedGuild: {
                    type: "GuildUpdated",
                    id: 10
                  },
                  deletedGuild: {
                    type: "GuildDeleted",
                    id: 11
                  },
                  joinedMember: {
                    type: "MemberJoined",
                    id: 12
                  },
                  leftMember: {
                    type: "MemberLeft",
                    id: 13
                  },
                  roleMoved: {
                    type: "RoleMoved",
                    id: 14
                  },
                  profileUpdated: {
                    type: "ProfileUpdated",
                    id: 15
                  },
                  typing: {
                    type: "Typing",
                    id: 16
                  }
                },
                nested: {
                  MessageSent: {
                    fields: {
                      echoId: {
                        type: "uint64",
                        id: 1
                      },
                      message: {
                        type: "harmonytypes.v1.Message",
                        id: 2
                      }
                    }
                  },
                  MessageUpdated: {
                    fields: {
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
                      editedAt: {
                        type: "google.protobuf.Timestamp",
                        id: 4
                      },
                      content: {
                        type: "string",
                        id: 5
                      },
                      updateContent: {
                        type: "bool",
                        id: 6
                      },
                      embeds: {
                        rule: "repeated",
                        type: "harmonytypes.v1.Embed",
                        id: 7
                      },
                      updateEmbeds: {
                        type: "bool",
                        id: 8
                      },
                      actions: {
                        rule: "repeated",
                        type: "harmonytypes.v1.Action",
                        id: 9
                      },
                      updateActions: {
                        type: "bool",
                        id: 10
                      },
                      attachments: {
                        rule: "repeated",
                        type: "harmonytypes.v1.Attachment",
                        id: 11
                      },
                      updateAttachments: {
                        type: "bool",
                        id: 12
                      },
                      overrides: {
                        type: "harmonytypes.v1.Override",
                        id: 13
                      },
                      updateOverrides: {
                        type: "bool",
                        id: 14
                      },
                      metadata: {
                        type: "harmonytypes.v1.Metadata",
                        id: 15
                      },
                      updateMetadata: {
                        type: "bool",
                        id: 16
                      }
                    }
                  },
                  MessageDeleted: {
                    fields: {
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
                      }
                    }
                  },
                  ChannelCreated: {
                    fields: {
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
                      name: {
                        type: "string",
                        id: 3
                      },
                      previousId: {
                        type: "uint64",
                        id: 4,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      nextId: {
                        type: "uint64",
                        id: 5,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      isCategory: {
                        type: "bool",
                        id: 6
                      },
                      metadata: {
                        type: "harmonytypes.v1.Metadata",
                        id: 7
                      }
                    }
                  },
                  ChannelUpdated: {
                    fields: {
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
                      name: {
                        type: "string",
                        id: 3
                      },
                      updateName: {
                        type: "bool",
                        id: 4
                      },
                      previousId: {
                        type: "uint64",
                        id: 5,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      nextId: {
                        type: "uint64",
                        id: 6,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      updateOrder: {
                        type: "bool",
                        id: 7
                      },
                      metadata: {
                        type: "harmonytypes.v1.Metadata",
                        id: 8
                      },
                      updateMetadata: {
                        type: "bool",
                        id: 9
                      }
                    }
                  },
                  ChannelDeleted: {
                    fields: {
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
                      }
                    }
                  },
                  GuildUpdated: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      name: {
                        type: "string",
                        id: 2
                      },
                      updateName: {
                        type: "bool",
                        id: 3
                      },
                      picture: {
                        type: "string",
                        id: 4
                      },
                      updatePicture: {
                        type: "bool",
                        id: 5
                      },
                      metadata: {
                        type: "harmonytypes.v1.Metadata",
                        id: 6
                      },
                      updateMetadata: {
                        type: "bool",
                        id: 7
                      }
                    }
                  },
                  GuildDeleted: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      }
                    }
                  },
                  MemberJoined: {
                    fields: {
                      memberId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      guildId: {
                        type: "uint64",
                        id: 2,
                        options: {
                          jstype: "JS_STRING"
                        }
                      }
                    }
                  },
                  MemberLeft: {
                    fields: {
                      memberId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      guildId: {
                        type: "uint64",
                        id: 2,
                        options: {
                          jstype: "JS_STRING"
                        }
                      }
                    }
                  },
                  GuildAddedToList: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      homeserver: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  GuildRemovedFromList: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      homeserver: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  ActionPerformed: {
                    fields: {
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
                      actionId: {
                        type: "string",
                        id: 4
                      },
                      actionData: {
                        type: "string",
                        id: 5
                      }
                    }
                  },
                  RoleMoved: {
                    fields: {
                      guildId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      roleId: {
                        type: "uint64",
                        id: 2,
                        options: {
                          jstype: "JS_STRING"
                        }
                      }
                    }
                  },
                  ProfileUpdated: {
                    fields: {
                      userId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      newUsername: {
                        type: "string",
                        id: 2
                      },
                      updateUsername: {
                        type: "bool",
                        id: 3
                      },
                      newAvatar: {
                        type: "string",
                        id: 4
                      },
                      updateAvatar: {
                        type: "bool",
                        id: 5
                      },
                      newStatus: {
                        type: "harmonytypes.v1.UserStatus",
                        id: 6
                      },
                      updateStatus: {
                        type: "bool",
                        id: 7
                      },
                      isBot: {
                        type: "bool",
                        id: 8
                      },
                      updateIsBot: {
                        type: "bool",
                        id: 9
                      }
                    }
                  },
                  Typing: {
                    fields: {
                      userId: {
                        type: "uint64",
                        id: 1,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      guildId: {
                        type: "uint64",
                        id: 2,
                        options: {
                          jstype: "JS_STRING"
                        }
                      },
                      channelId: {
                        type: "uint64",
                        id: 3,
                        options: {
                          jstype: "JS_STRING"
                        }
                      }
                    }
                  }
                }
              },
              ChatService: {
                methods: {
                  CreateGuild: {
                    requestType: "CreateGuildRequest",
                    responseType: "CreateGuildResponse"
                  },
                  CreateInvite: {
                    requestType: "CreateInviteRequest",
                    responseType: "CreateInviteResponse"
                  },
                  CreateChannel: {
                    requestType: "CreateChannelRequest",
                    responseType: "CreateChannelResponse"
                  },
                  CreateEmotePack: {
                    requestType: "CreateEmotePackRequest",
                    responseType: "CreateEmotePackResponse"
                  },
                  GetGuildList: {
                    requestType: "GetGuildListRequest",
                    responseType: "GetGuildListResponse"
                  },
                  AddGuildToGuildList: {
                    requestType: "AddGuildToGuildListRequest",
                    responseType: "AddGuildToGuildListResponse"
                  },
                  RemoveGuildFromGuildList: {
                    requestType: "RemoveGuildFromGuildListRequest",
                    responseType: "RemoveGuildFromGuildListResponse"
                  },
                  GetGuild: {
                    requestType: "GetGuildRequest",
                    responseType: "GetGuildResponse"
                  },
                  GetGuildInvites: {
                    requestType: "GetGuildInvitesRequest",
                    responseType: "GetGuildInvitesResponse"
                  },
                  GetGuildMembers: {
                    requestType: "GetGuildMembersRequest",
                    responseType: "GetGuildMembersResponse"
                  },
                  GetGuildChannels: {
                    requestType: "GetGuildChannelsRequest",
                    responseType: "GetGuildChannelsResponse"
                  },
                  GetChannelMessages: {
                    requestType: "GetChannelMessagesRequest",
                    responseType: "GetChannelMessagesResponse"
                  },
                  GetMessage: {
                    requestType: "GetMessageRequest",
                    responseType: "GetMessageResponse"
                  },
                  GetEmotePacks: {
                    requestType: "GetEmotePacksRequest",
                    responseType: "GetEmotePacksResponse"
                  },
                  GetEmotePackEmotes: {
                    requestType: "GetEmotePackEmotesRequest",
                    responseType: "GetEmotePackEmotesResponse"
                  },
                  UpdateGuildInformation: {
                    requestType: "UpdateGuildInformationRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  UpdateChannelInformation: {
                    requestType: "UpdateChannelInformationRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  UpdateChannelOrder: {
                    requestType: "UpdateChannelOrderRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  UpdateMessage: {
                    requestType: "UpdateMessageRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  AddEmoteToPack: {
                    requestType: "AddEmoteToPackRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteGuild: {
                    requestType: "DeleteGuildRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteInvite: {
                    requestType: "DeleteInviteRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteChannel: {
                    requestType: "DeleteChannelRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteMessage: {
                    requestType: "DeleteMessageRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteEmoteFromPack: {
                    requestType: "DeleteEmoteFromPackRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteEmotePack: {
                    requestType: "DeleteEmotePackRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DequipEmotePack: {
                    requestType: "DequipEmotePackRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  JoinGuild: {
                    requestType: "JoinGuildRequest",
                    responseType: "JoinGuildResponse"
                  },
                  LeaveGuild: {
                    requestType: "LeaveGuildRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  TriggerAction: {
                    requestType: "TriggerActionRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  SendMessage: {
                    requestType: "SendMessageRequest",
                    responseType: "SendMessageResponse"
                  },
                  QueryHasPermission: {
                    requestType: "QueryPermissionsRequest",
                    responseType: "QueryPermissionsResponse"
                  },
                  SetPermissions: {
                    requestType: "SetPermissionsRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  GetPermissions: {
                    requestType: "GetPermissionsRequest",
                    responseType: "GetPermissionsResponse"
                  },
                  MoveRole: {
                    requestType: "MoveRoleRequest",
                    responseType: "MoveRoleResponse"
                  },
                  GetGuildRoles: {
                    requestType: "GetGuildRolesRequest",
                    responseType: "GetGuildRolesResponse"
                  },
                  AddGuildRole: {
                    requestType: "AddGuildRoleRequest",
                    responseType: "AddGuildRoleResponse"
                  },
                  ModifyGuildRole: {
                    requestType: "ModifyGuildRoleRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  DeleteGuildRole: {
                    requestType: "DeleteGuildRoleRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  ManageUserRoles: {
                    requestType: "ManageUserRolesRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  GetUserRoles: {
                    requestType: "GetUserRolesRequest",
                    responseType: "GetUserRolesResponse"
                  },
                  StreamEvents: {
                    requestType: "StreamEventsRequest",
                    requestStream: true,
                    responseType: "Event",
                    responseStream: true
                  },
                  GetUser: {
                    requestType: "GetUserRequest",
                    responseType: "GetUserResponse"
                  },
                  GetUserMetadata: {
                    requestType: "GetUserMetadataRequest",
                    responseType: "GetUserMetadataResponse"
                  },
                  ProfileUpdate: {
                    requestType: "ProfileUpdateRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  Typing: {
                    requestType: "TypingRequest",
                    responseType: "google.protobuf.Empty"
                  },
                  PreviewGuild: {
                    requestType: "PreviewGuildRequest",
                    responseType: "PreviewGuildResponse"
                  }
                }
              },
              GetUserRequest: {
                fields: {
                  userId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  }
                }
              },
              GetUserResponse: {
                fields: {
                  userName: {
                    type: "string",
                    id: 1
                  },
                  userAvatar: {
                    type: "string",
                    id: 2
                  },
                  userStatus: {
                    type: "harmonytypes.v1.UserStatus",
                    id: 3
                  },
                  isBot: {
                    type: "bool",
                    id: 4
                  }
                }
              },
              GetUserMetadataRequest: {
                fields: {
                  appId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              GetUserMetadataResponse: {
                fields: {
                  metadata: {
                    type: "string",
                    id: 1
                  }
                }
              },
              ProfileUpdateRequest: {
                fields: {
                  newUsername: {
                    type: "string",
                    id: 1
                  },
                  updateUsername: {
                    type: "bool",
                    id: 2
                  },
                  newAvatar: {
                    type: "string",
                    id: 3
                  },
                  updateAvatar: {
                    type: "bool",
                    id: 4
                  },
                  newStatus: {
                    type: "harmonytypes.v1.UserStatus",
                    id: 5
                  },
                  updateStatus: {
                    type: "bool",
                    id: 6
                  },
                  isBot: {
                    type: "bool",
                    id: 7
                  },
                  updateIsBot: {
                    type: "bool",
                    id: 8
                  }
                }
              }
            }
          }
        }
      },
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
          }
        }
      }
    }
  }
});

export { $root as default };
