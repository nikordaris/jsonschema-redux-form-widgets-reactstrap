// export const variedArraySchema = {};

export const variedArraySchema = {
  id: 'VariedArray',
  title: 'Varied Array Components',
  type: 'object',
  properties: {
    fooCard: {
      id: 'FooArrayCard',
      title: 'Foo Card',
      type: 'array',
      items: {
        anyOf: [
          {
            id: 'Bar',
            title: 'Bar',
            type: 'object',
            meta: {
              vis: {
                ordinal: 1,
                component: 'CardItem'
              }
            },
            properties: {
              name: {
                title: 'Name',
                it: 'Name',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 1,
                    component: 'Text'
                  }
                }
              },
              bar: {
                id: 'Bar',
                title: 'Bar',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Text'
                  }
                }
              }
            }
          },
          {
            id: 'Baz',
            title: 'Baz',
            type: 'object',
            meta: {
              vis: {
                ordinal: 1,
                component: 'CardItem'
              }
            },
            properties: {
              name: {
                title: 'Name',
                it: 'Name',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 1,
                    component: 'Text'
                  }
                }
              },
              baz: {
                id: 'Baz',
                title: 'Baz',
                type: 'number',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Number'
                  }
                }
              }
            }
          }
        ]
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'VariedArrayCard'
        }
      }
    },
    fooInline: {
      id: 'FooArrayInline',
      title: 'Foo Inline',
      type: 'array',
      items: {
        anyOf: [
          {
            id: 'Bar',
            title: 'Bar',
            type: 'object',
            meta: {
              vis: {
                ordinal: 1,
                component: 'CardItem'
              }
            },
            properties: {
              name: {
                title: 'Name',
                it: 'Name',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 1,
                    component: 'Text'
                  }
                }
              },
              bar: {
                id: 'Bar',
                title: 'Bar',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Text'
                  }
                }
              }
            }
          },
          {
            id: 'Baz',
            title: 'Baz',
            type: 'object',
            meta: {
              vis: {
                ordinal: 1,
                component: 'CardItem'
              }
            },
            properties: {
              name: {
                title: 'Name',
                it: 'Name',
                type: 'string',
                meta: {
                  vis: {
                    ordinal: 1,
                    component: 'Text'
                  }
                }
              },
              baz: {
                id: 'Baz',
                title: 'Baz',
                type: 'number',
                meta: {
                  vis: {
                    ordinal: 2,
                    component: 'Number'
                  }
                }
              }
            }
          }
        ]
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'VariedArrayInline'
        }
      }
    }
  }
};

export const uniformedArraySchmea = {
  id: 'UniformedArray',
  title: 'Uniformed Array Components',
  type: 'object',
  properties: {
    childrenCard: {
      id: 'ChildrenArrayCard',
      title: 'Children with Card Container',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          vis: {
            ordinal: 1,
            component: 'CardItem'
          }
        },
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'UniformedArrayCard'
        }
      }
    },
    childrenInlineCard: {
      id: 'ChildrenArrayInlineCard',
      title: 'Children with inline Card Items',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          vis: {
            ordinal: 1,
            component: 'CardItem'
          }
        },
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'UniformedArrayInline'
        }
      }
    },
    childrenInline: {
      id: 'ChildrenArrayInline',
      title: 'Children with inline items',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'UniformedArrayInline'
        }
      }
    },
    childrenModal: {
      id: 'ChildrenArrayModal',
      title: 'Children Modal',
      type: 'array',
      items: {
        id: 'Child',
        title: 'Child',
        type: 'object',
        meta: {
          vis: {
            template: '${name} (${age})'
          }
        },
        properties: {
          name: {
            title: 'Name',
            it: 'Name',
            type: 'string',
            meta: {
              vis: {
                ordinal: 1,
                component: 'Text'
              }
            }
          },
          age: {
            id: 'Age',
            title: 'Age',
            type: 'number',
            meta: {
              vis: {
                ordinal: 2,
                component: 'Number'
              }
            }
          }
        }
      },
      meta: {
        vis: {
          ordinal: 180,
          component: 'ModalUniformArrayCard'
        }
      }
    }
  }
};
