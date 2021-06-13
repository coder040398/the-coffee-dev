import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";
import { Row, Col, Card, Timeline } from "antd";
import { useTranslation } from "react-i18next";
import GoogleFontLoader from "react-google-font-loader";
import { ClockCircleOutlined, SettingFilled, SyncOutlined } from "@ant-design/icons";
export default function WorkExperience() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "WorkExperience", sideBarMenuKey: "3" },
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
              {t("WORK_EXPERIENCE")}
            </h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              bodyStyle={{ backgroundColor: "#ECECEC", fontWeight: "bold", paddingBottom: 150 }}
              style={{ width: "100%" }}
            >
              <Timeline mode="left" style={{marginTop: 100}}>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: "22px" }} />}
                >
                  FPT Software
                  <h3>{t('April_2020')}</h3>
                  <h4>Java Internship</h4>
                  <h5>JavaCore, MySQL, HTML, CSS</h5>
                </Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: "22px" }} />}
                >
                  CMC Global
                  <h3>{t('July_2020')}</h3>
                  <h4>Fresher Java</h4>
                  <h5>JavaCore, SpringBoot, MongoDB</h5>
                </Timeline.Item>
                <Timeline.Item
                  dot={<SyncOutlined spin style={{ fontSize: "22px" }} />}
                >
                  NCCSoft
                  <h3>{t('January_2021')}</h3>
                  <h4>FullStack Developer</h4>
                  <h5>JavaScript ES6, ReactJS, NodeJS, AWS, DynamoDB, PouchDB, SCSS, LESS</h5>
                </Timeline.Item>
              </Timeline>
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
              <SettingFilled spin /> copyright <i class="far fa-copyright" /> by Duc Linh
            </h3>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
