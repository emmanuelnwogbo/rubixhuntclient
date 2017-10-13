import {
	GOOGLE_USER,
	FACEBOOK_USER,
	TWITTER_USER,
	GITHUB_USER
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
		case GOOGLE_USER:
			return action.payload;
		case FACEBOOK_USER:
			return action.payload;
		case TWITTER_USER:
			return action.payload;
		case GITHUB_USER:
			return action.payload;
		default:
			return state;
	}
}
