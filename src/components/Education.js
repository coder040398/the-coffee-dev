import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";
import { Row, Col, Card, Timeline } from "antd";
import { useTranslation } from "react-i18next";
import GoogleFontLoader from "react-google-font-loader";
import { ClockCircleOutlined, SettingFilled } from "@ant-design/icons";
import "./style.css";

export default function Education() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "Education", sideBarMenuKey: "2" },
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
              {t("EDUCATION")}
            </h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ margin: " 0 10px 10px" }}>
            <Card
              bodyStyle={{
                backgroundColor: "#ECECEC",
                fontWeight: "bold",
                paddingBottom: 100,
              }}
              style={{ width: "100%" }}
            >
              <Timeline mode="alternate" style={{ marginTop: 100 }}>
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
