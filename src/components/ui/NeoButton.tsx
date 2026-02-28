// src/components/ui/NeoButton.tsx
interface Props {
  children: React.ReactNode;
  variant?: 'black' | 'white' | 'blue';
  className?: string;
}

export const NeoButton = ({ children, variant = 'white', className }: Props) => {
  const styles = {
    black: 'bg-black text-white hover:bg-neo-green hover:text-black',
    white: 'bg-neo-white text-black hover:bg-neo-pink',
    blue: 'bg-neo-blue text-white hover:bg-black',
  };

  return (
    <button className={`border-2 border-black px-10 py-5 text-xl font-bold shadow-hard 
      hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};