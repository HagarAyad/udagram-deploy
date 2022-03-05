# Pipeline process

The pipeline used in this project is CircleCi pipeline.
we can find pipelines in .circleci/config.yml. circle ci pipeline consists of the following sections:

## CircleCI version

indicating which version of the platform our pipeline should use.

## Orbs

#### set of instructions created by CircleCi that allow us to configure the pipeline on which we will run our actions.

##### in our case orbs are :

- Node
- aws-cli: controls services in AWS, we used it to copy front-end files to S3.
- eb-cli: elastic beanstalk cli which simplifies to do most actions on EB.

## Jobs

#### groups of commands that we want to run.

##### in our case orbs are :

- backend:install: install dependencies of backend project.
- frontend:install: install dependencies of frontend project.
- backend:test: run command of testing
- frontend:test: run command of unit testing in frontend.
- backend:build: generate build folder (./www).
- frontend:build: generate build folder (./www).
- backend:deploy: deploy backend to AWS elastic beanstalk and set env variables.
- frontend:deploy: upload build files to S3 bucket.
