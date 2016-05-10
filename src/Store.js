import Dispatcher from './Dispatcher';

/**
	@class Store - Base class for stores of application state and data. Provides
	hooks for subscribing callbacks to changes in the store's state.
**/
export default class Store {
	constructor () {
		this.subscribers = new Map();
	}

	/**
		@method subscribe - Subscribes a listener to this store.
		@param callback {Function} - The function to call when the internal state of
		the store changes.
	**/
	subscribe (callback) {
		if (this.subscribers.has(callback)) {
			throw new Error('Cannot subscribe the same callback twice.');
		}
		this.subscribers.set(callback, callback);
	}

	/**
		@method unsubscribe - Unsubscribes a listener from this store.
		@param callback {Function} - The function to be unsubscribed, used in the
		initial subscription transaction.
	**/
	unsubscribe (callback) {
		this.subscribers.delete(callback);
	}

	/**
		@method register - Registers a set of handler functions for different actions
		with the global dispatcher.
		@param handlers {Array<Array[String, Function]>} - An array of tuples containing
		the action name and the handler.
	**/
	register (handlers) {
		(handlers || []).forEach(handler => {
			Dispatcher.register(...handler);
		});
	}

	/**
		@method emitChange - Invokes the callbacks for each subscribed listener.
		This method must be called whenever the internal state changes.
	**/
	emitChange () {
		this.subscribers.forEach(cb => cb());
	}
}
