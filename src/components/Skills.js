import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Progress } from "antd";
import { CURRENT_COMPONENT } from "../reducers/types";
import { useTranslation } from "react-i18next";
import GoogleFontLoader from "react-google-font-loader";
import { SettingFilled } from "@ant-design/icons";
import "../fontawesome/css/all.css";
import "./style.css";
export default function Skills() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "Skills", sideBarMenuKey: "4" },
    });
  }, [dispatch]);
  return (
    <Fragment>
      <GoogleFontLoader
        fonts={[
          {
            font: "Lobster",
            weights: [400, 2000],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ backgroundColor: "black" }}>
            <h1 style={{ fontWeight: "bold", marginLeft: 10, color: "white" }}>
              {t("SKILLS")}
            </h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title="Front End"
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-html5"></i> HTML</h3>
                  <Progress percent={100} size="small" strokeColor="#52c41a" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-css3-alt"></i> CSS</h3>
                  <Progress percent={100} size="small" strokeColor="#52c41a" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-js-square"></i> JavaScript</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-react"></i> ReactJS</h3>
                  <Progress percent={80} size="small" strokeColor="#52c41a" status="active" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-bootstrap"></i> Bootstrap</h3>
                  <Progress percent={100} size="small" strokeColor="#52c41a" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-code"></i> Ant Design</h3>
                  <Progress percent={100} size="small" strokeColor="#52c41a" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-code"></i> Material UI</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
              </Row>
            </Card>
          </div>

          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title="Back End"
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-java"></i> Java</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-node-js"></i> NodeJS</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
              </Row>
            </Card>
          </div>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title="Database"
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-database"></i> SQL</h3>
                  <Progress percent={60} size="small" strokeColor="#ffd700" status="active" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-database"></i> MongoDB</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-database"></i> DynamoDB</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-database"></i> PouchDB</h3>
                  <Progress percent={70} size="small" strokeColor="#52c41a" status="active" />
                </Col>
              </Row>
            </Card>
          </div>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title="Data Platform"
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fab fa-aws"></i> Amazon Web Service</h3>
                  <Progress percent={50} size="small" strokeColor="#ffd700" status="active" />
                </Col>
              </Row>
            </Card>
          </div>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title={t("LANGUAGE")}
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-language"></i> {t('ENGLISH')}</h3>
                  <Progress percent={70} steps={50} size="small" strokeColor="#52c41a" status="active" />
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-language"></i> {t('JAPANESE')}</h3>
                  <Progress percent={50} steps={50} size="small" strokeColor="#ffd700" status="active" />
                  <h3 style={{ marginBottom: 0 }}><i class="fas fa-language"></i> {t('CHINESE')}</h3>
                  <Progress percent={30} steps={50} size="small" strokeColor="#FF0000" status="active" />
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ backgroundColor: "#E35909" }}>
            <h3
              style={{
                fontFamily: "Lobster, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                padding: 6,
                margin: 0,
              }}
            >
              <SettingFilled spin /> copyright <i class="far fa-copyright" /> by
              Duc Linh
            </h3>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
