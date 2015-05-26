## Objects

In javascript we love using something called variables. A variable is a way to store information and being able to call back on 
information in a simplier way. For ex  I would do this.....


```
var myCity = " My Home town is Bronx,NY";
```

So if I wanted to see what my hometown was, all I would have to type is 
```
return = myCity; 
```
and it would print out all of the info.... " My Home town is Bronx,NY"


This is really cool, but what I had a lot of information about myself that I wanted to be able to call upon fairly easily. Here is
where objects come in. Think of an Object as a cup. It has multiple elements for lack of a better work. A cup has a shape, a color,
a size, etc.... So can objects. So an example of an object would be as follows...

```
    var jorge = {
    age: 31,
    hometown: "Bronx NY",
    Kids:1
    Married: "Yes"

  };
```

Now if we wanted to call on something we could do this....
```
console.log("Jorge is from the" + jorge.hometown);
```

This will return "Jorge is from the Bronx NY"


And thats objects!!!!


