const axios = require('axios'); // Used to integrate with Github
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async update(request, response) {},

    async destroy(request, response) {},

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        
        // Checks if the user is already in the database before proceed
        let dev = await Dev.findOne({github_username});
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data; // Study this bit later
            const techsArrays = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            // Through short syntax.
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArrays,
                location
            });
        }        
        
        return response.json(dev);
    }    
};