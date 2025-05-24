const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen opacity-90 bg-[#101828] backdrop-blur-md fixed inset-0">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
