import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {MdArrowBackIosNew} from 'react-icons/md';

function Main() {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <small>Row header</small>
                    <section style={{'border': '1px solid blue'}}>
                        {/* <a href="#"> <MdArrowBackIosNew/> </a> */}
                        <img src="https://placeholder.pics/svg/300" alt="img"/>
                        <img src="https://placeholder.pics/svg/300" alt="img"/>
                        <img src="https://placeholder.pics/svg/300" alt="img"/>
                        <div>title</div>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>
    )
}

export default Main;