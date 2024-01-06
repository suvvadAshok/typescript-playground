import invariant from "tiny-invariant";

addEventListener("load", () => {
  const value = document.getElementById("view");
  const inc = document.getElementById("incre");
  const dec = document.getElementById("decre");
  const reset = document.getElementById("reset");

  invariant(
    value instanceof HTMLElement &&
      inc instanceof HTMLElement &&
      dec instanceof HTMLElement &&
      reset instanceof HTMLElement
  );

  inc.addEventListener("click", () => {
    value.innerHTML = (Number(value.innerHTML) + 1).toString();
  });
  dec.addEventListener("click", () => {
    value.innerHTML = (Number(value.innerHTML) - 1).toString();
  });
  reset.addEventListener("click", () => {
    value.innerHTML = "0";
  });
});
