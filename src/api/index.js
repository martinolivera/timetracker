const express = require('express');

const projects = require('./projects');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(projects.getProjects());
});

router.get('/:projectId', (req, res) => {
  var result = projects.getProject(req.params.projectId)
  if (!result) {
    res.status(404).json({
      message: 'Unknown project ' + req.params.projectId
    })
  } else {
    res.status(200).json(result);
  }
});

router.post('/start/:projectId', (req, res) => {
  if (projects.start(req.params.projectId)) {
    res.status(200).json({
      message: 'STARTED: '+req.params.projectId
    });
  } else {
    res.status(400).json({
      message: 'ERROR: project '+req.params.projectId + ' was previously started'
    });

  }
});

router.post('/stop/:projectId', (req, res) => {
  if (projects.stop(req.params.projectId)) {
    res.status(200).json({
      message: 'STOPPED: '+req.params.projectId
    });
  } else {
    res.status(400).json({
      message: 'ERROR: project '+req.params.projectId + ' is not started'
    });

  }
});


module.exports = router;
