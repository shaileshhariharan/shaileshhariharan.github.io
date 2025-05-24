export const Transition = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};
