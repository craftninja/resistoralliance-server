const expect = require('expect');
const request = require('supertest');

const app = require('../../app.js')

describe ('Rootpath', () => {
  it ('welcomes you', async() => {
    const res = await request(app)
      .get('/')
      .send()
      .expect(200);
    expect(res.body).toEqual("Welcome to Shawna's totes kew app! Also, get out of here, and go to our real app at http://resistoralliance.herokuapp.com/")
  })
});
