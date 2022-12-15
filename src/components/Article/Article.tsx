import React from "react";

interface ArticleProps {
  text: string;
}

const Article = (props: ArticleProps) => {

    
  return (
    <article>
      <h3>To jest komponent Article</h3>
      <p>lalalalalalala z Article</p>
      <p>{props.text}</p>
    </article>
  );
};

export default Article;
