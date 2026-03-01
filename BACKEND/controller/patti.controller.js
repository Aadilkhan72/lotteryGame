import { LotteryModel } from "../models/lottery.model.js";

export const updatePatti = async (req, res) => {
  try {
    const { lotteryName, patti, finalAmt:amount } = req.body;

      console.log(req.body);

    
     console.log("amount = ",amount);
    // res.json("working");
    // return ;

    if (!lotteryName || !patti || !amount ) {
      return res.status(400).json({ message: "Invalid input" });


    }


    const threeDigitRegex = /^\d{3}$/;

    if (!threeDigitRegex.test(patti)) {
      return res.status(400).json({
        message: "patti must be exactly 3 digits (e.g., 123, 487)"
      });
    }

    await LotteryModel.updateOne(
      { name :lotteryName},
      {
       
        $inc: { [`patti.${patti}`]: amount }
      },
      { upsert: true }
    );

    res.status(200).json({ message: "Patti updated successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getAllPatti = async (req, res) => {
  try {
    const { lotteryName } = req.params;

    if (!lotteryName) {
      return res.status(400).json({ message: "Lottery name is required" });
    }

    const lottery = await LotteryModel.findOne({ name: lotteryName });

    if (!lottery) {
      return res.status(404).json({ message: "Lottery not found" });
    }

    const pattiArray = Array.from(lottery.patti.entries()).map(
      ([number, amount]) => ({
        number,
        amount,
      })
    );

    res.status(200).json(pattiArray);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

