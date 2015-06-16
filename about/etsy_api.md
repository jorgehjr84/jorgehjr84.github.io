* [ ] **Reading APIs: Etsy**
  * [ ] How do I make API requests?
  * You can make request with the basic Etsy API url using the curl command or postman. 
    * [ ] What is the base URL?
    * https://openapi.etsy.com/v3/
    * [ ] Are there any headers or query parameters required?
    * HTTPS is required
    * [ ] What kind of response should I expect?
    * Supposedly a lightweight JSON formatted files.
  * [ ] How does the API handle authentication?
  * The Etsy API uses OAuth
    * [ ] Do I need to authenticate?
    *Every request is going to require an API key. Authenticated means that a user has logged in.
    * [ ] What can I do with an unauthenticated request?
    * 
    * [ ] How can I authenticate my request?
    * Via an application key
  * [ ] How do I ask the API for...
    * [ ] A list of products belonging to a specific category or collection?
    * I believe you can do this with a certain tag in the URL
    * [ ] Details about a specific product? What details are provided?
    * [ ] The main and additional images for a product?
  * [ ] Is there a limit to the number of requests I can make?
  * Using public authentication you are limited to 10,000 request per 24hrs with a limit of 10 per per second.
    * [ ] Is there a way of extending that limit?
    * Contact  developer@etsy.com 
    * [ ] What happens when I hit the limit?
    * You have to wait at most for 2hrs to make another request
  * [ ] What if there is a _lot_ of data returned?
  * Default data returned is 25 per call with a max of 100 per call.
    * [ ] How can I ask for more (or less) data from a request?
    * In the url you can set the offset to see the number of data results you want to see within the limits listed above. It looks like this.
 ```
 https://openapi.etsy.com/v2/listings/active?limit=50&offset=50
 ```
    * [ ] How do I know that there is more data available?
There is a count field that will tell you how many results are available.
