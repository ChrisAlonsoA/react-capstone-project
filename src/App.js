import { Footer, Header } from './components';
import { HomePage } from './pages/HomePage';
//import { useFeaturedBanners } from './hooks/useFeaturedBanners';

function App() {

  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
