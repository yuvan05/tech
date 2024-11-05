import { categories } from '../data/categories';
import SectionHeader from './ui/SectionHeader';

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Browse Categories"
          subtitle="Explore our wide range of courses"
        />

        <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{category.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}