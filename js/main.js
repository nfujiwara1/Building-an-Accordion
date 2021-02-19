
// practice02
// const accordions = document.querySelectorAll('.accordion')

// accordions.forEach(function(accordion){
//   const accordionHeader = accordion.querySelector('.accordion__header')

//   accordionHeader.addEventListener('click', function(){
//     accordion.classList.toggle('is-open')
//   })
// })


const accordions = document.querySelectorAll('.accordion')

accordions.forEach(function(accordion){
  const accordionHeader = accordion.querySelector('.accordion__header')
 
  accordionHeader.addEventListener('click', function(){
    openAccordions(accordion)
  })
})


function openAccordions(openAcc){
  openAcc.classList.toggle('is-open')
  // console.log('hi')
}
