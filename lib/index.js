'use strict';

var integration = require('@astronomerio/analytics.js-integration');
var indexOf = require('lodash.indexof');
var snakeCase = require('lodash.snakecase');
/**
 * Expose `OutBrain Conversions` integration.
 */

var OutBrain = module.exports = integration('OutBrain')
.option('OB_ADV_ID', '')
.option('events',[])
.tag('trackpxl', '<img src="http://traffic.outbrain.com/network/trackpxl?advid={{ obAdvId }}&action=view" height="1" width="1" border="0" alt="" />');

/**
 * Initialize OutBrain.
 *
 * @param {Facade} page
 */

OutBrain.prototype.initialize = function() {
  this.ready();
};

OutBrain.prototype.loaded = function() {
  return true;
};

/**
 * Track.
 *
 * @param {Facade} Track
 */

OutBrain.prototype.track = function(track) {
  var id = this.options.OB_ADV_ID;
  var events = indexOf(this.options.events.map(snakeCase), snakeCase(track.event()));
  var self = this;
  if (events !== -1) {
    var params = {
      obAdvId: id
    };
    self.load('trackpxl', params);
  }
};
