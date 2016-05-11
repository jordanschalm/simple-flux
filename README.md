# Simple Flux
An aptly named flux implementation.

## Dispatcher
The Dispatcher recieves actions from action creators and handles passes them on to subscribed stores.

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
Registers a set of change handler functions with the dispatcher.

### `Store#emitChange`
Indicates to all subscribers that a state change has occurred in the store and invokes all subscribed callbacks.
