import { body, ValidationChain } from "express-validator";
import { Proprity } from "../entities/enums/Priority";
import { Status } from "../entities/enums/Status";

export const createValidator: ValidationChain[] = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("The task title mandatory")
    .trim()
    .isString()
    .withMessage("Title needs to be in text format"),
  body("date")
    .not()
    .isEmpty()
    .withMessage("The task date is mandatory")
    .isString()
    .withMessage("The date needs to be a valid date format"),
  body("description")
    .trim()
    .isString()
    .withMessage("Description needs to be in text format"),
  body("priority")
    .trim()
    .isIn([Proprity.normal, Proprity.high, Proprity.low])
    .withMessage("Priority can only be normal,high or low"),
  body("status")
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage("Status can only be todo,inProgress or completed"),
];

export const updateStatusValidator: ValidationChain[] = [
  body("id").not().isEmpty().withMessage("The ID field is mandatory"),
  body("status")
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage("Status can only be todo, inProgress or completed"),
];
