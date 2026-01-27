import { useNavigate } from 'react-router-dom';
import { usePageTransition } from '@/hooks/usePageTransition';

interface TransitionLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TransitionLink = ({ to, children, className, onClick }: TransitionLinkProps) => {
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    startTransition();
    
    // Aguarda a animação de fade out antes de navegar
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
    }, 700);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TransitionLink;
