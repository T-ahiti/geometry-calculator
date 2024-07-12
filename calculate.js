
document.getElementById('triangleButton').addEventListener('click', function(){
    const placeHolderB = document.getElementById('triangleB')
    const b = parseFloat(triangleB.value)
    const placeHolderH = document.getElementById('triangleH')
    const h = parseFloat(triangleH.value)
    const multiplication = .5 * b * h 
    
    placeHolderB.value = ''
    placeHolderH.value = ''

    const getArea = document.getElementById('areaCalc')
    getArea.innerText = multiplication
})

document.getElementById('rectangleButton').addEventListener('click', function(){
    const placeHolderW = document.getElementById('rectangleW')
    const w = parseFloat(rectangleW.value)
    const placeHolderL = document.getElementById('rectangleL')
    const l = parseFloat(rectangleL.value)
    const rectangleCalc = w * l

    placeHolderW.value = ''
    placeHolderL.value = ''

    const getArea = document.getElementById('areaCalc')
    getArea.innerText = rectangleCalc
})

document.getElementById('parallelogramButton').addEventListener('click', function(){
    const placeHolderB = document.getElementById('parallelogramB')
    const b = parseFloat(parallelogramB.value)
    const placeHolderH = document.getElementById('parallelogramH')
    const h = parseFloat(parallelogramH.value)
    const parallelogramCalc = b * h

    placeHolderB.value = ''
    placeHolderH.value = ''

    const getArea = document.getElementById('areaCalc')
    getArea.innerText = parallelogramCalc
})

document.getElementById('rhombusButton').addEventListener('click', function(){
    const placeHolderD1 = document.getElementById('rhombusD1')
    const d1 = parseFloat(rhombusD1.value)
    const placeHolderD2 = document.getElementById('rhombusD2')
    const d2 = parseFloat(rhombusD2.value)
    const rhombusCalc = .5 * d1 * d2

    placeHolderD1.value = ''
    placeHolderD2.value = ''

    const getArea = document.getElementById('areaCalc')
    getArea.innerText = rhombusCalc
})

document.getElementById('pentagonButton').addEventListener('click', function(){
    const placeHolderP = document.getElementById('pentagonP')
    const p = parseFloat(pentagonP.value)
    const placeHolderB = document.getElementById('pentagonB')
    const b = parseFloat(pentagonB.value)
    const pentagonCalc = p * b

    placeHolderP.value = ''
    placeHolderB.value = ''

    const getArea = document.getElementById('areaCalc')
    getArea.innerText = pentagonCalc
})

document.getElementById('ellipseButton').addEventListener('click', function(){
    const placeHolderA = document.getElementById('ellipseA')
    const a = parseFloat(ellipseA.value)
    const placeHolderB = document.getElementById('ellipseB')
    const b = parseFloat(ellipseB.value)
    const ellipseCalc = 3.141592653589793238462643383279502884197 * a * b

    placeHolderA.value = ''
    placeHolderB.value = ''

    const getArea = document.getElementById('areaCalc')
    getArea.innerText = ellipseCalc
})