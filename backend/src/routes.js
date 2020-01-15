const { Router } = require('express');
const axios = require('axios'); // Used to integrate with Github

const routes = Router();

// Here you might want install the Json Viewer extension.
routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(apiResponse.data);
    return response.json({message: 'Hello, dear human.'});
});

module.exports = routes;