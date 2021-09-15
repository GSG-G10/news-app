import React from 'react'
import './Content.css'
import image from '../assets/image.jpeg'
function Content ({contents}) {
  return (
    <main className="main-content">
      <section className="news-cards">
          {contents.map((content) => {
            const {title, content: newContent, urlToImage, source } = content
            return (
              
            <div key={Math.random()*10} className="card">
            <div className="card-image">
              {urlToImage? <img src={urlToImage} alt="news" /> : <img src={image} alt="news" />}
            </div>
            <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <p className="card-paragraph">{newContent}</p>
              <span className="card-keywords">{source.name}</span> 
            </div>
          </div>
          )
            
          })}
        
      </section>
    </main>
  )
}

export default Content;