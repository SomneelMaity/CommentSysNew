import "./CommentSection.css";
const CommentSection = () => {
  return (
    <div className="comment-section">
      <div className="comment-section-header">
        <div className="comment-count">Comments(3)</div>
        <ul className="tabs">
          <li className="tab-item active-tab">Latest</li>
          <li className="tab-item">Popular</li>
        </ul>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Hi @Jo" />
        <button className="send-button">Send</button>
      </div>
      <div className="formatting-options">
        <button>
          <b className="B">B</b>
        </button>
        <button>
          <i className="I">I</i>
        </button>
        <button>
          <u className="U">U</u>
        </button>
        <button>
          <img
            className="attachment"
            src="https://s3-alpha-sig.figma.com/img/0564/312d/7d88600b4b3537b759fbddd90314763d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZiUx2PVXl~Ew9IaLcpD5ottT7d7Cnl3Yuv4ix6bCTNekHJJhemM9NUi5RUjzPg0ndql1z-Mj~Ev0c6W7~k9ZzbN3d8weCHOG0Hudh3rp1g1uTKE45Q1oIFi1qmQw-Ks8zaFPpufVFbJflTldwUgvJmVTrYkR0GQQlotk-RgxYFPa7dm2WVIi~JkiLLlmNQsN8~wN1f9K2QZHzEgksoZLO1SKejgcPb1yZVTZYuS-82vJDhpx3oansosWFy7dT5U3N~IJFX9E7BG7lqte~Ql442ou2CY0Vs0V6ua5ZVOy8P1ZPYagUOc6mHTM1nk6sB2M1abZBeMR4Rv21H0ppPjMNA__"
            alt=""
          />
        </button>
      </div>
      {/* Comment List */}
      <br />
      <br />
      <br />
      <div className="user-comment-section">
        <div className="user-profile">
          <img
            className="user-profile-image"
            src="https://s3-alpha-sig.figma.com/img/23fc/429e/4a3c3278f934025379eb971ac47d1d04?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kY4B-sj7sKlPMCyNGto89fCPxTqYNmKxh~J8RCL~ilrhpxVfB8OsXR3r8tANTMoobjo6RPQLcdN6JN2xD4Q4hAhSmp1vh9r3IXocdhQniq7ZExUXHHCFfmXg115FD9G7VooGza~c-kG9qh0jebpqKsAznqTG3sA1PvOtSi9QiGjgrBZVUnhbiqHXu1voFF4gMH0jppC~BOtnP99uCI4QW7zoPCQUQ3X-xH3crO2r~y8wu-jRXQuggu~wq7BU6b7KBpVis3hseYPVxCYDrfJFkMnpNykW7I25KHClmiTiAFWlBbiECoK5d6Ay8n5KMC~6psXFaIBK3q9aGSte~~~zhg__"
            alt=""
          />
          <h5 className="user-profile-name">Floyd Miles</h5>
        </div>
        <br />

        <p className="user-profile-comment">
          Actually, now that I try out the links on my message, above, none of
          them take me to the secure site. Only my shortcut on my desktop, which
          I created years ago.
        </p>
        <div className="user-comment-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/97a8/58ce/40dab0455e055bbc4ef1bb69c5679c8c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E07l-0Yx4otn1SWIZG9-DftDK4EBFqVHsb8Ca-2zx0eFbKo9TKjlXnghwhYIBxd2fPn5NnueKBW8PDA9FSXtVMN9VZfgIO8huJrxb00jf4XsvI3M25PGkaMnTAU8jG-zt6QufysPTgjvTjyccOCPI8heNLNwOMwqxP7KO1xYakGKdzJ4jdvMG8iTNP~z~NOH8aDJJpOfcOp2mvATWXTygl8Pq4IjjRAmdtELTrYtmUecznGl~Goc7OTpPOWrxFeb-z-HdPu7ECFDvErm5DibybeCvvPl6LFcCgi~O7IIY0osde8pvGsLBIH-KJJkQA5tXsN4-7jOD5pIKd1KvoQprA__"
            alt=""
          />
        </div>
        <div className="user-profile-emojis">
          <img
            className="user-profile-smiley"
            src="https://s3-alpha-sig.figma.com/img/f3b6/57f5/77940ef5a44b369ec1baff37e7c40115?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOAN4MRggmcOH0-X82xW5rz2YtMBNcYyJya7qZ3CgIZ0XbpHTRCA5KZj0L1xstN7TMmKAK3COPDIn-rnXabC-po-BpIOE3leVUDTMO8tXJJd5EsURO24bHq0uZ5zA8IqZDhV~jCvUq3c75n7UzM8nA7KSA2zOMKBoiQwvJ3SVpquoAKMUUqMGFGnB~50HfO81e5uz4hkcSy6m27jRa~vEXtVApRuk-cBi7ozA2S5F~7MdNS7s4cIw-KSJNXkDAhvkdwjhRGUPzCXFva5DpqtE4XbPOm3Ch0MVNfKlmaMdxWkbOBvvv4QwTFEfyiq4mEJvPUxfvotAKRDWblZN8nZjg__"
            alt=""
          />
          <div className="user-profile-thumb-reaction">
            <img
              className="user-profile-thumb-image"
              src="https://s3-alpha-sig.figma.com/img/cf9d/5566/b0a0fa3e59bc0fc97757a95b1736ed29?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3zcRv8YCeQZTE9uRzDheTehUWOlBc7BZzIDel6F2fuE9a0Pk23i0mpQLRcLTcT5qT2hcvL1tpRvXtHXkvdA9yp15EfIkegi6734CjP3XzfyoSpXLmkwWDsdh9GFpvLJ9GlT58mRbYKvEhRJBeIQrZBYz9XK~PWs-lqBj5w~ExqdAhzbEkc62QazgRp1TzGc3liamXb-sE43RCq03fFNPq3pNcqQA~9-ocKh7kB8JyOl5CTo9pqA2ucuTPt6jg9TqCgZCbpjBEonJa~Pf-fWR-aVOKswU59TGbEsyzJVcbUCLaT5vgHNpow5X7dzeqMt-40vWSD0JMlQgpjYFPdvqg__"
              alt=""
            />
            <p className="user-profile-thumb-count">4</p>
          </div>
          <div className="user-profile-angry-reaction">
            <img
              className="user-profile-angey-image"
              src="https://s3-alpha-sig.figma.com/img/8666/94c2/a0ea3cf45531af87c75763299f849a4e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fj8owfmayXrac02esL3K4XNO0h0MsOFufuhQD5nFCtccWHxCGHjm~jd6AqAiR2J7qyzuYIY0BfDYCkXH--EAYHACelEnpSSHSjrnE9UzDKS6orR2fV1oBgmQoyCcX2YnoBXHsIhPK0EREzk3zshLY7pcR-U7GZm~200L3fjzpF6qyTMzXpydbnjuql0ZrBhX6pJjlz5hGrpXHVdY68Y0P2noPR5msAtzZSf~Bz4MgbZq-000qLuMXdN2ifPv-YuCPxkk8-VuCq9EHWuE3fNMyynQz4OI1IH1OWUBVLdchaIklciqGJcvKDi-EmkbXJcRtcG7MVr9YLBep6-cRHjUbA__"
              alt=""
            />
            <p className="user-profile-angry-count">1</p>
          </div>
          <img
            className="user-profile-seperation-1"
            src="https://s3-alpha-sig.figma.com/img/c4d7/2aa7/7849c5307905734cbc598f76d292f375?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2BQmUhGlP6meIKkXP4v84n1MmoTqfpe7fX4fbZmH6RTUxtZW3earPlcNz5kQaNH~RzfOwAg8uDE7aPbn-F55SgchypCpnJk2qyE3Yazm8LnZCS~RwLK~cuuV1211ewpy18-G3R6Lk4IJXOjfD55hEcuhpTl4~PuHp6LcyGuWxCsyS8cG9WuzkGNAg1ngSDDvNhicecJipyNtINZVPaan7x8h8MAJeynSHogrcxyv1IsB0uT7WUFfpypk3mQ-wUEdxezM1ektCS8cXPvURe7LU087uKlHM7DI6NofNURgPzrUmhtVFQKInjS6pyi7bY3U5CSdE0dsQ3KuffpxVylxg__"
            alt=""
          />
          <p className="user-profile-reply">Reply</p>
          <img
            className="user-profile-seperation-2"
            src="https://s3-alpha-sig.figma.com/img/7a0d/9ab4/5991cbd57486bba42683fd164b5d8980?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qozxOnGyuXUXBsR5Sr1kDS1e-ypSHyqdqNYz3-ab7S2CVG2oDiYgKYwK4qBVVCsh~ByclAZ3~GoPXySRDdjBdmLKx2Kf-XVPkqDubIL4r1mRpACBivTU5E~pnJT6KOu4s8UfPGr2V63dzD9~E50I~meRg-t9l-Jkd3D5j1ccskybD8jiowKtJSEBaPrIONS79kNboiGlMiqxkOkO0Vm9D0cvbylRuSXo90v35V~XW9Is8BmOZwyrawRcmM-RBJGCfywKuJ10cQw1KPdN9WHS4CH76b6thUBtIVhexCePH-Mxf4kS2nu7bdbLw8Ao3Rmpfn3qxQb0OzuhAo3QiRR7HQ__"
            alt=""
          />
          <p className="user-profile-time">6 hour</p>
        </div>
        <br />
        <img
          className="user-profile-comment-seperation-line"
          src="https://s3-alpha-sig.figma.com/img/9829/a87f/0aa855da9cfd3267b5a69c0fbc5f467b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPyLo3Gp0sEZFiYB1jGVY59RKde09viVQfXiufUCPgQMGpJxnWHxgbiQc7LsNT3nypIC4WJYLOnxc1A~oEE-y13YT2EsW4xxN5V3jDrbVQ8fxJXDmtio~jqCbIw0zFRseAP-pxnlmM12eHAq0H9~Tm2KciiUm~5I-3puWoCXtobMXwirEDFW8NSVZsoEu8s7iLZiZNGfkg4rcAJOzZZgTKStkmq2q7DN5IyLQHODv~ykGJbXJCsgek5tYnJo8j7qpzPOnrhJEjrst2Ux6QuiUUcLvsJDvJ9CsbeLfJdX1IIkMCGS5OOQ0rc6Ln3YCyiIE0aBcLL8rxLBGQ1mEYAw8Q__"
          alt=""
        />
      </div>
      {/* Reply Section */}
      <div className="comment-post-section">
        <hr className="comment-post-section-line" />
        <div className="comment-post-section-input">
          <input className="" type="text" />
          <hr className="comment-post-section-line2" />
          <div className="comment-post-section-send">
            <div className="formatting-options">
              <button>
                <b className="B">B</b>
              </button>
              <button>
                <i className="I">I</i>
              </button>
              <button>
                <u className="U">U</u>
              </button>
              <button>
                <img
                  className="attachment"
                  src="https://s3-alpha-sig.figma.com/img/0564/312d/7d88600b4b3537b759fbddd90314763d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZiUx2PVXl~Ew9IaLcpD5ottT7d7Cnl3Yuv4ix6bCTNekHJJhemM9NUi5RUjzPg0ndql1z-Mj~Ev0c6W7~k9ZzbN3d8weCHOG0Hudh3rp1g1uTKE45Q1oIFi1qmQw-Ks8zaFPpufVFbJflTldwUgvJmVTrYkR0GQQlotk-RgxYFPa7dm2WVIi~JkiLLlmNQsN8~wN1f9K2QZHzEgksoZLO1SKejgcPb1yZVTZYuS-82vJDhpx3oansosWFy7dT5U3N~IJFX9E7BG7lqte~Ql442ou2CY0Vs0V6ua5ZVOy8P1ZPYagUOc6mHTM1nk6sB2M1abZBeMR4Rv21H0ppPjMNA__"
                  alt=""
                />
              </button>
            </div>

            <button className="comment-post-section-cancel">
              <p className="comment-post-section-cancel-text">Cancel</p>
            </button>
            <button className="send-button-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
