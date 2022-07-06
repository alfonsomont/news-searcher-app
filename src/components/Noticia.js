import React from "react";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, source } = noticia;
  const imagen = urlToImage ? (
    <div className="card-image" alt={title}>
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l3">
      <div className="card">
        {imagen}
        <div className="card-content">
          <h5>{title}</h5>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
