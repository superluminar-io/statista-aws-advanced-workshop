#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from "../lib/vpc-stack";

const app = new cdk.App();
const vpcStack = new VpcStack(app, "VpcStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: "eu-central-1" },
});
