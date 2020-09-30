const { openFilePromise } = require("./filelibs.js");
const {
  promiseCheckItemsAgainstPurchasedStock,
} = require("./reconcileStock.js");

const { cleanPriceData } = require("./cleanPriceData");

const fs = require("fs");
const { resolve } = require("path");

const renderBigData = async (req, res) => {
  try {
    const companies_data = await openFilePromise("./data/companies.json");

    const items_data = await openFilePromise("./data/items.json");
    let companies = JSON.parse(companies_data);
    let items_parsed = JSON.parse(items_data);

    let items = await promiseCheckItemsAgainstPurchasedStock(items_parsed);
    // TODO: Mae, here is where I can clean the Price for you, but it will
    // storeItems.forEach((item) => {
    //   total += item.quantity * parseFloat(item.price.slice(1)).toFixed(2);
    // });
    // in your cart, so it's commented out

    // items = cleanPriceData(items);

    res.status(200).json({ items, companies });
  } catch (e) {
    console.error(e.code);

    if (e.code === "ENOENT") {
      let return_error_object = {
        ...e,
        messgae: "couldn't find the json file",
      };
      res.status(404).json(return_error_object);
    } else {
      res.status(404).json(e);
    }
  }
};

const renderBigDataAlphabeticalItems = async (req, res) => {
  try {
    const companies_data = await openFilePromise("./data/companies.json");
    const items_data = await openFilePromise("./data/items.json");

    let companies = JSON.parse(companies_data);
    let items_parsed = JSON.parse(items_data);

    let items = await promiseCheckItemsAgainstPurchasedStock(items_parsed);
    items = cleanPriceData(items);

    let sorted_items = items.sort((a, b) => {
      a.name < b.name;
    });

    res.status(200).json({ companies, sorted_items });
  } catch (e) {
    console.error(e.code);

    if (e.code === "ENOENT") {
      let return_error_object = {
        ...e,
        messgae: "couldn't find the json file",
      };
      res.status(404).json(return_error_object);
    } else {
      res.status(404).json(e);
    }
  }
};

const renderBigDataByBodyTypeAlpha = async (req, res) => {
  try {
    const companies_data = await openFilePromise("./data/companies.json");
    const items_data = await openFilePromise("./data/items.json");

    let companies = JSON.parse(companies_data);
    let items_parsed = JSON.parse(items_data);

    let items = await promiseCheckItemsAgainstPurchasedStock(items_parsed);
    items = cleanPriceData(items);

    // get an array of all body types

    let body_types = [];

    items.forEach((item) => {
      if (body_types.includes(item.body_location) === false) {
        body_types.push(item.body_location);
      }
    });

    body_types.sort();

    // now that we have all our body types in a nice array, go through each and pull out all the items with that type of body_type, then add it an object keyed with that body_type, and push to a master collection

    let collected_by_body_type = [];
    body_types.forEach((body_type_item) => {
      let by_body_type_items = items.filter(
        (item) => item.body_location === body_type_item
      );
      let body_obj = { [body_type_item]: by_body_type_items };
      collected_by_body_type.push(body_obj);
    });


    res.status(200).json({ companies, collected_by_body_type });
  } catch (e) {
    console.error(e.code);

    if (e.code === "ENOENT") {
      let return_error_object = {
        ...e,
        messgae: "couldn't find the json file",
      };
      res.status(404).json(return_error_object);
    } else {
      res.status(404).json(e);
    }
  }
};

const renderBigDataCategoryAlpha = async (req, res) => {
  try {
    const companies_data = await openFilePromise("./data/companies.json");
    const items_data = await openFilePromise("./data/items.json");

    let companies = JSON.parse(companies_data);
    let items_parsed = JSON.parse(items_data);

    let items = await promiseCheckItemsAgainstPurchasedStock(items_parsed);
    items = cleanPriceData(items);

    // get an array of all body types

    let categories = [];

    items.forEach((item) => {
      if (categories.includes(item.category) === false) {
        categories.push(item.category);
      }
    });

    categories.sort();

    // now that we have all our body types in a nice array, go through each and pull out all the items with that type of body_type, then add it an object keyed with that body_type, and push to a master collection

    let collected_by_category = [];
    categories.forEach((category_type_item) => {
      let by_category_items = items.filter(
        (item) => item.category === category_type_item
      );
      let category_obj = { [category_type_item]: by_category_items };
      collected_by_category.push(category_obj);
    });


    res.status(200).json({ companies, collected_by_category });
  } catch (e) {
    console.error(e.code);

    if (e.code === "ENOENT") {
      let return_error_object = {
        ...e,
        messgae: "couldn't find the json file",
      };
      res.status(404).json(return_error_object);
    } else {
      res.status(404).json(e);
    }
  }
};

const baconEndPoint = (req, res) => res.status(200).json("🥓");

module.exports = {
  renderBigData,
  renderBigDataAlphabeticalItems,
  renderBigDataByBodyTypeAlpha,
  renderBigDataCategoryAlpha,
  baconEndPoint,
};
