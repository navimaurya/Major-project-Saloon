const nodemailer = require("nodemailer");
const AppError = require("./appError");
// // const { google } = require("googleapis");
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

const sendEmail = async (options)=>{
  const {next } = options
  try {
    AWS.config.update({ 
      accessKeyId: "AKIAS53CQ6EMI6P4MWUU",
      secretAccessKey: "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",
      // Set the region 
       region: "us-west-2"
       });
     // Create sendEmail params 
     var params = {
       Destination: { /* required */
         ToAddresses: [
           options.email,
         ]
       },
       Message: { /* required */
         Body: { /* required */
           Html: {
             Charset: "UTF-8",
             Data: options.message
           },
         },
         Subject: {
           Charset: 'UTF-8',
           Data: options.subject
         }
       },
       Source: '6iffcoo@gmail.com', /* required */
     };
     // Create the promise and SES service object
     await new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
     // Handle promise's fulfilled/rejected states
     return true;
   } catch (error) {
     next(new AppError("Email verification failed", 400))
   }
  
}


module.exports = sendEmail


    
  //   const transport = nodemailer.createTransport({
  //       service: "gmail",
  //       auth: {
  //         user: "obmps.btrchain@gmail.com",
  //         pass:"Qwert@12345"
  //       },
  //     }); 
    
  //    const mailOption = {
  //       from: `Parlour <obmps.btrchain@gmail.com>`,
  //       to: options.email,
  //       subject: options.subject,
  //       html: options.message,
  //   };  
    
  // return  await transport.sendMail(mailOption);
    