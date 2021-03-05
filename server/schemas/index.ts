import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
  }
  type Question {
    ques_id: ID
    text: String
    type: String
    opt_set: [String]
    ans_set: [Int]
    ans_text: String

  }
  type Exam {
    exam_id: ID
    img: String
    title: String
    sub_title: String
    creator: User
    description: String
    topics: [String]
    questions: [Question]
    language: String
    duration: String

  }

  type Query {
    exams: [Exam]
    exam(id: String): Exam
    users: [User]
    user(id: String): User
    images: [String!]!
  }


`;
