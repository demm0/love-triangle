/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n=0;
	let p=[]
	for (let i = 0; i < preferences.length; i++)
	{		p[i] = preferences[i];	}
	for (let i = 0; i < p.length; i++)
	{ 
	let b = i + 1;
	let c = p[i];
	let d = p[c-1];
	let e = p[d-1];
	  if (b == e) 
		{
		delete p[c-1];
		delete p[d-1];
		n++;
		}
	}
	return n;
  // your implementation
};
