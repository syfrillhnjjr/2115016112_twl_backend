const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const UniversitasSchema = new Schema(
    {
      Universitas: String,
      TahunPendirian: String,
      Website: String,
      Alamat: String,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("universitas", UniversitasSchema);
};
