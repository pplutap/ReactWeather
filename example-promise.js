// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('London', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found')
//         }, 1000);
//     });
// }
//
// getTempPromise('Warsaw').then(function (temp) {
//     console.log(temp);
// }, function (err) {
//     console.log(err);
// });

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('please pass numbers');
        }
    })
}

addPromise(2, 6).then(function (sum) {
    console.log(sum);
}, function (err) {
    console.log(err)
});

addPromise(2, 'string').then(function (sum) {
    console.log(sum);
}, function (err) {
    console.log(err)
});