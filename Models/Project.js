const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true },
    projectUrl: { type: String, required: true },
});

const Project = model('Project', projectSchema);

module.exports = Project;