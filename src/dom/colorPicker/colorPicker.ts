addEventListener("load", () => {
  const r = document.getElementById("red") as HTMLInputElement;
  const g = document.getElementById("green") as HTMLInputElement;
  const b = document.getElementById("blue") as HTMLInputElement;
  const check = document.getElementById("check") as HTMLElement;

  r.addEventListener("input", () => {
    const colour = {
      red: Number(r.value),
      green: Number(g.value),
      blue: Number(b.value),
    };
    check.style.backgroundColor = `rgb(${colour.red},${colour.green}, ${colour.blue})`;
  });

  g.addEventListener("input", () => {
    const colour = {
      red: Number(r.value),
      green: Number(g.value),
      blue: Number(b.value),
    };
    check.style.backgroundColor = `rgb(${colour.red},${colour.green}, ${colour.blue})`;
  });

  b.addEventListener("input", () => {
    const colour = {
      red: Number(r.value),
      green: Number(g.value),
      blue: Number(b.value),
    };
    check.style.backgroundColor = `rgb(${colour.red},${colour.green}, ${colour.blue})`;
  });
});
