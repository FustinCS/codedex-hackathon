import './calendar.css';

let events = new Map();
events.set('Wed', ["6 pm (Indoors): Commander night"]);
events.set('Thu', ["7 pm: Modern", "7 pm: Flesh and Blood"]);
events.set('Sat', ["10:15 am: Draft", "11 am: Lorcana"]);

let display = document.querySelector(".display");
let days = document.querySelector(".days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let selected = document.querySelector(".selected");
let selectDisplay = document.querySelector(".display-selected");

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();

function displayCalendar() {
  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  const firstDayIndex = firstDay.getDay(); //4

  const numberOfDays = lastDay.getDate(); //31

  let formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });

  display.innerHTML = `${formattedDate}`;

  for (let x = 1; x <= firstDayIndex; x++) {
    const div = document.createElement("div");
    div.innerHTML += "";

    days.appendChild(div);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);

    div.dataset.date = currentDate.toDateString();

    div.innerHTML += i;
    days.appendChild(div);
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }
  }
}

// Call the function to display the calendar
displayCalendar();

previous.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  if (month < 0) {
    month = 11;
    year = year - 1;
  }

  month = month - 1;

  date.setMonth(month);

  displayCalendar();
  displaySelected();
});

next.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  if (month > 11) {
    month = 0;
    year = year + 1;
  }

  month = month + 1;
  date.setMonth(month);

  displayCalendar();
  displaySelected();
});

function displaySelected() {
  const dayElements = document.querySelectorAll(".days div");
  dayElements.forEach((day) => {
    day.addEventListener("click", (e) => {
      const selectedDate = e.target.dataset.date;
      const currentWeekDay = selectedDate.split(' ')[0];
      selectDisplay.replaceChildren();
      if (events.has(currentWeekDay)) {
        for (let currentEvent of events.get(currentWeekDay)) {
            const event = document.createElement('p');
            event.textContent = currentEvent;
            selectDisplay.appendChild(event);
        }
      }

      
    });
  });
}
displaySelected();