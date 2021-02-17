import { useQuery, gql } from "@apollo/client";
import React, { useRef } from "react";
import { Button, Grid } from "semantic-ui-react";
import CSVEditor from "../../components/CsvEditor"; 
import Layout from "../../components/layout";
// import { jexcel as JXL } from "jexcel";

const GET_EXAMS = gql`
  query {
    exams {
      exam_id
      title
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

export default function CsvEditor() { 

  const divRef = useRef(undefined);

  function load() {
    // console.log("JSX", JXL);
    // console.log("jexcel", JXL, divRef.current);
     
  }

  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button onClick={load}>Load</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <div ref={divRef}></div>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row> 
      </Grid>
      
            <CSVEditor rows={2} columns={5} />
    </Layout>
  );
}
