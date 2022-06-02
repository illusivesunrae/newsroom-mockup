const moment = require('moment');

// https://github.com/hankchizljaw/microblog/blob/master/src/filters/date-filter.js
module.exports = function dateFilter(value) {
  const dateObject = moment.unix(Number(value));
  return `${dateObject.format('MMMM Do')} at ${dateObject.format('HH:mm')}`;
};