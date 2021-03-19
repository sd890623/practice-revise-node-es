const doStuff = data => {
    return new Promise((resolve, reject) => {
        if (data === true) {
            resolve({status: 'success'});
        } else {
            reject({status: 'fail'});
        }
    })
};
/**
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
**/

const slowDoStuff = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data*data);
            } else {
                reject({status: 'fail'});
            }
        }, 1000);
    })
};

const wrapperMethod = async () => {
    const a = await slowDoStuff(2);
    console.log(a);
    const b = await slowDoStuff(a);
    const c = await slowDoStuff(b);
    return c;
}

export const runDoStuff = () => {
    wrapperMethod()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });
}