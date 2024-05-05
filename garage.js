let cars = [
  {
    name: "land rover",
    model: "highway no way",
    year: 2024,
    //img: "",
  },
  {
    name: "audi",
    model: "tt",
    year: 2024,
    //img: "",
  },
  {
    name: "mercedes",
    model: "e305",
    year: 2024,
    //img: "C:/Users/meire/OneDrive/Desktop/course fullstack/garage project/sddefault.jpg",
  },
];

let customer = [];

// Function to create a new customer
function create_customer() {
  let customer_name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;

  // Changed variable name from Sage to age for clarity
  let age = document.getElementById("age").value;

  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let card = document.getElementById("creditCard").value;

  // Push new customer to the customer array
  customer.push({
    name: customer_name,
    age: age,
    surname: surname,
    address: address,
    dob: dob,
    card: card,
  });
  // Save the updated customer data to local storage
  save_customer();
  // Display the updated customer list
  displayCustomers();
}

// Function to create a new car
// Function to create a new car
function create_car() {
  let car_name = document.getElementById("company").value;
  let model = document.getElementById("model").value;
  let year = document.getElementById("released").value;

  // Get the image path from the input field

  // Push new car to the cars array
  cars.push({
    name: car_name,
    model: model,
    year: year,
    // Add the image path here
  });

  // Save the updated cars data to local storage
  saveCars();

  // Display the updated cars list
  displayCars();
}

// Function to save customer data to local storage
function save_customer() {
  localStorage.setItem("customer", JSON.stringify(customer)); //serialization
}

// Function to save cars data to local storage
function saveCars() {
  localStorage.setItem("cars", JSON.stringify(cars)); //serialization
}

// Function to load customer data from local storage
function load_customer() {
  let loadedCustomers = JSON.parse(localStorage.getItem("customer")); //deserialization
  if (loadedCustomers !== null) {
    customer = loadedCustomers;
  }
  displayCustomers();
}

// Function to load cars data from local storage
function loadCar() {
  let loadedCars = JSON.parse(localStorage.getItem("cars")); //deserialization
  if (loadedCars !== null) {
    cars = loadedCars;
  }
  displayCars();
}

// Function to display customers
function displayCustomers() {
  let customerList = document.getElementById("customerList");
  let html = "<ol>";
  for (let i = 0; i < customer.length; i++) {
    html += `<li>Name: ${customer[i].name}, Age: ${customer[i].age}, Address: ${customer[i].address}</li>`;
  }
  html += "</ol>";
  customerList.innerHTML = html;
}

// Function to display cars
function displayCars() {
  let carList = document.getElementById("carList");
  let html = "<ol>";
  for (let i = 0; i < cars.length; i++) {
    html += `<li>Company: ${cars[i].name}, Model: ${cars[i].model}, Year: ${cars[i].year}`;
    if (cars[i].img) {
      // Use the img property to set the src attribute of the img element
      html += `<img src="${cars[i].img}" alt="${cars[i].model}">`;
    }
    html += "</li>";
  }
  html += "</ol>";
  carList.innerHTML = html;
}
function deleteCar(carName) {
  // Filter out the car with the given name
  cars = cars.filter(car => car.name !== carName);

  // Save the updated cars data to local storage
  saveCars();

  // Display the updated cars list
  displayCars();
}

function deleteCustomer(customerName) {
  // Filter out the customer with the given name
  customer = customer.filter(cust => cust.name !== customerName);

  // Save the updated customer data to local storage
  save_customer();

  // Display the updated customer list
  displayCustomers();
}
