function record(scores = []) {
	let max = scores[0];
	let min = scores[0];
	let maxCount = 0;
	let minCount = 0;
	
	for (const score of scores) {
		if (score > max) {
			maxCount += 1;
			max = score;
		} else if (score < min) {
			minCount += 1;
			min = score;
		}
	}

	return [maxCount, minCount];
}

record([0, 9, 3, 10, 2, 20]);