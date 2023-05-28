import React from "react";
import Navigation from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextArea from "./components/TextArea";



const App = () => {
  return (
    <div>
      <Navigation />
      <TextArea heading="Enter Text & Transform It" />
    </div>
  );
};

export default App;
