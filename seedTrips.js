const mongoose = require('mongoose');
require('./app_api/models/db');
require('./app_server/models/travlr');

const Trip = mongoose.model('trips');
const tripData = require('./app_server/data/trips.json');

const seedDB = async () => {
    try {
        const trips = Array.isArray(tripData) ? tripData : tripData.trips;

        if (!trips || !Array.isArray(trips)) {
            throw new Error('trips.json is not in the expected format.');
        }

        await Trip.deleteMany({});
        await Trip.insertMany(trips);

        console.log('Database seeded successfully');
        console.log(`Inserted ${trips.length} trips`);
    } catch (err) {
        console.log('Error seeding database:', err);
    } finally {
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
};

seedDB();