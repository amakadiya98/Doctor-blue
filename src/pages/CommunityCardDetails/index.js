import React from "react";
import "../../assets/css/communityCard.css";
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
const CommunityCardDetails = () => {
  return (
    <Layout>
      <TopBar />
      <div className="main-content-part small-content"></div>
      <div className="bottom-footer"></div>
    </Layout>
  );
};

export default CommunityCardDetails;
