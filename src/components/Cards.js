import growTogether from "../images/illustration-grow-together.svg";
import flowingConversation from "../images/illustration-flowing-conversation.svg";


import React from "react";

export default function Cards() {
  return (
    <div className="cards mt-5 mb-5">
      <div className="container">
        <div className="media-card">
          <div className="icon mt-4 mb-4">
            <img src={growTogether} alt="" />
          </div>
          <div className="text mt-4 mb-4">
            <h2 className="fw-600 mb-3">Grow Together</h2>
            <p className="fw-400">Genarate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
          </div>
        </div>
        <div className="media-card">
          <div className="icon mt-4 mb-4">
            <img src={flowingConversation} alt="" />
          </div>
          <div className="text mt-4 mb-4">
            <h2 className="fw-600 mb-3">Flowing Conversations</h2>
            <p className="fw-400">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
          </div>
        </div>
        <div className="media-card">
          <div className="icon mt-4 mb-4">
            <img src={growTogether} alt="" />
          </div>
          <div className="text mt-4 mb-4">
            <h2 className="fw-600 mb-3">Your Users</h2>
            <p className="fw-400">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
