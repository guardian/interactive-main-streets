var styleLayers = [
    {
            "id": "background",
            "type": "background",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#F6F6F6"
                        ],
                        [
                            12,
                            "#F6F6F6"
                        ],
                        [
                            12.1,
                            "#FFFFFF"
                        ],
                        [
                            22,
                            "#FFFFFF"
                        ]
                    ]
                }
            }
        },


///////////////HILSHADES///////////////////////////////////////////////////////


        {
            "id": "hillshade_highlight_bright",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444855815295.714"
            },
            'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
            },
            "source-layer": "hillshade",
            "maxzoom": 18,
            "filter": [
                "==",
                "level",
                94
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#f4f4f4",
                "fill-opacity": 1
            }
        },
        {
            "id": "hillshade_highlight_med",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444855815295.714"
            },
            'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                90
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#efefef",
                "fill-opacity": 1
            }
        },
        {
            "id": "hillshade_shadow_faint",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444855815295.714"
            },
            'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
            "source-layer": "hillshade",
            "maxzoom": 17,
            "filter": [
                "==",
                "level",
                89
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#efefef",
                "fill-opacity": 1
            }
        },
        {
            "id": "hillshade_shadow_med",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444855815295.714"
            },
            'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                78
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ECEAE7",
                "fill-opacity": 1
            }
        },
        {
            "id": "hillshade_shadow_dark",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444855815295.714"
            },
            'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
            "source-layer": "hillshade",
            "filter": [
                "==",
                "level",
                67
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#E2E0DD",
                "fill-opacity": 1
            }
        },
        {
            "id": "hillshade_shadow_extreme",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1444855815295.714"
            },
            'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
            "source-layer": "hillshade",
            "maxzoom": 17,
            "filter": [
                "==",
                "level",
                56
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#DBD9D7",
                "fill-opacity": 1
            }
        },

    

///////////////GREEN AREAS///////////////////////////////////////////////////////




   



//////////WATER////////////////////////////////////////////////////




        {
            "id": "water",
            "type": "fill",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "water",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#FFFFFF"
                        ],
                        [
                            12,
                            "#FFFFFF"
                        ],
                        [
                            12.1,
                            "#D2F1F6"
                        ],
                        [
                            22,
                            "#D2F1F6"
                        ]
                    ]
                },
                "fill-outline-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#FFFFFF"
                        ],
                        [
                            12,
                            "#FFFFFF"
                        ],
                        [
                            12.1,
                            "#056DA1"
                        ],
                        [
                            22,
                            "#056DA1"
                        ]
                    ]
                }
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "waterway",
            "filter": [
                "==",
                "$type",
                "LineString"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#FFFFFF"
                        ],
                        [
                            12,
                            "#FFFFFF"
                        ],
                        [
                            12.1,
                            "#D2F1F6"
                        ],
                        [
                            22,
                            "#D2F1F6"
                        ]
                    ]
                }
            }
        },
    




///////////////DWELLING///////////////////////////////////////////////////////




    {
        "id": "industrial",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "filter": [
            "==",
            "class",
            "industrial"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#EBEBEB"
        }
    },
    {
        "id": "school",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "filter": [
            "==",
            "class",
            "school"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#E6E6E6"
        }
    },
    {
        "id": "hospital",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "filter": [
            "==",
            "class",
            "hospital"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#E6E6E6"
        }
    },
    {
        "id": "building",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "building",
        "minzoom": 11.1,
        "filter": [
            "==",
            "$type",
            "Polygon"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#E6E6E6",
            "fill-opacity": 1,
            "fill-translate-anchor": "viewport"
        }
    },
        



///////////////ROADS///////////////////////////////////////////////////////

 {
            "id": "Motorways",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway",
                    "motorway_link",
                    "trunk"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DADADA",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            5
                        ]
                    ]
                }
            }
        },
        {
            "id": "primary-road",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "primary"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DADADA",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            14,
                            3
                        ],
                        [
                            20,
                            20
                        ]
                    ]
                }
            }
        },
        {
            "id": "secondary-road",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "mini_roundabout",
                    "secondary"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DADADA",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.7
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            }
        },
        {
            "id": "streets",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "in",
                    "class",
                    "construction",
                    "golf",
                    "level_crossing",
                    "path",
                    "pedestrian",
                    "street",
                    "street_limited",
                    "tertiary",
                    "track",
                    "turning_circle",
                    "turning_loop"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#DADADA",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.7
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            5
                        ]
                    ]
                }
            }
        },
        {
            "id": "rail-roads",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "all",
                    [
                        "in",
                        "class",
                        "",
                        "level_crossing",
                        "major_rail",
                        "minor_rail"
                    ]
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#B3B3B4",
                "line-width": 0.35
            }
        },

   

///////////////BOUNDARIES///////////////////////////////////////////////////////

    {
        "id": 'admin-3-4-boundaries',
        'type': 'line',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-streets-v7"
        },
        "source-layer": "admin",
        "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
        },
        "paint": {
                "line-opacity": 1,
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.5
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "#333333"
        },
        "filter": [
                "all",
                [
                    ">=",
                    "admin_level",
                    3
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
    },
    {
        "id": 'admin-2-boundaries',
        'type': 'line',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-streets-v7"
        },
        "source-layer": "admin",
        "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
        },
        "paint": {
                "line-opacity": 1,
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.5
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-color": "#333333"
        },
        "layout": {
                "visibility": "visible"
        },
        "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "disputed",
                    0
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
    },
    {
        "id": "admin-2-boundaries-dispute",
        "type": "line",
        "metadata": {
            "mapbox:group": "1444934295202.7542"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "admin",
        "minzoom": 1,
        "filter": [
            "all",
            [
                "==",
                "admin_level",
                2
            ],
            [
                "==",
                "disputed",
                1
            ],
            [
                "==",
                "maritime",
                0
            ]
        ],
        "layout": {
            "line-join": "round",
            "visibility": "visible",
            "line-round-limit": 1
        },
        "paint": {
            "line-dasharray": [1, 4],
            "line-color": "#333333",
            "line-width":
            {
                "stops": [
                        [
                            0,
                            0.5
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            2
                        ]
                    ]
            },
            "line-opacity": 1,
            "line-gap-width": 0
        }
    },



///////////////////////LABELS/////////////////////////////////////////////////
    

]


export default styleLayers