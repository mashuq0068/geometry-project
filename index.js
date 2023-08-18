function firstInputField(input1){
    
const inputOne = document.getElementById(input1)
const inputOneString = inputOne.value
const inputOneValue = parseFloat(inputOneString)
return inputOneValue;
}
function secondInputField(input2){
const inputTwo = document.getElementById(input2)
const inputTwoString = inputTwo.value
const inputTwoValue = parseFloat(inputTwoString)
return inputTwoValue;
}
function multiplicationWith05( input1Value , input2Value){
    
const finalResult = 0.5*parseFloat(input1Value)*parseFloat(input2Value);


return finalResult;
}
function onlyMultiplication(input1 , input2){
const result = input1*input2;

   
return result;
}
function multiplicationWithPy(input1 , input2){
   
const result =3.1416 * input1*input2;
return result;
}
 
function areaResult(idArea , areaResult){
    if(isNaN(areaResult)){
        alert("Invalid! Please put only numbers__ and fill up the both inputs")
        return;
      } 
    const finalArea = document.getElementById(idArea);
    finalArea.innerText =  areaResult;
}



const triangleCalc = document.getElementById("triangle-calc")

triangleCalc.addEventListener("click" , function(){
    const first = firstInputField("triangle-input1")
    const second = secondInputField("triangle-input2")
    
    
    const triangleResult = multiplicationWith05(first , second)
    const triangleFinalResult = areaResult("triangle-area" , triangleResult);
    return triangleFinalResult;


})
// const triangleResult = multiplicationWith05( first , second);
// areaValue.innerText = triangleResult;
const rhombusCalc = document.getElementById("rhombus-calc")
rhombusCalc.addEventListener("click" , function(){
    const rhombusFirst = firstInputField("rhombus-input1nst")
    const  rhombusSecond =secondInputField("rhombus-input2")
    const rhombusResult = multiplicationWith05(rhombusFirst , rhombusSecond )
    const rhombusAreaResult = areaResult("rhombus-area" , rhombusResult);
    return rhombusAreaResult;
})
const pentagonCalc = document.getElementById("pentagon-calc")
pentagonCalc.addEventListener("click" , function(){
const first = firstInputField("pentagon-input1")
const second = firstInputField("pentagon-input2")
const pentagonResult = multiplicationWith05(first , second)
const pentagonAreaResult = areaResult("pentagon-area" , pentagonResult);
return pentagonAreaResult;

}
)
const rectangleCalc = document.getElementById("rectangle-calc")


rectangleCalc.addEventListener("click" , function(){
    const rectangleFirst = firstInputField("rectangle-input1")
    const rectangleSecond = secondInputField("rectangle-input2")
     const rectangleResult = onlyMultiplication(rectangleFirst , rectangleSecond) 
     const rectangleAreaResult = areaResult("rectangle-area" , rectangleResult)
    return rectangleAreaResult;
    
})
const parallelogramCalc = document.getElementById("parallelogram-calc")
parallelogramCalc.addEventListener("click" , function(){
    const parallelogramFirst = firstInputField("parallelogram-input1")
    const parallelogramSecond = secondInputField("parallelogram-input2")
const parallelogramResult = onlyMultiplication(parallelogramFirst , parallelogramSecond) 
     const parallelogramAreaResult = areaResult("parallelogram-area" , parallelogramResult)
    return parallelogramAreaResult;
})
const ellipseCalc = document.getElementById("ellipse-calc")
ellipseCalc.addEventListener("click" , function(){
    const ellipseFirst = firstInputField("ellipse-input1")
    const ellipseSecond = secondInputField("ellipse-input2")
const ellipseResult = multiplicationWithPy(ellipseFirst , ellipseSecond) 
     const ellipseAreaResult = areaResult("ellipse-area" , ellipseResult)
    return ellipseAreaResult;
})


