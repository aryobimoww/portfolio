const Card = ({ link, title, imageUrl }) => {
  return (
    <div>
      <article
        className="br2 ba  b--black-10 mv4 w-100 w-50-m w-25-s mw5 center"
        data-aos="flip-up"
      >
        <a href={link} target="blank">
          <img
            src={imageUrl}
            className="db w-100 br2 br--top"
            alt="portofolio"
          />
        </a>
        <div className="mt2 tc">
          <h1 className="f5 f4-ns mv0 noto-font">{title}</h1>
        </div>
      </article>
    </div>
  );
};

export default Card;
