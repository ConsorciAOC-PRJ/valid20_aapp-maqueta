// Exceute JS on DOM load
document.addEventListener("DOMContentLoaded", () => {
    // Handle pasting the validation code
    document.addEventListener("paste", handlePaste);
    // Handle writing code by hand
    let inputs = document.querySelectorAll(".validation-input");
    // Handle moving to the next input
    inputs.forEach((input, index, arr) => {
      input.addEventListener("input", function (event) {
        if (input.value == "") {
          return;
        } else {
          arr[index + 1]?.focus();
        }
      });
      // Handle moving to the previous input when deleting
      input.addEventListener("keydown", function (event) {
        const key = event.key;
        if (key === "Backspace") {
          event.preventDefault();
          if (event.target.value == "") {
            arr[index - 1]?.focus();
          } else {
            event.target.value = "";
            arr[index - 1]?.focus();
          }
        }
        if (key === "Delete") {
          event.preventDefault();
          event.target.value = "";
        }
      });
    });
    // Show help message when clicking in button
    handleHelp();
  });
  
  function handlePaste(event) {
    if (event.target.localName != "input") return;
    event.preventDefault();
    let paste = (event.clipboardData || window.clipboardData).getData("text");
  
    let inputs = document.querySelectorAll(".validation-input");
    // Handle shorter and larger texts to copy
    // Get event target index
    let index = [...inputs].indexOf(event.target);
    let pasteIndex = 0;
    // While array and clipboard are not over, paste
    while (index < inputs.length && pasteIndex < paste.length) {
      inputs[index].value = paste[pasteIndex];
      pasteIndex++;
      index++;
    }
    //Focus the last input where pasted
    inputs[index - 1].focus();
  }
  
  function handleHelp() {
    let helpButton = document.querySelector(".help-button");
    let helpMessage = document.querySelector(".help-message");
  
    helpButton.addEventListener("click", () => {
      if (helpButton.getAttribute("aria-expanded") == "false") {
        helpButton.setAttribute("aria-expanded", "true");
        helpMessage.classList.add("show");
      } else {
        helpButton.setAttribute("aria-expanded", "false");
        helpMessage.classList.remove("show");
      }
    });
  }
  