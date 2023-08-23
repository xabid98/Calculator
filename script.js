



 const calculator = document.getElementById('calculator')
 const keys = document.getElementById('calculator_keys')
 const display = document.getElementById('calculator_display')

 keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent             
        const previousKeyType = calculator.dataset.previousKeyType


        if (!action) {
            calculator.dataset.previousKey = 'number'

        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
        }

        if (action === 'decimal') {
        display.textContent = displayedNum + '.'
        calculator.dataset.previousKey = 'decimal'

        }
        const calculate = (n1, operator, n2) => {
            let result = ''
            
            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2)
              } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2)
              } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2)
              } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2)
              }
            return result
          }
          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
          }
        
          Array.from(key.parentNode.children)
          .forEach(k => k.classList.remove('is-depressed'))
      

          
          if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            
            display.textContent = calculate(firstValue, operator, secondValue)
            calculator.dataset.previousKey = 'calculate'

          }
          if (action === 'clear') {
            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
            calculator.dataset.previousKey = 'clear'
        }
          

    }
    const key = e.target
    const action = key.dataset.action


   if (action === 'decimal') {
     console.log('decimal key!')
   }
  
  
   if (action === 'calculate') {
     console.log('equal key!')
   }
 })