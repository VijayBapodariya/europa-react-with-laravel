/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <section className="section">
        <Container>
          <Row>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader></CardHeader>
                <div className="description">
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6" className="ml-auto">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input placeholder="Name*" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="Email*" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="Mobile Number*" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="Company Name*" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Company Website</label>
                            <Input placeholder="Company Website*" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Investment Planed</label>
                            <Input
                              placeholder="Investment Planed*"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input
                              placeholder="Details about current Business!"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col className="ml-auto" md="4">
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-square-pin" />
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at the office</h4>
                  <p>
                    Bld Mihail Kogalniceanu, nr. 8, <br />
                    7652 Bucharest, <br />
                    Romania
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-mobile" />
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p>
                    Michael Jordan <br />
                    +40 762 321 762 <br />
                    Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
