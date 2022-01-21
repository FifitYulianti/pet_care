# API Pet Care Documentation

## Login & Register
---

---
### LOGIN
---

* URL

    /login

* Method :

    POST

* Header

    access_token : 'string token'

* DATA PARAMS :
    ```
    email       : req.body.email
    password    : req.body.password
    ```

* Success
    * Code : 200 OK
    * Content :
    ```
        {
            "success": true,
            "message": "login berhasil",
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6Imx1cXkiLCJpYXQiOjE2NDI2Mzg0MjB9.Iop5tldVmNXM7b917Y42LVjJ8t5obQfX1g1P3zaTAq0",
            "email": "uqy@gmail.com"
        }
    ```
* Error Response :
    * Code : 401 Unauthorize
    * Content :
    ```
        {
             "success": false,
             "error": "Invalid username or email or password!"
        }
    ```
     * Code : 500
     * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```
---
### REGISTRASI
---


* URL

    /register

* Method :

    POST

* Success
    * Code : 201 Created
    * Content :
    ```
        {
            "success": true,
            "message": "Register Success"
        }
    ```
* Error Response :
    * Code : 400 Bad Request
    * Content :
    ```
        {
            "success": false,
            "error": [
                "User.name cannot be null",
                "User.email cannot be null",
                "User.password cannot be null"
            ]
        }
    ```
    * Code : 400 Bad Request
    * Content :
    ```
        {
            "success": false,
            "error": [
                "email must be unique"
            ]
        }
    ```
     * Code : 400 Bad Request
    * Content :
    ```
        {
            "success": false,
            "error": [
                "Format Email Tidak Valid",
                "Email Harus Diisi",
                "Password Harus Diisi",
                "Panjang minimal password 5 karakter",
                "Name harus diisi"
            ]
        }
    ```
     * Code : 500
     * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```

---
## CATEGORY
---

---
### GET DATA CATEGORY
---
* URL

    /categories

* Method :

    GET

* Header

    access_token : 'string token'

* Success
    * Code : 200
    * Content :
    ```
        {
            "categories": [
                {
                    "id": 2,
                    "name": "Grooming Kutu",
                    "description": "Grooming bersih dengan shampo yang khusus untuk kutu serta obat kutu",
                    "createdAt": "2022-01-18T13:17:30.256Z",
                    "updatedAt": "2022-01-18T13:17:30.256Z"
                },
                {
                    "id": 3,
                    "name": "Grooming Jamur",
                    "description": "Grooming bersih dengan shampo yang khusus untuk jamur serta obat jamur",
                    "createdAt": "2022-01-18T13:17:30.256Z",
                    "updatedAt": "2022-01-18T13:17:30.256Z"
                },
                {
                    "id": 4,
                    "name": "Grooming Complete",
                    "description": "Kombinasi dari grooming kutu dan jamur untuk hasil yang lebh maksimal",
                    "createdAt": "2022-01-18T13:17:30.256Z",
                    "updatedAt": "2022-01-18T13:17:30.256Z"
                },
                {
                    "id": 1,
                    "name": "Grooming Standart",
                    "description": "Grooming bersih dengan shampo Khusus yang harum dan berkualitas",
                    "createdAt": "2022-01-18T13:17:30.256Z",
                    "updatedAt": "2022-01-18T13:17:30.256Z"
                }
            ]
        }
    ```
* Error Response :
    * Code : 500
    * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```
---
### GET ONE DATA CATEGORY
---
* URL

    /categories/:id

* Method:

    GET

* URL Params

    /:id

    Required:

        ```
        id = [integer]
        ```

* Success
    * Code : 200 OK
    * Content :
    ```
        {
            "category": {
                "id": 1,
                "name": "Grooming Standart",
                "description": "Grooming bersih dengan shampo Khusus yang harum dan berkualitas",
                "createdAt": "2022-01-18T13:17:30.256Z",
                "updatedAt": "2022-01-18T13:17:30.256Z"
            }
        }
    ```
* Error Response :
    * Code : 404 Not Found
    * Content :
    ```
        {
            "message": "Data Category dengan id ${id} tidak ditemukan"
        }
    ```
     * Code : 500
     * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```

---
### GET DATA BOOKING
---
* URL

    /bookings

* Method :

    GET

* Header

    access_token : 'string token'

* Success
    * Code : 200
    * Content :
    ```
        {
            "bookings": [
                {
                    "id": 2,
                    "petName": "Muezza",
                    "schedule": "2022-01-27T16:00:00.000Z",
                    "IdCategory": 1,
                    "IdUser": 4,
                    "harga": 75000,
                    "imgUrl": "https://ik.imagekit.io/3iasie8twbl/2_hVYNPk2Ii.jpg",
                    "createdAt": "2022-01-20T00:29:28.922Z",
                    "updatedAt": "2022-01-20T00:29:28.922Z",
                    "User": {
                        "id": 4,
                        "email": "uqy@gmail.com",
                        "password": "$2a$10$lAtb3mUj6w3m.l8Yz9peIOPEud2VuXSNBts1RR4mePhGvZt2TkisS",
                        "name": "luqy",
                        "address": "Lombok Barat",
                        "noHp": "087747402499",
                        "createdAt": "2022-01-19T01:52:02.575Z",
                        "updatedAt": "2022-01-19T01:52:02.575Z"
                    },
                    "Category": {
                        "id": 1,
                        "name": "Grooming Standart",
                        "description": "Grooming bersih dengan shampo Khusus yang harum dan berkualitas",
                        "createdAt": "2022-01-18T13:17:30.256Z",
                        "updatedAt": "2022-01-18T13:17:30.256Z"
                    }
                }
            ]
        }
    ```
* Error Response :
    * Code : 404
    * Content :
    ```
        {
            "success": false,
            "error": "Invalid data!"
        }
    ```
    * Code : 500
    * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```

---
### GET ONE DATA Booking
---
* URL

    /bookings/:id

* Method:

    GET

* URL Params

    /:id

    Required:

        ```
        id = [integer]
        ```

* Success
    * Code : 200 OK
    * Content :
    ```
        {
            "booking": {
                "id": 2,
                "petName": "Muezza",
                "schedule": "2022-01-27T16:00:00.000Z",
                "IdCategory": 1,
                "IdUser": 4,
                "harga": 75000,
                "imgUrl": "https://ik.imagekit.io/3iasie8twbl/2_hVYNPk2Ii.jpg",
                "createdAt": "2022-01-20T00:29:28.922Z",
                "updatedAt": "2022-01-20T00:29:28.922Z",
                "User": {
                    "id": 4,
                    "email": "uqy@gmail.com",
                    "password": "$2a$10$lAtb3mUj6w3m.l8Yz9peIOPEud2VuXSNBts1RR4mePhGvZt2TkisS",
                    "name": "luqy",
                    "address": "Lombok Barat",
                    "noHp": "087747402499",
                    "createdAt": "2022-01-19T01:52:02.575Z",
                    "updatedAt": "2022-01-19T01:52:02.575Z"
                },
                "Category": {
                    "id": 1,
                    "name": "Grooming Standart",
                    "description": "Grooming bersih dengan shampo Khusus yang harum dan berkualitas",
                    "createdAt": "2022-01-18T13:17:30.256Z",
                    "updatedAt": "2022-01-18T13:17:30.256Z"
                }
            }
        }
    ```
* Error Response :
    * Code : 404 Not Found
    * Content :
    ```
        {
            "message": "Data Booking dengan id ${id} tidak ditemukan"
        }
    ```
     * Code : 500
     * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```
---
### ADD BOOKING
---


* URL

    /bookings/:idCategory

* URL Params

    /:idCategory

    Required:

        ```
        idCategory = [integer]
        ```
* Method :

    POST

* Header

    access_token : 'string token'

* Success
    * Code : 201
    * Content :
    ```
        {
            "booking": {
            "harga": 75000,
            "id": 6,
            "petName": "Cio",
            "schedule": "2022-01-28T13:30:58.073Z",
            "IdUser": 4,
            "IdCategory": 1,
            "imgUrl": "https://ik.imagekit.io/3iasie8twbl/2_8JGBEOUZe.jpg",
            "updatedAt": "2022-01-20T22:45:54.597Z",
            "createdAt": "2022-01-20T22:45:54.597Z"
    }
        }
    ```
* Error Response :
    * Code : 400 Bad Request
    * Content :
    ```
        {
           "success": false,
            "error": [
                "Booking.petName cannot be null",
                "Booking.schedule cannot be null"
            ]
        }
    ```
    * Code : 400 Bad Request
    * Content :
    ```
        {
           "success": false,
            "error": [
                "Pet Name Harus Diisi",
                "Schedule Grooming Harus Diisi"
            ]
        }
    ```
    * Code : 500
    * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```
---
### DELETE BOOKING
---


* URL

    /bookings/:id

* Method:

    DELETE

* Header

    access_token : 'string token'

* URL Params

    /:id

    Required:

        ```
        id = [integer]
        ```

* Success
    * Code : 200 OK
    * Content :
    ```
        {
            "message": "success delete data"
        }
    ```
* Error Response :
    * Code : 404 Not Found
    * Content :
    ```
        {
            "message":  `data with ${id} not found`
        }
    ```
     * Code : 500
     * Content :
    ```
        {
            "success": false,
            "error": "Internal Server Error"
        }
    ```

---
# API 
---

```
PSPDF KIT = https://pspdfkit.com/api/pdf-generator-api/
```
```
Nodemailer = https://nodemailer.com/about/
```
```
ImageKit = https://www.imagekit.io/official/website

```