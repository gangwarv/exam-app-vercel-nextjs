import { Exam, User, ExamPublished, Question } from "../../types"

interface IDatabase {
    // users: User[],
    // exams: Exam[],
    // exams_published: ExamPublished[]
}
const questions: Question[] = [
    {
        ques_id: '1',
        text: 'What is SEO?',
        type: 'Objective',
        opt_set: ['SEO', 'Xcd', 'Other'],
        ans_set: [0]
    },
    {
        ques_id: '2',
        text: 'What is related to programming?',
        type: 'Objective',
        opt_set: ['var', 'Wrench', 'try catch', 'spoon'],
        ans_set: [0,2]
    },
    {
        ques_id: '3',
        text: 'Where is Noida?',
        type: 'Subjective',
        ans_text:"A City in Uttar Pradesh."
    }
]
class Database implements IDatabase {
    get exams() {
        return [
            {
                id: '1',
                title: 'Computer numerical Analysis',
                sub_title: "for BCA students"
            },
            {
                id: '2',
                title: 'Computer based Numerical Analysis',
                sub_title: "for software engineering students"
            },
            {
                id: '3',
                title: 'Digital Marketing',
                sub_title: "A guide for writing great content"
            },
            {
                id: '4',
                title: 'Content Writing',
                sub_title: "Content wrting guide"
            },
            {
                id: '5',
                title: 'Full stack developer quiz',
                sub_title: "A complete fullstack developer guide"
            },
        ]
            .map((e, i): Exam => {
                return {
                    ...e,
                    exam_id: e.id,
                    img:"/img/item-square.jpg",//"/img/item-square.jpg" "img/item.jpg"
                    questions,
                    topics:[
                        "Use Python for Data Science and Machine Learning",
                        "Use Spark for Big Data Analysis",
                        "Implement Machine Learning Algorithms",
                        "Learn to use Pandas for Data Analysis",
                        "Use Plotly for interactive dynamic visualizations"
                    ],
                    description:'By default, repeated lines will appear varied in width. However, it may be useful to specify an exact length to make it match up with content more effectively.',
                    creator: i < 2 ? this.users[0] : this.users[1]
                }
            });
    }


    get users() {
        return [{
            id: '1',
            name: 'Vishal'
        }, {
            id: '2',
            name: 'Manvi'
        }];
    }

    get images(){
        return  ["pexels-cvsv-197293.jpg", "pexels-george-becker-374918.jpg", "pexels-jess-bailey-designs-743986.jpg", "pexels-manuel-geissinger-325223.jpg", "pexels-nastyasensei-335393.jpg", "pexels-nothing-ahead-4440715.jpg", "pexels-pixabay-208674.jpg", "pexels-pixabay-256417.jpg", "pexels-pixabay-33153.jpg", "pexels-pixabay-373543.jpg", "pexels-pixabay-53621.jpg", "pexels-pixabay-60582.jpg", "pexels-tima-miroshnichenko-6615076.jpg"].map(x =>
             "https://exam-next-app-wyawd.mongodbstitch.com/img/"
            //"http://localhost/uploads/"
            + x)
    }
}


export const db = new Database();