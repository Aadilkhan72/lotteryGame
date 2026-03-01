import mongoose  from "mongoose";
import lotterySchema  from "../schema/lottery.schema.js";

export const LotteryModel = mongoose.model("Lottery", lotterySchema);