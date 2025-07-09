
const public_repos = document.getElementById("public_repos");
const public_gists = document.getElementById("public_gists");

const followers = document.getElementById("followers");

fetch("https://api.github.com/users/AntoineLandrieux")

    .then(res => res.json())

    .then(data => {

        public_repos.innerText = data?.public_repos ?? 20;
        public_gists.innerText = data?.public_gists ?? 20;

        followers.innerText = data?.followers ?? 20;

    });
