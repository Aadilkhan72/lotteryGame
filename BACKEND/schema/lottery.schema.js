import mongoose from "mongoose";

const lotterySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    // Direct map for 0–9 cards
    cards: { type: Map, of: { type: Number, min: 0 },
      default: {}
    },

    jodi: { type: Map,of: { type: Number, min: 0 },
      default: {}
    },

    patti: { type: Map,of: { type: Number, min: 0 },
      default: {}
    }
  },
  { timestamps: true }
);

export default lotterySchema;