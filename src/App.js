import { useFeaturedBanners } from './hooks/useFeaturedBanners';
import { HomePage } from './pages/HomePage';

function App() {

  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
