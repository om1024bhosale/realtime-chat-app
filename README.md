🗨️ Realtime Chat App

A full-stack real-time chat application built with the MERN stack and Socket.IO, enabling seamless instant messaging with a responsive design.

🚀 Features
🔒 User Authentication: Secure login and registration system.

💬 Real-Time Messaging: Instant communication using WebSockets.

🧑‍🤝‍🧑 Multiple Chat Rooms: Create and join various chat rooms.

📱 Responsive Design: Optimized for all devices.

🗃️ Message Persistence: Stores chat history in MongoDB.

🛠️ Tech Stack
Frontend
React
Tailwind CSS
DaisyUI
Zustand

Backend
Node.js
Express.js
Socket.IO

Database
MongoDB
Cloudinary

📸 Screenshots
![image](https://github.com/user-attachments/assets/6c7f1efb-a0fd-44e0-a5bc-6b3955620c3b)
![image](https://github.com/user-attachments/assets/238da466-80aa-4042-b9c1-5e744232c268)
![image](https://github.com/user-attachments/assets/33db1ac7-52b0-43d9-a715-8a07f89a4f88)



📂 Project Structure
pgsql
Copy
Edit
realtime-chat-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── .gitignore
├── package.json
└── README.md
⚙️ Installation
Prerequisites
Node.js

MongoDB

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/om1024bhosale/realtime-chat-app.git
cd realtime-chat-app
Install dependencies for both frontend and backend:

bash
Copy
Edit
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend directory and add the following:

env
Copy
Edit
MONGODB_URI = 
PORT =
JWT_SECRET = 
CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 


NODE_ENV = development
Run the application:

bash
Copy
Edit
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm start


🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add YourFeature'

Push to the branch: git push origin feature/YourFeature

Submit a pull request.

 
