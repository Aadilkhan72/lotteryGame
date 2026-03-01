

import { LotteryModel } from "../models/lottery.model.js";

export const updateCard = async (req, res) => {
  try {
    console.log("received");
    const { lotteryName, cardNumber, finalAmt:amount } = req.body;

    // console.log(req.body);
    // console.log(amount);
    // res.json("working");

    // return;

    // Basic validation
    if (!lotteryName || cardNumber === undefined || amount === undefined ) {
      return res.status(400).json({ message: "Invalid input" });


    }

      console.log(lotteryName);
    console.log(cardNumber);
    console.log(amount);

    // Ensure card is single digit 0–9
    if (!/^[0-9]$/.test(String(cardNumber))) {
      return res.status(400).json({ message: "Card must be a digit between 0-9" });
    }

    await LotteryModel.updateOne(
      { name:lotteryName },
      {
        $inc: { [`cards.${cardNumber}`]: amount }
      },
      { upsert: true }
    );

    res.status(200).json({ message: "Card updated successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};



export const getAllCards = async (req, res) => {
  try {
    const { lotteryName } = req.params;
    console.log("received");

    if (!lotteryName) {
      return res.status(400).json({ message: "Lottery name is required" });
    }

    const lottery = await LotteryModel.findOne({ name: lotteryName });

    if (!lottery) {
      return res.status(404).json({ message: "Lottery not found" });
    }

    // Convert Map → Array
    const cardsArray = Array.from(lottery.cards.entries()).map(
      ([number, amount]) => ({
        number,
        amount,
      })
    );

    res.status(200).json(cardsArray);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};




