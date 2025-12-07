const graph = {
  상훈: ["철수", "영희"],
  철수: ["상훈", "영철"],
  영희: ["상훈", "희재", "민식"],
  영철: ["철수"],
  희재: ["영희", "수연"],
  민식: ["영희", "희재"],
  수연: ["희재", "지희"],
  지희: ["수연"],
};

function bfs(graph, startNode) {
  const visited = {}; // 방문한 정점을 저장할 객체
  const queue = []; // 탐색할 정점을 저장할 큐

  visited[startNode] = true; // 시작 정점을 방문 처리
  queue.push(startNode); // 시작 정점을 큐에 추가

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 정점을 하나씩 추출
    console.log(node);

    const adjacentNodes = graph[node]; // 인접한 정점들을 가져온다.

    for (let i = 0; i < adjacentNodes[i]; i++) {
      const adjacentNode = adjacentNodes[i];

      if (!visited[adjacentNode]) {
        // 방문하지 않은 정점인 경우
        visited[adjacentNode] = true; // 방문 처리
        queue.push(adjacentNode); // 큐에 추가
      }
    }
  }
}

bfs(graph, "상훈");
