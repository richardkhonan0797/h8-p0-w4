/**
 * ===================
 * Tic Tac Toe Checker
 * ===================
 *
 * Buatlah sebuah fungsi untuk mengecek suatu papan TicTacToe dan mencari siapakah pemenangnya (jika ada).
 * Jika tidak ada pemenang, maka hasilnya adalah DRAW.
 * Pemenang ditentukan dari karakter O atau X yang muncul berurutan dan membentuk garis secara:
 * 1. Horizontal
 * 2. Vertikal
 * 3. Diagonal.
 * Dan akan dinyatakan seri (draw) ketika tidak ada yang berhasil
 * membuat garis dalam papan tersebut.
 *
 * X WIN:
 * [[x,o,x],
 *  [x,x,o],
 *  [o,o,x]]
 *
 *  O WIN:
 * [[o,o,x],
 *  [x,o,x],
 *  [x,x,o]]
 *
 *  DRAW:
 *  [[x,x,o],
 *   [o,o,x],
 *   [x,o,x]]
 *
 *   O WIN:
 *  [[o,o,x],
 *   [x,x,o],
 *   [o,o,o]]
 *
 *   X WIN:
 *  [[x,o,x],
 *   [o,o,x],
 *   [o,x,x]]
 *
 *   DRAW:
 *  [[o,x,o],
 *   [x,x,o],
 *   [x,o,x]]
 *
 *   O WIN:
 *   [[x,x,o],
 *    [o,o,x],
 *    [o,x,x]]
 *
 * RULES:
 * - Dilarang menggunakan built-in functions kecuali push dan unshift.
 * - Boleh membuat function lain selain yang ada di skeleton code.
 */

function cariPemenang(board) {
  // horizontal
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2]) {
        if (board[i][j] === "x") {
          return "X WIN";
        } else {
          return "O WIN";
        }
      }
    }
  }

  //vertikal
  for(let i=0;i<board.length;i++){
    if(board[0][i]=== board [1][i] && board[0][i] === board [2][i]){
      if(board[0][i] === 'x'){
        return "X WIN"
      }else{
        return "O WIN"
      }
    }
  }

  // diagonal
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      if (
        board[i][j] === board[i + 1][j + 1] &&
        board[i][j] === board[i + 2][j + 2]
      ) {
        if (board[i][j] === "x") {
          return "X WIN";
        } else {
          return "O WIN";
        }
      }
    }
  }

  //diagonal
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      if (
        board[i][j + 2] === board[i + 1][j + 1] &&
        board[i + 2][j] === board[i][j+2]
      ) {
        if (board[i][j+2] === "x") {
          return "X WIN";
        } else {
          return "O WIN";
        }
      }
    }
  }
  return "DRAW";
}

console.log(cariPemenang([["x", "o", "x"], ["x", "x", "o"], ["o", "o", "x"]])); //X WIN
console.log(cariPemenang([["o", "o", "x"], ["x", "o", "x"], ["x", "x", "o"]])); //O WIN
console.log(cariPemenang([["x", "x", "o"], ["o", "o", "x"], ["x", "o", "x"]])); //DRAW
console.log(cariPemenang([["o", "o", "x"], ["x", "x", "o"], ["o", "o", "o"]])); //O WIN
console.log(cariPemenang([["x", "o", "x"], ["o", "o", "x"], ["o", "x", "x"]])); //X WIN
console.log(cariPemenang([["o", "x", "o"], ["x", "x", "o"], ["x", "o", "x"]])); //DRAW
console.log(cariPemenang([["x", "x", "o"], 
                          ["o", "o", "x"], 
                          ["o", "x", "x"]])); //O WIN
