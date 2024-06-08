import React from 'react'

import './Home.css'

import render from '../../assets/render.png'

const Home = () => {
  return (
    <>
      <div className="bunnerHome">

      </div>
      <div className="detail">
        <p><strong>Rhythm Quest is an upcoming 2-button rhythm platformer game currently being developed by <a id='authorLink' href="">DDRKirby(ISQ)</a>.</strong></p>
        <a href="https://rhythmquestgame.com/demo/rhythm-quest-demo.html" id='playable'>Check out a free playable demo here!</a>
        <iframe src="https://store.steampowered.com/widget/1635640/" frameborder="0" width="646" height="190"></iframe>
        <ul id='list'>
          <li>Estimated release date: "2024"</li>
          <li>Will release on Steam, mobile, itch.io, and Switch</li>
          <li>All facets of the game are handled by DDRKirby(ISQ)</li>
        </ul>
      </div>
      <div className="trailer">
        <h1>Rhytim Quest</h1>
        <iframe width="780" height='440' src="https://www.youtube.com/embed/vwtPYznqZHg?si=GcXAaRIBiAKlWIoh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="invite">
        <img src={render} alt="" />
      </div>
    </>
  )
}

export default Home