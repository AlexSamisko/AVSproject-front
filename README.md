# AVS Project Frontend

A web dashboard for tracking tasks, recording completed work, receiving information, and exchanging comments on the received data.

## Features
- Task tracking and management
- Comment system for discussions
- Real-time updates via WebSocket

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/AlexSamisko/AVSproject-frontend.git
cd AVSproject-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```
REACT_APP_BACKEND_URL=https://avsproject-back.onrender.com
```

4. **Run the application**
```bash
npm start
```

## Deployment

To deploy on **GitHub Pages**:

1. Add the following to your `package.json`:
```json
"homepage": "https://yourusername.github.io/AVSproject-frontend"
```

2. Run the following commands:
```bash
npm run build
npm run deploy
```

## API Endpoints

| Endpoint                     | Method | Description                  |
|-----------------------------|---------|------------------------------|
| `/restoreandlogin`           | `POST`  | Restores session and logs in |
| `/tasks`                     | `GET`   | Fetches all tasks            |
| `/tasks/:id`                 | `PUT`   | Updates a specific task       |

## Project Structure
```
/src
 ├── components
 ├── pages
 ├── services
 ├── utils
 └── App.js
```

## Technologies
- React.js
- WebSocket
- Fetch API
- GitHub Pages (for deployment)

## Contributors
- [Alex Samisko](https://github.com/AlexSamisko)

## License
This project is licensed under the MIT License.

