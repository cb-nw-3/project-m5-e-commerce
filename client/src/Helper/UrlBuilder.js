export const BuildFiltertUrl = (filters, category) => {
  let requestUrl = "http://localhost:4000/api/filter?";
  const parameters = [];
  if (filters.name && filters.name !== "") {
    parameters.push("name=" + filters.name);
  }

  if (filters.location) {
    parameters.push("location=" + filters.location);
  }

  if (filters.company) {
    parameters.push("company=" + filters.company);
  }

  parameters.push("category=" + category);
  parameters.push("price=" + filters.price);
  parameters.push("limit=" + filters.limit);

  for (let i = 0; i < parameters.length; i++) {
    if (i === 0) requestUrl += parameters[i];
    else requestUrl += "&" + parameters[i];
  }

  return requestUrl;
};
