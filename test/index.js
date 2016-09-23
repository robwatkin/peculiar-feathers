var should = require('chai').should(),
    main = require('../index'),
    client = main.client,
    server = main.server;

describe('the client server model', function(){
  it('has a client', function(){
    client().should.equal('client');
  });
  it('has a server', function(){
    server().should.equal('server');
  });
});