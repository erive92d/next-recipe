import mongoose, { Schema, models } from "mongoose";

const basketSchema = new Schema(
    {
        recipes: [
            {
                type: Schema.Types.ObjectId,
                ref: "Recipe"
            }
        ],
        user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ,
        count: {
            type: Number
        }
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },


);


const Basket = models.Basket || mongoose.model("Basket", basketSchema)

export default Basket