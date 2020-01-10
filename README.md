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
## ZENSERP

#### Get Location Wisata

```http
GET zenserp/search/:nameLocation,
```
Digunakan untuk menampilkan lokasi wisata berdasarkan kota yang dicari

##### Request Params

| Key          | Tipe Data | Required | Keterangan                  |
| ------------ | --------- | -------- | --------------------------- |
| nameLocation | string    | true     | nama lokasi                 |

##### Response
```http
HTTP STATUS CODE: 200
```
```json
{
    "query": {
        "q": "bandung",
        "num": "5",
        "tbm": "isch",
        "search_engine": "google.com",
        "apikey": "9b45a870-32d9-11ea-9de6-510dab15ba65",
        "url": "https://google.com/search?q=bandung&num=5&tbm=isch&ijn=0&asearch=ichunk&async=_id%3Arg_s%2C_pms%3As%2C_fmt%3Apc&hl=en&gl=us&sourceid=chrome&ie=UTF-8"
    },
    "related_searches": [],
    "image_results": [
        {
            "position": 1,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJBcs-hGcvsSIesa6Ao9iI0oxb-TW_3LayXOWO-ARNQ5oTz9dSw&s",
            "sourceUrl": "https://en.unesco.org/creative-cities/sites/creative-cities/files/styles/creative_city_940_420/public/bandung_0.jpg?itok=c79HDPm6",
            "title": "Bandung | Creative Cities Network",
            "link": "https://en.unesco.org/creative-cities/bandung",
            "source": "en.unesco.org"
        },
        {
            "position": 2,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUguT87CfEx0nN8j3yH16Lfo4yq8b1-qw4gCsh6ZervxThnHnK_w&s",
            "sourceUrl": "https://www.willflyforfood.net/wp-content/uploads/2019/06/bandung-travel-guide.jpg",
            "title": "The First-Timer's Travel Guide to Bandung, Indonesia (2019 ...",
            "link": "https://www.willflyforfood.net/2019/07/02/the-first-timers-travel-guide-to-bandung-indonesia-2019/",
            "source": "willflyforfood.net"
        },
}
```
## Four Square

##### Get Informasi Kota

```http
GET foursquareAPI/:city
```
Digunakan untuk menampilkan informasi kota yang dicari

##### Request Params

| Key          | Tipe Data | Required | Keterangan                  |
| ------------ | --------- | -------- | --------------------------- |
| city         | string    | true     | informasi lokasi            |

##### Response
```http
HTTP STATUS CODE: 200
```
```json
city: {
        name: "Singapore, Singapore",
        lng: 103.85007,
        lat: 1.28967
       },
        venues: [
            {
                name: "Gardens by the Bay",
                location: {
                    address: "18 Marina Gardens Dr",
                    lng: 103.86262831966974,
                    lat: 1.2821689575817898
                },
                categories: [
                    "Garden"
                    ]
            },
            {
                name: "ATLAS Bar",
                location: {
                        address: "600 North Bridge Road",
                        lng: 103.85776805593774,
                        lat: 1.2999653649767815
                 },
                categories: [
                    "Cocktail Bar"
                    ]
            },
            {
                name: "Napoleon Food & Wine Bar",
                location: {
                    address: "206 Telok Ayer Street",
                    lng: 103.84733300574288,
                    lat: 1.2799249387439204
                },
                categories: [
                    "Wine Bar"
                    ]
            },
            {
                name: "National Gallery Singapore",
                location: {
                    address: "1 St. Andrew's Road",
                    lng: 103.85154786540198,
                    lat: 1.2907395913341984
                },
                categories: [
                    "Art Gallery"
                    ]
            },
            {
                name: "Genki Sushi",
                location: {
                    address: "391, B2-25/26",
                    lng: 103.8344398388811,
                    lat: 1.3035787489709292
                },
                categories: [
                    "Sushi Restaurant"
                    ]
            },
            {
                name: "Apple Orchard Road",
                location: {
                    address: "270 Orchard Road",
                    lng: 103.8363884,
                    lat: 1.3028881
                },
                categories: [
                    "Electronics Store"
                    ]
            },
            {
                name: "Singapore Botanic Gardens",
                location: {
                    address: "1 Cluny Rd.",
                    lng: 103.81518179337793,
                    lat: 1.3153818902702161
                },
                categories: [
                    "Botanical Garden"
                    ]
            },
            {
                name: "Books Kinokuniya 紀伊國屋書店 (Books Kinokuniya)",
                location: {
                    address: "#04-20/20B/20C/20E Ngee Ann City",
                    lng: 103.83434959173653,
                    lat: 1.3036033447055164
                },
                categories: [
                    "Bookstore"
                    ]
            },
            {
                name: "Marina Bay Sands",
                location: {
                    address: "10 Bayfront Avenue",
                    lng: 103.85912418365479,
                    lat: 1.2831902557086854
                },
                categories: [
                	"Resort"
                ]
            },
            {
                name: "The Ritz-Carlton, Millenia Singapore",
                location: {
                    address: "7 Raffles Avenue",
                    lng: 103.86009056812281,
                    lat: 1.2907544458539724
                },
                categories: [
                    "Hotel"
                ]
            },
            {
                name: "JW Marriott Hotel Singapore South Beach",
                location: {
                    address: "30 Beach Road, Access Via Nicoll Highway",
                    lng: 103.85579288005829,
                    lat: 1.2944687727723396
                },
                categories: [
                	"Hotel"
                ]
            },
            {
                name: "Cloud Forest",
                location: {
                    address: "Gardens By The Bay",
                    lng: 103.86542784692786,
                    lat: 1.2837978007836979
                },
                categories: [
                	"Botanical Garden"
                ]
            },
            {
                name: "Bakalaki",
                location: {
                    address: "3 Seng Poh Road",
                    lng: 103.834022,
                    lat: 1.285582
                },
                categories: [
                	"Greek Restaurant"
                ]
            },
            {
                name: "MacRitchie Nature Trail",
                location: {
                    address: "MacRitchie Reservoir Park",
                    lng: 103.83141058957372,
                    lat: 1.3473117419966827
                },
                categories: [
                	"Trail"
                ]
            },
            {
                name: "Transformers The Ride: The Ultimate 3D Battle",
                location: {
                    address: "Universal Studios Singapore",
                    lng: 103.8216062847745,
                    lat: 1.2543801160622412
                },
                categories: [
                	"Theme Park Ride / Attraction"
                ]
            },
            {
                name: "Supertree Grove",
                location: {
                    address: "Gardens By The Bay",
                    lng: 103.86413390426804,
                    lat: 1.282000108902525
                },
                categories: [
                	"Garden"
                ]
            },
            {
                name: "National Orchid Garden",
                location: {
                    address: "Singapore Botanic Gardens",
                    lng: 103.8150278357734,
                    lat: 1.311595912271847
                },
                categories: [
                	"Garden"
                ]
            },
            {
                name: "Marina Bay Waterfront Promenade",
                location: {
                    address: "Bayfront Ave",
                    lng: 103.85555642836434,
                    lat: 1.2811245137355043
                },
                categories: [
                	"Waterfront"
                ]
            },
            {
                name: "Bukit Timah Nature Reserve",
                location: {
                    address: "Hindhede Dr",
                    lng: 103.77659599237639,
                    lat: 1.3480327091863182
                },
                categories: [
                	"Nature Preserve"
                ]
            },
            {
                name: "Books Actually",
                location: {
                    address: "9 Yong Siak St",
                    lng: 103.83036702104305,
                    lat: 1.2825601879794775
                },
                categories: [
                	"Bookstore"
                ]
            },
            {
                name: "Jewel Changi Airport",
                location: {
                    address: "78 Airport Boulevard",
                    lng: 103.98978968138972,
                    lat: 1.3601193630734352
                },
                categories: [
                	"Shopping Mall"
                ]
            },
            {
                name: "Tanglin Gate | Singapore Botanic Gardens",
                location: {
                    address: "Cluny Rd.",
                    lng: 103.81861209869385,
                    lat: 1.3071308997488138
                },
                categories: [
                	"Park"
                ]
            },
            {
                name: "Battlestar Galactica: Human vs. Cylon",
                location: {
                    address: "Universal Studios Singapore",
                    lng: 103.82225949715504,
                    lat: 1.2537207764548557
                },
                categories: [
                	"Theme Park Ride / Attraction"
                ]
            },
            {
                name: "Singapore F1 Bay Grandstand",
                location: {
                    address: "Marina Bay Street Circuit",
                    lng: 103.85859690024587,
                    lat: 1.289449790374154
                },
                categories: [
               		 "Event Space"
                ]
            },
            {
                name: "Whiskey Library @ The Vagabond Club",
                location: {
                    address: "39 Syed Alwi Road",
                    lng: 103.85830879211426,
                    lat: 1.3069807351258018
                },
                categories: [
                	"Whisky Bar"
                ]
            },
            {
                name: "Blu Kouzina",
                location: {
                    address: "Blk 10 Dempsey Hill #01-21",
                    lng: 103.81033254743105,
                    lat: 1.3032620989241126
                },
                categories: [
                	"Greek Restaurant"
                ]
            },
            {
                name: "Singapore Zoo",
                location: {
                    address: "80 Mandai Lake Rd.",
                    lng: 103.79058454018585,
                    lat: 1.4048636377754984
                },
                categories: [
                	"Zoo"
                ]
            },
            {
                name: "East Coast Park Area D",
                location: {
                    address: "E Coast Park Service Rd",
                    lng: 103.92195264469737,
                    lat: 1.303296939293463
                },
                categories: [
                	"Beach"
                ]
            },
            {
                name: "East Coast Park",
                location: {
                    address: "Along East Coast Pkwy",
                    lng: 103.92633148688202,
                    lat: 1.3051130084930487
                },
                categories: [
                	"Beach"
                ]
            },
            {
                name: "Bay East (Gardens by the Bay)",
                location: {
                    address: "Tanjong Rhu Rd",
                    lng: 103.86895179748535,
                    lat: 1.2895830304297036
                },
                categories: [
                	"Park"
                ]
            }
        ]
}
```