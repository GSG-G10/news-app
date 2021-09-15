import React from 'react'
import './Content.css'
import image from '../assets/image.jpeg'
function Content ({contents, handleContent}) {
  return (
    <main className="main-content">
      <section className="news-cards">
          {contents.map((content) => {
            const {abstract, lead_paragraph, multimedia, keywords } = content
            return (<div key={Math.random()*10} className="card">
            <div className="card-image">
              {multimedia.length !== 0 ? <img src={`https://www.nytimes.com/${multimedia[0].url}`} alt="news" /> : <img src={image} alt="news" />}
            </div>
            <div className="card-content">
              <h3 className="card-title">{abstract}</h3>
              <p className="card-paragraph">{lead_paragraph}</p>
              {keywords.length !== 0 ? <span className="card-keywords">{keywords[0].value}</span> : ''}
            </div>
          </div>)
            
          })}
        
      </section>
    </main>
  )
}

export default Content;