# CryptoCheck

A modern cryptocurrency tracking and marketplace application built with React. CryptoCheck allows users to explore and monitor cryptocurrency prices, view detailed coin information, and track 24-hour price changes in a beautiful, user-friendly interface.

## Tutorial Reference

This project was developed following the tutorial: [React Crypto Tracker Tutorial](https://youtu.be/jZFaMEqEqEQ)

## 🌐 Live Demo

Check out the live version of CryptoCheck: [https://rt-crypto-check.netlify.app/](https://rt-crypto-check.netlify.app/)

## Features

- 🪙 **Browse Cryptocurrencies** - Explore a comprehensive list of cryptocurrencies with real-time pricing data
- 🔍 **Smart Search** - Search and filter cryptocurrencies by name with an intuitive dropdown interface
- 📈 **Price Charts** - View historical price data with interactive line charts
- 💹 **Market Data** - Display current price, 24-hour change percentage, and market cap
- 🎨 **Beautiful UI** - Modern dark-themed interface with smooth animations
- 📱 **Responsive Design** - Fully responsive layout that works on all devices
- 💱 **Multi-Currency Support** - Toggle between different currencies

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: React Context API
- **Charts**: React Google Charts
- **Styling**: CSS3 (with Flexbox & Grid)
- **Font**: Google Fonts (Outfit)
- **ESLint**: Code quality and consistency
- **API**: [CoinGecko API](https://www.coingecko.com/api) - For real-time cryptocurrency data
- **Hosting**: Netlify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd CryptoCheck
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── LineChart/
│   │   └── LineChart.jsx
│   └── Navbar/
│       ├── Navbar.jsx
│       └── Navbar.css
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   └── Coin/
│       ├── Coin.jsx
│       └── Coin.css
├── context/
│   └── CoinContext.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Key Features Explained

### Home Page

- Displays top 10 cryptocurrencies by market cap
- Features a powerful search bar with dropdown suggestions
- Shows price, 24-hour change, and market cap for each coin
- Click any coin to view detailed information

### Coin Details Page

- Displays comprehensive information about a selected cryptocurrency
- Shows historical price data with an interactive chart
- Currency conversion support
- Detailed market statistics

### Search Functionality

- Click the dropdown icon to view all available cryptocurrencies
- Type to filter cryptocurrencies by name
- Select from suggestions to populate the search field
- Submit to filter the main coin list

## Future Enhancements

- [ ] Migrate to Binance API for additional market data
- [ ] Add watchlist/favorites feature
- [ ] Implement user authentication
- [ ] Add price alerts and notifications
- [ ] Support for more currency pairs
- [ ] Advanced charting with multiple indicators
- [ ] Dark/Light theme toggle

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Russel Tjahjadi**
