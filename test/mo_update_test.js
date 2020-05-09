const Student = require('../app/student');
const assert = require('assert');

describe('Update tests', () => {
    let updater;
    beforeEach((done) => {
        updater = new Student({name: "updater"});
        updater
            .save()
            .then(() => done());
    });

    it("A updater", (done) => {
        updater.set('name', 'UpUpdater');
        updater
            .save()
            .then(() => Student.find({}))
            .then(student => {
                assert(student[0].name !== 'Updater');
                done();
            });
    });

})