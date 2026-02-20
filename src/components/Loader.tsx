const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-secondary">
      {/* Pulsing leaf/droplet icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-[3px] border-primary/20 border-t-primary animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 h-7 text-primary animate-pulse"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.5 6 3 10.5 3 14a9 9 0 0 0 18 0c0-3.5-3.5-8-9-12Z"
              fill="currentColor"
              opacity="0.2"
            />
            <path
              d="M12 2C6.5 6 3 10.5 3 14a9 9 0 0 0 18 0c0-3.5-3.5-8-9-12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 16c-2-1.5-3-3.5-3-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight mb-1">
        Gowyiow
      </h2>
      <p className="text-sm text-muted-foreground tracking-widest uppercase">
        Skincare & Salon
      </p>
    </div>
  );
};

export default Loader;
