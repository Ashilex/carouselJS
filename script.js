
const srcArr = [
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693393991514-616d907f0e5e",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1621165706491-70e8be5e8080",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693920011540-dea632d99ab3",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693529831174-17595f68be87",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693762732530-4dc0a135d83a",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693735017632-dbe1a460f265",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693329901378-71b6fa9278d8",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692699141659-5fe174626380",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1569012637137-eb88c0af0508",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693483611715-1e5c235e30be",
  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693385330159-8bb735b72953",]

createCarousel(srcArr)

//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693386430285-be99f7720520",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693362287391-fc96c0e5e489",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693246346926-82f1e403cf0b",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693031262676-05efcfb6a3f3",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1523960666814-f9b47d1e9ed3",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1442507320796-a2ae07a5699d",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693185371650-389b0c6184cc",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693185424697-3561661ef479",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1510477619159-650d7b59a5ed",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1507730690594-f21182eee8b1",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682666082882-cb5d5e9fbbc7",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692976746345-175dd589f37a",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693129429390-74d619c3da60",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693074467489-cc2badba072a",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692909718694-7d92114e33e6",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692910576432-b55f8f6f1e62",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692780237521-07da67503750",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692288791154-c433868c7ddb",
//   // "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692288871120-3d5768d542e8"]
//
// const libraryEntryPoint = document.getElementsByClassName('carousel-library')[0]
//
// let carouselExternal = document.createElement('div')
// carouselExternal.classList.add('carousel-external')
//
// let carouselContainer= document.createElement('div')
// carouselContainer.classList.add('carousel-container')
// carouselExternal.appendChild(carouselContainer)
//
// libraryEntryPoint.appendChild(carouselExternal)
// let divs = Array.from( {length:5}, function(_,i){
//   let el = document.createElement('div');
//   el.classList.add('slide', `c${i+1}`)
//   el.id = `u${i+1}`
//   let img = el.appendChild(document.createElement('img'))
//   img.src = srcArr[i]
//   return el;
//   }
// );
// carouselContainer.append(...divs);
// let hoverLeft = document.createElement('div')
// hoverLeft.id = 'sinistra'
// let hoverRight = document.createElement('div')
// hoverRight.id = 'destra'
// carouselExternal.append(...[hoverLeft, hoverRight])
//
// const beltAroundPalliniDiv = document.createElement('div');
// beltAroundPalliniDiv.className = 'belt-around-pallini';
//
// const palliniContainerDiv = document.createElement('div');
// palliniContainerDiv.className = 'pallini-container';
//
// beltAroundPalliniDiv.appendChild(palliniContainerDiv);
//
// libraryEntryPoint.appendChild(beltAroundPalliniDiv)
// const arrowsDiv = document.createElement('div')
// arrowsDiv.className = 'arrows';
//
// const leftArrowImg = document.createElement('img')
// leftArrowImg.src = 'static/left-arrow.png'
//
// const rightArrowImg = document.createElement('img')
// rightArrowImg.src = 'static/right-arrow.png'
//
// arrowsDiv.appendChild(leftArrowImg);
// arrowsDiv.appendChild(rightArrowImg);
//
// libraryEntryPoint.appendChild(arrowsDiv);
//
// const possibleClassNumbers = ["c1", "c2", "c3", "c4", "c5"]
//
// let imageUno = document.getElementsByClassName("c1")[0]
// let imageDue = document.getElementsByClassName("c2")[0]
// let imageTre = document.getElementsByClassName("c3")[0]
// let imageQuattro = document.getElementsByClassName("c4")[0]
// let imageCinque = document.getElementsByClassName("c5")[0]
//
// let imgArr = [imageUno, imageDue, imageTre, imageQuattro, imageCinque]
// const palliniContainer = document.getElementsByClassName("pallini-container")[0]
// const beltPallini = document.getElementsByClassName("belt-around-pallini")[0]
// createPallini(srcArr.length)
// const pallini = document.querySelectorAll('.pallini-container div')
//
// let carouselCenter = 0
// function nextRight(num){
//   let next
//   switch (num) {
//     case "c1":
//       next = "c5"
//       break;
//     case "c2":
//       next = "c1"
//       break;
//     case "c3":
//       next = "c2"
//       break;
//     case "c4":
//       next = "c3"
//       break;
//     case "c5":
//       next = "c4"
//       break;
//   }
//   return next
// }
//
// function nextLeft(num) {
//   let next;
//   switch (num) {
//     case "c1":
//       next = "c2";
//       break;
//     case "c2":
//       next = "c3";
//       break;
//     case "c3":
//       next = "c4";
//       break;
//     case "c4":
//       next = "c5";
//       break;
//     case "c5":
//       next = "c1";
//       break;
//     default:
//       next = null; // Handle other cases if needed
//       break;
//   }
//   return next;
// }
//
// document.addEventListener("keydown", function(event) {
//   // Check if the right arrow key (→) was pressed
//   if (event.key === "ArrowRight") {
//     moveSlide('next')
//   }
//   if (event.key === "ArrowLeft") moveSlide('prev')
// });
//
// document.getElementById('destra').addEventListener('click', ()=>moveSlide('next'))
// document.getElementById('sinistra').addEventListener('click', ()=>moveSlide('prev'))
//
// function moveSlide(direction) {
//   direction === 'next' ? carouselCenter++ : carouselCenter--
//   // document.getElementsByClassName("c1")[0].src = srcArr[carouselCenter%srcArr.length]
//   for(const img of imgArr){
//     let imgClass = Array.from(img.classList).find(e=> possibleClassNumbers.includes(e))
//     img.classList.remove(imgClass)
//     img.classList.add(direction === 'next' ? nextRight(imgClass) : nextLeft(imgClass))
//   }
//   if (direction === 'next') document.querySelector('.c5 img').src =
//     srcArr[(carouselCenter+2) >= 0 ? (carouselCenter+2)%srcArr.length : srcArr.length+(carouselCenter+2)%srcArr.length]
//   if (direction === 'prev') document.querySelector('.c1 img').src =
//     srcArr[(carouselCenter-2)>=0 ?(carouselCenter-2)%srcArr.length : srcArr.length+(carouselCenter-2)%srcArr.length]
//   let pallinoKeyToUpdate = carouselCenter>=0 ? carouselCenter%srcArr.length : srcArr.length+(carouselCenter%srcArr.length)
//   updatePallino(document.querySelector(`[data-key="${pallinoKeyToUpdate}"]`))
// }
// document.addEventListener("keydown", e=>{
//   if (event.key === "b") {
//     console.log('ciao')
//     fastForward(8)
//   }
// })
//
// function fastForward(numOfSkip){
//
//   let slides = document.querySelectorAll('.slide')
//   slides.forEach(s=>{
//     s.classList.add('ff')
//   })
//   for(const img of imgArr){
//     img.classList.add('blur')
//   }
//
//   const intervalId = setInterval(function() {
//     for(const img of imgArr){
//       let imgClass = Array.from(img.classList).find(e=> possibleClassNumbers.includes(e))
//       img.classList.remove(imgClass)
//       img.classList.add(numOfSkip>=0 ? nextRight(imgClass) : nextLeft(imgClass))
//     }
//   }, 110);
//
//
//   setTimeout(function() {
//     for (let i = 1; i <= 5; i++) {
//       let img = document.querySelector(`.c${i} img`)
//
//       let valueSrc = (carouselCenter-3+i) >= 0 ? (carouselCenter-3+i)%srcArr.length : srcArr.length+(carouselCenter-3+i)%srcArr.length
//       console.log(valueSrc, srcArr[valueSrc], `.c${i} img`)
//       img.addEventListener('load', (e)=>{
//         console.log('ha caricato');
//         e.target.parentElement.classList.remove('blur')
//       })
//       img.src = srcArr[valueSrc]
//     }
//     console.log('clear it')
//     clearInterval(intervalId);
//
//   }, 110*Math.abs(numOfSkip));
//
// }
//
//
//
// function pallinoClickHandler(event) {
//   event.stopPropagation()
//   console.log('event',event.currentTarget)
//   const prevCarouselCenter = carouselCenter
//   const pallinoSelezionato = event.target
//   const pallinoSelectedNum = parseInt(pallinoSelezionato.getAttribute('data-key'))
//
//   carouselCenter = pallinoSelectedNum
//   fastForward(pallinoSelectedNum-prevCarouselCenter)
//   updatePallino(pallinoSelezionato)
// }
//
// function updatePallino(pallino){
//   pallini.forEach(p=>{
//     p.classList.remove('pallino-active')
//   })
//   pallino.classList.add('pallino-active')
//   let translateXValue = `translateX(${carouselCenter>= 0 ? -(carouselCenter%srcArr.length)*14 : -srcArr.length*14-(carouselCenter%srcArr.length)*14}px)`
//   palliniContainer.style.transform = translateXValue
// }
//
//
// function createPallini(palliniNum) {
//   for (let i = 0; i < palliniNum; i++) {
//     const pallino = document.createElement("div")
//     pallino.classList.add("pallino", "round", "pallino-inactive")
//     pallino.setAttribute('data-key', `${i}`)
//     if (i == 0 ) pallino.classList.add('pallino-active')
//     pallino.addEventListener('click', pallinoClickHandler)
//     palliniContainer.appendChild(pallino)
//     palliniContainer.style.left = `${13*(palliniNum/2)}px`
//   }
// }
//
// palliniContainer.addEventListener('click', pallinoClickHandler)
