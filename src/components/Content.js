import React from 'react'
import './Content.css'
import image from '../assets/image.jpg'
function Content ({content, handleContent}) {
  return (
    <main className="main-content">
      <section className="news-cards">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="news" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Title</h3>
            <p className="card-paragraph">paragraph</p>
            <span className="card-keywords">keywords</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Content;