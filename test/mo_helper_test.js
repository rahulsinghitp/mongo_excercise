const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});
    mongoose.connection
    .once('open', () => {
        done();
    })
    .on('error', (error) => {
        console.log("Your error ", error);
    });
});

beforeEach(done => {
    mongoose.connection.collections.students.drop(() => {
        done();
        console.log('Drop was success');
    });
});
