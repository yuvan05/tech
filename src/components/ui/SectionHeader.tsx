interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        {subtitle}
      </p>
    </div>
  );
}