/**
 * Created by carlos on 23/02/2017.
 */

import { Meteor } from 'meteor/meteor';
import { Geo } from '../geo.js';

Meteor.publish('geo.all', function () {
    return Geo.find();
});
