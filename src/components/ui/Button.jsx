import { cn } from '../../lib/utils';

export function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    default: "bg-akfermag-green text-white hover:bg-akfermag-dark-green shadow-md hover:shadow-lg",
    outline: "border-2 border-akfermag-blue text-akfermag-blue hover:bg-akfermag-blue hover:text-white",
    ghost: "hover:bg-gray-100 text-gray-700",
    destructive: "bg-red-600 text-white hover:bg-red-700"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
