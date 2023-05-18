import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Spinner() {
    const antIcon = (
        <LoadingOutlined
            style={{
                color: "white",
                fontSize: "30px",
            }}
            spin
        />
    );
    return <Spin indicator={antIcon} />;
}

export default Spinner;
