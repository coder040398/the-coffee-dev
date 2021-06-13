import React from "react";
import { useTranslation } from "react-i18next";
import { Radio } from "antd";
import ReactCountryFlag from "react-country-flag";
import "../fontawesome/css/all.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div style={{ marginBottom: 10, float: "right" }}>
      <Radio.Group
        size="small"
        name="language"
        onChange={changeLanguage}
        value={i18n.language}
      >
        <Radio value="vn">
          <ReactCountryFlag countryCode="VN" svg />
        </Radio>
        <Radio value="en">
          <ReactCountryFlag countryCode="GB" svg />
        </Radio>
        <Radio value="jp">
          <ReactCountryFlag countryCode="JP" svg />
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default LanguageSelector;
