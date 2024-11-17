import boto3
from botocore.exceptions import ClientError
import os
from dotenv import load_dotenv
from docx_conv import get_docx

load_dotenv()

def bedrock(skills:str, profexp:str, projs:str):
    # Put your AWS credentials in a .env file
    access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
    secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")

    client = boto3.client(
        service_name="bedrock-runtime",
        aws_access_key_id=access_key_id,
        aws_secret_access_key=secret_access_key,
        region_name="us-west-2",
    )

    # The model ID for the model you want to use
    model_id = "us.meta.llama3-2-3b-instruct-v1:0"

    # The message you want to send to the model
    with open("prompt.txt") as f:
        user_message = f.read()

    user_message.replace("[s]", skills)
    user_message.replace("[pe]", profexp)
    user_message.replace("[pr]", projs)

    conversation = [
        {
            "role": "user",
            "content": [{"text": user_message}],
        }
    ]

    try:
        response = client.converse(
            modelId=model_id,
            messages=conversation,
            inferenceConfig={"maxTokens": 512, "temperature": 0.5, "topP": 0.9},
        )

        response_text = response["output"]["message"]["content"][0]["text"]
        get_docx(response_text)
    except (ClientError, Exception) as e:
        print(f"ERROR: {e}")
