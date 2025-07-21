// LoadingScreen component placeholder
const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-4xl font-bold text-cyan-400 animate-pulse">
        TopNexel
      </div>
    </div>
  );
};

export default LoadingScreen;
