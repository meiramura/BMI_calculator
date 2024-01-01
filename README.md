# BMI Calculator

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/BMI-Calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd BMI-Calculator
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your web browser and visit [http://localhost:3000] to access the BMI Calculator.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.

## Directory Structure

- `view/`: HTML templates
- `public/`: Static files (CSS, client-side JavaScript)
- `routes/`: Express route handlers
- `server.js`: Main server file

## Additional Notes

- The server runs on port 3000. Make sure this port is available and not in use by other applications.
- The BMI calculation logic is implemented on the server-side to ensure accuracy.
