import Dispatcher from './../src/Dispatcher';

const actions = ['A', 'B'];

/* eslint-disable no-undef */
describe('Dispatcher', () => {
	let testDispatcher;

	beforeAll(() => {
		testDispatcher = Dispatcher;
	});

	beforeEach(() => {
		testDispatcher.clear();
		testDispatcher.set(...actions);
	});

	it('should throw if registering for a nonexistant action', () => {
		const f = () => testDispatcher.register('C', () => {});
		expect(f).toThrow();
	});

	it('should throw if dispatching a nonexistant action', () => {
		const f = () => testDispatcher.dispatch('C');
		expect(f).toThrow();
	});

	it('should call a registered callback when the action is dispatched', done => {
		const f = () => done();
		testDispatcher.register('A', f);
		testDispatcher.dispatch('A');
	});
});
