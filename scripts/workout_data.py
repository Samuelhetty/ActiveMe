import sys
sys.path.append('\Users\judith\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.12qbz5n2kfra8p0\LocalCache\local-packages\Python312\site-packages')
                
import requests


RAPID_API_KEY=""
RAPID_API_URL=""


headers = {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'host.com',
}

workout_data = []

try:
    response = requests.get(RAPID_API_URL, headers=headers)
    if response.status_code == 200:
        workout_data = response.json()
    else:
        print("Failed to Fetch Workout data. Status code:", response.status_code)

except requests.exceptions.RequestException as e:
    print("Error connecting to the API:", e)
print(workout_data)
