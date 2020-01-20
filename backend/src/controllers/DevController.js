const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const handleGithubApiResponse = require('../utils/handleGithubApiResponse');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async update(request, response) {
        const { github_username, techs } = request.body;
        let dev = await Dev.findOne({github_username});
        if (dev) {
            const { name, avatar_url, bio } = handleGithubApiResponse(github_username);
            const techsArrays = parseStringAsArray(techs);
            dev.github_username = github_username;
            dev.techs = techsArrays;
            dev.name = name;
            dev.avatar_url = avatar_url;
            dev.bio = bio;
            await dev.save();
            return response.json(dev);                                   
        }
        return response.json({"message": "Cannot update a user that does not exists."});
    },

    async destroy(request, response) {
        const { github_username } = request.body;
        let dev = await Dev.findOne({github_username});
        if (dev) dev.remove({});
        return response.json({"message": "User deleted from the database."});
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        let dev = await Dev.findOne({github_username});
        if (!dev) {
            const { name, avatar_url, bio } = handleGithubApiResponse(github_username);
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