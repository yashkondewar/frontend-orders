import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import OrderTable from "./components/OrderTable/OrderTable";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Header />
      <Navbar/>
      <OrderTable/>
    </div>
  );
}

export default App;
