import { Star, Clock, Users } from 'lucide-react';
import { featuredCourses } from '../data/courses';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

export default function FeaturedCourses() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Courses"
          subtitle="Hand-picked courses by industry experts"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {course.instructor}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <div className="mt-3 flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-600">{course.students} students</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-600">{course.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  <Button>Enroll Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}