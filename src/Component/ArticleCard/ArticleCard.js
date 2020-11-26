import React from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap'
import classes from './ArticleCard.module.css'

const ArticleCard = (props) => {
    return (
        <Card className={classes.ArticleCard}>
        <CardImg 
          top
          width="100%"
          src="https://placeimg.com/325/180/any"
          alt="Card Image"
          className={classes.CardImg}
        />
        <CardBody className={classes.CardBody}>
          <CardTitle className={classes.CardTitle}>
            Temp title
          </CardTitle>
          <CardSubtitle className={classes.CardSubtitle}>
            <Badge className={classes.ArticleLabel}>
              Topic
            </Badge>
            <Badge className={classes.createDate}>

            </Badge>
          </CardSubtitle>
        </CardBody>
      </Card>
    )
}

export default ArticleCard