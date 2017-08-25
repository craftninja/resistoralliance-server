const expect = require('expect');
const request = require('supertest');

const app = require('../../app.js')

describe ('Users', () => {
  it ('can be listed', async() => {
    const res = await request(app)
      .get('/users')
      .send()
      .expect(200);
    expect(res.body[0]).toEqual({
      "id": 1,
      "name": "CraftNinja",
      "patronus": "red wolf",
    })
    expect(res.body.length).toEqual(3)
  })
});
