# timetracker API POC

(based on Express API Starter https://github.com/w3cj/express-api-starter)


## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```


# Project time-tracker

## Tracking endpoints

### Start tracking

POST http://localhost:5000/api/v1/start/[project-name]

e.g.
curl --request POST http://localhost:5000/api/v1/start/some-project


### Stop tracking

POST http://localhost:5000/api/v1/stop/[project-name]

e.g.
curl --request POST http://localhost:5000/api/v1/stop/some-project


## Reporting endpoints

### List all projects
GET http://localhost:5000/api/v1

e.g.
curl http://localhost:5000/api/v1

### List a project with time segments
GET http://localhost:5000/api/v1/[project-name]

e.g.
curl http://localhost:5000/api/v1/some-project




# TEST

There are sample tests checking start/stop endpoints, may be executed using

npm run test


# Additional information

Persistance uses LokiJS database icluding autosave and autoload
Projects are automatically created on start using any project name
DTOs are used between DB objects and API JSON responses because of observed strange autosaving DB objects through LokiJS

## Notes
It is my first time writing NodeJS tests (and in fact my first time in a whole NodeJS API from "scratch"), I am sure there are a lot of things to enhance :D

