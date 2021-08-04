const getStartedBtn = document.getElementById('btn');
const sectionOne = document.getElementById('section-one');
const sectionTwo = document.getElementById('section-two');


getStartedBtn.addEventListener('click', () => {
    sectionTwo.style.display = 'block';
    firstToSecond.restart();
    setTimeout(()=>{
        sectionOne.style.display = 'none';   
            }, 1000)
        // sectionOne.style.opacity = '0';
        // sectionTwo.style.opacity= '1';

        // sectionOne.style.display = 'none';
        
        // sectionTwo.style.display = 'block';

    })

// const cardList = document.getElementsByClassName('card');
 

// for (card of cardList) {
//     card.addEventListener('click', thirdSlideMovement(Event));
//     card.style.cursor = 'pointer';
// }
// function thirdSlideMovement(Event) {
//     console.log('event listener added');
    // var clickedCard = Event.target;
    // console.log(Event);
//     // export { clickedCard };
//     secondToThird.restart();
//     setTimeout(()=>{
//         sectionTwo.style.display = 'none';   
//             }, 1000)
// }

