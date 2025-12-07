let maze = [
  ["S", 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, "E"],
  [1, 1, 1, 0, 1],
];

// path: 이전에 지나왔던 길을 저장
function dfs(maze, position = [0, 0], path = []) {
  let [x, y] = position;

  if (maze[x][y] === "E") return [...path, position];

  let directions = [
    // 상하좌우로만 이동할 수 있다고 가정
    [0, 1], // 하
    [0, -1], // 상
    [1, 0], // 우
    [-1, 0], // 좌
  ];

  for (const [dx, dy] of directions) {
    let newX = x + dx,
      newY = y + dy;

    // 미로 밖으로 나가는 것을 방지한다.
    // 벽(1)이 아닌 위치로 이동한다.
    if (
      newX >= 0 &&
      newX < maze.length &&
      newY >= 0 &&
      newY < maze[0].length &&
      (maze[newX][newY] === 0 || maze[newX][newY] === "E")
    ) {
      maze[x][y] = 1; // 방문한 곳을 벽으로 처리하여 다시 가지 못하게 함

      let result = dfs(maze, [newX, newY], [...path, position]);

      if (result) return result;
    }
  }
  return null;
}

console.log(dfs(maze));
