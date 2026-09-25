export const WaveDivider = ({ className = "text-white" }: { className?: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
    <svg className={`relative block w-full h-[100px] ${className}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
    </svg>
  </div>
);

export const SlantedDivider = ({ className = "text-white" }: { className?: string }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
    <svg className={`relative block w-full h-[100px] ${className}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
    </svg>
  </div>
);
