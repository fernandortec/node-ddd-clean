import { describe, expect, it } from "bun:test";
import { AnswerQuestionUseCase } from "./answer-question";

describe("Answer question use case", () => {
	it("should create an answer with the provided content", () => {
		const answerQuestionUseCase = new AnswerQuestionUseCase();

		const answer = answerQuestionUseCase.execute({
			content: "This is a great question",
			instructor: "John Doe",
			questionId: "1234",
		});

		expect(answer.content).toEqual("This is a great question");
	});
});
