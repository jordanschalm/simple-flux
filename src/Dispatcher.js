/**
	@class Dispatcher - Handles dispatching actions to registered callbacks.
	Provides hooks for registering a callback for an action and accepting new
	actions to be dispatched.
**/
class Dispatcher {
	constructor () {
		this.subscribers = new Map();
	}

	/**
		@method set - Initializes the dispatcher with a set of app actions.
		@param actions {...String} - The set of dispatchable actions. Before
		dispatching an action, it must be registered with this method.
	**/
	set (...actions) {
		(actions || []).forEach(a => {
			if (!this.subscribers.has(a)) {
				this.subscribers.set(a, new Set());
			}
		});
	}

	/**
		@method clear - Resets the contents of the store.
	**/
	clear () {
		this.subscribers = new Map();
	}

	/**
		@method register - Registers a callback to a particular action. When the
		action is dispatched, the callback will be called with the action payload.
		@param action {String} - The name of the action to subscribe to.
		@param callback {Function} - The function to call when the action is dispatched.
	**/
	register (action, callback) {
		if (!this.subscribers.has(action)) {
			throw new Error(`Cannot register for nonexistant action, ${action}.`);
		}
		this.subscribers.get(action).add(callback);
	}

	/**
		@method dispatch - Dispatches an action by invoking each callback subscribed
		to the action with the given payload.
		@param action {String} - The name of the action to dispatch.
		@param payload {Object} - What to pass as parameter to subscribed callbacks.
	**/
	dispatch (action, payload) {
		if (!this.subscribers.has(action)) {
			throw new Error(`Cannot dispatch nonexistant action, ${action}.`);
		}
		this.subscribers.get(action).forEach(cb => cb(payload));
	}
}

export default new Dispatcher();
