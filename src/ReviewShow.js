import React from 'react'

export default class ReviewShow extends React.Component {
  render(){
    return(
      <div>
        {"Review Show Page!"}
      </div>
    )
  }
}

//you will need to fetch the specific review page here.


// componentDidMount(){
//   fetch(`http://localhost:3001/review${????}`)
//   .then(r => r.json())
//   .then(reviewObj => console.log(reviewObj)
//    this.setState({
//      currentReview: reviewObj
// })
// )
// }
