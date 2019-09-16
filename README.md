## SuperMarketApp
![alt text](https://imgur.com/a/pKnfiqm)
#### This application was built using React.js
https://supermarketapp.leonardodaiub.com

Documentation for the api: https://github.com/leodaiub/supermarketapp-api/blob/master/README.md

## Some of the difficulties i had while developing the app:

## Uploading an array of images to Amazon S3 bucket.

Uploading one image at a time was easy, but doing this with an array was the problem, the solution i have found was using the multer dependency and a for loop to append the data from the "req.files" object to my files array and i used the .shift() array method to remove the first object and pass it to the superMarketMainImage and the rest of the objects to superMarketAdditionalImages and the content from the "req.body" to populate the other fields as well.

````
async store(req, res) {

  const { originalname: name, size, key, location: url = "" } = req.files;

  const { superMarketName, 
          superMarketPhone, 
          superMarketDescription, 
          superMarketLocation,                 
          } = req.body;

  const files = [];

  for ( let i = 0; req.files.length > i; i++){
      files.push(req.files[i]);
  }

  const superMarketMainImage = files.shift();
  const superMarketAdditionalImages = files;

  const market = await Market.create({
      superMarketName,
      superMarketPhone,
      superMarketDescription,
      superMarketLocation: JSON.parse(superMarketLocation),
      superMarketMainImage,
      superMarketAdditionalImages
  });

  return res.json(market);

},
````

## Changing the state to make the PUT request to update a single record.

The problem here was that using the usual handleChange() function was creating another fields on my "this.state" instead of updating the nested fields on the superMarketLocation object. 
````
handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
}
````

Then i have found a solution, to update the state inside my Object like:
````
handleChangeObject = e => {
  this.setState({  superMarketLocation:{
      [e.target.name]: e.target.value }});
}
````
But it did not work, cause it was excluding the rest of the object, so i used the spread operator to update the state of the object while mantaining the rest of the fields. 
````
handleChangeObject = e => {
  this.setState({  superMarketLocation:{
      ...this.state.superMarketLocation,
      [e.target.name]: e.target.value }});
}
````
Now it works!
