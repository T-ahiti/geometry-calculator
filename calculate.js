
document.getElementById('triangleButton').addEventListener('click', function(){
    const placeHolderB = document.getElementById('triangleB')
    const b = parseFloat(triangleB.value)
    const placeHolderH = document.getElementById('triangleH')
    const h = parseFloat(triangleH.value)
    const multiplication = .5 * b * h 
    
    placeHolderB.value = ''
    placeHolderH.value = ''
    
})