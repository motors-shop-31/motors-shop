import { LogoName } from "../../pages/ProductPage/styles";
import { useMemo } from "react";

interface Iprops {
  name: string;
  description: string;
  date: string;
}

export const CommentsProduct = ({ name, description, date }: Iprops) => {
  const color = useMemo(() => {
    return "--random" + Math.floor(Math.random() * (12 - 0) + 1);
  }, []);

  let firstLetter = name.trim().split(" ")[0][0]?.toLocaleUpperCase();
  let secondLetter = "";

  if (name.split(" ").length > 1) {
    secondLetter = name.split(" ")[1][0]?.toLocaleUpperCase();
  }

  if (!secondLetter) {
    secondLetter = "";
  }

  return (
    <div className="container-comment">
      <div className="container-info">
        <LogoName color={color}>
          {`${firstLetter}${secondLetter}`.trim()}
        </LogoName>
        <h3 className="body-2-500">{name.trim()}</h3>
        <h4>{date}</h4>
      </div>
      <p className="body-2-400">{description}</p>
    </div>
  );
};
