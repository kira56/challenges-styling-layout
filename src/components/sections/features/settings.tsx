import React from "react";
import styled from "styled-components";
import Icon from "../../snippets/icons/icon";

const settings = [
  {
    title: "Upload files",
  },
  {
    title: "Upload folder",
  },
  {
    title: "New folder",
  },
  {
    title: "More",
  },
];

const Settings = () => {
  return (
    <SettingList>
      {settings.map((item, index) => (
        <SettingsItem key={index}>
          <Icon border={true} borderColor="#fff" /> <p>{item.title}</p>
        </SettingsItem>
      ))}
    </SettingList>
  );
};

export default Settings;

const SettingList = styled.ul`
  background-color: #464c61;
  padding: 20px 15px;

  & > * + * {
    padding-top: 10px;
  }
`;

const SettingsItem = styled.li`
  display: flex;
  align-items: center;

  p {
    transform: translateX(-10px);
    color: #bec0c8;
    font-size: 14px;
  }
`;
