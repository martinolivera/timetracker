const loki = require('lokijs');
var db = new loki('projects.db',{
    autoload: true,
    autoloadCallback: databaseInitialize,
	autosave: true, 
	autosaveInterval: 1000
});
var timestamps, projects
var projectsStatus = {}

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    timestamps = db.getCollection('timestamps');
    if (timestamps === null) {
        timestamps = db.addCollection('timestamps')
    }

    projects = db.getCollection('projects')
    if (projects === null) {
        projects = db.addCollection('projects')
    }

    initializeProjectsStatus();
}

// example method with any bootstrap logic to run after database initialized
function initializeProjectsStatus() {
    var startedProjects = []
    timestamps.find({'stopped': undefined}).forEach((ts)=>{
        startedProjects.push(ts.project)
    })
    projects.find().forEach((p)=>{
        projectsStatus[p.project] = (p.project in startedProjects)
    })
}




function start(project) {
    if (project in projectsStatus
        //TODO future feature, projects may be created with a new endpoint
        && projectsStatus[project]) {
        return false
    }
    projectsStatus[project] = true 
    console.log('starting project ' + project)
    timestamps.insert({'project':project, 'started': new Date()})
    return true
}

function stop(project) {
    if (!(project in projectsStatus) || !projectsStatus[project]) {
        return false
    }
    projectsStatus[project] = false 
    console.log('stopping project ' + project)
    
    //find when project was started and update timestamps
    const lastStart = timestamps.findOne({'project': project, 'stopped':undefined});
    console.log(lastStart)
    lastStart.stopped = new Date()
    lastStart.duration = lastStart.stopped - lastStart.started
    timestamps.update(lastStart)
    
    //add duration to the project
    const pr = projects.findOne({'project': project})
    if (pr == undefined) {
        projects.insert({'project': project, 'duration': lastStart.duration})
    } else {
        pr.duration += lastStart.duration
        projects.update(pr)
    }

    return true
}

function getProjects() {
    var prs = []
    projects.find().forEach((d)=>{
        prs.push(dtoProject(d))
    })
    return prs
}

function getProject(project) {
    var pr = projects.findOne({'project': project})
    if (pr == null) return false
    
    var res = dtoProject(pr)

    var segments = []
    timestamps.find({'project': project}).forEach((d)=>{
        segments.push(dtoTimestamp(d))
    })
    res['segments'] = segments

    return res
}

function dtoProject(p) {
    var r = {}
    r.project = p.project
    r.minutes = p.duration / 60000
    return r
}

function dtoTimestamp(t) {
    var r = {}
    r.started = t.started
    r.stopped = t.stopped
    r.minutes = t.duration / 60000
    return r
}

module.exports = {start, stop, getProjects, getProject}
