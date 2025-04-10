import { useEffect } from 'react';
import { PterodactylTutorial } from '../sections/PterodactylTutorial';

export default function PterodactylTutorialPage() {
  useEffect(() => {
    // Manual animation for sections
    const animateSections = () => {
      setTimeout(() => {
        document.querySelectorAll('.section-content').forEach((section) => {
          section.classList.add('visible');
        });
      }, 100);
    };
    
    animateSections(); // Trigger animations
  }, []);
  
  return (
    <PterodactylTutorial />
  );
}