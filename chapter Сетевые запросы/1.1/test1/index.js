async function getUsers(names) {
    let jobs = []

    for (let name of names) {
        let url = `https://api.github.com/users/${name}`
        let job = fetch(url).then(sucRes => {
            if (sucRes.status != 200) {
                return null
            } else {
                return sucRes.json()
            }
        },
            failRes => {
                return null
            })
        jobs.push(job)
    }
    let results = await Promise.all(jobs);

    return results;
}