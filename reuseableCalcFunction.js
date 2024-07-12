
function getElementById(idName){
  const inputValueId = document.getElementById(idName)
  const inputValue1 = inputValueId.value
  const parse = parseFloat(inputValue1)
  return parse 
}


function calculateTriangle(){
    const b = getElementById('triangleB')
    const h = getElementById('triangleH')
    const area = .5 * b * h
    getAreaById(area)
}

function getAreaById(areaId, area){
    const areaId = document.getElementById(areaId)
    areaId.innerText = area; 
}