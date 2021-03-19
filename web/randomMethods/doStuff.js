const doStuff = data => {
    return new Promise((resolve, reject) => {
        if (data === true) {
            resolve({status: 'success'});
        } else {
            reject({status: 'fail'});
        }
    })
};

doStuff(true).then(
    msg => {
        console.log(`first${msg.status}`);
        return doStuff(true);
    }
).then(
    msg => {
        console.log(`2nd${msg.status}`);
        return doStuff(false);
    }
).
catch(
    msg => {
        console.log(msg);
    }
)
