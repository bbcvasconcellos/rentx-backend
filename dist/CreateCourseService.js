"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ title, duration, educator }) {
        console.log(`Title: ${title}
      Duration: ${duration}
      Educator: ${educator}`);
    }
}
exports.default = new CreateCourseService();
