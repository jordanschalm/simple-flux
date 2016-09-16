# Simple Flux

## Dispatcher
The Dispatcher receives actions from action creators and handles passing payloads on to subscribed stores.

### `Dispatcher#set`
Adds a set of action names to the Dispatcher.

### `Dispatcher#clear`
Clears the set of actions and registered callbacks.

### `Dispatcher#register`
Registers a callback/action pair. When an action is called, the matching callback is invoked with the action's payload.

### `Dispatcher#dispatch`
Dispatches an action with a payload. Passes the payload to all action subscribers.

## Store
The Store keeps track of information regarding application state  and data.

### `Store#subscribe`
Subscribes a listener to the store with a callback function. Whenever the Store's state changes, the callback will be invoked.

### `Store#unsubscribe`
Unsubscribes a listener from the store.

### `Store#register`
Registers with the dispatcher a set of action handler function.

### `Store#emitChange`
Indicates to all subscribers that a state change has occurred in the store and invokes all subscribed callback functions.
