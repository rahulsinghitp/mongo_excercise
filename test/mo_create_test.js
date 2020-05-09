const Student = require('../app/student');
const assert = require('assert');

describe('Create records', () => {
    it('create a user in DB', () => {
        const Sam = new Student({name: 'Sam'});
        Sam
            .save()
            .then(() => {
                assert(!Sam.isNew);
            })
            .catch(() => {
                console.log("error");
            })
    });


});
