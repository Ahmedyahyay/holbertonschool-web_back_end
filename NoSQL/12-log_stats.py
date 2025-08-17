from pymongo import MongoClient


def analyze_nginx_logs():
    """
    Analyzes Nginx logs stored in MongoDB and prints statistics about HTTP.
    """
    # Connect to MongoDB
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    # Get total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Print header for methods
    print("Methods:")

    # Define HTTP methods in required order
    http_methods = [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ]

    # Count occurrences of each method
    for method in http_methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count GET requests to /status
    status_checks = collection.count_documents(
        {"method": "GET",
         "path": "/status"}
    )
    print(f"{status_checks} status check")


if __name__ == "__main__":
    analyze_nginx_logs()
