let chai = require("chai");
let expect = require("chai").expect;
let chaiHttp = require("chai-http");
let server = require("../src/server");

chai.use(chaiHttp);


// Task 4: Unit tests Add applicable unit tests to the express middleware module in Task 3.

const validEmailAddress = 'test@gmail.com';
const invalidEmailAddress = 'test@gmailcom';
const queryParam = 'punk';

describe('Unit Test API middleware', () => {
    describe('GET /beers', () => {
        // Test middlewares with x-user Header with a valid email address
        describe('valid email address', () => {
            it("should response with status code 200", (done) => {
                chai.request(server)
                .get('/beers')
                .set('x-user', validEmailAddress)
                .query({name: queryParam})
                .end((err, response) => {
                    expect(response.statusCode).to.equal(200);
                done();
                });
            });

            it("should response with a list of beers", (done) => {
                chai.request(server)
                .get('/beers')
                .set('x-user', validEmailAddress)
                .query({name: queryParam})
                .end((err, response) => {
                expect(response.body.result).to.be.an('array');
                done();
                });
            });
        });

        // Test middlewares with x-user Header without a valid email address
        describe('invalid email address', () => {
            it("should response with status code 401", (done) => {
                chai.request(server)
                .get('/beers')
                .set('x-user', invalidEmailAddress)
                .query({name: queryParam})
                .end((err, response) => {
                expect(response.statusCode).to.equal(401);
                done();
                });
            });
        });
    });
});