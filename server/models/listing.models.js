import {model, Schema} from 'mongoose';

const ListingSchema = new Schema(
    {
      name: {
          type: String, 
          required: [true, "Name is required"],
          minlength: [3, "Min of 2 characters"],
          maxlength: [20, "Max length of 20 characters"]
      },
      price: {
          type: Number,
          required: [true, "Price is required"],
          min: [2, "Min of 2 minutes"],
          max: [240, "Max of 255 characters"]
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [2, "Min of 2 minutes"],
        max: [240, "Max of 255 characters"]
    },
    length: {
      type: Number,
      required: [true, "Length is required"]
    },
    width: {
      type: Number,
      required: [true, "width is required"]
    },
    height: {
      type: Number,
      required: [true, "height is required"]
    },
    weight: {
      type: Number,
      required: [true, "weight is required"]
    },
    imgUrl: {
      type: String,
      required: [true, "img is required"]
    },
    inCart: {
      type: Boolean
    }
    },
    {timestamps: true}
);

const Listing = model("Listing", ListingSchema);
export default Listing;