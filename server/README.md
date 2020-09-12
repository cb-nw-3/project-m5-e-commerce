# Backend

You should document your endpoints in this file.

# http://localhost:4000/api/items/:category

- This endpoint will return an array of items based on the specified category
- If no item exists for the specified category (invalid category), it will return an empty array

```js
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
```

# http://localhost:4000/api/item/:id

- This item will return an item object specified by the id parameter
- If no item matches the id, it will return a 404 not found

```js
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
```
