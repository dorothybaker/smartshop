export const SelectedSkeleton = () => {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
      {[1, 2, 3, 4].map((item) => (
        <div className="w-[240px] flex flex-col gap-1" key={item}>
          <div className="w-full h-[260px] bg-gray-300 skeleton rounded-lg" />
          <div className="bg-gray-300 skeleton rounded-lg h-4" />
          <div className="bg-gray-300 skeleton rounded-lg h-4" />
        </div>
      ))}
    </div>
  );
};
