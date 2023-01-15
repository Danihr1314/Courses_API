const UserCourses = require("../models/userCourses.model");

class ucServices {
  static async create(course) {
    try {
      const result = await UserCourses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ucServices;
