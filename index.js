const codeforcesHandle = 'Venuskanda';
const githubUsername = 'Venuskanda';
const githubUsername1 = 'Revno-Official';

const codeforcesHandleDiv = document.getElementById('cf-handle');
const codeforcesRatingDiv = document.getElementById('cf-rating');

const githubUsernameDiv = document.getElementById('gh-username');
const githubRepositoriesDiv = document.getElementById('gh-repositories');

const githubUsernameDiv1 = document.getElementById('gh-username1');
const githubRepositoriesDiv1 = document.getElementById('gh-repositories1');

async function updateCodeforcesTooltip() {
  codeforcesHandleDiv.innerHTML = `Handle: ${codeforcesHandle}`;
  const res = await fetch(
    `https://codeforces.com/api/user.info?handles=${codeforcesHandle}`
  );
  const data = await res.json();
  if (data.status === 'OK') {
    const { rating } = data.result[0];
    codeforcesRatingDiv.innerHTML = `Rating: ${rating}`;
  }
}

async function updateGithubTooltip() {
  console.log('Working....');
  githubUsernameDiv.innerHTML = `Username: ${githubUsername}`;
  const res = await fetch(`https://api.github.com/users/${githubUsername}`);
  const data = await res.json();
  const { public_repos } = data;
  githubRepositoriesDiv.innerHTML = `Repositories: ${public_repos}`;
}

async function updateGithubTooltip1() {
  console.log('Working(Revno)....');
  githubUsernameDiv1.innerHTML = `Username: ${githubUsername1}`;
  const res = await fetch(`https://api.github.com/users/${githubUsername1}`);
  const data = await res.json();
  const { public_repos } = data;
  githubRepositoriesDiv1.innerHTML = `Repositories: ${public_repos}`;
}

updateCodeforcesTooltip();
updateGithubTooltip();
updateGithubTooltip1();
