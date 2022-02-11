import './styles/userCard.css'
import './styles/style.scss'
import Image from './assets/images/image-jeremy.png'

const card = `
<div class="main_card">
    <img src="./image-jeremy.png">
    <span class="card_report">Report for</span>
    <span class="card_jeremy">Jeremy Robson</span>
</div>
`
const workCard = `
<div class="cards work_card">
    <span>work</span>

</div>
`
const studyCard = `
<div class="cards study_card">
    <span>Study</span>

</div>
`
const playCard = `
<div class="cards play_card">
    <span>Play</span>

</div>
`
const socialCard = `
<div class="cards social_card">
    <span>Social</span>

</div>
`
const selfCard = `
<div class="cards self_card">
    <span>Self Care</span>

</div>
`
const exsCard = `
<div class="cards exercise_card">
    <span>Exercise</span>

</div>
`
const container = `
<div class='container'>   
    ${card}
    ${workCard}
    ${playCard}
    ${studyCard}
    ${exsCard}
    ${socialCard}
    ${selfCard}
</div>
`


const app = document.querySelector('#app').innerHTML += container
