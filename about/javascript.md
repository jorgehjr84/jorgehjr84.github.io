## JavaScript Basics

### Literal Types

    Null - This basically means no object value is present.
    Boolen - A boolen is data that can only be "True" or "False"
    Number - Number is a numeric data type.
    String - A string is characters used to represent text.


###Special Constants

    Infinity - This is the numeric value that represents infinity.
    Nan - this is numeric data which is undefined or a value that cannot be represented.
    Undefined - A variable which has not been assigned a value.

###Basic Operators

    `+` This is the addition operator for adding numeric values
    `-`This is the subtraction operator for subtraction numeric values.
    `/` This is the division operator used to divide numeric values.
    `*` This multiplies two values.
    `()` This is parenthesis and is computed first due to the order of operations.
    
    
    
###Comparison Operators

    '===' This is the equality operator. It also has an 'EVIL Twin' in ==. The difference between the two is that '==='  does the same as '==' except no type conversion is done.
    ex - "abc" == new String("abc")    // true
         "abc" === new String("abc")   // false
         Best practice is to use '==='
    <= - Is less than or equal to comparision.

###More JavaScript!! :grimacing:
```
variables - A variable is a named location where you can store value. That way you don't always have to type long lines of code.+ ex. var myName = Jorge; 
Functions -  A function is a procedure that calculates value or performs a task.
```    

```
Loops - This is an easy way to keep repeating something. Instead of typing the same code over and over, you can just put it in a loop.
For Loop - This is a loop that keeps repeating until a value is False.
While Loop - This is a cleaner way of writing a loop. Below is an example of a for loop and a while loop
- for (var i; i < 10; i++);
- while ( i < 10)
```

```   
if Else Statements - This lets you perform a task IF the statement is TRUE, if the statement is not true (else) perform task B.
    An example of this would be....
    if (sunny){
        awesome
    } else {
         boo
    }
```    

```
Arrays - An array is an ordered collection of data. 
For example var myFriends [John, Joseph, Paul];
Now to call out Joseph I would type
text(myFriends[1]);
```    

```
Objects - An object is a standalone entity, with traits or properties so to speak.
For example I can type
var myHouse = newObject();
myHouse.color = Green;
myHouse.size = 1900';
myHouse.bdrs = 4;
    
In the JavaScript guide it gives the anaology of a cup to objects. A cup can have a color, shape, size, etc. So can Objects.

```     
     
     
     
     
###Calling Up A Function

```
var myInfo = function(){
        var myName = Jorge
        var myAge = 30
        var myQuality = Awesomeness
    };
    myInfo();
```



###More Javascript again

 ```
'//' - grays out your text. This becomes really useful if you want to leave notes to give a little detail about your code.

'.length' - calculates the length of a string and puts it into a numeric value.

'console.log' - This command outputs a message to the web console.

'Integers' - In JavaScript integers are whole numbers.

'Floating Point Literals' - Numbers with a decimal point.

'Break Statement' - Use a break statement to terminate a loop. 
Ex. for(i=0;i < a.length;i++){
        if(a[i]== theValue){
            break;
        }
    }
    
'Return Statement' - The return statement specifies the value returned from a function.

'Nested Functions' - You can call a function from within a function. The nested function(inner) is private to its (outer) fucntion. ( I don't fully understand this yet.)
```    
    
    
    
###Arrays Yay!! :smile:

```

'Arrays' - Arrays are basically a way to make a list in Javascript and call upon certain portions of that list as you need it.
    For example
    var fruits = ['Bannana', 'Apple', 'Oranges'];
    

    Now if I want to call 'Apples' I would type
     fruits[1];
     
```
     
```   
    There is another function we can use in arrays called .lentgh. This tells us how long our array is. So if we take the example above.
    fruit.length
    What would be returned is [2]

    
    
There are some other commands we can use with Arrays. For example Array.push and Array.pop

     Array.push - attaches a some on the end of your existing array. 
     Array.pop - Removes something from your array and places it on the outside.
```

``` 
 A Block Statement{ } - A block statement is used to group statements from zero or more. They are used for all kinds of functions, including arrays and loops.
 An example of this would be 
            function listTask(){
              }
              
