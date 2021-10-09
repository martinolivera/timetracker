const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [], done);
  });
});

describe('GET /api/v1/anything', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/anything')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('POST /api/v1/start/first', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/first')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/v1/start/first', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/first')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});

describe('POST /api/v1/start/second', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/second')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/v1/start/third', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/third')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/v1/start/third', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/third')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});

describe('POST /api/v1/start/second', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/second')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});

describe('POST /api/v1/stop/first', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/stop/first')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/v1/stop/first', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/stop/first')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


describe('POST /api/v1/start/first', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/start/first')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/v1/stop/first', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/api/v1/stop/first')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
