let chai = require("chai");
let expect = require("chai").expect;
let chaiHttp = require("chai-http");
let server = require("../src/server");

chai.use(chaiHttp);

const validEmailAddress = 'test@gmail.com';
const invalidEmailAddress = 'test@gmailcom';

describe('Unit Test API middleware', () => {
    // Test middlewares with x-user Header with and without valid email address
    describe('GET /beers', () => {
        describe('valid email address', () => {
            it("should response with status code 200", (done) => {
                chai.request(server)
                .get('/beers')
                .set('x-user', validEmailAddress)
                .send({name: 'ipa'})
                .end((err, response) => {
                expect(response.statusCode).to.equal(200);
                done();
                });
            });

            it("should response with a list of beers", (done) => {
                chai.request(server)
                .get('/beers')
                .set('x-user', validEmailAddress)
                .send({name: 'ipa'})
                .end((err, response) => {
                expect(response.body.result).to.be.an('array');
                done();
                });
            });
        });

        describe('invalid email address', () => {
            it("should response with status code 401", (done) => {
                chai.request(server)
                .get('/beers')
                .set('x-user', invalidEmailAddress)
                .send({name: 'ipa'})
                .end((err, response) => {
                expect(response.statusCode).to.equal(401);
                done();
                });
            });
        });
    });
});