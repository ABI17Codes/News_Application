import React from 'react'
import Card from 'react-bootstrap/Card';

const NewsItem = ({title,description,urlToImage,url}) => {
  return (
    <div className="card d-inline-block mx-3 my-2">
    <Card className="bg-dark text-light mb-3 my-3 mx-2 px-2 py-2" style={{ maxWidth: '18rem' }}>
      <Card.Img variant="top" src={urlToImage} style={{height:"190px",width:"100%"}} />
      <Card.Body>
        <Card.Title>{title.slice(0,60)}</Card.Title>
        <Card.Text>
          {description?description.slice(0,100):"No description"}
        <Card.Link href={url} target='_blank' >Read More...</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default NewsItem