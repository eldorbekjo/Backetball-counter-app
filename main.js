// Home section

let count = 0;

let renderTexthome = document.getElementById("home_renderText");

function home_increase1() {
  count += 1;
  renderTexthome.textContent = count;
}
function home_increase2() {
  count += 2;
  renderTexthome.textContent = count;
}
function home_increase3() {
  count += 3;
  renderTexthome.textContent = count;
}

function resetHome() {
  renderTexthome.textContent = 0;
  count = 0;
}

// Guest section

let countL = 0;

let renderTextguest = document.getElementById("Guest_renderText");

function guest_increase1() {
  countL += 1;
  renderTextguest.textContent = countL;
}
function guest_increase2() {
  countL += 2;
  renderTextguest.textContent = countL;
}
function guest_increase3() {
  countL += 3;
  renderTextguest.textContent = countL;
}

function resetGuest() {
  countL = 0;
  renderTextguest.textContent = 0;
}
