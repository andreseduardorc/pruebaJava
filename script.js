const h1 = document.querySelector('h1')

const result = document.querySelector('#resultado')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const form = document.querySelector('#form')


form.addEventListener('submit', sumaForm)

 function sumaForm (event){
    event.preventDefault()

 const suma = (parseInt(input1.value) + parseInt(input2.value))
      

result.innerHTML = "resultado:  " + suma

  
 }



 







