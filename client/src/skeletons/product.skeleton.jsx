export const ProductSkeleton = () => {
  return (
    <div className="flex gap-4 sm:items-start sm:flex-row flex-col">
      <div className="bg-gray-300 skeleton rounded-lg md:h-[450px] sm:h-[400px] h-[300px] w-full sm:flex-1" />
      <div className="flex flex-col gap-3 sm:flex-1">
        <div className="h-9 bg-gray-300 rounded-lg skeleton" />
        <div className="h-5 bg-gray-300 rounded-lg skeleton" />
        <div className="h-16 bg-gray-300 rounded-lg skeleton" />
        <div className="h-16 bg-gray-300 rounded-lg skeleton" />
        <div className="h-16 bg-gray-300 rounded-lg skeleton" />
        <div className="h-9 bg-gray-300 rounded-lg skeleton" />
        <div className="h-9 bg-gray-300 rounded-lg skeleton" />
      </div>
    </div>
  );
};
