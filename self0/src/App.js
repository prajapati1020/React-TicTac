import './App.css';
import FilterableProductTable from './components/table/FilterableProductTable'
import SearchBar from './components/table/SearchBar';
import ImageSlider from './components/jstoreact/ImageSlider'


function App() {
  return (
   <>
   {/* <SearchBar/>
   <FilterableProductTable products={PRODUCTS}/> */}
   <ImageSlider/>
   </>
  );
}






const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
export default App;
