// Fill the DB with example data on startup

import {Meteor} from 'meteor/meteor';
import {Geo} from '../../api/geo/geo.js';

Meteor.startup(() => {
    // I need mocking data for tests
    if (Geo.find().count() === 0) {
        const collection = [
            {
                interval: 0,
                name: 'Last day',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 2, 1],
                    ['Memphis, Tennessee', 9070, 1],
                    ['Denver, Colorado', 4, 1],
                    ['Berlin, Germany', 6, 1],
                    ['Frankfurt, Germany', 2, 2],
                    ['Nice, France', 1, 1],
                    ['Lilly, France', 0, 1],
                    ['Busan, Korea', 2, 1],
                    ['Suwon, Korea', 3, 1],
                    ['Sopot, Poland', 2, 1],
                    ['Lublin, Poland', 4, 1],
                    ['Moscow, Russia', 5, 1],
                    ['Saint, Russia', 6, 0],
                    ['Visby, Sweden', 1, 1],
                    ['Lund, Sweden', 1, 1],
                    ['Tokyo, Japan', 1, 0],
                    ['Osaka, Japan', 1, 1],
                    ['Guilin, China', 1, 2],
                    ['Beijing, China', 1, 1]

                ],
            },
            {
                interval: 1,
                name: 'Last week',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 50, 5],
                    ['Memphis, Tennessee', 50, 5],
                    ['Denver, Colorado', 50, 5],
                    ['Berlin, Germany', 50, 5],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 50, 5],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 50, 5],
                    ['Suwon, Korea', 50, 3],
                    ['Sopot, Poland', 50, 5],
                    ['Lublin, Poland', 50, 3],
                    ['Moscow, Russia', 50, 5],
                    ['Saint, Russia', 50, 5],
                    ['Visby, Sweden', 50, 5],
                    ['Lund, Sweden', 50, 15],
                    ['Tokyo, Japan', 50, 5],
                    ['Osaka, Japan', 50, 3],
                    ['Guilin, China', 50, 5],
                    ['Beijing, China', 50, 3]

                ],
            },
            {
                interval: 2,
                name: 'Last month',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 500, 20],
                    ['Memphis, Tennessee', 500, 10],
                    ['Denver, Colorado', 500, 10],
                    ['Berlin, Germany', 500, 15],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 8],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 500, 10],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 10],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 11],
                    ['Tokyo, Japan', 500, 10],
                    ['Osaka, Japan', 1400, 10],
                    ['Guilin, China', 500, 5],
                    ['Beijing, China', 500, 10]

                ],
            },
            {
                interval: 3,
                name: 'Last two months',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 1270, 60],
                    ['Memphis, Tennessee', 9070, 30],
                    ['Denver, Colorado', 8270, 10],
                    ['Berlin, Germany', 6670, 20],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 10],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 1600, 15],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 15],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 15],
                    ['Tokyo, Japan', 4567, 10],
                    ['Osaka, Japan', 2400, 10],
                    ['Guilin, China', 5421, 5],
                    ['Beijing, China', 1000, 10]

                ],
            },
            {
                interval: 4,
                name: 'moment',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 1270, 60],
                    ['Memphis, Tennessee', 9070, 30],
                    ['Denver, Colorado', 8270, 10],
                    ['Berlin, Germany', 6670, 20],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 10],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 1600, 15],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 15],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 15],
                    ['Tokyo, Japan', 4567, 10],
                    ['Osaka, Japan', 2400, 10],
                    ['Guilin, China', 5421, 5],
                    ['Beijing, China', 1000, 10]

                ],
            },
            {
                interval: 5,
                name: 'moment',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 1270, 60],
                    ['Memphis, Tennessee', 9070, 30],
                    ['Denver, Colorado', 8270, 10],
                    ['Berlin, Germany', 6670, 20],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 10],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 1600, 15],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 15],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 15],
                    ['Tokyo, Japan', 4567, 10],
                    ['Osaka, Japan', 2400, 10],
                    ['Guilin, China', 5421, 5],
                    ['Beijing, China', 1000, 10]

                ],
            },
            {
                interval: 6,
                name: 'moment',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 1270, 60],
                    ['Memphis, Tennessee', 9070, 30],
                    ['Denver, Colorado', 8270, 10],
                    ['Berlin, Germany', 6670, 20],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 10],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 1600, 15],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 15],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 15],
                    ['Tokyo, Japan', 4567, 10],
                    ['Osaka, Japan', 2400, 10],
                    ['Guilin, China', 5421, 5],
                    ['Beijing, China', 1000, 10]

                ],
            },
            {
                interval: 7,
                name: 'moment',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 1270, 60],
                    ['Memphis, Tennessee', 9070, 30],
                    ['Denver, Colorado', 8270, 10],
                    ['Berlin, Germany', 6670, 20],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 10],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 1600, 15],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 15],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 15],
                    ['Tokyo, Japan', 4567, 10],
                    ['Osaka, Japan', 2400, 10],
                    ['Guilin, China', 5421, 5],
                    ['Beijing, China', 1000, 10]

                ],
            },
            {
                interval: 8,
                name: 'moment',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 1270, 60],
                    ['Memphis, Tennessee', 9070, 30],
                    ['Denver, Colorado', 8270, 10],
                    ['Berlin, Germany', 6670, 20],
                    ['Frankfurt, Germany', 65, 5],
                    ['Nice, France', 907, 10],
                    ['Lilly, France', 90, 5],
                    ['Busan, Korea', 990, 5],
                    ['Suwon, Korea', 1600, 15],
                    ['Sopot, Poland', 567, 10],
                    ['Lublin, Poland', 945, 15],
                    ['Moscow, Russia', 653, 5],
                    ['Saint, Russia', 876, 5],
                    ['Visby, Sweden', 123, 10],
                    ['Lund, Sweden', 945, 15],
                    ['Tokyo, Japan', 4567, 10],
                    ['Osaka, Japan', 2400, 10],
                    ['Guilin, China', 5421, 5],
                    ['Beijing, China', 1000, 10]

                ],
            },
            {
                interval: 9,
                name: 'Last 6 months',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 11270, 160],
                    ['Memphis, Tennessee', 19070, 130],
                    ['Denver, Colorado', 18270, 110],
                    ['Berlin, Germany', 16670, 120],
                    ['Frankfurt, Germany', 165, 15],
                    ['Nice, France', 1907, 110],
                    ['Lilly, France', 190, 15],
                    ['Busan, Korea', 1990, 15],
                    ['Suwon, Korea', 11600, 115],
                    ['Sopot, Poland', 1567, 110],
                    ['Lublin, Poland', 1945, 115],
                    ['Moscow, Russia', 1653, 15],
                    ['Saint, Russia', 1876, 15],
                    ['Visby, Sweden', 1123, 110],
                    ['Lund, Sweden', 1945, 115],
                    ['Tokyo, Japan', 14567, 110],
                    ['Osaka, Japan', 12400, 110],
                    ['Guilin, China', 15421, 15],
                    ['Beijing, China', 11000, 110]

                ],
            },
            {
                interval: 10,
                name: 'Last year',
                data: [
                    ['Location', 'Total Proposals', 'Unique Logins'],
                    ['Austin, Texas', 11270, 160],
                    ['Memphis, Tennessee', 19070, 130],
                    ['Denver, Colorado', 18270, 110],
                    ['Berlin, Germany', 16670, 120],
                    ['Frankfurt, Germany', 165, 15],
                    ['Nice, France', 1907, 110],
                    ['Lilly, France', 190, 15],
                    ['Busan, Korea', 1990, 15],
                    ['Suwon, Korea', 11600, 115],
                    ['Sopot, Poland', 1567, 110],
                    ['Lublin, Poland', 1945, 115],
                    ['Moscow, Russia', 1653, 15],
                    ['Saint, Russia', 1876, 15],
                    ['Visby, Sweden', 1123, 110],
                    ['Lund, Sweden', 1945, 115],
                    ['Tokyo, Japan', 14567, 110],
                    ['Osaka, Japan', 12400, 110],
                    ['Guilin, China', 15421, 15],
                    ['Beijing, China', 11000, 110]

                ],
            },
        ];

        collection.forEach(doc => Geo.insert(doc));
    }
});
