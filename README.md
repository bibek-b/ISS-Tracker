# 🛰️ ISS Tracker

Real-time International Space Station tracking with satellite imagery.

## ✨ Features

- 📍 Live ISS position updates every second
- 🗺️ Interactive map with satellite/terrain views
- 🎯 Automatic map centering on ISS
- 📱 Fully responsive design

## 🚀 Live Demo

[https://iss-tracker-lovat.vercel.app/]

## 🛠️ Tech Stack

- React + TypeScript
- React Leaflet for maps
- WhereTheISSAt API
- MapTiler Tiles

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/iss-tracker.git

# Navigate to project
cd iss-tracker

# Add env stuff - for this sign in in maptiler website and get the key
VITE_MAP_KEY="YOUR_MAPTILER_API_KEY"

# Install dependencies
npm install

# Start development server
npm run dev