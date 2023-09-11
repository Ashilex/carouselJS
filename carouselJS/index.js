function createCarousel(srcArr) {

  //create html elements needed
  const libraryEntryPoint = document.getElementsByClassName('carousel-library')[0]
  let carouselExternal = document.createElement('div')
  carouselExternal.classList.add('carousel-external')
  let carouselContainer= document.createElement('div')
  carouselContainer.classList.add('carousel-container')
  carouselExternal.appendChild(carouselContainer)
  libraryEntryPoint.appendChild(carouselExternal)
  let divs = Array.from( {length:5}, function(_,i){
      let el = document.createElement('div');
      el.classList.add('slide', `c${i+1}`)
      el.id = `u${i+1}`
      let img = el.appendChild(document.createElement('img'))
      img.src = srcArr[i]
      return el;
    }
  );
  carouselContainer.append(...divs);
  let hoverLeft = document.createElement('div')
  hoverLeft.id = 'sinistra'
  let hoverRight = document.createElement('div')
  hoverRight.id = 'destra'
  carouselExternal.append(...[hoverLeft, hoverRight])
  const beltAroundPalliniDiv = document.createElement('div');
  beltAroundPalliniDiv.className = 'belt-around-pallini';
  const palliniContainerDiv = document.createElement('div');
  palliniContainerDiv.className = 'pallini-container';
  beltAroundPalliniDiv.appendChild(palliniContainerDiv);
  libraryEntryPoint.appendChild(beltAroundPalliniDiv)
  const arrowsDiv = document.createElement('div')
  arrowsDiv.className = 'arrows';
  const leftArrowImg = document.createElement('img')
  leftArrowImg.src = 'carouselJS/static/left-arrow.png'
  const rightArrowImg = document.createElement('img')
  rightArrowImg.src = 'carouselJS/static/right-arrow.png'
  arrowsDiv.appendChild(leftArrowImg);
  arrowsDiv.appendChild(rightArrowImg);
  libraryEntryPoint.appendChild(arrowsDiv);



  const possibleClassNumbers = ["c1", "c2", "c3", "c4", "c5"]

  let imageUno = document.getElementsByClassName("c1")[0]
  let imageDue = document.getElementsByClassName("c2")[0]
  let imageTre = document.getElementsByClassName("c3")[0]
  let imageQuattro = document.getElementsByClassName("c4")[0]
  let imageCinque = document.getElementsByClassName("c5")[0]

  let imgArr = [imageUno, imageDue, imageTre, imageQuattro, imageCinque]

  const palliniContainer = document.getElementsByClassName("pallini-container")[0]
  createPallini(srcArr.length)
  const pallini = document.querySelectorAll('.pallini-container div')

  let carouselCenter = 0
  function nextRight(num){
    let next
    switch (num) {
      case "c1":
        next = "c5"
        break;
      case "c2":
        next = "c1"
        break;
      case "c3":
        next = "c2"
        break;
      case "c4":
        next = "c3"
        break;
      case "c5":
        next = "c4"
        break;
    }
    return next
  }

  function nextLeft(num) {
    let next;
    switch (num) {
      case "c1":
        next = "c2";
        break;
      case "c2":
        next = "c3";
        break;
      case "c3":
        next = "c4";
        break;
      case "c4":
        next = "c5";
        break;
      case "c5":
        next = "c1";
        break;
      default:
        next = null; // Handle other cases if needed
        break;
    }
    return next;
  }

  document.addEventListener("keydown", function(event) {
    // Check if the right arrow key (→) was pressed
    if (event.key === "ArrowRight") {
      moveSlide('next')
    }
    if (event.key === "ArrowLeft") moveSlide('prev')
  });

  document.getElementById('destra').addEventListener('click', ()=>moveSlide('next'))
  document.getElementById('sinistra').addEventListener('click', ()=>moveSlide('prev'))
  leftArrowImg.addEventListener('click', ()=>moveSlide('prev'))
  rightArrowImg.addEventListener('click', ()=>moveSlide('next'))

  function moveSlide(direction) {
    direction === 'next' ? carouselCenter++ : carouselCenter--
    // document.getElementsByClassName("c1")[0].src = srcArr[carouselCenter%srcArr.length]
    for(const img of imgArr){
      let imgClass = Array.from(img.classList).find(e=> possibleClassNumbers.includes(e))
      img.classList.remove(imgClass)
      img.classList.add(direction === 'next' ? nextRight(imgClass) : nextLeft(imgClass))
    }
    if (direction === 'next') document.querySelector('.c5 img').src =
      srcArr[(carouselCenter+2) >= 0 ? (carouselCenter+2)%srcArr.length : srcArr.length+(carouselCenter+2)%srcArr.length]
    if (direction === 'prev') document.querySelector('.c1 img').src =
      srcArr[(carouselCenter-2)>=0 ?(carouselCenter-2)%srcArr.length : srcArr.length+(carouselCenter-2)%srcArr.length]
    let pallinoKeyToUpdate = carouselCenter>=0 ? carouselCenter%srcArr.length : srcArr.length+(carouselCenter%srcArr.length)
    updatePallino(document.querySelector(`[data-key="${pallinoKeyToUpdate}"]`))
  }



  function fastForward(numOfSkip){

    let slides = document.querySelectorAll('.slide')
    slides.forEach(s=>{
      s.classList.add('ff')
    })
    for(const img of imgArr){
      img.classList.add('blur')
    }

    const intervalId = setInterval(function() {
      for(const img of imgArr){
        let imgClass = Array.from(img.classList).find(e=> possibleClassNumbers.includes(e))
        img.classList.remove(imgClass)
        img.classList.add(numOfSkip>=0 ? nextRight(imgClass) : nextLeft(imgClass))
      }
    }, 110);


    setTimeout(function() {
      for (let i = 1; i <= 5; i++) {
        let img = document.querySelector(`.c${i} img`)

        let valueSrc = (carouselCenter-3+i) >= 0 ? (carouselCenter-3+i)%srcArr.length : srcArr.length+(carouselCenter-3+i)%srcArr.length
        console.log(valueSrc, srcArr[valueSrc], `.c${i} img`)
        img.addEventListener('load', (e)=>{
          console.log('ha caricato');
          e.target.parentElement.classList.remove('blur')
        })
        img.src = srcArr[valueSrc]
      }
      console.log('clear it')
      clearInterval(intervalId);

    }, 110*Math.abs(numOfSkip));

  }



  function pallinoClickHandler(event) {
    event.stopPropagation()
    console.log('event',event.currentTarget)
    const prevCarouselCenter = carouselCenter
    const pallinoSelezionato = event.target
    const pallinoSelectedNum = parseInt(pallinoSelezionato.getAttribute('data-key'))

    carouselCenter = pallinoSelectedNum
    fastForward(pallinoSelectedNum-prevCarouselCenter)
    updatePallino(pallinoSelezionato)
  }

  function updatePallino(pallino){
    pallini.forEach(p=>{
      p.classList.remove('pallino-active')
    })
    pallino.classList.add('pallino-active')
    let translateXValue = `translateX(${carouselCenter>= 0 ? -(carouselCenter%srcArr.length)*14 : -srcArr.length*14-(carouselCenter%srcArr.length)*14}px)`
    palliniContainer.style.transform = translateXValue
  }


  function createPallini(palliniNum) {
    for (let i = 0; i < palliniNum; i++) {
      const pallino = document.createElement("div")
      pallino.classList.add("pallino", "round", "pallino-inactive")
      pallino.setAttribute('data-key', `${i}`)
      if (i === 0 ) pallino.classList.add('pallino-active')
      pallino.addEventListener('click', pallinoClickHandler)
      palliniContainer.appendChild(pallino)
      palliniContainer.style.left = `${13*(palliniNum/2)}px`
    }
  }

  palliniContainer.addEventListener('click', pallinoClickHandler)

  let touchstartX = 0
  let touchendX = 0

  function checkDirection() {
    if (touchendX < touchstartX) moveSlide('next')
    if (touchendX > touchstartX) moveSlide('prev')
  }
  carouselContainer.addEventListener('swipeStart', e => {
    touchstartX = e.detail.changedTouches[0].screenX
    console.log('preso')
  })

  carouselContainer.addEventListener('swipeEnd', e => {
    touchendX = e.detail.changedTouches[0].screenX
    console.log('presa la fine')
    checkDirection()
  })

  hoverRight.addEventListener('touchstart', e=> {
    const customEvent = new CustomEvent('swipeStart', { detail: e });
    carouselContainer.dispatchEvent(customEvent)
  })

  hoverRight.addEventListener('touchend', e=> {
    const customEvent = new CustomEvent('swipeEnd', { detail: e });
    carouselContainer.dispatchEvent(customEvent)
  })
  hoverLeft.addEventListener('touchstart', e=> {
    const customEvent = new CustomEvent('swipeStart', { detail: e });
    carouselContainer.dispatchEvent(customEvent)
  })

  hoverLeft.addEventListener('touchend', e=> {
    const customEvent = new CustomEvent('swipeEnd', { detail: e });
    carouselContainer.dispatchEvent(customEvent)
  })


}
