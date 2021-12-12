import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Header, Image, Input, Table } from "semantic-ui-react";
import { Exam } from "../../types";
import { db } from "../store";
import LoadingList from "./loading/loading-list";


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

export default function ExamSet() {
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

  if (loading) return <LoadingList />;
  // if (loading) return <h5>Loading...</h5>;

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell verticalAlign="middle" colSpan={3}>
            <Input
              icon="search"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search...."
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {exams.map((exam) => (
          <Table.Row key={exam.exam_id}>
            <Table.Cell collapsing>
              <Header as="h4" image>
                <Image
                  src={exam.img} //"https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="large"
                />
                <Header.Content>
                  {exam.title}
                  <Header.Subheader>by: {exam.creator.name}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{exam.description}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Link href={"/my-exams/detail?id=" + exam.exam_id}>
                <Button size="small">View</Button>
              </Link>
              <Button disabled size="small">
                Public View
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
