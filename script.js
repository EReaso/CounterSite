class Counter {
  #count = 0;

  constructor(counters) {
    this.counters = Array.from(counters);
    this.count = Number(localStorage.getItem("count")) || 0;
  }

  set count(num) {
    this.#count = num;
    for (let counter of this.counters) {
      counter.textContent = this.count;
    }
    localStorage.setItem("count",num)
  }

  get count() {
    return this.#count;
  }

  add(num = 1) {
    this.count = this.count + num;
  }
}

let counter = new Counter(document.querySelectorAll(".counter"));

document.querySelector("#plus").onclick = () => {
  counter.add();
}

document.querySelector("#minus").onclick = () => {
  counter.add(-1);
}

document.addEventListener("keydown", (e) => {
  if (document.activeElement == document.querySelector("h1")) {
    return
  }
  if (e.key == " " || e.key == "=") {
    counter.add();
  } else if (Number(e.key) == e.key && e.key != "0") {
    counter.add(Number(e.key));
  } else if (e.key == "0") {
    counter.count = 0;
  } else if (e.key == "-") {
    counter.add(-1);
  }
})
