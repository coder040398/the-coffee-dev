import React, { Fragment, useEffect } from "react";
import { Row, Col, Card, Timeline } from "antd";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";
import { useTranslation } from "react-i18next";
import GoogleFontLoader from "react-google-font-loader";
import {
  SettingFilled,
  ClockCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import "../fontawesome/css/all.css";
import "./style.css";

export default function About() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "About", sideBarMenuKey: "1" },
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
              {t("ABOUT")}
            </h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title={t("SUMMARY")}
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <p>
                <i class="fas fa-check-circle" /> {t("SUMMARY_1")}
              </p>
              <p>
                <i class="fas fa-check-circle" /> {t("SUMMARY_2")}
              </p>
              <p>
                <i class="fas fa-check-circle" /> {t("SUMMARY_3")}
              </p>
              <p>
                <i class="fas fa-check-circle" /> {t("SUMMARY_4")}
              </p>
              <p>
                <i class="fas fa-check-circle" /> {t("SUMMARY_5")}
              </p>
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title={t("WORK_EXPERIENCE")}
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Timeline mode="left" style={{ marginTop: 100 }}>
                <Timeline.Item
                  label={t("January_2021")}
                  dot={<SyncOutlined spin style={{ fontSize: "22px" }} />}
                >
                  NCCSoft
                  <h4>FullStack Developer</h4>
                  <h5>
                    JavaScript ES6, ReactJS, NodeJS, AWS, DynamoDB, PouchDB,
                    SCSS, LESS
                  </h5>
                </Timeline.Item>
                <Timeline.Item
                  label={t("July_2020")}
                  dot={<ClockCircleOutlined style={{ fontSize: "22px" }} />}
                >
                  CMC Global
                  <h4>Fresher Java</h4>
                  <h5>JavaCore, SpringBoot, MongoDB</h5>
                </Timeline.Item>
                <Timeline.Item
                  label={t("April_2020")}
                  dot={<ClockCircleOutlined style={{ fontSize: "22px" }} />}
                >
                  FPT Software
                  <h4>Java Internship</h4>
                  <h5>JavaCore, MySQL, HTML, CSS</h5>
                </Timeline.Item>
              </Timeline>
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title={t("EDUCATION")}
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <Timeline mode="left" style={{ marginTop: 100 }}>
                <Timeline.Item
                  label={t("August_2016")}
                  dot={
                    <ClockCircleOutlined spin style={{ fontSize: "16px" }} />
                  }
                >
                  University of Economic and Technical for Industries
                  <h4>Faculty of Information Technology</h4>
                </Timeline.Item>
                <Timeline.Item
                  label={t("August_2019")}
                  dot={
                    <ClockCircleOutlined spin style={{ fontSize: "16px" }} />
                  }
                >
                  Java Master Center
                  <h4>JavaCore</h4>
                  <h5>Knowledge about Java Programming, JDBC, MySQL</h5>
                </Timeline.Item>
                <Timeline.Item
                  label={t("November_2019")}
                  dot={
                    <ClockCircleOutlined spin style={{ fontSize: "16px" }} />
                  }
                >
                  Java Master Center
                  <h4>JavaCore</h4>
                  <h5>Knowledge about Java Web (JSP - Servlet)</h5>
                </Timeline.Item>
                <Timeline.Item
                  label={t("January_2020")}
                  dot={
                    <ClockCircleOutlined spin style={{ fontSize: "16px" }} />
                  }
                >
                  Java Master Center
                  <h4>JavaCore</h4>
                  <h5>Knowledge about Spring MVC Framework, Springboot</h5>
                </Timeline.Item>
              </Timeline>
            </Card>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title={t("CONTACT")}
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold" }}
              style={{ width: "100%" }}
            >
              <p>
                <i class="far fa-calendar-minus"></i> 04/03/1998
              </p>
              <p>
                <i class="fas fa-phone-alt"></i> 034.456.4010
              </p>
              <p>
                <i class="fas fa-envelope"></i> coder040398@gmail.com
              </p>
              <p>
                <i class="fab fa-facebook-square"></i>{" "}
                <a href="https://www.facebook.com/caro.dev.404/">Facebook</a>
              </p>
              <p>
                <i class="fab fa-linkedin"></i> <a href="/">LinkedIn</a>
              </p>
              <p>
                <i class="fab fa-github-square"></i> <a href="/">GitHub</a>
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> B11 Kim Lien, Dong Da,
                Hanoi
              </p>
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              title={t("HOBBIES")}
              bordered={false}
              headStyle={{ fontWeight: "bold", fontSize: 20 }}
              bodyStyle={{
                backgroundColor: "#ECECEC",
                fontWeight: "bold",
                paddingBottom: 131.5,
              }}
              style={{ width: "100%" }}
            >
              <p>
                <i class="fas fa-book-open"></i> {t("READING_BOOKS")}
              </p>
              <p>
                <i class="fas fa-dumbbell"></i> {t("PLAYING_SPORT")}
              </p>
              <p>
                <i class="fas fa-language"></i> {t("STUDY_LANGUAGE")}
              </p>
              <p>
                <i class="fas fa-headphones"></i> {t("LISTENING_TO_MUSIC")}
              </p>
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
