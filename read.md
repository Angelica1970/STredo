API Documentation: https://strangers-things.herokuapp.com/api/
Rubric
Student must write functions that make the following requests to the API.

Your functions should be written in an index.js file. Store your token in a global variable called token so that it can be used for all requests that require a token.

Your asyncronous functions should not use any callback chaining, but should use await and try/catch instead.

Auth
 Register a new user for an account
 Login the new user and store the token in a global variable
Posts
 Fetch all posts and console log the posts array from the response
 Create a new post, and console log the newly created post from the server response. The request body should include the following properties, and the values can be hard-coded:
post { title, description, price, location, willDeliver}
 Edit the post you just created. You can modify any one or all of the properties. HINT: You might want to store the post ID in a variable after creating it.
 Delete the post you just created.
Messages
 Create a new message on a post. When you get to this part, ask your mentors for a postID to use. The request body should include the following properties, and the values can be hard-coded:
message: { content }
 Fetch the current logged in user, and console log all the 
 messages.