export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative w-20 h-20">
        <span className="absolute left-1/2 bottom-0 w-16 h-16 rounded-full bg-primary transform -translate-x-1/2 -translate-y-full scale-0 animate-push"></span>
        <span className="absolute left-1/2 bottom-0 w-16 h-16 rounded-full bg-primary transform -translate-x-1/2 -translate-y-full scale-0 animate-push animation-delay-1000"></span>
      </div>
    </div>
  );
};
