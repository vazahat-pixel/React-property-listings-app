# 🏡 Property Listings App

A responsive React + Tailwind CSS application that fetches property data from a dummy API, displays it in a card layout, allows filtering and searching, lets users add new properties, and view full details in a modal.


## 🚀 Features

- 📦 **Fetch properties** from dummy API (`json-server`)
- 🏘️ **Display listings** with image, name, type, location, price, description
- 🔍 **Search** by name or location
- 🏷️ **Filter** by property type (e.g. Apartment, Villa, House)
- ➕ **Add new property** with a simple form (POST API)
- 🔎 **View details modal** with full information & optional map
- 💅 **Tailwind CSS** for a clean, modern UI
- ⚙️ **Axios + Modular Components** for scalable structure


## 🧩 Component Structure

src/
│
├── components/
│ ├── FilterBar.jsx
│ ├── PropertyList.jsx
│ ├── PropertyCard.jsx
│ ├── PropertyForm.jsx
│ ├── PropertyModal.jsx
│
├── api/
│ └── api.js
│
├── App.jsx
└── main.jsx


Each component is self-contained and reusable.

⚙️ Installation & Setup
1️⃣ Clone the repository

bash
git clone https://github.com/vazahat-pixel/React-property-listings-app
cd react-property-listings-app

2️⃣ Install dependencies
npm install

3️⃣ Run the dummy API (json-server)
Start the server:
npx json-server --watch db.json --port 5000

4️⃣ Run the React app
npm run dev
App runs at http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/properties	Fetch all properties
POST	/properties	Add a new property

Backend URL: http://localhost:5000/properties


👨‍💻 Tech Stack

Frontend: React.js (Vite)
Styling: Tailwind CSS
HTTP Client: Axios
Backend (Mock): json-server

🏁 Future Enhancements

PUT / DELETE support for property updates
Pagination and sorting
Map integration for coordinates
Global state management with Redux or Zustand

🧑‍🎓 Author

Vazahat Qureshi
🌐 MERN Stack Developer
📧 wazahatqureshi4@gmail.com
💼 https://www.linkedin.com/in/vazahat4/
📂 https://github.com/vazahat-pixel
