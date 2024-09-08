const prisma = require("../prisma");

const seed = async () => {
  const createCustomers = async () => {
    const customers = [
      { name: "Harry" },
      { name: "Hermione" },
      { name: "Ron" },
      { name: "Neville" },
    ];
    await prisma.customer.createMany({ data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
      { name: "The Three Broomsticks" },
      { name: "The Hogs Head" },
      { name: "Honeyduke's" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        date: new Date("2024-09-08"),
        partyCount: 4,
      },
      {
        customerId: 2,
        restaurantId: 2,
        date: new Date("2024-09-09"),
        partyCount: 2,
      },
      {
        customerId: 3,
        restaurantId: 3,
        date: new Date("2024-09-10"),
        partyCount: 6,
      },
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurants();
  await createReservations();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
