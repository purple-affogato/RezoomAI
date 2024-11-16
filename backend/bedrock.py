# To run this code, you first need to install the AWS SDK for Python called boto3
# From the terminal, type "pip install boto3"
import boto3
import json

# Create the client object for interacting with Amazon Bedrock
# Be sure to select a region where Amazon Bedrock is available
bedrock = boto3.client(
    service_name='bedrock-runtime', 
    region_name='us-west-2'
)

# The input we'll send to the model
# TIP: You can get this info in the playgrounds by clicking "View API request" and then updating the code below
input = {
  "modelId": "meta.llama2-13b-chat-v1",
  "contentType": "application/json",
  "accept": "*/*",
  "body": "{\"prompt\":\"I need an idea for an app to build on Amazon Bedrock.\",\"max_gen_len\":512,\"temperature\":0.5,\"top_p\":0.9}"
}

# Invoke the model and get back the response
response = bedrock.invoke_model(body=input["body"],
                                modelId=input["modelId"],
                                accept=input["accept"],
                                contentType=input["contentType"])

response_body = json.loads(response['body'].read())

# Print the response from the model
print(response_body)

