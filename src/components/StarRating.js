import StarRatings from 'react-star-ratings';
import React , {Component} from 'react';

export default class StarRating extends Component {
    // state({rating:'5',});
    // let rating=
    constructor(props)
    {
        super(props);

            this.state = {Average:1}
            this.state = {Rate : 1}

        this.changeRating = this.changeRating.bind(this)
        this.changeNormalRating = this.changeNormalRating.bind(this)
    }

    changeRating( newRating, name ) {
        this.setState({
            Average : newRating
        });

    }

    changeNormalRating( NormalRating, name ) {
        this.setState({
            Average : NormalRating
        });

    }



    render() {
         // rating = 2;
        return (
            <>
            <StarRatings
                rating={this.state.Average}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="5px"
                name='Average'
            />

            {/*<StarRatings*/}
        {/*rating={this.state.Rate}*/}
        {/*starRatedColor="blue"*/}
        {/*changeRating={this.changeRating}*/}
        {/*numberOfStars={5}*/}
        {/*name='Rate'*/}
            {/*/>*/}
                </>
        );
    }
}
// export default class StarRating extends Component {
//     render() {
//         // aggregateRating = 2.35;
//         return (
//             <StarRatings
//                 rating={2.403}
//                 starDimension="40px"
//                 starSpacing="15px"
//             />
//         );
//     }
// }
