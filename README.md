## SuperMarketApp

#### This application was built using React.js

Documentation for the api: https://github.com/leodaiub/supermarketapp-api/blob/master/README.md

#### Some of the difficulties i had while developing the app:

#### Uploading an array of images to Amazon S3 bucket.

Uploading one image at a time was easy, but doing this with an array was the problem, the solution i have found was using the multer dependency and a for loop to append the data from the "req.files" object to my superMarketAdditionalImages array, and the content from the "req.body" to populate the other fields as well.

#### Changing the state to make the PUT request to update a single record.

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
But it did not work, cause it was excluding the rest of the object, so i used the rest operator to update the state of the object while mantaining the rest of the fields. 
````
handleChangeObject = e => {
  this.setState({  superMarketLocation:{
      ...this.state.superMarketLocation,
      [e.target.name]: e.target.value }});
}
````
Now it works!
