export function gsRun(input, n) {
	let result = [];
	result[0] = [];
	result[0][1] = [];
	result[0][2] = [];
	
	// initialize all to free
	for(let i=0; i<n; i++) {
		result[0][1][i] = -1;
		result[0][2][i] = -1;
	}

	while(true){
		let woman = -1;
		let man = 0;
		let currentPreference = 0;
		// find first not-engaged man
		findloop:
		for(; man<n; man++){
			// if already engaged continue
			let unmarried = result[result.length-1][1][man];
			if(unmarried < 0) {
				// find most attractive woman he didn't yet propose to
				for(currentPreference = 0; currentPreference<n; currentPreference++){
				//for(let j=n-1; j>=0; j--){
					if(input[man][0][currentPreference]>=0){
						woman = input[man][0][currentPreference]-1;
						break findloop;
					}
				}
			}
		}
		//console.log("man: "+man+" woman: "+woman)
		// no woman left to propose to
		if(woman < 0){
			//console.log(result);
			return result.slice(1,result.length);
		}
		else {
			let currentMan = result[result.length-1][2][woman];
			// already engaged?
			if(currentMan >= 0){
				// better? (just look who comes first in the table)
				for(let i=0; i<n; i++){
					let nextPreference = input[woman][1][i]-1;
					// current man is better
					if(nextPreference === currentMan) {
						// remember rejection
						input[man][0][currentPreference] = -1;
						let lastIndex = result.length;
						result[lastIndex] = JSON.parse(JSON.stringify(result[lastIndex-1]));
						result[lastIndex][0] = [];
						result[lastIndex][0][0] = man;
						result[lastIndex][0][1] = woman;
						result[lastIndex][0][2] = 1;
						break;
					}
					// new man is better
					else if(nextPreference === man){
						// engage!
						// mark as proposed
						input[man][0][currentPreference] = -1;
						let lastIndex = result.length;
						result[lastIndex] = JSON.parse(JSON.stringify(result[lastIndex-1]));
						// unengage previous man
						result[lastIndex][1][currentMan] = -1;
						result[lastIndex][0] = [];
						result[lastIndex][0][0] = man;
						result[lastIndex][0][1] = woman;
						result[lastIndex][0][2] = 2;
						result[lastIndex][1][man] = woman;
						result[lastIndex][2][woman] = man; 			
						break;
					}
				}
			}
			// not engaged
			else {
				// engage!
				input[man][0][currentPreference] = -1;
				let lastIndex = result.length;
				result[lastIndex] = JSON.parse(JSON.stringify(result[lastIndex-1]));
				result[lastIndex][0] = [];
				result[lastIndex][0][0] = man;
				result[lastIndex][0][1] = woman;
				result[lastIndex][0][2] = 0;
				result[lastIndex][1][man] = woman;
				result[lastIndex][2][woman] = man; 
			}
		}
	}
}
