import { Router } from "express";
import { getAllCards, updateCard } from "../controller/card.controller.js";
import { getAllJodi, updateJodi } from "../controller/jodi.controller.js";
import { getAllPatti, updatePatti } from "../controller/patti.controller.js";
import { deleteAllLotteries } from "../controller/reset.controller.js";

export const lotteryRouter=Router();

lotteryRouter.route("/update-card").post(updateCard);
lotteryRouter.route("/getCards/:lotteryName").get(getAllCards);
lotteryRouter.route("/update-jodi").post(updateJodi);
lotteryRouter.route("/getJodi/:lotteryName").get(getAllJodi);
lotteryRouter.route("/update-patti").post(updatePatti);
lotteryRouter.route("/getPatti/:lotteryName").get(getAllPatti);
lotteryRouter.route("/reset-data").post(deleteAllLotteries);
