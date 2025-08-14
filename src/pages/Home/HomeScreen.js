import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import RowSection from './RowSection';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div>
      <Banner />
      <div className="max-width">
        <RowSection
          title="Trending Movie"
          items={['day', 'week']}
          defaultItem="day"
          fetchUrl="trending/movie"
          show="movie"
        />
        <RowSection
          title="Trending Tv"
          items={['day', 'week']}
          defaultItem="day"
          fetchUrl="trending/tv"
          show="tv"
        />
        <RowSection
          title="Movies"
          items={['upcoming', 'now_playing', 'popular', 'top_rated']}
          defaultItem="upcoming"
          fetchUrl="movie"
          show="movie"
        />
        <RowSection
          title="TV Show"
          items={['top_rated', 'on_the_air', 'popular', 'airing_today']}
          defaultItem="top_rated"
          fetchUrl="tv"
          show="tv"
        />
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
