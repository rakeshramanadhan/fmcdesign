(function ()
{
    var data = {
        "projects"     : [
            {
                "name": "ACME Corp. Backend App"
            },
            {
                "name": "ACME Corp. Frontend App"
            },
            {
                "name": "Creapond"
            },
            {
                "name": "Withinpixels"
            }
        ],
        "widget1"      : {
            "ranges"      : {
                "DY" : "Yesterday",
                "DT" : "Today",
                "DTM": "Tomorrow"
            },
            "currentRange": "DT",
            "data"        : {
                "label": "DUE TASKS",
                "count": {
                    "DY" : 21,
                    "DT" : 25,
                    "DTM": 19
                },
                "extra": {
                    "label": "Completed",
                    "count": {
                        "DY" : 6,
                        "DT" : 7,
                        "DTM": "-"
                    }
                }
            },
            "detail"      : "You can show some detailed information about this widget in here."
        },
        "widget2"      : {
            "title" : "Overdue",
            "data"  : {
                "label": "TASKS",
                "count": 4,
                "extra": {
                    "label": "Yesterday's overdue",
                    "count": 2
                }
            },
            "detail": "You can show some detailed information about this widget in here."
        },
        "widget3"      : {
            "title" : "Issues",
            "data"  : {
                "label": "OPEN",
                "count": 32,
                "extra": {
                    "label": "Closed today",
                    "count": 0
                }
            },
            "detail": "You can show some detailed information about this widget in here."
        },
        "widget4"      : {
            "title" : "Features",
            "data"  : {
                "label": "PROPOSALS",
                "count": 42,
                "extra": {
                    "label": "Implemented",
                    "count": 8
                }
            },
            "detail": "You can show some detailed information about this widget in here."
        },
        "widget5"      : {
            "title"     : "Service Calls",
            "ranges"    : {
                "TW": "This Week",
                "LW": "Last Week",
                "2W": "Total"
            },
            "mainChart" : {
                "2W": [
                    {
                        "key"   : "Clossed Service Calls",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 90
                            },
                            {
                                "x": "Tue",
                                "y": 12
                            },
                            {
                                "x": "Wed",
                                "y": 9
                            },
                            {
                                "x": "Thu",
                                "y": 12
                            },
                            {
                                "x": "Fri",
                                "y": 7
                            },
                            {
                                "x": "Sat",
                                "y": 8
                            },
                            {
                                "x": "Sun",
                                "y": 16
                            }
                        ]
                    },
                    {
                        "key"   : "New Service Call",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 37
                            },
                            {
                                "x": "Tue",
                                "y": 32
                            },
                            {
                                "x": "Wed",
                                "y": 39
                            },
                            {
                                "x": "Thu",
                                "y": 27
                            },
                            {
                                "x": "Fri",
                                "y": 18
                            },
                            {
                                "x": "Sat",
                                "y": 24
                            },
                            {
                                "x": "Sun",
                                "y": 20
                            }
                        ]
                    }
                ],
                "LW": [
                    {
                        "key"   : "Clossed Service Calls",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 12
                            },
                            {
                                "x": "Tue",
                                "y": 8
                            },
                            {
                                "x": "Wed",
                                "y": 7
                            },
                            {
                                "x": "Thu",
                                "y": 13
                            },
                            {
                                "x": "Fri",
                                "y": 7
                            },
                            {
                                "x": "Sat",
                                "y": 6
                            },
                            {
                                "x": "Sun",
                                "y": 10
                            }
                        ]
                    },
                    {
                        "key"   : "new Service Calls",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 37
                            },
                            {
                                "x": "Tue",
                                "y": 24
                            },
                            {
                                "x": "Wed",
                                "y": 51
                            },
                            {
                                "x": "Thu",
                                "y": 31
                            },
                            {
                                "x": "Fri",
                                "y": 29
                            },
                            {
                                "x": "Sat",
                                "y": 17
                            },
                            {
                                "x": "Sun",
                                "y": 31
                            }
                        ]
                    }
                ],
                "TW": [
                    {
                        "key"   : "Clossed Service Calls",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 11
                            },
                            {
                                "x": "Tue",
                                "y": 10
                            },
                            {
                                "x": "Wed",
                                "y": 8
                            },
                            {
                                "x": "Thu",
                                "y": 11
                            },
                            {
                                "x": "Fri",
                                "y": 8
                            },
                            {
                                "x": "Sat",
                                "y": 10
                            },
                            {
                                "x": "Sun",
                                "y": 17
                            }
                        ]
                    },
                    {
                        "key"   : "New Service Calls",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 42
                            },
                            {
                                "x": "Tue",
                                "y": 28
                            },
                            {
                                "x": "Wed",
                                "y": 43
                            },
                            {
                                "x": "Thu",
                                "y": 34
                            },
                            {
                                "x": "Fri",
                                "y": 20
                            },
                            {
                                "x": "Sat",
                                "y": 25
                            },
                            {
                                "x": "Sun",
                                "y": 22
                            }
                        ]
                    }
                ]
            },
            "supporting": {
                "created"   : {
                    "label": "REGISTERED",
                    "count": {
                        "2W": 48,
                        "LW": 46,
                        "TW": 54
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Registered",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 8
                                    },
                                    {
                                        "x": 2,
                                        "y": 5
                                    },
                                    {
                                        "x": 3,
                                        "y": 6
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Registered",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Registered",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 3
                                    },
                                    {
                                        "x": 1,
                                        "y": 2
                                    },
                                    {
                                        "x": 2,
                                        "y": 1
                                    },
                                    {
                                        "x": 3,
                                        "y": 4
                                    },
                                    {
                                        "x": 4,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                "closed"    : {
                    "label": "CLOSED",
                    "count": {
                        "2W": 27,
                        "LW": 31,
                        "TW": 26
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Closed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 3
                                    },
                                    {
                                        "x": 1,
                                        "y": 2
                                    },
                                    {
                                        "x": 2,
                                        "y": 1
                                    },
                                    {
                                        "x": 3,
                                        "y": 4
                                    },
                                    {
                                        "x": 4,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 4
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Closed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 5
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Closed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                "on-going" : {
                    "label": "ON-GOING",
                    "count": {
                        "2W": 4,
                        "LW": 5,
                        "TW": 2
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "On-going",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "On-going",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 8
                                    },
                                    {
                                        "x": 3,
                                        "y": 8
                                    },
                                    {
                                        "x": 4,
                                        "y": 6
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 1
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "On-going",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 3
                                    },
                                    {
                                        "x": 1,
                                        "y": 2
                                    },
                                    {
                                        "x": 2,
                                        "y": 1
                                    },
                                    {
                                        "x": 3,
                                        "y": 4
                                    },
                                    {
                                        "x": 4,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                "pending"  : {
                    "label": "PENDING",
                    "count": {
                        "2W": 14,
                        "LW": 10,
                        "TW": 14
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Pending",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 6
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 3
                                    },
                                    {
                                        "x": 6,
                                        "y": 2
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Pending",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Pending",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 5
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        "widget6"      : {
            "title"      : "Task Distribution",
            "ranges"     : {
                "TW": "This Week",
                "LW": "Last Week",
                "2W": "Total"
            },
            "mainChart"  : {
                "2W": [
                    {
                        "label": "ServiceCalls",
                        "value": 18
                    },
                    {
                        "label": "Bills",
                        "value": 17
                    },
                    {
                        "label": "Quotations",
                        "value": 40
                    },
                    {
                        "label": "Tasks",
                        "value": 25
                    }
                ],
                "LW": [
                    {
                        "label": "ServiceCalls",
                        "value": 19
                    },
                    {
                        "label": "Bills",
                        "value": 16
                    },
                    {
                        "label": "Quotations",
                        "value": 42
                    },
                    {
                        "label": "Tasks",
                        "value": 23
                    }
                ],
                "TW": [
                    {
                        "label": "ServiceCalls",
                        "value": 15
                    },
                    {
                        "label": "Bills",
                        "value": 20
                    },
                    {
                        "label": "Quotations",
                        "value": 38
                    },
                    {
                        "label": "Tasks",
                        "value": 27
                    }
                ]
            },
            "footerLeft" : {
                "title": "Tasks Added",
                "count": {
                    "2W": 100,
                    "LW": 150,
                    "TW": 199
                }
            },
            "footerRight": {
                "title": "Tasks Completed",
                "count": {
                    "2W": 99,
                    "LW": 140,
                    "TW": 195
                }
            }
        },
        
    };

    /**
     * Widget 5
     */
    var widget5Option = 'TW';
    // Main Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.multiBarChart()
            .options(
                {
                    color       : ['#303F9F', '#7986CB'],
                    margin      : {
                        top   : 48,
                        right : 16,
                        bottom: 16,
                        left  : 32
                    },
                    clipEdge    : true,
                    groupSpacing: 0.3,
                    reduceXTicks: false,
                    stacked     : true,
                    duration    : 250,
                    x           : function (d)
                    {
                        return d.x;
                    },
                    y           : function (d)
                    {
                        return d.y;
                    },
                    yTickFormat : function (d)
                    {
                        return d;
                    }
                }
            );

        var chartd3 = d3.select('#widget5-main-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        $(window).bind('update:widget5', function ()
        {

            initChart();
        })

        function initChart()
        {
            chartData = data.widget5.mainChart[widget5Option];
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Supporting Charts
    $.each(['created', 'closed', 'on-going', 'pending'], function (index, id)
    {
        nv.addGraph(function ()
        {
            var chart = nv.models.lineChart()
                .options(
                    {
                        color                  : ['#3F51B5'],
                        height                 : 50,
                        margin                 : {
                            top   : 8,
                            right : 0,
                            bottom: 0,
                            left  : 0
                        },
                        isArea                 : true,
                        interpolate            : 'cardinal',
                        clipEdge               : true,
                        duration               : 500,
                        showXAxis              : false,
                        showYAxis              : false,
                        showLegend             : false,
                        useInteractiveGuideline: true,
                        x                      : function (d)
                        {
                            return d.x;
                        },
                        y                      : function (d)
                        {
                            return d.y;
                        },
                        yDomain                : [0, 9]
                    }
                );

            var chartd3 = d3.select('#widget5-' + id + '-chart svg');
            var chartData;

            initChart();

            nv.utils.windowResize(chart.update);

            $(window).bind('update:widget5', function ()
            {

                initChart();
                $('#widget5-' + id + '-chart .count').text(data.widget5.supporting[id].count[widget5Option]);
            })

            function initChart()
            {
                chartData = data.widget5.supporting[id].chart[widget5Option];
                chartd3.datum(chartData).call(chart);
            }

            return chart;
        });
    });

    $('.widget5-option-change-btn').on('click', function (ev)
    {
        console.log($(ev.target).data('interval'));
        widget5Option = $(ev.target).data('interval');
        $(window).trigger('update:widget5');
    });

    /**
     * Widget 6
     */
    var widget6Option = 'TW';
    // Main Chart - Donut chart
    nv.addGraph(function ()
    {
        var chart = nv.models.pieChart()
            .options({
                color       : ['#4527A0', '#D81B60', '#7B1FA2', '#3949AB'],
                margin      : {
                    top   : 0,
                    right : 0,
                    bottom: 0,
                    left  : 0
                },
                donut       : true,
                clipEdge    : true,
                cornerRadius: 0,
                labelType   : 'percent',
                padAngle    : 0.02,
                x           : function (d)
                {
                    return d.label;
                },
                y           : function (d)
                {
                    return d.value;
                }
            });

        var chartd3 = d3.select('#widget6-main-chart svg');
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        $(window).bind('update:widget6', function ()
        {

            initChart();
            $('#added-tasks .count').text(data.widget6.footerLeft.count[widget6Option]);
            $('#completed-tasks .count').text(data.widget6.footerRight.count[widget6Option]);
        })

        function initChart()
        {
            chartData = data.widget6.mainChart[widget6Option];
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });


    $('#widget6-option-select').on('change', function (ev)
    {
        console.log($(ev.target).val());
        widget6Option = $(ev.target).val();
        $(window).trigger('update:widget6');
    });


    /**
     * Widget 8
     */

    // Main Chart - Donut chart
    nv.addGraph(function ()
    {
        var chart = nv.models.pieChart()
            .options({
                color    : ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107'],
                margin   : {
                    top   : 0,
                    right : 0,
                    bottom: 0,
                    left  : 0
                },
                labelType: 'percent',
                x        : function (d)
                {
                    return d.label;
                },
                y        : function (d)
                {
                    return d.value;
                }
            });

        var chartd3 = d3.select('#widget8-main-chart svg');
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        $(window).bind('update:widget8', function ()
        {
            initChart();
        })

        function initChart()
        {
            chartData = data.widget8.mainChart;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });


    /**
     * Widget 9 Charts
     */
    var widget9Option = 'TW';

    $.each(['weeklySpent', 'totalSpent', 'remaining'], function (index, id)
    {
        nv.addGraph(function ()
        {
            var chart = nv.models.lineChart()
                .options(
                    {
                        color                  : ['#3F51B5'],
                        height                 : 50,
                        margin                 : {
                            top   : 8,
                            right : 0,
                            bottom: 0,
                            left  : 0
                        },
                        isArea                 : true,
                        interpolate            : 'cardinal',
                        clipEdge               : true,
                        duration               : 500,
                        showXAxis              : false,
                        showYAxis              : false,
                        showLegend             : false,
                        useInteractiveGuideline: true,
                        x                      : function (d)
                        {
                            return d.x;
                        },
                        y                      : function (d)
                        {
                            return d.y;
                        },
                        yDomain                : [0, 9]
                    }
                );

            var chartd3 = d3.select('#widget9-' + id + ' svg');
            var chartData;

            initChart();

            nv.utils.windowResize(chart.update);

            $(window).bind('update:widget9', function ()
            {
                initChart();
                $('#widget9-' + id + ' .item-value').text(data.widget9[id].count[widget9Option]);
            })

            function initChart()
            {
                chartData = data.widget9[id].chart[widget9Option];
                chartd3.datum(chartData).call(chart);
            }

            return chart;
        });
    });

    $('#widget9-option-select').on('change', function (ev)
    {
        console.log($(ev.target).val());
        widget9Option = $(ev.target).val();
        $(window).trigger('update:widget9');
    });
})();