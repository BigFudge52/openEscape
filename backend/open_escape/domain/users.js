exports.createUser = function(userData) {
    return new Promise(function(resolve, reject) {
        if (!userData.surname ||
            !userData.lastname ||
            !userData.dni) {
            reject('Missing fields');
            return;
        }

        userData.completeName = userData.surname + userData.lastname;
    });
};