
console.log('before');

getUser(12)
    .then((user) => getCommits(user.id))
    .then((commits) => console.log(commits))
    .catch((err) => console.error(err))

console.log('after');


function getUser(id) {

    return new Promise((resolve, reject) => {
        result = false;
         setTimeout(() => {
            console.log('retreive user from database');
            if(result) {
                resolve({ id, name: "Abbes SADI" });
            }else{
                reject('user not found ')
            }
        }, 2000);

    })
}

function getCommits(userId) {

    return new Promise((resolve, reject) => {
        result = false;
         setTimeout(() => {
            console.log('retreive commit');
            if(result) {
                resolve(['commit1', 'commit2']);
            }else{
                reject('commits not found ')
            }
        }, 2000);

    })
   
}