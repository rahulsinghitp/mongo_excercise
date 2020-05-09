const Student = require('../app/student');
const assert = require('assert');

describe('Delete tests', () => {
    let deleter;
    beforeEach((done) => {
        deleter = new Student({name: "Deleter"});
        deleter
            .save()
            .then(() => done());
    });

    it("A deleter", (done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({name: "Deleter"}))
            .then(student => {
                assert(student === null);
                done();
            });
    });

});