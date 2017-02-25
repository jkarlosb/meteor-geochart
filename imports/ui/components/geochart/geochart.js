/**
 * Created by carlos on 22/02/2017.
 */

import {Meteor} from 'meteor/meteor';
import './geochart.html';
import {Geo} from '/imports/api/geo/geo.js';


const myApiKey = "PUT_HERE_YOUR_API_KEY"; // Google Api Key
console.log(myApiKey);

function drawMarkersMap() {
    Tracker.autorun(function () {
        if (Tracker.currentComputation.firstRun) {
            this.chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
        }
        var moments = Geo.find({interval: {$lte: Number(Session.get("interval"))}}).fetch();
        var lastMoment = moments[moments.length - 1];
        Session.set("name", lastMoment.name);

        var users = 0;
        var proposals = 0;
        moments.forEach(function (moment) {
            let locations = moment.data;
            for (let i = 1; i < locations.length; i++) {
                let location = locations[i];
                users += location[1];
                proposals += location[2];
            }
        });

        Session.set("users", users);
        Session.set("proposals", proposals);

        var data = google.visualization.arrayToDataTable(lastMoment.data);

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
        this.chart.draw(data, options);
    });
};

Template.geochart.onCreated(function () {
    Meteor.subscribe("geo.all");

    // Resize map on window resize event
    // create trigger to resizeEnd event
    $(window).resize(function () {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 500);
    });
    // redraw map when window resize is complete or after 500ms
    $(window).on('resizeEnd', function () {
        drawMarkersMap();
    });
});

Template.geochart.onRendered(function () {

    Session.set("interval", Template.instance().$('.slider[name=points]')[0].value);
    google.charts.load('upcoming', {'packages': ['geochart'], mapsApiKey: myApiKey});
    google.charts.setOnLoadCallback(drawMarkersMap);

});

Template.geochart.helpers({
    name(){
        return Session.get("name");
    },
    users(){
        return Session.get("users");
    },
    proposals(){
        return Session.get("proposals");
    }
});

Template.geochart.events({
    'change .slider[name=points]'(event, template) {
        Session.set("interval", event.target.value);
    }
});
