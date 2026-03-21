function triggerShock(element) {
  // 1. Create the massive bolt burst (from previous step)
  createBolt(element, 15); 
  
  // 2. Target the body for the shake effect
  const body = document.querySelector('body');
  body.classList.add('apply-shake');
  
  // 3. Superheat the button color briefly
  element.style.backgroundColor = "#fff";
  element.style.boxShadow = "0 0 100px #ffaa00";

  // 4. Reset everything after 150ms
  setTimeout(() => {
    body.classList.remove('apply-shake');
    element.style.backgroundColor = "#000";
    element.style.boxShadow = "";
  }, 150);
}