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
  },
};
