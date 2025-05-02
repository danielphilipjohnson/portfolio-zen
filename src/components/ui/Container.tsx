import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={cn('container max-w-5xl mx-auto px-6', className)}>
      {children}
    </div>
  );
};

export default Container; 