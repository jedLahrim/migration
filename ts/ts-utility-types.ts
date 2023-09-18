interface User {
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

// Usage
const partialUser: PartialUser = { name: "John" };
////////////////////////////////////////////////////////////////////////////////////////////
interface PartialUser {
    name?: string;
    age?: number;
}

type RequiredUser = Required<PartialUser>;

// Usage
const requiredUser: RequiredUser = { name: "John", age: 30 };
////////////////////////////////////////////////////////////////////////////////////////////
interface User {
    name: string;
    age: number;
}

type ReadonlyUser = Readonly<User>;

// Usage
const readonlyUser: ReadonlyUser = { name: "John", age: 30 };
// Error: Cannot assign to 'name' because it is a read-only property.
readonlyUser.name = "Jane";

////////////////////////////////////////////////////////////////////////////////////////////
type PhoneNumbers = Record<string, string>;

// Usage
const phoneBook: PhoneNumbers = {
    John: "555-1234",
    Jane: "555-5678",
};
////////////////////////////////////////////////////////////////////////////////////////////
interface User {
    name: string;
    age: number;
    email: string;
}

type UserSubset = Pick<User, "name" | "email">;

// Usage
const userSubset: UserSubset = { name: "John", email: "john@example.com" };
////////////////////////////////////////////////////////////////////////////////////////////

type Numbers = 1 | 2 | 3 | 4;
type EvenNumbers = Exclude<Numbers, 1 | 3>;

// Usage
const evenNumber: EvenNumbers = 2;
////////////////////////////////////////////////////////////////////////////////////////////
type Numbers = 1 | 2 | 3 | 4;
type OddNumbers = Extract<Numbers, 1 | 3>;

// Usage
const oddNumber: OddNumbers = 3;
////////////////////////////////////////////////////////////////////////////////////////////

type NullableString = string | null | undefined;
type NonNullString = NonNullable<NullableString>;

// Usage
const nonNullString: NonNullString = "Hello, TypeScript!";
////////////////////////////////////////////////////////////////////////////////////////////

function greet(name: string): string {
    return `Hello, ${name}!`;
}

type Greeting = ReturnType<typeof greet>;

// Usage
const message: Greeting = "Hello, John!";
////////////////////////////////////////////////////////////////////////////////////////////