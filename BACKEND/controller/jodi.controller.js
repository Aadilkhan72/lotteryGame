import { LotteryModel } from "../models/lottery.model.js";

export const updateJodi = async (req, res) => {
  try {
    const { lotteryName, jodi, finalAmt:amount } = req.body;

     //console.log(req.body);

    
    // console.log(amount);
    // res.json("working");
    // return ;

    if (!lotteryName || !jodi || !amount ) {
      return res.status(400).json({ message: "Invalid input" });
    }



     const twoDigitRegex = /^\d{2}$/;

    if (!twoDigitRegex.test(jodi)) {
      return res.status(400).json({
        message: "jodi must be exactly 2 digits (e.g., 12, 45)"
      });
    }


    await LotteryModel.updateOne(
      { name:lotteryName },
      {
       
        $inc: { [`jodi.${jodi}`]: amount }
      },
      { upsert: true }
    );

    res.status(200).json({ message: "Jodi updated successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllJodi = async (req, res) => {
  try {
    const { lotteryName } = req.params;
      
   // console.log("received");
    if (!lotteryName) {
      return res.status(400).json({ message: "Lottery name is required" });
    }

    const lottery = await LotteryModel.findOne({ name: lotteryName });

    if (!lottery) {
      return res.status(404).json({ message: "Lottery not found" });
    }

    // Convert Map → Array
    const jodiArray = Array.from(lottery.jodi.entries()).map(
      ([number, amount]) => ({
        number,
        amount,
      })
    );

    res.status(200).json(jodiArray);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};