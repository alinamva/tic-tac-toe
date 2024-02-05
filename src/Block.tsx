import { useEffect, useRef, useState } from "react";
import circle from "/icons/circle.svg";
import cross from "/icons/cross.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Block() {
  let [count, setCount] = useState(0);
  const [matrix, setMatrix] = useState(["", "", "", "", "", "", "", "", ""]);
  const [stop, setStop] = useState(false);
  let titleRef = useRef(null);
  useEffect(() => {
    isWin();
  });

  const handleReset = () => {
    setStop(false);
    setCount(0);
    setMatrix(["", "", "", "", "", "", "", "", ""]);
    const allCells = document.querySelectorAll(".grid > div");
    allCells.forEach((cell) => {
      cell.innerHTML = "";
    });

    toast.dismiss();
  };

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>, num: number) => {
    if (!stop) {
      setCount((prevCount) => prevCount + 1);
      const target = e.target as HTMLDivElement;
      target.innerHTML =
        count % 2 === 0
          ? `<img src='${circle}' /> `
          : `<img src='${cross}' /> `;
      setMatrix((prevMatrix) => {
        const updatedMatrix = [...prevMatrix];
        updatedMatrix[num] = count % 2 === 0 ? "o" : "x";
        return updatedMatrix;
      });

      isWin();
    }
  };
  const isWin = () => {
    if (!stop) {
      console.log(stop);
      if (
        matrix[0] == "" ||
        matrix[1] == "" ||
        matrix[2] == "" ||
        matrix[3] == "" ||
        matrix[4] == "" ||
        matrix[5] == "" ||
        matrix[6] == "" ||
        matrix[7] == "" ||
        matrix[8] == ""
      ) {
        console.log("Loading");
      }
      if (
        matrix[0] !== "" &&
        matrix[0] == matrix[1] &&
        matrix[1] == matrix[2]
      ) {
        won(matrix[0]);
      } else if (
        matrix[3] !== "" &&
        matrix[3] == matrix[4] &&
        matrix[4] == matrix[5]
      ) {
        won(matrix[3]);
      } else if (
        matrix[6] !== "" &&
        matrix[6] == matrix[7] &&
        matrix[7] == matrix[8]
      ) {
        won(matrix[6]);
      } else if (
        matrix[6] !== "" &&
        matrix[0] == matrix[3] &&
        matrix[3] == matrix[6]
      ) {
        won(matrix[6]);
      } else if (
        matrix[7] !== "" &&
        matrix[1] == matrix[4] &&
        matrix[4] == matrix[7]
      ) {
        won(matrix[7]);
      } else if (
        matrix[8] !== "" &&
        matrix[2] == matrix[5] &&
        matrix[5] == matrix[8]
      ) {
        won(matrix[8]);
      } else if (
        matrix[0] !== "" &&
        matrix[0] == matrix[4] &&
        matrix[4] == matrix[8]
      ) {
        won(matrix[4]);
      } else if (
        matrix[2] !== "" &&
        matrix[2] == matrix[4] &&
        matrix[4] == matrix[6]
      ) {
        won(matrix[4]);
      }
    }
  };
  const won = (winner: string) => {
    setStop(true);
    if (winner === "x") {
      toast("Player X Won");
    } else if (winner === "o") {
      toast("Player O Won");
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 bg-primary min-h-screen text-center   justify-center">
      <ToastContainer />
      <h1 ref={titleRef}>Tic Tac Toe</h1>
      <div className="grid   grid-cols-3 gap-5 text-3xl ">
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 0)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 1)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 2)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 3)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 4)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 5)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 6)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 7)}
        ></div>
        <div
          className="cursor-pointer flex justify-center items-center size-32 rounded bg-secondary"
          onClick={(e) => handleToggle(e, 8)}
        ></div>
      </div>
      <button
        className="bg-main p-3 w-32 text-primary rounded"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Block;
