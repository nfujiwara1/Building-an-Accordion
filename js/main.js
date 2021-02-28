
// practice02
// const accordions = document.querySelectorAll('.accordion')

// accordions.forEach(function(accordion){
//   const accordionHeader = accordion.querySelector('.accordion__header')

//   accordionHeader.addEventListener('click', function(){
//     accordion.classList.toggle('is-open')
//   })
// })


// const accordions = document.querySelectorAll('.accordion')

// accordions.forEach(function(accordion){
//   const accordionHeader = accordion.querySelector('.accordion__header')
 
//   accordionHeader.addEventListener('click', function(){
//     openAccordions(accordion)
//   })
// })


// function openAccordions(openAcc){
//   openAcc.classList.toggle('is-open')
//   // console.log('hi')
// }

// Practice03
// const accordions = document.querySelectorAll('.accordion')

// accordions.forEach(function(accordion){
//   const accordionHeader = accordion.querySelector('.accordion__header')
//   console.log(accordion)
//   console.log(accordionHeader)
//   accordionHeader.addEventListener('click', function(){
//     accordion.classList.toggle('is-open')
//   })
// })

// Practice04
// const accordions = document.querySelectorAll('.accordion') // Select all accordion parents

// accordions.forEach(function(accordion){
//   const accordionHeader = accordion.querySelector('.accordion__header') // Select the accordion and its corresponding header to open
//   console.log(accordion) // accordion element to be selected
//   console.log(accordionHeader) // accordion header eleemnt to be selected
//   accordionHeader.addEventListener('click', function(e){ // add eventlistner to the accordion header element
//     accordion.classList.toggle('is-open') // add/remove 'is-open' class to the accordion element to open/clsoe the content
//     console.log(e.target)
//   })
// })

// Event Delegation
// const accordionContainer = document.querySelector('.accordion-container')

// accordionContainer.addEventListener('click', function(e){
//   const accordionHeader = e.target.closest('.accordion__header')
//   if(accordionHeader){
//     const accordion = accordionHeader.parentElement
//     accordion.classList.toggle('is-open')
//     console.log(accordion)
//     console.log(accordionHeader)
//     console.log(e.target)
//   }
// })

// event delegation practice

const accordionContainer = document.querySelector('.accordion-container') // select the parent elemnt of accordions which is the element the event listener needs to be atatched to

accordionContainer.addEventListener('click', function(e){
  const accordionHeader = e.target.closest('.accordion__header') // to check if the accordion_header is an ancestor of the event target
  if(accordionHeader){
    const accordion = accordionHeader.parentElement // parent element of the accordion header where 'is-open" needs to be added/removed
    accordion.classList.toggle('is-open') // add/remove 'is-open' class
  }
})
