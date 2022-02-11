import './styles/userCard.css'
import './styles/style.scss'
import Image from './assets/images/image-jeremy.png'

const card = `
<div class="main_card">
    <div class="main_info">
        <img src="./image-jeremy.png">
        <span class="card_report">Report for</span>
        <span class="card_jeremy">Jeremy Robson</span>
    </div>
    <div class="switcher">
        <span class="daily">Daily</span>
        <span class="weekly">Weekly</span>
        <span class="monthly">Monthly</span>
    </div>
</div>
`
const exsCard = `
<div class="cards exercise_card">
    <span>.</span>
    <div class="exs_info card_info">
        <span>Exercise</span>
    </div>
</div>
`
const workCard = `
<div class="cards work_card">
    <span>.</span>
    <div class="work_info card_info">
        <span>Work</span>
    </div>
</div>
`
const studyCard = `
<div class="cards study_card">
    <span>.</span>
    <div class="study_info card_info">
        <span>Study</span>
    </div>
</div>
`
const playCard = `
<div class="cards play_card">
    <span>.</span>
    <div class="play_info card_info">
        <span>Play</span>
    </div>
</div>
`
const socialCard = `
<div class="cards social_card">
    <span>.</span>
    <div class="social_info card_info">
        <span>Social</span>
    </div>
</div>
`
const selfCard = `
<div class="cards self_card">
    <span>.</span>
    <div class="self_info card_info">
        <span>Self Care</span>
    </div>
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
