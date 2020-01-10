# server

# LOYAL-TRAVEL API Documentation

Dokumentasi RESTFUL API travel.

## BASE URL

```http
http://localhost:3000/
```

## List Endpoint

## Weather

####  Get Weather City

```http
GET /weather/:city
```
Digunakan untuk mendampatkan daftar-daftar cuaca berdasarkan kota yang dicari

##### Request Params

| Key      | Tipe Data | Required | Keterangan                  |
| -------- | --------- | -------- | --------------------------- |
| city     | string    | true     | nama kota                   |

##### Response
```http
HTTP STATUS CODE: 200
```
```json
{
    {
    "responseData": {
        "cityKey": "208971",
        "timeZone": {
            "name": "Asia/Jakarta",
            "GMT": 7
        },
        "area": "Jakarta, Jakarta",
        "region": "Indonesia",
        "weatherInfo": {
            "headline": "Rain and a thunderstorm from Friday morning to 										 Friday evening can lead to flooding",
            "category": "thunderstorm",
            "forecast": [
                {
                    "date": "Friday",
                    "temperature": {
                        "min": "76 F",
                        "max": "82 F"
                    },
                    "day": {
                        "type": "Rain",
                        "intensity": "Heavy"
                    },
                    "night": {
                        "type": "Rain",
                        "intensity": "Heavy"
                    }
                },
                {
                    "date": "Saturday",
                    "temperature": {
                        "min": "76 F",
                        "max": "86 F"
                    },
                    "day": {
                        "type": "Rain",
                        "intensity": "Moderate"
                    },
                    "night": {
                        "type": "Rain",
                        "intensity": "Light"
                    }
                },
                {
                    "date": "Sunday",
                    "temperature": {
                        "min": "77 F",
                        "max": "88 F"
                    },
                    "day": {
                        "type": "Rain",
                        "intensity": "Light"
                    },
                    "night": {}
                },
                {
                    "date": "Monday",
                    "temperature": {
                        "min": "77 F",
                        "max": "87 F"
                    },
                    "day": {},
                    "night": {}
                },
                {
                    "date": "Tuesday",
                    "temperature": {
                        "min": "76 F",
                        "max": "85 F"
                    },
                    "day": {
                        "type": "Rain",
                        "intensity": "Light"
                    },
                    "night": {
                        "type": "Rain",
                        "intensity": "Light"
                    }
                }
            ]
        }
    }
}
}
```