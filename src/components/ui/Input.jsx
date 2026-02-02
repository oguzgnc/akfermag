import { cn } from '../../lib/utils';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-akfermag-blue focus:ring-2 focus:ring-akfermag-blue/20 outline-none transition-all",
        className
      )}
      {...props}
    />
  );
}
