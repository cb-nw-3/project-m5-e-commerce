**Team exC**

Ashley Hynes

Przemek Piwek

Vitor Correia

Joseph Hiwatig



**Main Features**

<img src="https://media4.giphy.com/media/1nKF6YTrKwKyjhAIcu/giphy.gif" width="300px" >

- Landing page with category selection plus showcases products from the default category
- Filter through products
- View more to expand on the products available
- Slider
- Mobile responsive layout
- Modal for cart
- Product page with details, add to cart and Breadcrumb



**About the Backend**

GET http://localhost:4000/api/items/:category?skip={optional}

This endpoint will return an array of items based on the specified category
Query parameter skip is optional. When specified, it skips the number of items based on skip value. Must be a number.
If no item exists for the specified category (invalid category), it will return an empty array
[
  {
    name: string,
    price: string,
    body_location: string,
    category: string,
    _id: number,
    imgSrc: string,
    numInStock: number,
    company: {
      name: string,
      url: string,
      country: string,
      _id: number,
    },
  },
];

GET http://localhost:4000/api/item/:id

This item will return an item object specified by the id parameter
If no item matches the id, it will return a 404 not found
{
    name: string,
    price: string,
    body_location: string,
    category: string,
    _id: number,
    imgSrc: string,
    numInStock: number,
    company: {
      name: string,
      url: string,
      country: string,
      _id: number
    }
}

GET http://localhost:4000/api/search?keyword={#value}&skip={optional}

This endpoint will search the name of the items using the keyword query parameter
Query parameter skip is optional. When specified, it skips the number of items based on skip value. Must be a number.
The keyword query parameter is mandatory, if it is not provided, the server will respond with 400 Bad Request
returns an array of item object
[
  {
    name: string,
    price: string,
    body_location: string,
    category: string,
    _id: number,
    imgSrc: string,
    numInStock: number,
    company: {
      name: string,
      url: string,
      country: string,
      _id: number,
    },
  },
];

GET http://localhost:4000/api/filter

This endpoint filters the items based on multiple fields provided as query paramters
Valid query parameters:
'name': Will filter the items by the name property
'location': Will filter the items by the body_location property
'company': Will filter the items by the company name
'category': Will filter the items by the category
'price': Must be a number. Will filter the items based on the price.
'limit': Must be provided if price parameter is provided. Can only have 'min' or 'max' as a value. This will determine if the price search is greater than or less than
'skip': When specified, it skips the number of items based on skip value. Must be a number.
All query parameters is optional except for 'limit' when 'price' is provided.
Will return an array of items object or 400 bad request for invalid price value or invalid limit value
Sample request: http://localhost:4000/api/filter?name=tracker&location=wrist&company=sony&category=lifestyle&price=100&limit=min&skip=16
[
  {
    name: string,
    price: string,
    body_location: string,
    category: string,
    _id: number,
    imgSrc: string,
    numInStock: number,
    company: {
      name: string,
      url: string,
      country: string,
      _id: number,
    },
  },
];
