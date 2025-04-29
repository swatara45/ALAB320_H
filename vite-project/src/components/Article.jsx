function Article({ title, image, alt, text }) {
    return (
      <article>
        <h3>{title}</h3>
        <img src={image} alt={alt} />
        <p>{text}</p>
      </article>
    );
  }
  
  export default Article;