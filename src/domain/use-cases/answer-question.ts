import { Answer } from "../entities/answer";

interface AnswerQuestionUseCaseRequest {
	instructor: string;
	questionId: string;
	content: string;
}

export class AnswerQuestionUseCase {
	execute({
		content,
		instructor,
		questionId,
	}: AnswerQuestionUseCaseRequest): Answer {
		const answer = new Answer(content, instructor, questionId);

		return answer;
	}
}
