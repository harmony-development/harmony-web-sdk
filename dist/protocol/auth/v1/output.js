/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  protocol: {
    nested: {
      auth: {
        nested: {
          v1: {
            options: {
              go_package: "github.com/harmony-development/legato/gen/auth/v1"
            },
            nested: {
              BeginAuthResponse: {
                fields: {
                  authId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Session: {
                fields: {
                  userId: {
                    type: "uint64",
                    id: 1,
                    options: {
                      jstype: "JS_STRING"
                    }
                  },
                  sessionToken: {
                    type: "string",
                    id: 2
                  }
                }
              },
              AuthStep: {
                oneofs: {
                  step: {
                    oneof: [
                      "choice",
                      "form",
                      "session",
                      "waiting"
                    ]
                  }
                },
                fields: {
                  fallbackUrl: {
                    type: "string",
                    id: 1
                  },
                  canGoBack: {
                    type: "bool",
                    id: 2
                  },
                  choice: {
                    type: "Choice",
                    id: 3
                  },
                  form: {
                    type: "Form",
                    id: 4
                  },
                  session: {
                    type: "Session",
                    id: 5
                  },
                  waiting: {
                    type: "Waiting",
                    id: 6
                  }
                },
                nested: {
                  Choice: {
                    fields: {
                      title: {
                        type: "string",
                        id: 1
                      },
                      options: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  Form: {
                    fields: {
                      title: {
                        type: "string",
                        id: 1
                      },
                      fields: {
                        rule: "repeated",
                        type: "FormField",
                        id: 2
                      }
                    },
                    nested: {
                      FormField: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          type: {
                            type: "string",
                            id: 2
                          }
                        }
                      }
                    }
                  },
                  Waiting: {
                    fields: {
                      title: {
                        type: "string",
                        id: 1
                      },
                      description: {
                        type: "string",
                        id: 2
                      }
                    }
                  }
                }
              },
              NextStepRequest: {
                oneofs: {
                  step: {
                    oneof: [
                      "choice",
                      "form"
                    ]
                  }
                },
                fields: {
                  authId: {
                    type: "string",
                    id: 1
                  },
                  choice: {
                    type: "Choice",
                    id: 2
                  },
                  form: {
                    type: "Form",
                    id: 3
                  }
                },
                nested: {
                  Choice: {
                    fields: {
                      choice: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  FormFields: {
                    oneofs: {
                      field: {
                        oneof: [
                          "bytes",
                          "string",
                          "number"
                        ]
                      }
                    },
                    fields: {
                      bytes: {
                        type: "bytes",
                        id: 1
                      },
                      string: {
                        type: "string",
                        id: 2
                      },
                      number: {
                        type: "int64",
                        id: 3
                      }
                    }
                  },
                  Form: {
                    fields: {
                      fields: {
                        rule: "repeated",
                        type: "FormFields",
                        id: 1
                      }
                    }
                  }
                }
              },
              StepBackRequest: {
                fields: {
                  authId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              StreamStepsRequest: {
                fields: {
                  authId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              FederateRequest: {
                fields: {
                  target: {
                    type: "string",
                    id: 1
                  }
                }
              },
              FederateReply: {
                fields: {
                  token: {
                    type: "string",
                    id: 1
                  },
                  nonce: {
                    type: "string",
                    id: 2
                  }
                }
              },
              KeyReply: {
                fields: {
                  key: {
                    type: "string",
                    id: 1
                  }
                }
              },
              LoginFederatedRequest: {
                fields: {
                  authToken: {
                    type: "string",
                    id: 1
                  },
                  domain: {
                    type: "string",
                    id: 2
                  }
                }
              },
              AuthService: {
                methods: {
                  Federate: {
                    requestType: "FederateRequest",
                    responseType: "FederateReply"
                  },
                  LoginFederated: {
                    requestType: "LoginFederatedRequest",
                    responseType: "Session"
                  },
                  Key: {
                    requestType: "google.protobuf.Empty",
                    responseType: "KeyReply"
                  },
                  BeginAuth: {
                    requestType: "google.protobuf.Empty",
                    responseType: "BeginAuthResponse"
                  },
                  NextStep: {
                    requestType: "NextStepRequest",
                    responseType: "AuthStep"
                  },
                  StepBack: {
                    requestType: "StepBackRequest",
                    responseType: "AuthStep"
                  },
                  StreamSteps: {
                    requestType: "StreamStepsRequest",
                    responseType: "AuthStep",
                    responseStream: true
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
          Empty: {
            fields: {}
          }
        }
      }
    }
  }
});

export { $root as default };
