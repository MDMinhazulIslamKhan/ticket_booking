const allEvents = [
    {
        "id": "1",
        "title": "Concert in the Park",
        "location": "Central Park",
        "eventType": "Music",
        "date": "2023-06-15",
        "artist": "John Smith"
    },
    {
        "id": "2",
        "title": "Football Match",
        "location": "Stadium",
        "eventType": "Sports",
        "date": "2023-07-20",
        "athlete": "Michael Johnson"
    },
    {
        "id": "3",
        "title": "Basketball Game",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "4",
        "title": "Art Exhibition",
        "location": "Gallery XYZ",
        "eventType": "Art",
        "date": "2023-07-10",
        "artist": "Jane Doe"
    },
    {
        "id": "5",
        "title": "Comedy Night",
        "location": "Laugh Factory",
        "eventType": "Comedy",
        "date": "2023-06-30",
        "artist": "Mike Johnson"
    },
    {
        "id": "6",
        "title": "Basketball Game",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "7",
        "title": "Dance Performance",
        "location": "City Theater",
        "eventType": "Dance",
        "date": "2023-08-05",
        "artist": "Sarah Adams"
    },
    {
        "id": "8",
        "title": "Concert in the Park2",
        "location": "Central Park",
        "eventType": "Music",
        "date": "2023-06-15",
        "artist": "John Smith"
    },
    {
        "id": "9",
        "title": "Football Match2",
        "location": "Stadium",
        "eventType": "Sports",
        "date": "2023-07-20",
        "athlete": "Michael Johnson"
    },
    {
        "id": "10",
        "title": "Basketball Game2",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "11",
        "title": "Art Exhibition2",
        "location": "Gallery XYZ",
        "eventType": "Art",
        "date": "2023-07-10",
        "artist": "Jane Doe"
    },
    {
        "id": "12",
        "title": "Comedy Night2",
        "location": "Laugh Factory",
        "eventType": "Comedy",
        "date": "2023-06-30",
        "artist": "Mike Johnson"
    },
    {
        "id": "13",
        "title": "Basketball Game2",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "14",
        "title": "Dance Performance2",
        "location": "City Theater",
        "eventType": "Dance",
        "date": "2023-08-05",
        "artist": "Sarah Adams"
    },
    {
        "id": "15",
        "title": "Concert in the Park3",
        "location": "Central Park",
        "eventType": "Music",
        "date": "2023-06-15",
        "artist": "John Smith"
    },
    {
        "id": "16",
        "title": "Football Match3",
        "location": "Stadium",
        "eventType": "Sports",
        "date": "2023-07-20",
        "athlete": "Michael Johnson"
    },
    {
        "id": "17",
        "title": "Basketball Game3",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "18",
        "title": "Art Exhibition3",
        "location": "Gallery XYZ",
        "eventType": "Art",
        "date": "2023-07-10",
        "artist": "Jane Doe"
    },
    {
        "id": "19",
        "title": "Comedy Night3",
        "location": "Laugh Factory",
        "eventType": "Comedy",
        "date": "2023-06-30",
        "artist": "Mike Johnson"
    },
    {
        "id": "20",
        "title": "Basketball Game3",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "21",
        "title": "Dance Performance3",
        "location": "City Theater",
        "eventType": "Dance",
        "date": "2023-08-05",
        "artist": "Sarah Adams"
    },
    {
        "id": "1",
        "title": "Concert in the Park",
        "location": "Central Park",
        "eventType": "Music",
        "date": "2023-06-15",
        "artist": "John Smith"
    },
    {
        "id": "2",
        "title": "Football Match",
        "location": "Stadium",
        "eventType": "Sports",
        "date": "2023-07-20",
        "athlete": "Michael Johnson"
    },
    {
        "id": "3",
        "title": "Basketball Game",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "4",
        "title": "Art Exhibition",
        "location": "Gallery XYZ",
        "eventType": "Art",
        "date": "2023-07-10",
        "artist": "Jane Doe"
    },
    {
        "id": "5",
        "title": "Comedy Night",
        "location": "Laugh Factory",
        "eventType": "Comedy",
        "date": "2023-06-30",
        "artist": "Mike Johnson"
    },
    {
        "id": "6",
        "title": "Basketball Game",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "7",
        "title": "Dance Performance2",
        "location": "City Theater",
        "eventType": "Dance",
        "date": "2023-08-05",
        "artist": "Sarah Adams"
    },
    {
        "id": "8",
        "title": "Concert in the Park2",
        "location": "Central Park",
        "eventType": "Music",
        "date": "2023-06-15",
        "artist": "John Smith"
    },
    {
        "id": "9",
        "title": "Football Match2",
        "location": "Stadium",
        "eventType": "Sports",
        "date": "2023-07-20",
        "athlete": "Michael Johnson"
    },
    {
        "id": "10",
        "title": "Basketball Game2",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "11",
        "title": "Art Exhibition2",
        "location": "Gallery XYZ",
        "eventType": "Art",
        "date": "2023-07-10",
        "artist": "Jane Doe"
    },
    {
        "id": "12",
        "title": "Comedy Night2",
        "location": "Laugh Factory",
        "eventType": "Comedy",
        "date": "2023-06-30",
        "artist": "Mike Johnson"
    },
    {
        "id": "13",
        "title": "Basketball Game2",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "14",
        "title": "Dance Performance2",
        "location": "City Theater",
        "eventType": "Dance",
        "date": "2023-08-05",
        "artist": "Sarah Adams"
    },
    {
        "id": "15",
        "title": "Concert in the Park3",
        "location": "Central Park",
        "eventType": "Music",
        "date": "2023-06-15",
        "artist": "John Smith"
    },
    {
        "id": "16",
        "title": "Football Match3",
        "location": "Stadium",
        "eventType": "Sports",
        "date": "2023-07-20",
        "athlete": "Michael Johnson"
    },
    {
        "id": "17",
        "title": "Basketball Game3",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "18",
        "title": "Art Exhibition3",
        "location": "Gallery XYZ",
        "eventType": "Art",
        "date": "2023-07-10",
        "artist": "Jane Doe"
    },
    {
        "id": "19",
        "title": "Comedy Night3",
        "location": "Laugh Factory",
        "eventType": "Comedy",
        "date": "2023-06-30",
        "artist": "Mike Johnson"
    },
    {
        "id": "20",
        "title": "Basketball Game3",
        "location": "Arena",
        "eventType": "Sports",
        "date": "2023-08-10",
        "athlete": "LeBron James"
    },
    {
        "id": "21",
        "title": "Dance Performance3",
        "location": "City Theater",
        "eventType": "Dance",
        "date": "2023-08-05",
        "artist": "Sarah Adams"
    },

]


const allEventType = ['Sports', 'Music', 'Art', 'Comedy', 'Dance']
const userInfo = {
    email: "abc@def.com",
    password: "12345"
}

export default { allEvents, userInfo, allEventType };