import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import { Row, Col, Menu, Layout, Divider } from "antd";
import About from "./About";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import avatar from "../assets/avatar.jpg";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import GoogleFontLoader from "react-google-font-loader";
const { Content } = Layout;

export default function LayoutComponent() {
  const sideBarMenuKey = useSelector(
    (state) => state.currentComponetReducer.sideBarMenuItemKey
  );

  const { t } = useTranslation();

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
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
          className="sidebar"
        >
          <LanguageSelector />
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: "60%",
              borderRadius: "100%",
              float: "right",
              marginRight: "20px",
              marginBottom: "5px",
            }}
          />
          <Divider style={{ margin: 0 }} />
          <div style={{ marginRight: 10, marginLeft: 20 }}>
            <h1
              style={{
                textAlign: "end",
                fontFamily: "Lobster, sans-serif",
                fontSize: 32,
                marginBottom: 0,
              }}
            >
              Đức Linh
            </h1>
            <h4>{t("BIO")}</h4>
          </div>
          <Menu
            selectedKeys={[sideBarMenuKey]}
            mode="inline"
            style={{ backgroundColor: "#E6E6E6", fontWeight: "bold" }}
          >
            <Menu.Item key="1">
              <NavLink to="/">{t("ABOUT")}</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/about">{t("EDUCATION")}</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/work-experience">{t("WORK_EXPERIENCE")}</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/skills">{t("SKILLS")}</NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Content style={{ padding: "0" }}>
            <div style={{ background: "#fff" }}>
              <Switch>
                <Route exact path="/the-coffee-dev/" component={About} />
                <Route exact path="/about" component={Education} />
                <Route
                  exact
                  path="/work-experience"
                  component={WorkExperience}
                />
                <Route exact path="/skills" component={Skills} />
              </Switch>
            </div>
          </Content>
        </Col>
      </Row>
    </Fragment>
  );
}
