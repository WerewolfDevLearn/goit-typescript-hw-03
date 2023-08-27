class Key {
	private signature: number = Math.random();
	getSignature() {
		return this.signature;
	}
}
class Person {
	private key: Key;
	constructor(key: Key) {
		this.key = key;
	}
	getKey() {
		return this.key;
	}
}

abstract class House {
	door: boolean = false;
	protected key: Key;
	tenants: Person[] = [];
	openDoor(key: Key): void {
		if (key === this.key) {
			this.door = true;
		}
	}
	comeIn(tenant: Person): void {
		if (this.door) {
			this.tenants.push(tenant);
		}
	}
}

class MyHouse extends House {
	constructor(key: Key) {
		super();
		this.key = key;
	}
	openDoor(key: Key): void {
		super.openDoor(key);
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
