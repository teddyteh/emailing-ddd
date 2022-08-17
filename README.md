Emailing service

## Description
This microservice handles emailing using Nodemailer. For now, it only has one endpoint which sends an email given a payload.

## Architecture details
- Domain driven design 
  - API
    - This layer contains controllers where our endpoints live.
  - Domain
    - Business logic lives here.
    - It should be dependency free, which means it should only be dependent on other classes within the domain layer.
    - Each domain action has its own file.
    - DTOs should have validation.
  - Infrastructure
    - This layer connects the API and domain layers.
- Entry point
  - main.ts

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
