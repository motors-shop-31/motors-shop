import { LogoName } from "../../pages/ProductPage/styles";
import { useMemo } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { ModalTrash } from "../ModalTrashComments";
import { ModalMoreComments } from "../ModalMoreComments";

interface Iprops {
  name: string;
  description: string;
  date_create: string;
  date_update: string;
  id: string;
  idComment: string;
}

export const CommentsProduct = ({
  name,
  description,
  date_create,
  date_update,
  id,
  idComment,
}: Iprops) => {
  moment.locale("pt-br");

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

  let userId = localStorage.getItem("userId");

  return (
    <>
      <div className="container-comment">
        <div className="container-info">
          <LogoName color={color}>
            {`${firstLetter}${secondLetter}`.trim()}
          </LogoName>
          <h3 className="body-2-500">{name.trim()}</h3>
          <div className="div-edit">
            <h4>{moment(date_update).locale("pt").fromNow()}</h4>
            {date_create !== date_update && <span>(Editado)</span>}
          </div>
          {userId === id ? (
            <>
              <ModalTrash idComment={idComment} />
              <ModalMoreComments idComment={idComment} />
            </>
          ) : (
            <></>
          )}
        </div>

        <p className="body-2-400">{description}</p>
      </div>
    </>
  );
};
