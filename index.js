class Board {
	constructor() {}
	isWithinBoard(x, y) {
		return x < 8 && x >= 0 && y < 8 && y >= 0;
	}
	knightMoves(start, end) {
		const knightMoves = [
			[-2, -1],
			[-1, -2],
			[-2, 1],
			[-1, 2],
			[1, 2],
			[2, 1],
			[2, -1],
			[1, -2],
		];
		const [startX, startY] = start;
		const [endX, endY] = end;

		const queue = [[startX, startY, 0]];
		const visited = new Set([startX, startY].toString());

		while (queue.length) {
			const [currentX, currentY, moves] = queue.shift();
			if (currentX === endX && currentY === endY) {
				return moves;
			}
			for (const move of knightMoves) {
				const [newX, newY] = [currentX + move[0], currentY + move[1]];
				if (this.isWithinBoard(newX, newY) && !visited.has([newX, newY].toString())) {
					visited.add([newX, newY].toString());
					queue.push([newX, newY, moves + 1]);
				}
			}
		}
		return -1;
	}
}

const board = new Board();

console.log(board.knightMoves([3, 3], [4, 3]));
