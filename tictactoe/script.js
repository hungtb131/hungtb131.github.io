let n = +prompt("Nhập kích thước ");
var end = false;
var count = 0;
var turn = "X";
next.textContent = "Player: " + turn;

var click = function (e) {
  if (!end) {
    e.currentTarget.textContent = turn;
    let rowIndex = this.parentElement.rowIndex;
    let cellIndex = this.cellIndex;

    if (horizonal(turn,rowIndex,cellIndex) || vertical(turn,rowIndex,cellIndex) || diagonal(turn,rowIndex,cellIndex)||subDiagonal(turn,rowIndex,cellIndex)){
      end = !end;
      next.textContent = "Winner: " + turn;
      reset.hidden = false;
      return;
    }
    count++;
    turn = turn == "X" ? "O" : "X";
    next.textContent = "Player: " + turn;
  }

  if (count == n * n) {
    end = !end;
    next.textContent = "All loser 🤣";
    reset.hidden = false;
  }
};

function createRow() {
  var tr = document.createElement("tr");

  for (var i = 0; i < n; i++) {
    var td = document.createElement("td");
    td.addEventListener("click", click, { once: true });
    tr.append(td);
  }

  return tr;
}

function createBoard() {
  var fr = new DocumentFragment();

  for (var i = 0; i < n; i++) {
    fr.append(createRow());
  }

  return fr;
}

board.append(createBoard());

function horizonal(turn, rowIndex, cellIndex) {
  let countHorizonal = 1;
  for (let i = cellIndex - 1; i >= 0; i--) {
    if (board.rows[rowIndex].cells[i].textContent == turn) {
      countHorizonal++;
      if (countHorizonal == 5) return true;
    } else break;
  }
  for (let i = cellIndex + 1; i < n - 1; i++) {
    if (board.rows[rowIndex].cells[i].textContent == turn) {
      countHorizonal++;
      if (countHorizonal == 5) return true;
    } else break;
  }
  return false;
}

function vertical(turn, rowIndex, cellIndex) {
  let countVertical = 1;
  for (let i = rowIndex - 1; i >= 0; i--) {
    if (board.rows[i].cells[cellIndex].textContent == turn) {
      countVertical++;
      if (countVertical == 5) return true;
    } else break;
  }
  for (let i = rowIndex + 1; i < n - 1; i++) {
    if (board.rows[i].cells[cellIndex].textContent == turn) {
      countVertical++;
      if (countVertical == 5) return true;
    } else break;
  }
  return false;
}
function diagonal(turn, rowIndex, cellIndex) {
  let countDiagonal = 1;
  //check nửa trên
  for (
    let row = rowIndex - 1, cell = cellIndex - 1;
    row >= 0 && cell >= 0;
    cell--, row--
  ) {
    if (board.rows[row].cells[cell].textContent == turn) {
      countDiagonal++;
      if (countDiagonal == 5) return true;
    } else break;
  }
  //check nửa dưới
  for (
    let row = rowIndex + 1, cell = cellIndex + 1;
    row < n && cell < n;
    cell++, row++
  ) {
    if (board.rows[row].cells[cell].textContent == turn) {
      countDiagonal++;
      if (countDiagonal == 5) return true;
    } else break;
  }
  //return

  return false;
}
function subDiagonal(turn, rowIndex, cellIndex) {
  let countSubDiagonal = 1;
  //check nửa trên
  for (
    let row = rowIndex - 1, cell = cellIndex + 1;
    row >= 0 && cell <n;
    cell++, row--
  ) {
    if (board.rows[row].cells[cell].textContent == turn) {
      countSubDiagonal++;
      if (countSubDiagonal == 5) return true;
    } else break;
  }
  //check nửa dưới
  for (
    let row = rowIndex + 1, cell = cellIndex - 1;
    row < n && cell >= 0;
    cell--, row++
  ) {
    if (board.rows[row].cells[cell].textContent == turn) {
      countSubDiagonal++;
      if (countSubDiagonal == 5) return true;
    } else break;
  }
  //return

  return false;
}
// function diagonal() {

// }
reset.addEventListener("click", function () {
  board.innerHTML = "";
  board.append(createBoard());
  end = !end;
  count = 0;
  turn = "X";
  next.textContent = "Player: " + turn;
  this.hidden = true;
});
