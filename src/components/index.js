//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){
	if(contains(rec1,rec2)){
		const relativeDim = relative(rec1,rec2);
		return {...rec1,children:[relativeDim]}
	}
	else if(contains(rec2,rec1)){
		const relativeDim = relative(rec2,rec1);
		return {...rec2,children:[relativeDim]}
	}
	else{
		return {...rec1}
	}

	//write your code
}
function relative(recA,recB){
	const recAn= normalize(recA);
	const recBn = normalize(recB);

	const res ={
		children:recB.children
	}
	if(recB.top){
		res.top= `${recBn.x1-recAn.x1}px`;
	}
	if(recB.left){
		res.left= `${recBn.y1-recAn.y2}px`;
	}
	if(recB.height){
		res.height = recB.height;
	}
	if(recB.width){
		res.width=recB.width;
	}
	if(recB.bottom){
		res.bottom= `${recAn.x2-recBn.x2}px`
	}
	if(recB.left){
		res.left= `${recAn.y2-recBn.y2}px`
	}

}
function contains(recA,recB){
	const recAn= normalize(recA);
	const recBn = normalize(recB);
	if (recAn.x1 <= recBn.x1
		&& recAn.y1 <= recBn.y1 
		&& recAn.x2 >= recBn.x2
		&& recAn.y2 >= recBn.y2
		){return true}
	else { return false}	
}
const W= 0;
const T=0;


function normalize(rec){
	return {
		x1:rec.top ? parseInt(rec.top): (T-(parseInt(rec.bottom)+parseInt(rec.height))),
		y1: rec.left ? parseInt(rec.left):(w-(parseInt(rec.right)+parseInt(rec.width))),
		x2: rec.bottom ? (T-parseInt(rec.bottom)): (parseInt(rec.top)+parseInt(rec.height)),
		y2: rec.right ? (W-parseInt(rec.right)): (parseInt(rec.left)+parseInt(rec.width))
	}
}

module.exports = updateStructure;
