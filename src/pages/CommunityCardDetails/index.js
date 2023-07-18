import React from "react";
import "../../assets/css/communityCard.css";
import Layout from "../../layout";
import TopBar from "../../components/TopBarNavigation";
import BGImage from "../../assets/images/suggestion-card-bg.svg";
import Like from "../../assets/images/like.svg";
import Comment from "../../assets/images/comment.svg";
import ProfImg from "../../assets/images/user.svg";
import ProfileImg from '../../assets/images/Ellipse 179.svg'
import SendButton from '../../assets/images/send.svg';

const CommunityCardDetails = () => {
  return (
    <Layout>
      <TopBar />
      <div className="main-content-part small-content">
        <img className="banner" src={BGImage} alt="bg-icon" />
        <div className="titlePart">
          <h2 className="title">
            Healthy lifestyle for diabetics Lorem Ipsum is the printing and typesetting industry.
          </h2>
          <div className="likeCount">
            <div className="textPart">
              <h3 className="text">
                51 Likes
              </h3>
            </div>
            <div className="imagePart">
              <img className="image" src={Like} alt="Like logo" />
              <img className="image" src={Comment} alt="Comment logo" />
            </div>
          </div>
        </div>
        <div className="commentSection">
          <h2 className="heading">
            Comments (23)
          </h2>
          <div className="commentPart">
            <div className="profilePart">
              <img className="profile" src={ProfImg} alt="Profile" />
            </div>
            <div className="textPart">
              <h3 className="name">
                Ella Devies
              </h3>
              <h3 className="comment">
                If it helps you trick your mind into mind into eating in a calorie Deficit, yes. Otherwise, no.
              </h3>
              <div className="bottomPart">
                <div className="leftPart">
                  <h3 className="time">
                    25 Nov, 11:25 AM
                  </h3>
                  <h3 className="LikeCount">
                    15 Likes
                  </h3>
                </div>
                <div className="rightPart">
                  <h3 className="text">
                    Reply
                  </h3>
                  <img className="image" src={Like} alt="Like Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
      <div className="leftPart">
        <img className="ProfileImg" src={ProfileImg} alt="Profile" />
      </div>
      <div className="rightPart">
        <div className="form">
          <input className="send" type="text" name="Comment" id="CommentArea" placeholder="Write a comment…" />
          <button className="sendButton">
            <img src={SendButton} alt="Send Button" />
          </button>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default CommunityCardDetails;