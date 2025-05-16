export interface IQuestions {
    topicId?: number,
    id: number,
    index: number,
    text: string,
    answerType: string
}

export interface IQuizQuestions {
    id: number,
    title: string,
    imageUrl: string | null,
    description: string,
    questions: IQuestions[]
}
export const getQuizQuestions = (): IQuizQuestions | any => {
    try {
        const data = require('../constants/formAndQuestions.json');
        return data as IQuizQuestions;
    } catch (error: any) {
        console.log(`(getQuizQuestions): Error ${error.message}`);
        return error;
    }
}