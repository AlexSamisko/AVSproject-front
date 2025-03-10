# AVS Project

AVS Project is a web-based dashboard application designed to help users track tasks, maintain a record of completed tasks, access information, and exchange comments on shared data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Task management: Create, update, and delete tasks.
- Activity log: Keep track of completed tasks.
- Information sharing: Access and share relevant information.
- Commenting system: Exchange comments on shared data.

## Technologies Used

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: SQLite (data.db)
- **Deployment**:
  - Backend: Render
  - Frontend: GitHub Pages

## Installation

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AlexSamisko/AVSproject-back.git
   cd AVSproject-back
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   - Ensure the `data.db` file is located in the root directory of the backend project.

4. **Configure environment variables**:

   - Create a `.env` file in the root directory and add the following:

     ```env
     DATABASE_URL=./data.db
     ```

5. **Start the server**:

   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AlexSamisko/AVSproject-front.git
   cd AVSproject-front
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Update API endpoints**:

   - In your frontend code, ensure that all API requests point to the correct backend URL. For local development, this would be `http://localhost:5000`. For production, use the deployed backend URL.

4. **Start the development server**:

   ```bash
   npm start
   ```

   The frontend application should now be running on `http://localhost:3000`.

## Usage

- Access the frontend application through your browser.
- Use the dashboard to manage tasks, view completed tasks, access shared information, and participate in discussions through comments.

## Contributing

We welcome contributions to enhance the AVS Project. To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -m 'Add feature'
   ```

5. Push to the branch:

   ```bash
   git push origin feature-name
   ```

6. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
