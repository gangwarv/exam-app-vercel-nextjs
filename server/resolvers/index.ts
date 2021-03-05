import { db } from '../../src/store'
const sleep = (ms, data) => new Promise((res) => {
  setTimeout(() => res(data), ms)
})
export const resolvers = {
  Query: {
    exams: async (_, args, context, info) => {
      // console.log('operation', await context.getAuth())
      return sleep(2000, db.exams)
    },
    exam: async (_, { id }) => {
      // console.log('operation', await context.getAuth())
      return sleep(2000, db.exams.find(x => x.exam_id == id))
    },
    users: () => {
      return sleep(1000, db.users);
    },
    user: (_, { id }) => {
      return sleep(1000, db.users.find((x) => x.id == id));
    },
    images: (_, { searchText }) => {
      return ["pexels-cvsv-197293.jpg", "pexels-george-becker-374918.jpg", "pexels-jess-bailey-designs-743986.jpg", "pexels-manuel-geissinger-325223.jpg", "pexels-nastyasensei-335393.jpg", "pexels-nothing-ahead-4440715.jpg", "pexels-pixabay-208674.jpg", "pexels-pixabay-256417.jpg", "pexels-pixabay-33153.jpg", "pexels-pixabay-373543.jpg", "pexels-pixabay-53621.jpg", "pexels-pixabay-60582.jpg", "pexels-tima-miroshnichenko-6615076.jpg"].map(x =>
        // "https://exam-next-app-wyawd.mongodbstitch.com/img/"
        "http://localhost/uploads/"
        + x)
    }
  },
};
