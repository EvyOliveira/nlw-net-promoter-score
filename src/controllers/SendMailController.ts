import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveyUsersRepository } from "../repositories/SurveysUsersRepository";

class SendMailController {

  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveyRepository = getCustomRepository(SurveyUsersRepository);
    const SurveysUsersRepository = getCustomRepository(SurveyUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({email});
  }
}

export { SendMailController }