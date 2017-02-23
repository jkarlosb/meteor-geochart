/**
 * Created by carlos on 22/02/2017.
 */

import {Meteor} from 'meteor/meteor';
import './signin.html';
import {Geo} from '/imports/api/geo/geo.js';


Template.signin.onCreated(function () {
    Meteor.subscribe("geo.all");
});

Template.signin.onRendered(function () {

    var myApiKey = 'AIzaSyA5KSfpBFAbxBzfvMvJ05BJCjflv07i94k'; // Google Api Key
    Session.set("interval", Number(Template.instance().$('.slider[name=points]')[0].value));

    Tracker.autorun(function () {
        google.charts.load('upcoming', {'packages': ['geochart'], mapsApiKey: myApiKey});
        google.charts.setOnLoadCallback(drawMarkersMap);

        function drawMarkersMap() {
            var moment = Geo.findOne({interval: 0});
            console.log(Session.get("interval") + " " + moment);
            var data = google.visualization.arrayToDataTable(moment.data);

            var options = {
                sizeAxis: {minValue: 0, maxValue: 50},
                displayMode: 'markers',
                colorAxis: {colors: ['#23D484', '#23D484']}, // A3 green
                backgroundColor: {fill: 'transparent'},
                datalessRegionColor: '#808080', //dell gray color
                width: "100%",
                projection: 'kavrayskiy-vii', //less distorted projection of map
                legend: 'none',
                tooltip: {isHtml: true, textStyle: {color: '#EEE', fontName: 'Roboto', fontSize: '12'}} // CSS styling affects HTML tooltips

            };

            var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        };
    });

    // ANOTHER WAY
    // WITH: meteor add rafaelhdr:google-charts
    // var chart = {
    //     target: 'chart2',
    //     type: 'GeoChart',
    //     data: [
    //         ['Location', 'Total Proposals', 'Unique Logins'],
    //         ['Austin, Texas', 1270, 60],
    //         ['Memphis, Tennessee', 9070, 30],
    //         ['Denver, Colorado', 8270, 10],
    //         ['Berlin, Germany', 6670, 20],
    //         ['Frankfurt, Germany', 65, 5],
    //         ['Nice, France', 907, 10],
    //         ['Lilly, France', 90, 5],
    //         ['Busan, Korea', 990, 5],
    //         ['Suwon, Korea', 1600, 15],
    //         ['Sopot, Poland', 567, 10],
    //         ['Lublin, Poland', 945, 15],
    //         ['Moscow, Russia', 653, 5],
    //         ['Saint, Russia', 876, 5],
    //         ['Visby, Sweden', 123, 10],
    //         ['Lund, Sweden', 945, 15],
    //         ['Tokyo, Japan', 4567, 10],
    //         ['Osaka, Japan', 2400, 10],
    //         ['Guilin, China', 5421, 5],
    //         ['Beijing, China', 1000, 10]
    //     ],
    //     options: {
    //         sizeAxis: {
    //             minValue: 0,
    //             maxValue: 50
    //         },
    //         displayMode: 'markers',
    //         colorAxis: {
    //             colors: ['#23D484', '#23D484']
    //         }, // A3 green
    //         backgroundColor: {
    //             fill: 'transparent'
    //         },
    //         datalessRegionColor: '#808080', //dell gray color
    //         width: "100%",
    //         projection: 'kavrayskiy-vii', //less distorted projection of map
    //         legend: 'none',
    //         tooltip: {
    //             isHtml: true,
    //             textStyle: {
    //                 color: '#EEE',
    //                 fontName: 'Roboto',
    //                 fontSize: '12'
    //             }
    //         } // CSS styling affects HTML tooltips
    //     }
    // };
    //
    // drawChart(chart_div);
});

Template.signin.helpers({});

Template.signin.events({
    'change .slider[name=points]'(event, template) {
        Session.set("interval", event.target.value);
    }
});
