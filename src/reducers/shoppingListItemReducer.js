export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			//add logging behavor
			console.log('Current state.items length %s', state.items.length);
      console.log('Updating state.items length to %s', state.items.length + 1);
			console.log(`State.items array: ${state.items}`)
			console.log("end of click")

			return Object.assign(
				{}, state, { items: state.items.concat(state.items.length + 1)
				});

			// state.items.concat(state.items.length + 1);

		default:
			console.log('Initial state.items length: %s', state.items.length);
			return state;
	}
}
