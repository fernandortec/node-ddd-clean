import { describe, expect, it } from "bun:test";
import type { Answer } from "../entities/answer";
import type { AnswersRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswersRepository: AnswersRepository = {
	create: async (answer: Answer): Promise<Answer> => answer,
};

describe("Answer question use case", () => {
	it("should create an answer with the provided content", async () => {
		const answerQuestionUseCase = new AnswerQuestionUseCase(
			fakeAnswersRepository,
		);

		const answer = await answerQuestionUseCase.execute({
			content: "This is a great question",
			instructor: "John Doe",
			questionId: "1234",
		});

		expect(answer.content).toEqual("This is a great question");
	});
});
