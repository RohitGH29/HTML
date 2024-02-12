
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": "100",
    "instructor": "John Smith"
  },
  {
    "name": "Python",
    "price": "120",
    "instructor": "Alice Johnson"
  },
  {
    "name": "C++",
    "price": "90",
    "instructor": "Michael Brown"
  },
  {
    "name": "JavaScript",
    "price": "80",
    "instructor": "Emily Davis"
  },
  {
    "name": "Ruby",
    "price": "110",
    "instructor": "David Wilson"
  },
  {
    "name": "C#",
    "price": "105",
    "instructor": "Sarah Martinez"
  },
  {
    "name": "Swift",
    "price": "125",
    "instructor": "Daniel Anderson"
  },
  {
    "name": "Kotlin",
    "price": "95",
    "instructor": "Olivia Thomas"
  },
  {
    "name": "PHP",
    "price": "75",
    "instructor": "James White"
  },
  {
    "name": "Go",
    "price": "115",
    "instructor": "Sophia Garcia"
  }
]

);


// Print a message to the output window.
console.log(`Done Inserting Data`);

