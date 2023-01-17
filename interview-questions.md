# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer:

Super relates to classes in Ruby. When a subclass is created in Ruby, super will allow parent variables to be available to the child that called super. This allows for much more felxibility when creating classes. With super, a parent class that contains common variables which can be expected to be used for most child objects can hold those common variables while more specific variables only pertinent to child classes can be written with only their own specific variables. Once called by the child class, super will make the more common parent class variables available to the child.

Researched answer:

I was halfway correct with my first answer. Super does relate with passing aspects of a parent class to children, but it passes methods, not variables. Creating a child from a parent in general will deal with passing variables, but super only deal with methods. 

Super allows Ruby parent classes to pass their methods to child classes. When a child class calls for super, methods created for and residing in a parent class will be accessible to the child class. 

2. What is a gem?

Your answer:

Gems are small, purpose-built collections of code that accomplish certain tasks in a larger Ruby program. Gems are publicly accessible and can be downloaded and loaded into Ruby projects if required. 

Researched answer:

Gems are Ruby small software packages. Gems can add functionality to Ruby applications. They can save time and prevent mistakes by providing vetted, tested functionaility in a reusable, version-controlled package using the RubyGem management system.  

3. What is a relational database? Are there other kinds of databases?

Your answer:

Relational databases are databases consisting of multiple tables that often have some sort of relation between the various tables. Relational databases extend the funcitonality of a databse far beyond a single table. With a relational databse, all related data can occupy its own table, while the keys of other tables allow links between other tables. This way, data in compartmentalized in a way that makes it much more scalable and easy to understand. There are other kinds of databases but I am not familiar with them.

Researched answer:

I would keep my original answer and add that Structured Query Language(SQL) allows for a very robust way of searching and displaying data in a relational database.

There are two other types of databses: the object database and the object-relational database. Object databases treat all data as objects. This allows database managers to search for and display data by using similar techniques to declarative programming. Like SQL, Object Query Languageg(OQL) allows someone to create queries and manipulate data similarly to how they would write a function in an object oriented programming language. 

The object-relational databse is a hybrid of the two former database types and includes aspects of both.


4. What are primary keys? Why are they important?

Your answer:

Primary keys are unique identifiers in a relational database that correspond with a single row of a single table. This means that the row and that data inside of it can be uniquely identified and referenced anywhere else in the database. Even if the same key number is used on other tables, the combination of some data's table and primary key means that it is wholly unique. When data needs to be referenced or connected to another table in the database, the data's primary key becomes the foreign key in the requesting table. Once connected, the foreign key's associated data is available to the requesting table. This primary key allows for the combining of all sorts of data across the entirety of a databse.

Researched answer:

I would keep my original answer.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

While Create, Read, Update, Delete(CRUD) is the general standard for how computer storage works, the HyperText Transfeer Protocol(HTTP) has equivalent functions called HTTP verbs when performing actions through the Internet. Each CRUD function has a similar HTTP verb.

The equivalent to Create in HTTP is POST.
The equivalent to Read is GET.
The equivalent to Delete is DELETE.

I would need to consult a reference for the remaining equivalent actions.

Researched answer:

The above answer with the addition of:

The equivalent to Update and replace is PUT.
The equivalent to Update and modify is PATCH.

Because HTTP involves both a request and a response, unlike a simple standalone storage action of traditional CRUD, each HTTP action has status codes that give the server or client information about the status of each action, usually whether the action was successfull or not.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:

REST stands for Representational State Transfer. RESTful routes aim to standardize how HTTP verbs and their actions translate into CRUD actions on a website that requires data state changes. Using RESTful routing makes it easier to understand the interaction with a server when an HTTP request is made by a client. To qualify as a RESTful route, it must(copied from a medium.com article):

- Separate the client from the server

- Not hold state between requests (i.e all information necessary to respond to a request is available in each request: no data or state, is held by the server from request to request)

- Use HTTP and HTTP methods

- Be reliable (for e.g most APIs follow the restful route pattern when specifying the process for authentication and important URLs)

The RESTful pattern simplifies how state changes are modified between a client and a server.

2. Model validations:

Model validation aims to determine if a given statistical model is appropriate or not. The three stages of a model are model development, model validation, and model monitoring. After a model is developed, it must be tested for accuracy. This testing occurs during model validation. Mostly associated with machine learning now, model validation takes a model and compares it against researched results to determine if the model's predictions match what other methods would have precidcted. Model validation is extremely important because a model might seem accurate supeficially but output wildly inaccruate results because of unexpected input data, outlier information which causes a problem with the model, or a simple fluke. Model validation seeks to ensure these types of situations do not occur and that a given model is accurate under all conditions.

3. Params:

Params is a Ruby method. It returns a sepcific object, the ActionController::Parameters object, which behaves similarly to a hash. Params help pass information to the controller when HTTP verb actions occur. This is most applicable for when user-supplied data needs to be fed into the Ruby application. With params, input data (like those from a form) are passed into the application's controller and can be accessed or fed into a databse for later use. Params help connect the routes data need to take once a user inpuets them. Without params, getting data from the user to where it actually needs to go would be much more difficult.

4. ERB:

ERB stands for Embedded RuBy. ERB allows Ruby to be embedded into HTML so when rendered, pages are seen as pure HTML and not a mixture of HTML and anything else. A major use of ERB is for templates. HTML can be written with ERB to account for dynamic Ruby data and displayed directly in HTML.

5. API:

API stands for Application Programming Interface. APIs allow for to or more computers to commununicate with each other. APIs are not intended to be sued directly by a human unles they are being integrated with software. With APIs, one computer or program can call an API and automatically retreive information or perform an action with no input required by a person. This significantly streamlines data acquisition and reduces the time required to find or present information on a website or application.