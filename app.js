import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Function to make the HTTP request
const makeHttpRequest = async () => {
  try {
    const response = await axios.get('https://nyapataa.onrender.com/'); // Replace with your desired URL
    const respons = await axios.get('https://backdata.onrender.com/'); // Replace with your desired URL
    console.log('Nyapata : ', response.data,"backend :",respons.data);
  } catch (error) {
    console.error('Error making HTTP request:', error.message);
  }
};

// Set up the interval to make the HTTP request every 10 seconds (10000 milliseconds)
const intervalId = setInterval(makeHttpRequest, 1000);

// Express route for a simple test endpoint
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Optionally, you can stop the interval after a certain number of repetitions or based on some condition
// For example, stop after 5 minutes (30 repetitions)
// setTimeout(() => clearInterval(intervalId), 5 * 60 * 1000);
