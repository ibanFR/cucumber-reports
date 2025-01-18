#!/bin/bash

awslocal s3api create-bucket --bucket cucumber-reports-anonymous-envelopes
awslocal s3api put-bucket-cors --bucket cucumber-reports-anonymous-envelopes --cors-configuration file:///etc/localstack/init/ready.d/cors.json