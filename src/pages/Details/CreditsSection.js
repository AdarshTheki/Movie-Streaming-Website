import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import NoPicUser from '../../assets/user-male-grey.svg';
import RowLoading from '../../components/Loading/RowLoading';
import useFetch from '../../hooks/useFetch';

export default function CreditsSection() {
  const { mediaType, id } = useParams();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/credits`);

  const uniqueCrew = Array.from(
    new Map(
      data?.crew
        ?.filter((item) => item?.profile_path)
        .map((item) => [item.id, item])
    ).values()
  );

  if (loading || error) return <LoadData />;

  function LoadData() {
    return (
      <div>
        <RowLoading width={120} height={160} counts={10} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>Top Billed Cast</h2>
        <div className="castSection_container">
          {data?.cast?.length ? (
            data?.cast?.map((item) => {
              const castPics = item?.profile_path
                ? `https://image.tmdb.org/t/p/w185/${item?.profile_path}`
                : NoPicUser;
              return (
                <div className="castSection_card" key={item?.id}>
                  <NavLink
                    target="__blank"
                    to={`https://www.google.com/search?q=${item?.name?.replace(
                      ' ',
                      '+'
                    )}`}
                    className="castSection_img">
                    <img src={castPics} alt={item?.name} height={200} />
                  </NavLink>
                  <div>
                    <h2 className="castSection_name">
                      {item?.name.substring(0, 11)}
                    </h2>
                    <p className="castSection_char">
                      {item?.character.substring(0, 20)}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <LoadData />
          )}
          <div
            style={{
              display: 'flex',
              placeItems: 'center',
            }}>
            <NavLink to={`/credits/${mediaType}/${id}`} className="_links">
              Credits more details
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <h2>Top billed Crew</h2>
        <div className="castSection_container">
          {uniqueCrew.length ? (
            uniqueCrew
              .sort((a, b) => b?.popularity - a?.popularity)
              ?.slice(0, 20)
              ?.map((item) => {
                const crewPics = item?.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${item?.profile_path}`
                  : NoPicUser;
                return (
                  <div className="castSection_card" key={item?.id}>
                    <NavLink
                      target="__blank"
                      to={`https://www.google.com/search?q=${item?.name?.replace(
                        ' ',
                        '+'
                      )}`}
                      className="castSection_img">
                      <img
                        src={crewPics}
                        alt={item?.name || 'NA'}
                        style={{
                          borderRadius: '50%',
                          height: '130px',
                          backgroundPosition: 'top',
                        }}
                      />
                    </NavLink>
                    <div>
                      <h2 className="castSection_name">
                        {item?.name.substring(0, 11) || 'NA'}
                      </h2>
                      <p className="castSection_char">
                        {Math.round(item?.popularity) + ' K' || 'NA'}
                      </p>
                      <p className="castSection_char">
                        {item?.job.substring(0, 20) || 'NA'}
                      </p>
                    </div>
                  </div>
                );
              })
          ) : (
            <LoadData />
          )}
          <div
            style={{
              display: 'flex',
              placeItems: 'center',
            }}>
            <NavLink to={`/credits/${mediaType}/${id}`} className="_links">
              Credits more details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
