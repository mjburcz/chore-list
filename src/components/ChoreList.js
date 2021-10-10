import React from "react";
import Chore from "./Chore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ChoreList(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>To Do</h2>
            {props.choreList.map((chore) => {
              return (
                <ul key={chore.id}>
                  {!chore.complete && (
                    <Chore chore={chore} handleToggle={props.handleToggle} />
                  )}
                </ul>
              );
            })}
          </Col>
          <Col>
            <h2>Completed</h2>
            {props.choreList.map((chore) => {
              return (
                <ul key={chore.id}>
                  {chore.complete && (
                    <Chore chore={chore} handleToggle={props.handleToggle} />
                  )}
                </ul>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
