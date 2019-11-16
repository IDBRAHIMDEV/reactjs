
console.log('before');

let user = getUser(12, (user) => {
    console.log(user);
    getCommits(user.id, (commits) => {
        console.log(commits)
    })
});

console.log('after');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('retreive user from database');
        return callback({ id, name: "Abbes SADI" });
     }, 2000);
}

function getCommits(userId, callback) {
    setTimeout(() => {
        console.log('retreive commit');
        return callback(['commit1', 'commit2']);
     }, 2000);
}