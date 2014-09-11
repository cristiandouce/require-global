var requireg = require('require-global');

describe('require-global', function() {
  it('should require jquery from remote', function(done) {
    requireg('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', function(err, script) {
      // ADD REAL TESTS!!!
      done()
    });
  });
});
