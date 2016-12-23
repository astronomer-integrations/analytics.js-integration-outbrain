'use strict';

var Analytics = require('@astronomerio/analytics.js-core').constructor;
var integration = require('@astronomerio/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var OutBrain = require('../lib/index');

describe('OutBrain', function() {
  var analytics;
  var outbrain;
  var options = {
    OB_ADV_ID: 12345,
    events: [
      'bid_on_item'
    ]
  };

  beforeEach(function() {
    analytics = new Analytics();
    outbrain = new OutBrain(options);
    analytics.use(OutBrain);
    analytics.use(tester);
    analytics.add(outbrain);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    outbrain.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    analytics.compare(OutBrain, integration('OutBrain')
        .option('obAdvId', '')
        .option('events', []));
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.stub(outbrain, 'load');
      analytics.once('ready', done);
      analytics.initialize();
    });

    describe('#track', function() {
      it('should call track and fire pixel', function() {
        analytics.track('bid_on_item');
        analytics.called(outbrain.load, 'pixel', {
          obAdvId: outbrain.options.OB_ADV_ID
        });
      });
    });

    describe('#track', function() {
      it('should fail to call track and fire pixel', function() {
        analytics.track('bid_onitem');
        analytics.didNotCall(outbrain.load);
      });
    });
  });
});
