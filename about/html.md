## HTML



### Tags

* Tags are hidden keywords within a web page that define how the browswer must format and display the content. Most tags have two
parts, an opening tag and a closing tag. For example

```
<p> </p>
```

The basic structure of this opening tag is angled brackets```< >``` with your keyword inside those angle brackets. Then whatever
your  content is goes after the opening tag and when you are done you would use a closing tag. The closing tag is very similar
to the opening tag but with a "/". So it looks like ```</>```.
When you enter the opening tag you are telling the document you are starting a command. When you enter the closing tag, you are telling
the document you are done with your command.

I used the "p" keyword in my example which stands for paragraph. So if I wanted to write a paragraph in 
HTML it would look like this....

```
<p>
    This is just an example of a paragraph I wanted to write in HTML. 
    That's all I wanted to say."
</p>
```

There are some "non-word" elements in tags. We already spoke about the angled brackets "< >", but there is also 
the " = " that is used. 
The " ! " also shows up in certain tags.
" ... " is another that I have seen.

Here are some common tags used....



```
<!doctype html>
* This doctype declaration is not an HTML tag, but it is just as important. It is an instruction to the web browser about what
version of the markup language the page is written in.
```
next is ...

```
<html class="no-js" lang="">
*  This tells the HTML document what class we need to use for the JS..... ( I need to look into this concept more)
```

### Lists

There are multiple types of list in HTML. The first one I want to talk about is....

``` 
    <ol> Ordered List
    This is basically a list of items, however that list is ordered and usually has a preceding number in front of it.
    
    <ul> Unordered List
    This basically represents an unordered list of items.
    
    <dl> Definition List
    These enclose a list of pairs of terms. This is commonly used for glossarys (Definition taken from MDN)
    
    There is also something known as a Nested List. It is a list within a list.
    
```


### Form Elements
```
    <Form>
    Forms are a key way for users to send data to the website. A common example of a form is a 'Username' field on a website. It     is a form where you can enter your username for that site.
    
    <fieldset> 
    Fieldsets are a way to groupo related items within a form.
    
    <legend> 
    The legend is a caption for its parent element which so happens to be a <fieldset>. An example of the two would be....
    
    <fieldset name="Fav Food">
        <legend>Favorite Foods</legend>
            <label for= "type">Chinese</label>
                <input type="text">
            <label for="times a week"> 10</label>
                <input type="text">
            <label for="2nd fav food"> Italian</label>
                <input type="text">
            <legend>Favorite Foods</legend>
    </fieldset>


```

###Button

```
<button>
The button element represents something you can 'click' on.
```

### Select and Option
```
<select>
The select tag represents a field where you can access multiple options.
<option>
The option tag is nested within the <select tag> and it represents the various fields you can select from in the <select> section. For example....

    <select gender = "select">
        <option value= "Male">value1</option>
        <option value= "Female">value2</option>
        <option value= "Wookie">value3</option>
    </select>
    
```

###Text Area

```
<textarea>
This element represents a multi-line plain text editing control. (From MDN, I need to find a good example)

```

###Tables and stuff
```
<table> 
The table tag in html is good for drawing tables or grids with data inside of them.

<caption>
This represents the title of the table.

<col><colgroup>
Col represents a column in the table and colgroup represents a group of columns.

<tbody>
This defines one or mor <tr>'s in a table. ( Not fully understanding when to use these yet)

<thead> 
thead defines a set of rows defining the head of columns.

<tfoot> 
This element is used to define the tables footer area.

<tr>
tr defines a row of cells

<td>
This element defines a cell of a table.

<th>
Defines a cell that is a header for a group of cells for a table.

```
