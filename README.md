# README

### Get this puppy up and running

1. fork, clone, yarn install
1. `$ nodemon start`

### What do we want to do next:

1. Landing page - Public
  * Logo
  * Blurb
  * Contact - twitter, insta, facebook
1. Users can log in and log out - no sign up
  * email(req), pw(req), first and last name(req), twitter handle, instagram handle, website, phone number
1. Users can view and add to calendar list of future events
  * events - ordered by date, upcoming at the top
  * date(req), start and end time, addedBy(req), location, description, title(req), url for event, pub or private
1. Users can view calendar list of past events
  * events - ordered by date, most recent at the top
1. Users can view and add articles
  * description, tags, title(req), url(req)
1. Users can add material to an event
  * presentor name, url, title(req), description
1. Guests can view pub events on Landing Page
1. Users can add pub works
  * location, description, title(req), creator(req), upDate(req), removedDate()
1. Guests can view pub works that are current
1. Guests can view pub works that are upcoming

### How this thing was made

1. Create a basic app
  * `$ express resistoralliance-server`
  * `$ yarn install`
  * `$ touch .gitignore && echo node_modules > .gitignore`
  * `$ touch README.md` and start taking awesome notes
  * `$ git add .`
  * `$ git commit -m "sweet message!"`
1. API-ify
  * delete views folder
  * remove from package: jade, serve-favicon
  * remove from app.js

    ```js
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    ```

    ```js
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    ```

    ```js
    app.use(express.static(path.join(__dirname, 'public')));
    ```
  * change in app.js...

    remove this:

    ```js
    res.render('error');
    ```

    add this:

    ```js
    res.json({
      status: err.status,
      message: err.message,
    });
    ```

  * remove public folder
  * change renders to json in index and users routes
1. Add tests for updated index routes (test last??? :sob:)
  * `$ yarn add mocha --dev`
  * add script to package.json `"test": "mocha --recursive"`
  * ran tests - no test files
  * create a new file at `test/features/index.test.js` with the following content

    ```js
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
    ```

  * `$ yarn add supertest --dev`
  * `$ yarn add expect --dev`
1. Add test for updated user routes
  * create a new file at `test/features/users.test.js` with the following content

    ```js
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
    ```
