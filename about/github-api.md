# How does the API handle authentication?
- Do I need to authenticate?
  For certain requests you need to authenticate

- What can I do with an unauthenticated request?
 I don't know yet.....

- How can I authenticate my request? (3 Ways)
  There are three ways to that you can authenticate through Github:
  Basic authentication: This is a way for a user agent to provide a user name and password.
  OAuth2 Token: Look up what exactly OAuth2 Token is as far as authentication goes.
  OAuth2 Key/Secret: Look up what exactly OAuth2 Token is as far as authentication goes.

# How do I ask the API for...
(I Think you retrieve this info through the repos.json file we downloaded. I am not sure how it is fully done though.)
- The profile information for a specific user?
- The repository listing for a specific user?
- The recent, public activity for a specific user?

# Is there a limit to the number of requests I can make?
Yes the limit is 5,000 request per hour. (For unauthenticated requests the limit is 60 per hour)

- Is there a way of extending that limit?
 If you want to raise your unauthenticated requests limit you can pass your app's client ID and secret as part of a query string to raise the limit. If you are using basic authentication or OAuth, you can raise the limit by caching API responses.

- What happens when I hit the limit?
- If you hit the limit you receive a '403 Forbidden' response.

# What if there is a lot of data returned?
- How can I ask for a more (or less) data from a request?
- How do I know that there is more data available?
