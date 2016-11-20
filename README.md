# Nobel Prize Interactive Data Visualization

This project transforms a basic Wikipedia list into an interactive visualization of Nobel prize winners.

## Architecture

### 1. Scrape

Data is scraped from Wikipedia pages using [Scrapy](https://scrapy.org) and Spiders.

### 2. Clean Data

Data is inherently dirty. Data will be processed and cleaned with [Pandas](http://pandas.pydata.org).

### 3. Explore Data

Before data transformation, data understanding is paramount. IPython, Pandas and Matplotlib offer a great mechanism for exploring data interactively. The results of this exploration can be then passed to Javascript for visualization.

### 4. Delivery

Once data is ready for consumption, it needs to be delivered. Python's Flask, a lightweight web framework, will provide a RESTful API for Javascript to get data. The web server will connect to SQL and NoSQL databases.

### 5. Transform

Using the powerful data visualization Javascript library, D3, a Nobel-prize visualization will be created with multiple elements and user interactivity.

### Supporting Libraries

* requests: Python HTTP library.
* SQLAlchemy: Python SQL Toolkit and Object Relation Mapper (ORM).
* Seaborn: Addition to Python's Matplotlib. Adds great aesthetics.
* crossfilter: Javascript library for filtering row-columnar datasets very fast. 

### Databases

* SQLite: File-based, serverless SQL-database.
  
    _Note_: By using SQLAlchemy SQL-library directly or through libraries that build on it, we can adapt the application to use other SQL backends such as MySQL or PostgreSQL by simply changing the configuration file.
    
* MongoDB: NoSQL database.



