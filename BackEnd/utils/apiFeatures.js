//Implementing Search Feature
//query = everyThing after localhost:4000/keyword?samosa
//quryStr : queryStr: { keyword: 'product' }
//Then passing it to productController, in the Get All Product, for adding search bar

class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i", //Will also find name, no matter uppercase or lowerCase
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  fliter() {
    const queryCopy = { ...this.queryStr };

    //Removing some fields from category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    //Fliter for price and rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
