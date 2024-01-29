import React, { useState } from "react";
import Drawer from "../components/drawer/drawer";
import Header from "../components/header/Header";
import Order from "../components/order/Order";
import AnalyticsCard from "../components/analyticsCard/AnalyticsCard";
import Platform from "../components/top platform/Platform";
import Chart from "../components/charts/Chart";
import arrowDown from "../assets/Arrow---Down-2.png";
import "./home.css";
import Modal from "../components/modal/Modal";

function Home(props) {
  const [graphModal, setGraphModal] = useState(false);
  const [printModal, setprintModal] = useState(false);
  const [printModalData, setprintModalData] = useState(null);
  const [messagePopped, setmessagePopped] = useState(false);
  const [message, setmessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handlePrintModal(name) {
    setprintModal(!printModal);
    setprintModalData(name);
  }

  function messagePopUp(message, type) {
    setprintModal(false);
    setMessageType(type);
    setmessage(message);
    setmessagePopped(true);
  }

  return (
    <>
      <div>
        <Drawer />
        <div style={{ position: "relative", left: 61, width: "90%" }}>
          <div>
            <Header />
          </div>
          {printModal && (
            <Modal
              closeModal={() => {
                setprintModal(false);
              }}
              data={printModalData}
              message={messagePopUp}
            />
          )}
          {messagePopped && (
            <div
              style={{
                backgroundColor:
                  messageType == "success" ? "aqua" : "rgb(255, 123, 123)",
              }}
              className="analyticsMessage"
            >
              <h2 style={{ padding: "0px 1em" }}>{message}</h2>
              <button
                className="colseButton"
                onClick={() => {
                  setmessagePopped(false);
                }}
              >
                X
              </button>
            </div>
          )}
          <div className="mainDivsContainer">
            <div className="chartDiv">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>sales Trend</p>
                <div className="chartTopValues">
                  <p>Sort By:</p>
                  <div
                    style={{
                      borderRadius: 100,
                      paddingLeft: 9,
                      paddingRight: 9,
                      paddingBottom: 3,
                      border: "1px solid black",
                    }}
                  >
                    weekly
                    <a
                      href="#"
                      onClick={() => {
                        setGraphModal(!graphModal);
                      }}
                    >
                      <img
                        style={{ width: 10, paddingLeft: 5 }}
                        src={arrowDown}
                      />
                    </a>
                  </div>
                  <div
                    className="graphpopup"
                    style={{
                      display: graphModal ? "block" : "none",
                    }}
                  >
                    <a href="" style={{ color: "black", display: "block" }}>
                      daily
                    </a>
                    <a href="" style={{ color: "black", display: "block" }}>
                      weekly
                    </a>
                    <a href="" style={{ color: "black", display: "block" }}>
                      monthly
                    </a>
                  </div>
                </div>
              </div>
              <Chart />
            </div>
            <div className="analyticsCardDiv">
              <AnalyticsCard
                type="growth"
                message="Total Order"
                price="350"
                percentage="33.5%"
                iconName="icon.png"
                imageName="Group 3.png"
              />
              <AnalyticsCard
                type="loss"
                message="Total Refund"
                price="270"
                percentage="12.5%"
                iconName="icon (1).png"
                imageName="Group 3 (1).png"
              />
              <AnalyticsCard
                type="loss"
                message="Average Sales"
                price="1567"
                percentage="50.0%"
                iconName="icon (2).png"
                imageName="Group 4.png"
              />
              <AnalyticsCard
                type="growth"
                message="Total Income"
                price="$350.000"
                percentage="17.2%"
                iconName="icon (3).png"
                imageName="Group 3 (2).png"
              />
            </div>
            <div className="orderDiv">
              <Order openPrintModal={handlePrintModal} />
            </div>
            <div className="platformdiv">
              <div className="platform">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>Top Platform</p>
                  <p style={{ color: "rgb(45, 240, 38)" }}>See All</p>
                </div>
                <Platform
                  percentage={15}
                  name="Book Bazar"
                  price="$2,500,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="245" height="12" rx="6" fill="#6160DC" />
                    </svg>
                  }
                />
                <Platform
                  percentage={10}
                  name="Artisan Aisle"
                  price="$1,500,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="204.313" height="12" rx="6" fill="#54C5EB" />
                    </svg>
                  }
                />
                <Platform
                  percentage={8}
                  name="Toy Troop"
                  price="$1,800,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="122.131" height="12" rx="6" fill="#FFB74A" />
                    </svg>
                  }
                />
                <Platform
                  percentage={15}
                  name="Xstore"
                  price="$2,700,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="245" height="12" rx="6" fill="#6160DC" />
                    </svg>
                  }
                />
                <Platform
                  percentage={10}
                  name="Toys R' Us"
                  price="$5,800,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="204.313" height="12" rx="6" fill="#54C5EB" />
                    </svg>
                  }
                />
                <Platform
                  percentage={8}
                  name="Bake Bazar"
                  price="$7,200,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="122.131" height="12" rx="6" fill="#FFB74A" />
                    </svg>
                  }
                />
                <Platform
                  percentage={15}
                  name="Twitter"
                  price="$8,100,000"
                  svg={
                    <svg
                      width="452"
                      height="12"
                      viewBox="0 0 452 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="452" height="12" rx="6" fill="#F5F5F5" />
                      <rect width="245" height="12" rx="6" fill="#6160DC" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
