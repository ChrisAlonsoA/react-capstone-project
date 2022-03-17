import { useState } from 'react';
import { Footer, Header } from './components';
import { HomePage, ProductList } from './pages';
//import { useFeaturedBanners } from './hooks/useFeaturedBanners';

function App() {

  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);
  const [pageCurrent, setPageCurrent] = useState(true);

  return (
    <>
      <Header setPageCurrent={setPageCurrent} />
      {
        pageCurrent ? <HomePage setPageCurrent={setPageCurrent} /> : <ProductList/>
      }
      <Footer />
    </>
  );
}

export default App;
