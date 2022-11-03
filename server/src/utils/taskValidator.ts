import { body } from "express-validator";
import { Proprity } from "../entities/enums/Priority";
import { Status } from "../entities/enums/Status";

export const createValidator = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("Title field is mandatory")
    .trim()
    .isString()
    .withMessage("title need to be in a text format"),
  body("date")
    .not()
    .isEmpty()
    .withMessage("date field is mandatory")
    .isString()
    .withMessage("The date need to be  a valid date format"),
  body("description")
    .trim()
    .isString()
    .withMessage("Description field needs to be in text format"),
  body("priority")
    .trim()
    .isIn([Proprity.low, Proprity.normal, Proprity.high])
    .withMessage("Priority can only by low normal or high"),
  body("status")
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage("Status can only by todo, inProgress or completed"),
];
