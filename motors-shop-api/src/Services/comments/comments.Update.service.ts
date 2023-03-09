import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";
import { IUpdateComments } from "../../interfaces/comments.interfaces";

const commentsUpdateService = async (
  id: string,
  idUser: string,
  data: IUpdateComments
) => {
  const commentsRepository = AppDataSource.getRepository(Comments);

  const comment = await commentsRepository.findOneBy({ id });

  if (!comment) {
    throw new AppError(400, "Comment not find");
  }

  if (comment.user.id !== idUser) {
    throw new AppError(401, "Comment is not from this user");
  }

  commentsRepository.update(id, {
    text: data.text ? data.text : comment.text,
  });

  const commentUpdate = await commentsRepository.findOneBy({ id });

  return commentUpdate;
};

export default commentsUpdateService;
