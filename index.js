const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');

const app = express();

// Sample route
app.get('/', (req, res) => {
    res.json({ message: "Hello Venu Asarelly WelCome to AWS Lambda🚀" });
});
app.get('/test', (req, res) => {
    res.json({ message: "Hello TEST Venu Asarelly WelCome to AWS Lambda🚀" });
});

// Create the AWS Lambda server
const server = awsServerlessExpress.createServer(app);

// Export the Lambda handler
exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};
