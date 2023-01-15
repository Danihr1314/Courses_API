const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.model");
const Users = require("../models/users.models");

class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "firstName", "lastName", "email"],
        include: {
          model: UserCourses,
          as: "courses",
          attributes: ["courseId"],
          include: {
            model: Courses,
            as: "course",
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Users.update(field, {
        where: { id },
        attributes: ["firstName", "lastName", "password"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
