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
  - Utils
    - This layer is where common utils live.

## Simple flow
1. User fires a POST with a payload and reaches the controller. (api/email/email.controller.ts)
2. The controller calls the task to be done, namely send email. (domain/email/send.ts)
3. The send email task calls the common service Email Processor to process the email. (utils/email-processor/email-processor.ts)
4. The Email Processor queues the job. The job then calls Mailer Service to actually send the email. (via nodemailer)

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test
```
