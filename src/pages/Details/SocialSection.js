import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaWikipediaW,
} from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import RowsLoading from '../../components/Loading/RowLoading';

export default function SocialSection() {
  const { mediaType, id } = useParams();
  const {
    data: externalIds,
    loading: loadOne,
    error: errorOne,
  } = useFetch(`${mediaType}/${id}/external_ids`);
  const {
    data: keywords,
    loading: loadTwo,
    error: errorTwo,
  } = useFetch(`${mediaType}/${id}/keywords`);

  if (loadOne || loadTwo || errorOne || errorTwo) {
    return (
      <div style={{ lineHeight: 2 }}>
        <RowsLoading width={150} height={90} counts={8} />
        <div>
          <RowsLoading width={100} height={20} counts={10} />
        </div>
      </div>
    );
  }

  return (
    <div className="social-section">
      {/* Social Icons Section */}
      <div>
        <h3>Social Medias : </h3>
        <div className="socials_icons">
          <NavLink
            className="icon"
            target="__blank"
            to={`https://www.facebook.com/${externalIds?.facebook_id}`}>
            <FaFacebook className="icon" color="#4867AA" fontSize={30} />
          </NavLink>
          <NavLink
            className="icon"
            target="_blank"
            to={`https://www.instagram.com/${externalIds?.instagram_id}`}>
            <FaInstagramSquare className="icon" color="#F506A8" fontSize={30} />
          </NavLink>
          <NavLink
            className="icon"
            target="_blank"
            to={`https://twitter.com/${externalIds?.twitter_id}`}>
            <FaTwitter className="icon" color="#1DA1F2" fontSize={30} />
          </NavLink>
          <NavLink
            className="icon"
            target="_blank"
            to={`https://www.wikidata.org/wiki/${externalIds?.wikidata_id}`}>
            <FaWikipediaW className="icon" color="black" fontSize={30} />
          </NavLink>
        </div>
      </div>
      {/* Social Keyword Section */}
      <div>
        <h3>Keywords : </h3>
        <div className="socials_keywords">
          {mediaType === 'movie'
            ? keywords.keywords?.slice(0, 10)?.map((item) => (
                <span key={item?.id} className="keyword">
                  {item?.name}
                </span>
              ))
            : keywords.results?.slice(0, 10)?.map((item) => (
                <span key={item?.id} className="keyword">
                  {item?.name}
                </span>
              ))}
          <span className="keyword">more...</span>
        </div>
      </div>
    </div>
  );
}
