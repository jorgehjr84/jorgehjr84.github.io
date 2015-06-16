### Writing a script for Browser Sync

So over the course of this program we have used browser sync for every project. We use it to create a local server and check our
progress as we go. Originally we would have to type this long command in terminal to get browser sync up and running.


```
  Browser sync --start --server
```
or

```
Browser sync --start --files="index.html, js/*.js, css/*.css"
```

But now we have learned how to put this script in our package.json file.

for example

```
"scripts": {
    "start": "browser-sync start --server --files='index.html, css/,js/*.js'",
    "test": "browser-sync start --server --files='js/*.js,test/index.html,test/spec/**/*.js' --startPath test/index.html"
  },
  
```

Once we have this in our package.json file, now all we have to type on the command line is

```
npm start
```
This runs browser-sync start --server --files='index.html, css/,js/*.js'"

or

``` 
npm test
```
And this runs browser-sync start --server --files='js/*.js,test/index.html,test/spec/**/*.js' --startPath test/index.html"
