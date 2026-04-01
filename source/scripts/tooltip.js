document.addEventListener("mouseover", (e) => {
  const el = e.target.closest(".tooltip");
  if (!el) return;

  let tooltip = document.createElement("div");
  tooltip.className = "tooltip-box";
  tooltip.textContent = el.dataset.tooltip;

  document.body.appendChild(tooltip);

  const rect = el.getBoundingClientRect();

  tooltip.style.position = "fixed";
  tooltip.style.left = rect.left + "px";
  tooltip.style.top = rect.bottom + 5 + "px";

  el._tooltip = tooltip;
});

document.addEventListener("mouseout", (e) => {
  const el = e.target.closest(".tooltip");
  if (el && el._tooltip) {
    el._tooltip.remove();
    el._tooltip = null;
  }
});
