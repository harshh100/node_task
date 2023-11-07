const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace these credentials with your email details
const emailConfig = {
  service: 'Gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_PASSWORD',
  },
};

const transporter = nodemailer.createTransport(emailConfig);

// Mocked data, you will need to use a database in a real application
let users = [];

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).send('User already exists');
  }

  users.push({ email, password });

  // Sending welcome email
  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: email,
    subject: 'Welcome to our platform!',
    text: 'Thank you for signing up!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).send('Signup successful, welcome email sent');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  return res.status(200).send('Login successful');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
