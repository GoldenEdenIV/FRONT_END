'use client'
import Home1 from './components/Home/Home1'
import Catalog1 from './components/Catalog/CatalogGrid1'
import CatalogListView1 from './components/Catalog/CatalogListView1'
import ContactUs1 from './components/ContactUs/ContactUs1'
import "./App.css"
import Review1 from './components/Review/Review1'
import FAQ1 from './components/FAQ/FAQ1'
import React, { useState } from 'react'; // Ensure React and useState are properly imported
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering


// Define App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home1 />;
      case 'catalog':
        return <Catalog1 />;
      case 'cataloglist':
        return <CatalogListView1 />;
      case 'contactus':
        return <ContactUs1 />;
      case 'faq':
        return <FAQ1 />;
      case 'review':
        return <Review1 />;
      default:
        return <Home1 />;
    }
  };

  return (
    <>
      <nav>
        {/* Navigation buttons */}
        <button className="mr-5" onClick={() => setCurrentPage('home')}>Home</button>
        <button className="mr-5" onClick={() => setCurrentPage('catalog')}>CatalogGrid</button>
        <button className="mr-5" onClick={() => setCurrentPage('cataloglist')}>CatalogList</button>
        <button className="mr-5" onClick={() => setCurrentPage('contactus')}>ContactUs</button>
        <button className="mr-5" onClick={() => setCurrentPage('faq')}>FAQ</button>
        <button className="mr-5" onClick={() => setCurrentPage('review')}>Review</button>
      </nav>
      {/* Render the selected page */}
      {renderPage()}
    </>
  );
};

export default App
