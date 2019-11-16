
console.log('before');


run()

async function run() {

    try {
         let user = await getUser(12);
        console.log(user);
        let commits = await getCommits(user.id);
        console.log(commits);
        console.log('after');
    } catch (error) {
        console.log(error)
    }
   

}

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
        result = true;
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