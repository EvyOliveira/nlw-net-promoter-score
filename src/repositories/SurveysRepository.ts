import { Repository, EntityRepository } from "typeorm";
import { User } from "../models/User";
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveysRepository extends Repository<User> {
  static find() {
    throw new Error("Method not implemented.");
  }
}

export { SurveysRepository }