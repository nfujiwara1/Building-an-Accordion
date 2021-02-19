
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
const accordions = document.querySelectorAll('.accordion') // Select all accordion parents

accordions.forEach(function(accordion){
  const accordionHeader = accordion.querySelector('.accordion__header') // Select the accordion and its corresponding header to open
  console.log(accordion) // accordion element to be selected
  console.log(accordionHeader) // accordion header eleemnt to be selected
  accordionHeader.addEventListener('click', function(){ // add eventlistner to the accordion header element
    accordion.classList.toggle('is-open') // add/remove 'is-open' class to the accordion element to open/clsoe the content
  })
})