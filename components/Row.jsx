// const Row = ({ children, isLastRow, className }) => (
//   <div className={`grid grid-flow-col gap-4 lg:grid-cols-3 ${isLastRow ? "justify-center" : ""} ${className}`}>
//     {children}
//   </div>
// );

const Row = ({ children, isLastRow }) => (
  isLastRow
    ? (
      <div className="flex justify-center gap-10">
        {children}
      </div>
    )
    : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {children}
      </div>
    )
);

export default Row
