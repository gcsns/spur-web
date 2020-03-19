const spur = require('spur-ioc');

// NEED to use require vs import to test module export for backward compatability
const mainModule = require('../../');

describe('Integration', () => {
  describe('Main Module Integration Tests', () => {
    beforeEach(function () {
      this.ioc = spur.create('test-spur-common');
      this.ioc.merge(mainModule());
    });

    describe('base dependencies', () => {
      it('base module dependencies are injectable', function () {
        this.ioc.inject(function (express, methodOverride, cookieParser, bodyParser, expressWinston, ejs) {
          expect(express).to.exist;
          expect(methodOverride).to.exist;
          expect(cookieParser).to.exist;
          expect(bodyParser).to.exist;
          expect(expressWinston).to.exist;
          expect(ejs).to.exist;
        });
      });
    });
  });
});
