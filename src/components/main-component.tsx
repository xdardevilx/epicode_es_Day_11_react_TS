import { Col, Container, Row } from "react-bootstrap"
import CardComponent from "./card-component"
import {Article} from '../assets/interface/generic-article';
import { useEffect, useState } from 'react';
import getArticleAPI from "../data/get-article-API";


const MainComponent=()=>{
    const [articles, setArticles] = useState<Article[]>([]);

useEffect(() => {
   const fetchData= async ()=>{
 const data = await getArticleAPI()
//  console.log("testData",data)
  setArticles(data)
   }
   fetchData()
   

},[])
    return(
        <>
        <h1>Leggi qui le più importanti notizie per lo spazio</h1>
        <Container>
            <Row>
                {articles.map((article: Article, index)=>{

               return <Col key={index} md={4}>
                <CardComponent article = {article}/>                
                </Col>
                })}
            </Row>
        </Container>
        </>
    )
}

export default MainComponent