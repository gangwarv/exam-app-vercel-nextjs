
export interface User {
    id: string;
    name: string;
    picture?: string;
}

export interface Question {
    ques_id: string;
    text: string;
    type: 'Objective' | 'Subjective' | "";
    opt_set?: Array<string>; //array set
    ans_set?: Array<number>;
    ans_text?: string;
}

/**
 * exam_id - [timestamp]             [Published - Dashboard]
 * creator_id - exam_id       [owner published by ME]
 */
export interface Exam {
    exam_id: string;
    creator_id?: string;
    img?: string;
    title: string;
    sub_title?: string;
    topics?: Array<string>;
    description?: string;
    duration?: string;
    language?: string;
    creator?: User;
    questions?: Array<Question>
}

/**
 * publish_id - [timestamp]             [Published - Dashboard]
 * user_owner - publish_id          [owner published by ME]
 */

export interface ExamPublished extends Exam {
    publish_id: string;
    shuffle_ques: boolean;
    shuffle_ans_keys: boolean;
    show_ans: boolean;
    publish_privately: boolean;
}

/**
 * publish_id - [timestamp]             [Published - Dashboard]
 * creator_id - publish_id              [Publisher - published by ME]
 * attendee_id - publish_id             [Attendee - assigned to ME]
 */
export interface ExamAttendees {
    publish_id: string;
    exam_id: string;
    attendee_id: string;
    answeres?: Array<string>;
    is_completed: boolean;
    score?: number;
}