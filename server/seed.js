const mongoose = require("mongoose");
const faker = require("@faker-js/faker").faker;
const Listing = require("./models/Listing");
const User = require("./models/User");
const Booking = require("./models/Booking");
// const bcrypt = require('bcrypt');

mongoose.connect("mongodb://localhost:27017/Dream_Nest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    // Generate a hashed password
    const hashedPassword = await bcrypt.hash('demo123', 10);

    const user = new User({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      profileImagePath: faker.image.avatar(),
    });
    users.push(user);
  }

  await User.insertMany(users);
  console.log("Users seeded!");
  return users;
};

const seedListings = async (users) => {
  const listings = [];

  for (let i = 0; i < 10; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const listing = new Listing({
      creator: randomUser._id,
      category: faker.commerce.department(),
      type: faker.commerce.productName(),
      streetAddress: faker.location.streetAddress(),
      aptSuite: faker.location.secondaryAddress(),
      city: faker.location.city(),
      province: faker.location.state(),
      country: faker.location.country(),
      guestCount: faker.number.int({ min: 1, max: 10 }),
      bedroomCount: faker.number.int({ min: 1, max: 5 }),
      bedCount: faker.number.int({ min: 1, max: 5 }),
      bathroomCount: faker.number.int({ min: 1, max: 3 }),
      amenities: faker.helpers.arrayElements(['WiFi', 'TV', 'Parking', 'Pool', 'Gym'], 3),
      listingPhotoPaths: [faker.image.url(), faker.image.url()],
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      highlight: faker.commerce.productAdjective(),
      highlightDesc: faker.lorem.sentence(),
      price: faker.commerce.price({ min: 50, max: 500 }),
    });
    listings.push(listing);
  }
  await Listing.insertMany(listings);
  console.log("Listings seeded!");
  return listings;
};

const seedBookings = async (users, listings) => {
  const bookings = [];

  for (let i = 0; i < 10; i++) {
    const randomCustomer = users[Math.floor(Math.random() * users.length)];
    const randomHost = users[Math.floor(Math.random() * users.length)];
    const randomListing = listings[Math.floor(Math.random() * listings.length)];
    
    const booking = new Booking({
      customerId: randomCustomer._id,
      hostId: randomHost._id,
      listingId: randomListing._id,
      startDate: faker.date.future().toISOString().split('T')[0],
      endDate: faker.date.future().toISOString().split('T')[0],
      totalPrice: faker.commerce.price({ min: 100, max: 1000 }),
    });
    bookings.push(booking);
  }
  await Booking.insertMany(bookings);
  console.log("Bookings seeded!");
};

const seedDatabase = async () => {
  await mongoose.connection.dropDatabase(); // Clear database before seeding
  const users = await seedUsers();
  const listings = await seedListings(users);
  await seedBookings(users, listings);
  mongoose.connection.close();
};

seedDatabase();
