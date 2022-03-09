/*
breadth first search algorithm - fnd the shortest path
*/

const grid = [
    0, 1, 1, 0,
    0, 0, 1, 0,
    1, 1, 1, 1,
    1, 1, 0, 0
]

// valid moves
const validMoves = [-1, 1, -4, 4]

// create list
/*
  '1': [ '2' ],
  '2': [ '1', '6' ],
  '6': [ '2', '10' ],
  '8': [ '9', '12' ],
  '9': [ '8', '10', '13' ],
  '10': [ '9', '11', '6' ],
  '11': [ '10', '12' ],
  '12': [ '11', '13', '8' ],
  '13': [ '12', '9' ]
*/

function adjacencyList(data, moves){
    // return map
    const map = new Map()
    
    // every element inside of the grid
    data.forEach((el, index) => {
        if (el == 1) {
            const arr = []
            // check valid indexes
            moves.forEach(move=>{
                if (data[index+move] == 1) {
                    arr.push(`${index+move}`)
                }
            })
            map[index] = arr
        }
    });
    return map
}
// implement list
let list = adjacencyList(grid, validMoves)

// find the shortest path 
function shortestePath(graph, start, end) {
    let queue = [start]
    let prev = {[start]: null}

    while (queue.length > 0) {
        let curr = queue.shift();

        if (curr === end) {
            let path = [];

            while (curr) {
                path.unshift(curr);
                curr = prev[curr];
            }

            return path;
        }

        if (curr in graph) {
            for (let v of graph[curr]) {
                if (!(v in prev)) {
                    prev[v] = curr;
                    queue.push(v);
                }
            }
        }
    }
}

// driver code
console.log(shortestePath(list, "1", "13"))
console.log(list)