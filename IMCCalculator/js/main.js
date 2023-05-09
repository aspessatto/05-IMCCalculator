import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import  { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
let inputWeight = document.querySelector('#weight')
let inputHeight = document.querySelector('#height')

form.oninput = () => AlertError.close()
form.onsubmit = handleSubmit

function handleSubmit (e) {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage (result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
  weight = ""
  height = ""
}

