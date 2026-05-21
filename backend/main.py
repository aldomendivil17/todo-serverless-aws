from fastapi import FastAPI
from mangum import Mangum
import boto3
import uuid
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("tasks")


@app.get("/")
def root():
    return {"message": "API funcionando"}


@app.get("/tasks")
def get_tasks():
    response = table.scan()
    return response["Items"]


@app.post("/tasks")
def create_task(task: dict):

    item = {
        "id": str(uuid.uuid4()),
        "title": task["title"],
        "done": False
    }

    table.put_item(Item=item)

    return item


@app.put("/tasks/{task_id}")
def update_task(task_id: str, task: dict):

    table.update_item(
        Key={
            "id": task_id
        },
        UpdateExpression="SET title = :title, done = :done",
        ExpressionAttributeValues={
            ":title": task["title"],
            ":done": task["done"]
        }
    )

    return {
        "message": "Tarea actualizada"
    }



@app.delete("/tasks/{task_id}")
def delete_task(task_id: str):

    table.delete_item(
        Key={
            "id": task_id
        }
    )

    return {
        "message": "Tarea eliminada"
    }


handler = Mangum(app)