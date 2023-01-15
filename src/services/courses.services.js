const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCV() {
    try {
      const result = await Courses.findAll({
        attributes: ["title", "description", "instructor"],
        include: {
          model: Categories,
          as: "category",
          attributes: ["name"],
          include: {
            model: Courses,
            as: "course",
            attributes: ["id"],
            include: {
              model: Videos,
              as: "video",
              attributes: ["title", "url"],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, {
        where: { id },
        attributes: ["description"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
