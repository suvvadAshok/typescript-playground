import invariant from "tiny-invariant";

addEventListener("load", () => {
  // const input = document.getElementById("input") as HTMLElement;
  const input = document.querySelector<HTMLInputElement>("#input");
  const button = document.querySelector<HTMLElement>("#btn");
  // const display = document.querySelector<HTMLElement>("#display");

  invariant(button && input, "put button");

  // input.addEventListener("input", () => {
  //   display.textContent = input.value;
  // });

  button.addEventListener("click", () => {
    if (input.value !== "") {
      const show = document.createElement("input");
      const text = document.createTextNode(input.value);
      show.appendChild(text);
      document.getElementById("store")?.appendChild(show);

      show.textContent = input.value;
      input.value = "";
    } else {
      alert("add something");
    }
  });
});
