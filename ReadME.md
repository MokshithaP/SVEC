### front-end Technologies



- html
- css
- javascript
- bootstrap framework
- angular framework
- ReactJS


### Backend Technologies


- Node.js
   - express.js
   - nodemoon
   - cors
   - dotenv
- PHP
- c#
- java
- Python



### dATABASES

- MongoDb
- Mysql
- SQlite
- Firebase
- Postgressql
- 

+ VCS
   - distributed vcs
     - Git,Mercurial
   -  Remote (central)VCS
      - github ,Bitbucket


### Git


- git init
- git add filename
- git add filename1 filename5 filename100
- git add . or git add --all
- git status
- Do git configurations(i.e,set user name and user email)
- committ data with committ message
- push into github


### HTML5 latest version

- Hyper Text Markup Language 
- three types of elements in html
- sematic elements
    - header
    - section
    - article
    - aside
    - footer
    - table
- Block Level Elements(occupy entire width of browser)
    - h1 to h6(range of heads)
    - p
   - div
   - all sematic elements
   - ( but not all block elements are sematic elements)
   - Text will start from newline
- Inline Elements
   - span
   - img
   - a
   - nav
   - form
   - input
   - textarea
   - legend
   - sup
   - sub
   - ul(unorder list)
   - ol(order list)

   ### Task

   - audio
   - video
   - canvas
   - progress
   - meter
   - datalist
   - select


   ### CSS

   + Cascading Style Sheets
   
   + three categories to apply css to html
      - Inline CSS
      - Internal css
      - External CSS

   + Syntax of css

   ...
   selector
   {
        css properties
   }
   .....

### selectors

+ simple selectors
      - universal selector(*)
      - by element name
      - grouping selector(we use , comma)
      - class selector
      - id selector
+ combinators
      - descendent selector(we use space b/w 2 selector)
      - child selector(we use >)
      - adjacent sibling selector(+)
      - general sibling selector(~)
+ pseudo class selector
+ Pseudo element selector
+ Attribute selector


### Box model

+ margin
+ border
+ padding
   - padding:10px(for all adj sides)
   - paddind:10px 30px(10 for top& btm;30 for left&right)
   - padding:10px 300px 50px(10px for top;300 for left/right;50 forbtm)
   - padding:10px 30px 4px 50px(10 for top;30 px for right;4px for btm;50px for left)
+ width
- 1rem=16px

### Responsive web design
### flex-box
- display
    - flex
    - properties of flex
       - flex wrap
       - justify content
       - flex direction
       - flex flow

+ display
   - none
   - inline
   - block
   - inline-block
+ position
   - static
   - relative
   - absolute
   - fixed
   - sticky
+ align content
+ align item
+ alignself

### media quiries

- Extra small devices(mobiles)
     - max-width:600px
- small devices(Large Phones)
    - min-width:600px
    - 768
- medium(Small laptops)
     - min-width:768px

- large(laptops /desktops)
      - min-width:992px
- Extra large devices()
      - min-width:1200px

...
@media only screen(min-width:320px) and (max-width:500px)
{
   CSS code
}
...

### Bootstrap4.6

- It is a CSS framework

### differences

- module (collection of functions and classes)
- packages (collection of modules)
- library(collection of packages)
- framework(collection of library)

+ module --> package --> library -->Framework


+ Types of modules
   - offline
   - online
      - CDN links
### Bootstrap classes

+ background-color--> bg
+ text-white
+ margin in bootstrap(m-*(0-5))
    - 0 --> 0 rem
    - 1 -->0.25rem(4px)
    - 2 --> 0.5rem(8 px)
    - 3 --> 1 rem(16 px)
    - 4 -->1.5rem(24 px)
    - 5 --> 3 rem(48 px)
+ m(margin all directions)
+ ml-5(margin left)
+ mt(margin top)
+ mb(margin bottom)
+ mr(margin right)
+ padding(padding-left -->pl-5)

+ colors(bootstrap)
    - primary
    - secondary
    - info
    - success
    - warning
    - danger
    - light
    - dark
    - white
+ we can use color classes for 
    - buttons (btn btn-primary)
    - text (text-white)
    - background (bg-secondary)
    - alerts (alert alert-primary)

### javascript

- In 1995 Brenden Eich --->'javascript'(ES-202)
- it is a text based programming language and
   we can use in client side and serverside (Node.js)for
   dynamic web
- javascript is loosely tupled and dynamic language
- ECMA-Script(collabrate)-->(ES-6)
    - let & constant
    - map()
    - arrow function
    - classes
    - spread operator
    - rest parameter ---> handle function parameters
      - syntax
        ...
          ...parameter
        ...
+ variables
     - var(we use var keyword to read variables)
     - let(we use let keyword to read variables)
     - const(we use const keyword to read variables)
     - redefine - we can redefine the value and also by "let" keyword too we can do this job
     - scope
        - function level --> var
        - block level --->let & constant
     - Redeclare -->var
      - typeof() fn used to know datatype
+ datatypes
    - number
    - Bigint(2^53-1)
    - String
    - Boolean
    - Undefined
    - null
    - Object
    - Array
   
+ hoisting means --> printing stmt before declaring

+ object

...
{
   name="bcx";
}
...
### Alerts

+ To generate notifications
   - alert
   - prompt(to take input from user)
   - confirm
+ console statements
  - `console.log()`
  - `console.info()`
  - `console.error()`
  - `console.warn()`
+ spread operator
      - swaping process
  ...

     ...VariableName
  ...
+ Destructuring of array


+ function
 - function with function name
 - syntax
 ...

 function demo(x,y){
    return x+y;
 }
 demo();
 ...
 - anonymous function
 ...
 let demo= function(x,y){
    return x+y
 }
 ...
 - Arrow function
 ...
 let demo=(x,y) => {
    return x*y
 }
 - for-in
    - to get index values
- for-of
    - to get elements in array
- forEach() (ES-5)
- map() (ES-6)

### DOM
- Document Object Model
- document
- history
- window
- navigator( can access without internet)

+ DOM methods
 - `getElementById()`
 -  `getElementByClassName()`
 - `innerText`
 - `append`
 - `appendChild`
 - `innerHTML`
 - `setAttribute()`
 - `classList`
 - `style`
 - `src`
 - `textContent`
 - `querySelector()`

#### JSON
+ JavaScript Object Notation
    - To Exchange information between application and server
    -  syntax(key be in string form)
    ...
    {
       "name":"Mokshitha"
       "salary":"5.LPA"
       "designation":"Software developer"
       "mobile":6578903421
    }
    ...

    + Ajax call or Promises (fetch API) or 
    
### ReactJS


##### ReactJS Feautres
+ It is a library
+ It follows component based architecture
     - Function Component
     - Class component
     - Pure Component
     - Higher Order Component
+ It provides Virtual DOM
+ it provides JSX(javascript and XML)
+ Unidirectional data flow
+ Single page applications

+ Project Environment setup
     - [DownloadvisualStudiocode]
     - [DownloadNodejs](https://nodejs.org/en/download/)
     - install nodejs and check versions of node and npm(node package manager)
           - `node -v`
           - `npm -v`
     - `webpack` and `babel`
     - `create-react-app`
        - `npm install create-react-app`
           - `create-react-app projectname`
     -  `npx create-react-app appname`
  + Index.html
  + Index.js
  + App.js
      - nav.js
      - boby.js
      - footer.js
+ Home.js
   - nav
   - body
   - footer
+ Login.js
+ Register
+ About
+ contact

- class component excute first after importing than functional component
   
##### Reference links
- [Flaticon](https://www.flaticon.com)
- https://htmlcolorcodes.com/(color codes)
- https://webaim.org/resources/contrastchecker/(color codes contrast checker)
- https://jsonlint.com/(to check errors in js)

  