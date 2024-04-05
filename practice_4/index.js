/* eslint-disable no-undef */
document.querySelectorAll("#label_points circle").forEach((circle) => {
  const x = circle.attributes.cx.value;
  const y = circle.attributes.cy.value;

  const labelId = circle.getAttribute("class").replaceAll(" ", "-");

  const div = document.createElement("div");
  div.classList.add("tooltip");
  div.style.left = `${+x + 30}px`;
  div.style.top = `${y}px`;
  div.id = labelId;
  div.textContent = circle.getAttribute("class");
  document.body.appendChild(div);

  circle.addEventListener("mouseover", () => {
    const correspondingLabel = document.querySelector(`#${labelId}`);
    correspondingLabel.style.visibility = "visible";
  });

  circle.addEventListener("mouseout", () => {
    const correspondingLabel = document.querySelector(`#${labelId}`);
    correspondingLabel.style.visibility = "hidden";
  });
});
