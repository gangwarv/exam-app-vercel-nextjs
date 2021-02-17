import dynamic from "next/dynamic";
import LoadingList from "../../components/loading/loading-list";
import React from "react";
import { Header, Tab } from "semantic-ui-react";
import Layout from "../../components/layout";

const LoadComponents = dynamic(() => import("../../components/exam-set"), {
  loading: () => <LoadingList />,
});

const panes = [
  {
    menuItem: "Published Exams",
    render: () => (
      <Tab.Pane attached={false}>
        <LoadComponents />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "My Exam Collection",
    render: () => (
      <Tab.Pane attached={false}>
        <LoadComponents />
      </Tab.Pane>
    ),
  },
];

export default function ExamSets() {
  return (
    <Layout>
      <Header as="h1">My Exams Collection</Header>
      <Tab menu={{ pointing: true }} panes={panes} />
    </Layout>
  );
}
// export default
