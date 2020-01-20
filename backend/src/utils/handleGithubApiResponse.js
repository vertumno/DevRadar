const axios = require('axios');

module.exports = async function handleGithubApiResponse(githubUsername){
    const apiResponse = await axios.get(`https://api.github.com/users/${githubUsername}`);
    const { name = login, avatar_url, bio } = apiResponse.data; // Study this bit later
    return { name, avatar_url, bio };            
}