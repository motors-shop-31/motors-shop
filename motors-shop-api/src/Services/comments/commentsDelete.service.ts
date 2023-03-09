import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const commentsDeleteService = async (id: string, idUser: string) => {
  const commentsRepository = AppDataSource.getRepository(Comments);

  const comment = await commentsRepository.findOneBy({ id });

  if (!comment) {
    throw new AppError(400, "Comment not find");
  }

  if (comment.user.id !== idUser) {
    throw new AppError(401, "Comment is not from this user");
  }

  commentsRepository.delete(id);

  return;
};

export default commentsDeleteService;
