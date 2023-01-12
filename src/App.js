import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/FirebaseFunctions";
import { useEffect } from "react";


function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: "SET_FOOD_ITEMS",
        foodItems: data,
      })
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto scrollbar-hide flex flex-col bg-primary" id="App">

        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 p-8 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>

      </div>
    </AnimatePresence>


  );
}

export default App;
