import Store from './../src/Store';

/* eslint-disable no-undef */
describe('Store', () => {
	let testStore;

	beforeEach(() => {
		testStore = new Store();
	});

	it('should subscribe a handler to the store without throwing', () => {
		const f = () => testStore.subscribe(() => {});
		expect(f).not.toThrow();
	});

	it('should throw if the same handler is subscribed twice', () => {
		const f = () => {};
		const g = () => testStore.subscribe(f);
		testStore.subscribe(f);
		expect(g).toThrow();
	});

	it('should call a subscribed callback when emitChange is called', done => {
		const f = () => done();
		testStore.subscribe(f);
		testStore.emitChange();
	});

	it('should not call an unsubscribed callback', () => {
		const a = {f: () => {}};
		spyOn(a, 'f');
		testStore.subscribe(a.f);
		testStore.unsubscribe(a.f);
		testStore.emitChange();
		expect(a.f).not.toHaveBeenCalled();
	});

	it('should call every subscribed callback', () => {
		const a = {
			f: () => {},
			g: () => {},
			h: () => {}
		};

		Object.keys(a).forEach(b => {
			spyOn(a, b);
			testStore.subscribe(a[b]);
		});

		testStore.emitChange();
		Object.keys(a).forEach(b => expect(a[b]).toHaveBeenCalled());
	});
});
