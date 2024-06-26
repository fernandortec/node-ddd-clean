import { randomUUID } from "node:crypto";

export class Question {
	constructor(
		public content: string,
		public authorId: string,
		public title: string,
		public id: string = randomUUID(),
	) {}
}
