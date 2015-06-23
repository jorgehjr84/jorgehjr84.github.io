### How to curl API info

So basically when you are using an API one of the things you can do is request data from that API. For example if you want to 
get info from NY Times, you have to put in a request for that data. To do this you use the curl command. You have to go to 
the site's whose API you want and find the URL for the information you are trying to get. So this is what the command looks like


```
curl http://api.nytimes.com/svc/news/v3/content/nyt/U.S./24.json?

```

This makes a request to the NY times for their data and request that the NY times sends the data back via a JSON file. The data 
comes back looking something like this


```
{
  "status": "OK",
  "copyright": "Copyright (c) 2015 The New York Times Company.  All Rights Reserved.",
  "num_results": 24,
  "results": [{
    "section": "U.S.",
    "subsection": "",
    "title": "Dallas Police Targeted in Shooting Outside Headquarters",
    "abstract": "Multiple gunmen opened fire on officers outside the Dallas Police headquarters early Saturday morning.",
    "url": "http:\/\/www.nytimes.com\/2015\/06\/13\/us\/dallas-police-shooting.html",
    "byline": "By MANNY FERNANDEZ and KATIE ROGERS",
    "thumbnail_standard": "http:\/\/static01.nyt.com\/images\/2015\/06\/13\/us\/DALLAS-POLICE-CAR-TIGHT\/DALLAS-POLICE-CAR-TIGHT-thumbStandard.jpg",
    "item_type": "Article",
    "source": "The New York Times",
    "updated_date": "2015-06-13T09:13:24-04:00",
    "created_date": "2015-06-13T07:23:07-04:00",
    "published_date": "2015-06-14T00:00:00-04:00",
    "material_type_facet": "News",
    "kicker": "",
    "subheadline": "",
    "des_facet": ["Police", "Social Media"],
    "org_facet": "",
    "per_facet": "",
    "geo_facet": ["Dallas (Tex)"],
    "related_urls": null,
    "multimedia": [{
      "url": "http:\/\/static01.nyt.com\/images\/2015\/06\/13\/us\/DALLAS-POLICE-CAR-TIGHT\/DALLAS-POLICE-CAR-TIGHT-thumbStandard.jpg",
      "format": "Standard Thumbnail",
      "height": 75,
      "width": 75,
      "type": "image",
      "subtype": "photo",
      "caption": "A Dallas Police Department squad car that was shot at on Saturday morning. No officers were injured.",
      "copyright": "Dallas Police Department"
    }
    ```
    
    At that point you can pick and choose what data you want to display.
