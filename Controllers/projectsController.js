const express = require('express');
const router = express.Router();
const Project = require('../Models/Project');

// Index
router.get('/', async (req, res) => {
    let filters;
    if(Object.keys(req.query).length > 0){
        filters = {...req.query}
    }
    try {
        if(!filters){
            const foundProjects = await Project.find({});
            res.status(200).json(foundProjects)
        } else {
            const foundProjects = await Project.find({...filters});
            res.status(200).json(foundProjects)
        }  
    }catch(error){
        res.status(400).json({
            msg: error.message
        })
    }
})


// Create
router.post('/', async (req, res) => {
    try {
        const createdProject = await Project.create(req.body)
        res.status(200).json(createdProject)
    } catch(err){
        res.status(400).json({
            msg: err.message
        })
    }
})


// Show
router.get('/:id', async (req, res) => {
    try {
        const foundProject = await Project.findById(req.params.id);
        res.status(200).json(foundProject)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})
router.get('/byTitle/:title/', async (req, res) => {
    try {
        const foundProject = await Project.findOne({ title: req.params.title });
        res.status(200).json(foundProject)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})


// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProject);
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})


// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})


module.exports = router