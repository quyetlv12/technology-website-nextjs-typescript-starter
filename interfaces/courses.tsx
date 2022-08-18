export interface CourseProps {
    "_id": String,
    "name": String,
    "price": String,
    "startDate": String,
    "content": String,
    "avatar": {
        "_id": String,
        "url": String,
    },
    "category": {
        "_id": String,
        "name": String,
        "slug": String,
        "type": String,
        "createdAt": String,
    },
}