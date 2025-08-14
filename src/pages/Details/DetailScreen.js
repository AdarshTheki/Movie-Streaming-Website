import { useParams } from 'react-router-dom';
import DetailSection from './DetailSection';
import CreditsSection from './CreditsSection';
import VideoDetail from './VideoDetail';
import Footer from '../../components/Footer/Footer';
import Rows from '../../components/Rows/Rows';
import SocialSection from './SocialSection';
import './style.scss';

const DetailScreen = () => {
  const { mediaType, id } = useParams();
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    maxWidth: '95vw',
    margin: '0 auto',
    position: 'relative',
  };

  return (
    <div>
      {/* Detail Section */}
      <DetailSection />
      <div style={styles}>
        {/* Combine Cast & Crew Section */}
        <CreditsSection />

        {/* Social Section */}
        <SocialSection />

        {/* Video Section */}
        <VideoDetail />

        {/* Similar show Section */}
        <div>
          <h2>Similar Show</h2>
          <div style={{ position: 'relative' }}>
            <Rows fetchUrl={`/${mediaType}/${id}/similar`} show={mediaType} />
          </div>
        </div>

        {/* Recommendations Section */}
        <div>
          <h2>Recommendations</h2>
          <div style={{ position: 'relative' }}>
            <Rows
              fetchUrl={`/${mediaType}/${id}/recommendations`}
              show={mediaType}
            />
          </div>
        </div>

        {/* Side Shadow */}
        <div className="box-shadow"></div>
      </div>
      {/* Footer section */}
      <Footer />
    </div>
  );
};
export default DetailScreen;
