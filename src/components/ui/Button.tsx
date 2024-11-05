interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm';
  
  const variants = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
    secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
    danger: 'text-white bg-red-600 hover:bg-red-700'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}