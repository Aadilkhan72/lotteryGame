import { LotteryModel } from "../models/lottery.model.js";

export const deleteAllLotteries = async (req, res) => {
  try {
    let {pass}=req.body;

    pass=Number(pass);

    if(!pass){
      res.status(404).json({message:"Please enter password"});
      return;
    }
   

    if (pass!==2411){
       res.status(400).json({message:"Wrong password"});
       return ;
    }
    const result = await LotteryModel.deleteMany({});

     

    res.status(200).json({
      message: "All lotteries deleted successfully",
      deletedCount: result.deletedCount
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};