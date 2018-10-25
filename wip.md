# Serverless

https://www.trek10.com/blog/business-case-for-serverless/

## Architecture

### Monolithic

Pro
- simple team structure
- less communication overhead
- global type safety

Const
- hard to test
- deployment (all or nothing)
- bad scalability

### Microservice

- Solves manu problems
- New challenges
    + organize and orchestrate the interplay of service
    + separating statefull and stateless components
    + dependencies between microservices

=> event driven architecture (pup/sub)

### Serverless Functions (FaaS)

- Deploy individual functions
- Faas providers
    + AWS Lambda
    + Google Cloud functions
    + MS Azure functions

## AWS Setup

[AWS Free Account](http://aws.amazon.com/free)
12 months free
+ EC2 - 750 Hours
+ DynamoDB: 25 GB Storage, 200M request per month
+ S3: 5GB
+ Lambda: 1.000.000 requests/per month
+ Simple Queue Service (SQS): 100.000 http requests, 1.000 emails

+ CodeCommit: 50 GB/month storage, 10.000 Git requests
+ CodePipeline: 1 active pipeline
+ CodeBuild: 100 build minutes / month
+ CloudWatch: 5GB Log Data, 3 Dashboards 50 metrics / month

https://portal.aws.amazon.com/billing/signup?type=resubscribe#/identityverification

Configure Command Line
```bash
# install
brew install awscli

# configure
aws configure
```

### AWS Lambda
- Python
- NodeJS
- C#
- Java

Limitations:
+ < 250MB (< 50MB compressed)
+ storage limit: 512 MB
+ timeout 300 sec
+ 100 concurrent

Consideration:
+ Memory: 128MB - 1.5 GB (also CPU)
+ Event driven
+ Performance limitation single function
+ Long running workloads

Prerequisites:
+

serverless-admin user (TODO)

## AWS Commands

```bash
# configure credentials
$ aws configure
AWS Access Key ID [****************6N2A]:
AWS Secret Access Key [****************WJ4j]:
Default region name [eu-central-1]:
Default output format [None]:

# switch profiles (need zsh aws plugins)
$ aws configure --profile cosemansp
$ asp cosemans
$ agp

# files
~/.aws/config
~/.aws/credentials

# aws commands samples
aws s3api create-bucket --bucket myName --region us-east-1
aws s3 ls
aws s3 cp ./src s3://myName --recursive
aws events put-rule --name myEventName --schedule-expression 'cron(...)'
aws events list-rules
aws iam list-roles
aws lambda create-function ...
aws lambda add-permission ...
```

## Serverless Framework

## Serverless Framework

Quickstart

```bash
npm install serverless -g
serverless login
serverless create --template hello-world
serverless deploy
serverless remove

http://xyz.amazonaws.com/hello-world
```

### Service

```
    serverless.yml
        name
        config
        provider
        resources
        functions
            events
```

## Resources

### Training

The Serverless Spectrum
https://read.acloud.guru/the-serverless-spectrum-147b02cb2292

Migrate your Existing Express Applications to AWS Lambda
https://youtu.be/Cuh_gtFX5gI

Introduction to AWS Lambda (youtube)
https://youtu.be/3EJbbDnrV0I

Tools
http://serverlesscalc.com/#

Info
https://github.com/JustServerless/awesome-serverless/

Training
https://acloud.guru/checkout/offers?productIdQS=aws-serverless-with-graphql&backUrl=~2Flearn~2Fserverless-with-graphql&backUrl=%2Flearn%2Fserverless-with-graphql

AWS API Gateway Security
https://www.youtube.com/watch?v=ZBxWZ9bgd44

## Lambda triggers

- Data Stores
    - S3
    - DynamoDB
    - Kinesis
    - Cognito
- EndPoints
    - API Gateway
    - AWS IoT
    - AWS Step Functions
    - Amazone Alexa
- Event/Message Services
    - Amazon SES
    - Amazon SNS
    - Cron Events
- Anf more...

## Cost

- How does FaaS compare to IaaS?

https://servers.lol/
https://github.com/iopipe/servers.lol


## Benefits

- Pay for what you use
- No infrastructure to manage
- Auto-scaling with no configuration needed
- Authorization

## Considerations

- For apps that may not see traffic for several minutes at a time, you could see cold starts
- Cannot use native libraries

## Express

- https://github.com/awslabs/aws-serverless-express


## Use Cases

- File Conversion
- Server Site Rendering
- Automated Backups

## Monitoring

- Dashbird.io




