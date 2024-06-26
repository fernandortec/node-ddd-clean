import { Answer } from "../entities/answer";
import type { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
	instructor: string;
	questionId: string;
	content: string;
}

export class AnswerQuestionUseCase {
	constructor(private answersRepository: AnswersRepository) {}

	async execute({
		content,
		instructor,
		questionId,
	}: AnswerQuestionUseCaseRequest): Promise<Answer> {
		const answer = new Answer(content, instructor, questionId);

		await this.answersRepository.create(answer);

		return answer;
	}
}
