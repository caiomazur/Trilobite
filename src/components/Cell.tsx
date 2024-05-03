import trilobiteImageO from "../assets/images/trolotictacO2.webp";
import trilobiteImageX from "../assets/images/trilotictacX.webp";

interface CellProps {
  type: string; // The content of the cell ("X", "O", or null)
  onClick?: () => void; // Optional click handler function
}

// Cell component for rendering individual cells of the Tic Tac Toe board
const Cell: React.FC<CellProps> = ({ type, onClick }) => {
  return (
    <button
      className="w-full h-[133px] flex justify-center items-center border-4 border-white text-white border-double text-[42px] bg-transparent rounded-md shadow-2xl"
      onClick={onClick} // Handles cell clicks
    >
      {type === "X" ? (
        <img
          src={trilobiteImageX}
          alt="Trilobite"
          className="border-4 border-white rounded-full border-double "
          style={{ maxWidth: "70%", maxHeight: "70%" }}
        />
      ) : type === "O" ? (
        <img
          src={trilobiteImageO}
          alt="Trilobite"
          className="border-4 border-white rounded-full border-double "
          style={{ maxWidth: "70%", maxHeight: "70%" }}
        />
      ) : null}
    </button>
  );
};

export default Cell;