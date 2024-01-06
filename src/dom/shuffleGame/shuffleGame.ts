import { map, pipe } from "@lib";

addEventListener("load", () => {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for (let i = 0; i < numArr.length; i++) {
    const j = Math.floor(Math.random() * i);
    if (i !== j) {
      const temp = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = temp;
    }
  }

  const strArray = [
    ...pipe(
      numArr,
      map(i => `${i}`)
    ),
  ];
  strArray[15] = " ";

  for (let i = 0; i < 16; i++) {
    const newBox = document.createElement("div");
    const putNum = document.createTextNode(strArray[i]);
    newBox.appendChild(putNum);
    document.getElementById("box")?.appendChild(newBox);
    newBox.className = "b";
    newBox.id = i.toString();
  }

  const boxes = document.getElementById("box") as HTMLElement;
  const boxEle = [...boxes.children] as HTMLElement[];
  boxEle[15].id = "15";

  for (const numele of boxEle) {
    numele.addEventListener("click", () => {
      givePossibilities(numele);
    });
  }
});
const reset = document.getElementById("reset") as HTMLElement;
reset.addEventListener("click", () => {
  location.reload();
});

function givePossibilities(numEle: HTMLElement) {
  const possibilities: HTMLElement[] = [];
  const index = Number(numEle.id);
  if (index + 1 < 16 && Math.floor(index / 4) === Math.floor((index + 1) / 4)) {
    possibilities.push(
      document.getElementById((index + 1).toString()) as HTMLElement
    );
  }
  if (index - 1 >= 0 && Math.floor(index / 4) === Math.floor((index - 1) / 4)) {
    possibilities.push(
      document.getElementById((index - 1).toString()) as HTMLElement
    );
  }
  if (index - 4 >= 0) {
    possibilities.push(
      document.getElementById((index - 4).toString()) as HTMLElement
    );
  }
  if (index + 4 < 16) {
    possibilities.push(
      document.getElementById((index + 4).toString()) as HTMLElement
    );
  }
  for (const ele of possibilities) {
    if (ele.innerText === "") {
      swap(ele, numEle);
    }
  }
}

function swap(numEle: HTMLElement, target: HTMLElement) {
  [numEle.innerText, target.innerText] = [target.innerText, numEle.innerText];

  const boxes = document.getElementById("box") as HTMLElement;
  const boxEle = [...boxes.children] as HTMLElement[];
  isGameOver(boxEle);
}
let count = 0;

function isGameOver(boxEle: HTMLElement[]) {
  const counts = document.getElementById("count") as HTMLElement;
  let i = 0;
  for (const box of boxEle) {
    if (Number(box.id) + 1 === Number(box.innerHTML)) {
      ++i;
    } else {
      count++;
      counts.innerHTML = count.toString();
      break;
    }
  }
  if (i === 15) {
    stop(boxEle);
  }
}

function stop(boxEle: HTMLElement[]) {
  for (const box of boxEle) {
    box.setAttribute("style", "pointer-events:none; color: green;");
  }
}
