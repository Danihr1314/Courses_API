const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const UserCourses = db.define("user_courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
  },
});

module.exports = UserCourses;
