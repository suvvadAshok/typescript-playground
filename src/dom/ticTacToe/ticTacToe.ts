import invariant from "tiny-invariant";

addEventListener("load", () => {
  const boxes = [...document.getElementsByClassName("box")] as HTMLElement[];
  let count = 0;
  for (const box of boxes) {
    box.addEventListener("click", () => {
      if (box.innerText === "") play(box, count++);
      checkWinner(boxes, box);
    });
  }

  const reset = document.querySelector<HTMLButtonElement>("#reset");
  invariant(reset);

  reset.addEventListener("click", () => {
    count = 0;
    for (const box of boxes) {
      box.innerText = "";
    }
    for (const box of boxes) {
      box.removeAttribute("style");
    }
    const win = document.getElementById("winner") as HTMLElement;
    win.innerText = "";
  });
});

function play(e: HTMLElement, count: number) {
  e.innerText = count % 2 === 0 ? "X" : "O";
}

const result = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(boxes: HTMLElement[], winner: HTMLElement) {
  for (const resEle of result) {
    if (resEle.includes(Number(winner.id))) {
      boxes[resEle[0]].innerText === boxes[resEle[1]].innerText &&
      boxes[resEle[0]].innerText === boxes[resEle[2]].innerText
        ? stop(boxes, winner)
        : 0;
    }
  }
}

function stop(boxes: HTMLElement[], winner: HTMLElement) {
  for (const box of boxes) {
    box.setAttribute("style", "pointer-events:none;");
  }
  const win = document.getElementById("winner") as HTMLElement;
  win.innerText = winner.innerText;
}
