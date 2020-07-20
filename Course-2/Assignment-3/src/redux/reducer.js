import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS,
    author: '',
    rating: '',
    comment: ''
};

export const Reducer = (state = initialState, action) => {
    return state;
};