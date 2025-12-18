class Counter {
  #count = 0;

  constructor(counters) {
    this.counters = Array.from(counters);
    this.count = Number(localStorage.getItem("count")) || 0;
  }

  set count(num) {
    this.#count = num;
    const displaytext = this.count === 6 || this.count === 7 ? "6 or 7" : this.count;
    for (let counter of this.counters) {
      counter.textContent = displaytext;
    }

    document.title = `(${this.count}) ${title_text}`

    localStorage.setItem("count",num)
  }

  get count() {
    return this.#count;
  }

  add(num = 1) {
    this.count = this.count + num;
  }
}

const title_text = document.querySelector("title").innerText;

let counter = new Counter(document.querySelectorAll(".counter"));

document.querySelector("#plus").onclick = () => {
  counter.add();
}

document.querySelector("#minus").onclick = (e) => {
  counter.add(-1);
}

document.addEventListener("onclick", (e) => {
  e.target.blur();
});

document.addEventListener("keydown", (e) => {
  if (document.activeElement == document.querySelector("h1")) {
    return
  }
  if (e.key == " " || e.key == "=" || e.key == "v") {
    counter.add();
  } else if (Number(e.key) == e.key && e.key != "0") {
    counter.add(Number(e.key));
  } else if (e.key == "0") {
    counter.count = 0;
  } else if (e.key == "-" || e.key == "c") {
    counter.add(-1);
  } else {
  console.log(e.key)}
})

document.querySelector("#setcount-button").addEventListener("click", () => { const num = prompt("Set count to:"); if (num) { counter.count = Number(num) } });
