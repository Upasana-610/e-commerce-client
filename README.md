# E-Commerce Project Setup

This guide explains how to clone and set up both the client and API for the e-commerce project on your local system.

## Prerequisites

Before proceeding, make sure you have the following installed:

- **Node.js** (preferably version 16.3.0)
- **NVM (Node Version Manager)** to manage Node versions

### Install Node.js Using NVM

1. Install [NVM](https://github.com/nvm-sh/nvm) (if not already installed).
2. Install Node.js version 16.3.0 using NVM:
   ```bash
   nvm install 16.3.0

   ```
3. Set Node.js version 16.3.0 as the active version:
   ```bash
   nvm use 16.3.0
   ```

## Clone the Repositories

Clone both the **client** and **API** repositories:

1. Clone the **client** repository:

   ```bash
   git clone https://github.com/Upasana-610/e-commerce-client.git
   ```

2. Clone the **API** repository:
   ```bash
   git clone https://github.com/Upasana-610/e-commerce-api.git
   ```

## Install Dependencies

Install the necessary dependencies for both the client and API projects.

1. Navigate to the **e-commerce-client** directory and install dependencies:

   ```bash
   cd e-commerce-client
   npm install
   ```

2. Navigate to the **e-commerce-api** directory and install dependencies:
   ```bash
   cd e-commerce-api
   npm install
   ```

## Configuration

### Create `.env` File for API Configuration

Create a `config.env` file at the root of the `e-commerce-api` directory and add the following configuration values:

Here's an updated version of the `.env` section, along with detailed guidance on how to create or obtain the necessary values:

### `.env` Configuration with Guidance:

```env
# MongoDB connection string
DATABASE=mongodb+srv://<username>:<password>@e-commerce.amfwt.mongodb.net/e-commerce?retryWrites=true&w=majority

# JWT & Secret Keys (replace with your own)
JWT_SECRET=<your-jwt-secret>
JWT_COOKIE_EXPIRES_IN=90d
JWT_EXPIRES_IN=90d

# Email Configuration (use a service like SendGrid)
SENDGRID_PASSWORD=<your-sendgrid-password>
SENDGRID_USERNAME=apikey
EMAIL_FROM=youremail@example.com

# Stripe API Key (replace with your secret key)
STRIPE_SECRET_KEY=<your-stripe-secret-key>

# Webhook Secret Key
WEBHOOK_SECRET=<your-webhook-secret>

# Server Configuration
PORT=3000
```

### How to Get These Values:

1. **MongoDB Connection String:**

   - You will need to create a MongoDB Atlas account (or use your existing account).
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a new cluster.
   - Once the cluster is created, go to the **Connect** tab in your cluster dashboard.
   - Choose **Connect your application** and MongoDB will provide you with a connection string similar to:
     ```bash
     mongodb+srv://<username>:<password>@e-commerce.amfwt.mongodb.net/e-commerce?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with the MongoDB Atlas database username and password you've created during the setup.

2. **JWT Secret Key:**

   - The JWT secret is used to sign and verify JSON Web Tokens for your app’s authentication.
   - **How to generate a secret:**
     - You can generate a secure random string using an online generator or via a Node.js script:
       ```javascript
       require("crypto").randomBytes(64).toString("hex");
       ```
     - This will give you a string that you can use as your `JWT_SECRET`.
   - **Important:** Make sure this key is kept private and not exposed anywhere.

3. **Email Configuration (SendGrid):**

   - **Set up SendGrid:**
     1. Go to [SendGrid](https://sendgrid.com) and sign up for an account.
     2. Once logged in, navigate to **Settings** -> **API Keys** -> **Create API Key**.
     3. Choose a name for the key and select **Full Access**.
     4. Save the API Key and use it in your `.env` file under `SENDGRID_PASSWORD`.
   - **Set the `EMAIL_FROM` value:**
     - This is the email address that will appear as the sender of your application’s emails. You can use any valid email address that SendGrid allows for your account (e.g., `youremail@example.com`).

4. **Stripe API Key:**

   - **Set up Stripe:**
     1. Go to [Stripe](https://stripe.com) and create an account if you don’t already have one.
     2. Once logged in, go to the **Developers** section and click on **API Keys**.
     3. Copy your **Secret Key** (it will start with `sk_test_` for test keys) and paste it into the `.env` file under `STRIPE_SECRET_KEY`.
     4. **Important:** Use the **Test Secret Key** for development purposes. When you're ready to go live, you can switch to the **Live Secret Key**.

5. **Webhook Secret Key (Stripe Webhook):**

   - **Set up Stripe Webhooks:**
     1. In your Stripe dashboard, go to **Developers** -> **Webhooks**.
     2. Click on **Add endpoint**, enter the URL of your server that will handle Stripe events (e.g., `http://localhost:3000/webhook` during local development).
     3. After creating the endpoint, you will be provided with a **Webhook Secret Key**. This is the value that Stripe uses to sign events sent to your server.
     4. Copy this secret and paste it into your `.env` file under `WEBHOOK_SECRET`.

6. **Server Configuration (`PORT`):**
   - The `PORT` is the port number where your API server will run. By default, it’s set to `3000`, but you can change this if needed.
   - **Note:** Ensure that the port number does not conflict with other services running on your machine.

---

### Final `.env` Example:

```env
# MongoDB connection string
DATABASE=mongodb+srv://your-mongodb-username:your-mongodb-password@e-commerce.amfwt.mongodb.net/e-commerce?retryWrites=true&w=majority

# JWT & Secret Keys (replace with your own)
JWT_SECRET=your-secure-jwt-secret
JWT_COOKIE_EXPIRES_IN=90d
JWT_EXPIRES_IN=90d

# Email Configuration (use a service like SendGrid)
SENDGRID_PASSWORD=your-sendgrid-api-key
SENDGRID_USERNAME=apikey
EMAIL_FROM=youremail@example.com

# Stripe API Key (replace with your secret key)
STRIPE_SECRET_KEY=your-stripe-secret-key

# Webhook Secret Key
WEBHOOK_SECRET=your-stripe-webhook-secret

# Server Configuration
PORT=3000
```

### Additional Recommendations:

- **Keep `.env` File Secure:** Never commit your `.env` file to version control. Use `.gitignore` to ensure it remains private.
  - Example of `.gitignore`:
    ```bash
    .env
    node_modules/
    ```
- **Environment-Specific Configurations:** You can create different `.env` files for different environments (e.g., `.env.production`, `.env.development`) and load them based on the environment you're running in.

With this setup and guidance, you'll be able to securely manage sensitive data and configure the project correctly for both local development and production.

Replace `<PASSWORD>` in the `DATABASE` URL with your MongoDB password.

### Configure Client to Use Local Server

If you want the client to connect to the local server instead of the deployed server on Render, follow these steps:

1. Navigate to `e-commerce-client/src/api/password.js`.
2. You will see two lines like this:
   ```javascript
   export const BASE_URL = "https://roarupaapp.onrender.com";
   // export const BASE_URL = "http://localhost:3000";
   ```
3. Comment the first line and uncomment the second:
   ```javascript
   // export const BASE_URL = "https://roarupaapp.onrender.com";
   export const BASE_URL = "http://localhost:3000";
   ```

This will configure the client to connect to your locally running server instead of the deployed one.

## Running the Project

### Start the API Server

1. Navigate to the `e-commerce-api` directory and run the server:

   ```bash
   cd e-commerce-api
   npm run start
   ```

   The API server will start on port `3000` by default.

### Start the Client

1. Open a new terminal window and navigate to the `e-commerce-client` directory:

   ```bash
   cd e-commerce-client
   npm run start
   ```

   This will start the client-side application and open it in your browser.

## Summary

- The client-side code is served on your local system at `http://localhost:3001`.
- The backend API is also running locally at `http://localhost:3000`.

Make sure to adjust the `BASE_URL` as mentioned above to ensure that the client connects to the local server instead of the deployed one.

## Troubleshooting

- If you encounter any issues related to MongoDB, ensure that the database credentials in `config.env` are correct.
- If the client doesn't connect properly, double-check the `BASE_URL` in `password.js` to ensure it's pointing to the correct local endpoint.

---

Happy coding!
