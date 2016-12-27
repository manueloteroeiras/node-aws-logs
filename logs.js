const dotenv  = require('dotenv').load(); //Get .env file
const CwLogs = require('aws-cwlogs');    
 
const options = {
    region: process.env.LOG_REGION,
    logGroupName: process.env.LOG_GROUP,
    streamname: `${process.env.LOG_NAME}-${process.env.BRANCH}-${process.env.ENVIROMENT}.log`,
    // momentTimeFormat: 'hh:mm:ss:SSS', //optional
    interval: 2000,                   //optional
};

console.log(`Loading logs for ${process.env.LOG_NAME}-${process.env.BRANCH}-${process.env.ENVIROMENT}`)
 
const lambdaLogger = new CwLogs(options);  

lambdaLogger.start(options);