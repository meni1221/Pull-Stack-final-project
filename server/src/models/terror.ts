import mongoose, { Document, Schema } from "mongoose";

// הממשק מגדיר את המבנה של הטרור
export interface ITerror extends Document {
  eventid: number;
  iyear: number;
  imonth: number;
  iday: number;
  country_txt: string;
  region_txt: string;
  city: string;
  latitude: number;
  longitude: number;
  attacktype1_txt: string;
  targtype1_txt: string;
  target1: string;
  gname: string;
  weaptype1_txt: string;
  nkill: number;
  nwound: number;
  ransomamt: number;
  summary:string
}

const TerrorSchema: Schema = new Schema(
  {
    eventid: {
      type: Number,
      required: true,
    },
    iyear: {
      type: Number,
      required: true,
    },
    imonth: {
      type: Number,
      required: false,
    },
    iday: {
      type: Number,
      required: false,
    },
    country_txt: {
      type: String,
      required: true,
    },
    region_txt: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    attacktype1_txt: {
      type: String,
      required: true,
    },
    targtype1_txt: {
      type: String,
      required: true,
    },
    target1: {
      type: String,
      required: true,
    },
    gname: {
      type: String,
      required: true,
    },
    weaptype1_txt: {
      type: String,
      required: false,
    },
    nkill: {
      type: Number,
      required: false,
    },
    nwound: {
      type: Number,
      required: false,
    },
    ransomamt: {
      type: Number,
      required: false,
    },
    summary:{
      type:String,
      required:false
    }
  },
);

export default mongoose.model<ITerror>("Terror", TerrorSchema);
