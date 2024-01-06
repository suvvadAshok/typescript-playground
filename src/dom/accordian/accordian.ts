addEventListener("load", () => {
  const part = document.getElementsByClassName("part");

  const cls = document.getElementsByClassName("cls");
  let i = 0;

  for (const e of part) {
    show(e as HTMLElement, cls[i++] as HTMLElement);
  }
});

function show(part1: HTMLElement, cls: HTMLElement) {
  part1.addEventListener("click", () => {
    cls.style.display = cls.style.display === "block" ? "none" : "block";
  });
}
