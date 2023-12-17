import mongoose, { Schema, models } from "mongoose";

const recipeSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },


);

recipeSchema.virtual('AmountOfUsers').get(function () {
    return this.users.length
});



const Recipe = models.Recipe || mongoose.model("Recipe", recipeSchema)

export default Recipe