import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";
import SearchInput from "./core/SearchInput/SearchInput";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      {/* <SearchInput placeholder='Search recipe...' /> */}
      <div className={styles.col}>
        <Filter />
        <Recipes />
      </div>
    </>
  );
}

export default App;
