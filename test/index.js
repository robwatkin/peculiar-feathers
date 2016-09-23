var should = require('chai').should(),
    main = require('../index'),
    captureStream = require('./helpers/capture-stream'),
    client = main.client,
    server = main.server;

describe('the client server model', function(){

  it('has a client', function(){
    client().should.equal('client');

  });

  it('has a server', function(){
    server().should.equal('server');
  });

  describe('logs', function(){
    var stdout;
    beforeEach(function(){
      stdout = captureStream(process.stdout);
    });
    afterEach(function(){
      stdout.release();
    });

    it('can be captured by the test framework', function(){
      stdout.captured().should.equal('');
      console.log('TEST LOG');
      stdout.captured().should.equal('TEST LOG\n');
    });

    it('from the client', function(){
      client();
      stdout.captured().should.equal( 'I am the client\n');
    });

    it('from the server', function(){
      server();
      stdout.captured().should.equal('I am the server\n');
    });

  });
});