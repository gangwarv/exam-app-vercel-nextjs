import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Header,
  Image,
  Card,
  Button,
  Placeholder,
  Message,
  Label,
} from "semantic-ui-react";
import { Exam } from "../../types";
import Layout from "../components/layout";
import LoadingCards from "../components/loading/loading-cards";
import { db } from "../store";

const GET_EXAMS = gql`
  query {
    exams {
      exam_id
      title
      sub_title
      img
      description
      creator {
        id
        name
      }
      questions {
        ques_id
        text
        opt_set
        ans_set
      }
    }
  }
`;

export default function Explore() {
  const { loading, data, error } = useQuery<{ exams: Array<Exam> }>(GET_EXAMS);
  const [searchText, setSearchText] = useState("");
  const [exams, setExams] = useState<Array<Exam>>([]);

  useEffect(() => {
    if (data)
      setExams(
        data.exams.filter(
          (x) => x.title.toLocaleLowerCase().indexOf(searchText) > -1
        )
      );
      else setExams(db.exams)
  }, [data, searchText]);

  return (
    <Layout>
      <Message>
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy here to better service our customers. We
          recommend reviewing the changes.
        </p>
      </Message>
      <Header as="h1">Available Exams</Header>
      <Label.Group size="large">
        {Array(20)
          .fill(0)
          .map((x, i) => (
            <Link key={i} href="/">
              <Label as="a" onClick={console.log}>
                {i} Witty
                {/* {i} Witty */}
              </Label>
            </Link>
          ))}
      </Label.Group>
      <Card.Group itemsPerRow={4} doubling>
        {loading ? (
          <LoadingCards />
        ) : (
          exams.map((x) => (
            <Link href={"/exams?id=" + x.exam_id} key={x.exam_id}>
              <Card link>
                <Image size="huge" src={x.img} />
                <Card.Content>
                  <Card.Header>{x.title}</Card.Header>
                  <Card.Meta>Created By: {x.creator.name}</Card.Meta>
                  <Card.Description>{x.sub_title}</Card.Description>
                </Card.Content>
              </Card>
            </Link>
          ))
        )}
      </Card.Group>
    </Layout>
  );
}
