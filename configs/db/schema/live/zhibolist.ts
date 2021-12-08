import mongoose from "../../../../configs/db/mongo";

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, default: "默认直播名" },
    starttime: { type: Object, default: ["2008-09-01 17:28", ["2008-09-01 17:28"]] },
    group: { type: Object, default: ["所有人"] },
    power: { type: Object, default: [true, true] },
    signtime: { type: Object, default: [] },
    usersign: { type: Object, default: [] },
    like: { type: Object, default: [] },
    url: { type: String, default: "https://wowza.peer5.com/live/smil:bbb_abr.smil/playlist.m3u8" },
    ask: { type: Array, default: [] },
    a: { type: Number, default: 0 },
    b: { type: Number, default: 0 },
    c: { type: Number, default: 0 },
    d: { type: Number, default: 0 },
    md5id: { type: String, default: "" },

});


export const zhibolist = mongoose.model('zhibolist', UserSchema);
