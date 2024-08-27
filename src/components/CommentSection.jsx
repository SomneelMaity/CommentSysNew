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
      <br />
      <br />
      <br />

      <div className="comment-post-other-user-section">
        <div className="Albert">
          <div className="Albert-photo-pic">
            <img
              className="Albert-Pic"
              src="https://s3-alpha-sig.figma.com/img/b27e/3cc4/05c8119fea79db85f42485ea594c7d0a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2kV17x1DaEZs2FvaivUX2wdvSruV3w2bpbZxdY8EHGyEzIXWULcwUvr3nvCrBiRdTez90ZhT2pfePrhq1UM6lWIlwqVbHnxDPN3RHUIMpr8JNfxr2AKrsBrOu-2VQdnuqTkSgNfXA5V~HRmcYSui4lS6BYsdiKIVUffFB8sU0nT~FXpoNcRXNYJKRKOQWgP378BTdeplBa1I67QL7GgFlbA7cHElnleMW-x7cz6MH5ikfGYkmimjeqDk3r-VL9wYlUkk7Bv1j8PrpyomaMn8nGUdfRgL0oc1b2ryblo-eaufECoZX1DNYNJD7pSmvyHJ0ULyiGYBLpyJxXBIKfv0A__"
              alt="Albert Flores"
            />
            <h5 className="Albert-Name">Albert Flores</h5>
          </div>
          <p className="Albert-text">
            Before installing this plugin please put back again your wordpress
            and site url back to http.
          </p>
          <div className="Albert-reactions">
            <img
              className="user-profile-smiley"
              src="https://s3-alpha-sig.figma.com/img/b3f1/3e33/3132b41c8bdc4204af0443ed3ce612aa?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T7PICkHIUTg~8oILe4x98cU3UvXoHU9oYimcM-uXJtL-3P71sD7EsZhMlJ7uKp8fUhtsIbfPQEZrUwN5DdRjL4ntI81Dpfrrl9XAZ7dJrTIthDYUiDQpQ24p9MVoQADUXU7ENC9zXk1SimkTk2Asmu9rUaptG1HU715aAIYLBjvgtVq8RsDNuWRuXxYlKOUBFi7Wa912xumzEbk1-mpO5UWvPHdNf2kEoeqGkUfsYHd8VnIT1Y-L5TpFeper1NsRq38VWiKOH-cyGE6VyBOhI7qVzotl9CdBvavyDt1OV64inGD-f6go3HPMtwqsicdhtP2KQv4qcUe93OB0IXq-hQ__"
              alt=""
            />
            <img
              className="Albert-background"
              src="https://s3-alpha-sig.figma.com/img/492b/758b/487753ef2a79bb423b94cc145b493449?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSahqcRo7x9qfW~ZjFTshyvSg9eZhWvl13lahs564ANhXEfFDwtG0ef6Bb9fNjQX4PCS8WoVD2FoN-CqEXHm8ZJ0HbP22ZdzhPJdKxRwBRyvV7AJ7bqpMxSb1a0XtGAGLeQsJWPfkhhiDfBviv9JOOASUXJbT3uMhTfATaA26HiOdFPbowJHhIS0cHQ5niU0C1PCAOVOK~30mCp5TEQ6YgCTtfhRk7j5u0HSKSsMQro-OwFh8Of-DsIdo1k~Nq7msi48d9xvvFI0zbw8mtcnUAj-o0pzNN5i3vRX3IGj7aFfCHACAhHfZjxwE6SjATD6KxDDPs85IpeKV1BKvxZ9vw__"
              alt=""
            />
            <p className="Albert-reply">Reply</p>
            <img
              className="Albert-background-2"
              src="https://s3-alpha-sig.figma.com/img/d6bc/9fe6/e85e867a9fdd7938f03ba18ca507ed2b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hanjKhxh4oDGAHjDXEHOh-aObCGAMwJWP-bH0rY4s0nLOr7KxzzvNsRLE1T6kSnG7T~2HTZM6uw3FF8pzeshXEebf6R5yjKDW8yb~L1fg9kaJMpnrC8zIG1pKdENaia6YMhJI4fSFuSXFSNH99KJgpKveVJHXoBE-Pgrn1dP-N-UQQzvAeLc4SKgnpCgNsicateH8ve6ux4p7B3tvGMtN~1mZvdhFOnCP3qT9pTxUQkzCzuI2qe9d6OTP3~qM-kBjTOXYxBVIJItfxWywSbBekIbP-dxfzM5xSApH8bNAHIveoBgl1jAvg5sPFftSc1~XD-pBENpET7-g5Fg77pcBg__"
              alt=""
            />
            <p className="Albert-time">2 min</p>
          </div>
        </div>
        <div className="Bessie">
          <div className="Bessie-photo-pic">
            <img
              className="Bessie-pic"
              src="https://s3-alpha-sig.figma.com/img/e463/ac79/ac28bdeeed970f758cac088d5e8ec6f3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcOITDimeyvFuTUvX7tfXZCdGyLFh1PLkzOKAmU1isBPaKhlsLvNzrPj04Tq~ipMcZ2-Ilv7QG6K5wMLTIDu89uqnRetfdLw7~B070TrRcGakddCBHzcf7QtRbkN4Kt5wkEEcwqEMZ5wmTTNeP2cICod~jcXVtJroyH-zlxloEYrwR9tCN54~aYtiocm79kUXbAp5DRtCQcETgi75QsdTbKN5peapzugVWWPOPF1UB~8YMgmWBRoYzz1HN7o8yCGmqNfutMaLy-3OkSdLcbCV~0K6jD8bV3e2IJEe6pBrrWmpGDTT4i3kPaCcNEbDgnDdSmMXj-3BnLAGlOiN05Ixg__"
              alt=""
            />
            <h5 className="Bessie-name">Bessie Cooper</h5>
          </div>
          <p className="Bessie-text">
            Hi Albert Flores. Thank you for your reply
          </p>
          <div className="Bessie-rections">
            <img
              className="user-profile-smiley"
              src="https://s3-alpha-sig.figma.com/img/193f/2659/baf5e670d0c5e86a6b43e6cb59435d12?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpIrDw414Irx3vwGkolkuCjPE9aXlEkaw9u-3NS7nU08X8-ZyR8sLwLxdtZoRpEBMCQDdB3dJUVwzt07UQoSK1l7xnNVBsRVII-N38mLUJ0RCms~~dKsvGVOrIoFtrDLxkj98SBr~FhVV83EjxOVgEfxHH7nsGLXmOotzXFYxJSSNQlhXL4AXusDeD7CFfsUGVfwwu~A2c-fi2ZUD~omI4wHTmXT7VkAsQm1czD-XcTfLDt6GYDSQeONmzOj5PZ~BGOLC2X9ODLAUTD66K1qDkFnn-ceUXaVSwroUwwuMYRL2QHCVyON~eI8sBNOxlALvuw27hoy7IcK17Y4F~Dnvg__"
              alt=""
            />
            <div className="Bessie-reaction-cnt">
              <img
                className="Bessie-love-emoji"
                src="https://s3-alpha-sig.figma.com/img/3c59/fd20/f34ad64080bd5079b04bf10c3b473d20?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxtpHKy6b8a3ybwDc72iBJRGD8JnwRrMOiVcV8VHLJ7fwqtAUScx7JKUjK1xh4rJbgUdibQdJmbobcxu36Q0O-Y1bWjUHfpyUlJzgTcnmNiiYDqWv73yud6BT9lnX9vsGkaqBXw7b4MFjH-uQrkLPxYNCeL~7SP-yaQtIc1RlFZ12qzNjsC8~KtH0GVdtyz07yzmiJaaxhasLhJR1GT-rTC~o0Po7zHal2hMpldtkbv0zuZrb4GmXYSBhDtAXRt042r~x13P7tqy5L8oE8r-5q5sQc9YYWEjnvHQ2OoXJuqclBz0JhFfdAAbsoR7mmG4cNFa~c7BR42RQutaIzj52g__"
                alt=""
              />
              <p className="Bessie-love-emoji-cnt">2</p>
            </div>
            <img
              className="Bessie-background"
              src="https://s3-alpha-sig.figma.com/img/64d6/51b2/95ac301044d331d370e402c90412bb4d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eb0Dcaf~CcDVUe6yAopaO0cBUVQ0bhWdhTHP6F59t5lJ9B4Sxl2gM0JtFv-fxE2BhmeTBXlFVp-ODdbKdxX~8LWkh8iwgIqA2Xhi~X03YilRAT30gyfkN~qW2kSKTvO5-91u45Am-vskpsIWdM1XJI9N~CeE1p1tg1wLnkzO78WBGfkaGF0dHLutAxMuXFv2VJm-q2nEw4q9QJ~HwPGzfN1pYgYIkTEoBDNIzi3uYzefsquNY1VD7dAC9MMz9Hg8A7AEdipN4DTeLaQlFkV7c5ws1QfLA4Xx4VvStAoz-W7cT01oNrPZ1NvgFxMC1VtNCOJGRThyJJi2wobH02aR8Q__"
              alt=""
            />
            <p className="Bessie-reply">Reply</p>
            <img
              className="Bessie-background-2"
              src="https://s3-alpha-sig.figma.com/img/c32b/3d92/1b3a0778f85e267506f1ad6afeb22d91?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJedZraAuRjWAsUj-~0V4KSrq0t0qBzFlalGr4vV-KF721DJoSb2qg87rlucqejectQk8gzI8wnFpQGKFYorIDrY2rlN9f2FK5AFAq8ueQ43KYSi3oN3zlDYJO6LRscM8LiUhdORcqo8DaMr3YqFQWqX-C6yLkOKdxX6bjztuTxC1-fv-0lc6TUlm-38-jR0Coj908a8GpRN4-UHrOwiKss6EP3E5wc5uQ3r1ebNFoKg2zzydtlVVxhh2kP2keb4E-JKI0ikxHfMrCTegYfGpSnLXsBMnJDwhFO3ZjU75EaxazFbKfW91O8W058QP~kjzNkqKBuML0e3xNOivVY2VQ__"
              alt=""
            />
            <p className="Bessie-time">18 sec</p>
          </div>
        </div>
        <div className="James">
          <div className="James-photo-pic">
            <img
              className="James-pic"
              src="https://s3-alpha-sig.figma.com/img/c9fb/605d/ffb6baa2b0780029235fa936d88963bd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsCl9Fh0IbTcb4SJ7Z8gyfuSxtHbcefP7GWYk7KfrWidyr4VDHgAMDwTzlP~ev4d5A-3vqWwVGqNYt29KRSVVuOpuALiu9y~vFfSIORK20IsLw2aM4tnH3L1MMjCskMW4WoL3g4FsEYPxxi0JFFMbwtNLtMbQl331tUfPv99ZozQ8a8l-wVfkNweHOg~3LmGafpA4oHkY~WbPABil1ReI1pErzwEsYjF2rIkowHPcHJ6hP8lc3ERCxeopn8kNL4kchwhfOyNKleitBDRxvZ3zHJLKZ8EUgdDcrPktBJC7Sii6aO4SSLvmr5uukBi1KlU-b7U31buML8ixUjJf62FXA__"
              alt=""
            />
            <h5 className="James-name">James</h5>
          </div>
          <p className="Bessie-text">
            Hi Bessie Cooper. I tried same, it is not working.
          </p>
          <div className="Bessie-rections">
            <img
              className="user-profile-smiley"
              src="https://s3-alpha-sig.figma.com/img/193f/2659/baf5e670d0c5e86a6b43e6cb59435d12?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpIrDw414Irx3vwGkolkuCjPE9aXlEkaw9u-3NS7nU08X8-ZyR8sLwLxdtZoRpEBMCQDdB3dJUVwzt07UQoSK1l7xnNVBsRVII-N38mLUJ0RCms~~dKsvGVOrIoFtrDLxkj98SBr~FhVV83EjxOVgEfxHH7nsGLXmOotzXFYxJSSNQlhXL4AXusDeD7CFfsUGVfwwu~A2c-fi2ZUD~omI4wHTmXT7VkAsQm1czD-XcTfLDt6GYDSQeONmzOj5PZ~BGOLC2X9ODLAUTD66K1qDkFnn-ceUXaVSwroUwwuMYRL2QHCVyON~eI8sBNOxlALvuw27hoy7IcK17Y4F~Dnvg__"
              alt=""
            />
            <div className="Bessie-reaction-cnt">
              <img
                className="Bessie-love-emoji"
                src="https://s3-alpha-sig.figma.com/img/3c59/fd20/f34ad64080bd5079b04bf10c3b473d20?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxtpHKy6b8a3ybwDc72iBJRGD8JnwRrMOiVcV8VHLJ7fwqtAUScx7JKUjK1xh4rJbgUdibQdJmbobcxu36Q0O-Y1bWjUHfpyUlJzgTcnmNiiYDqWv73yud6BT9lnX9vsGkaqBXw7b4MFjH-uQrkLPxYNCeL~7SP-yaQtIc1RlFZ12qzNjsC8~KtH0GVdtyz07yzmiJaaxhasLhJR1GT-rTC~o0Po7zHal2hMpldtkbv0zuZrb4GmXYSBhDtAXRt042r~x13P7tqy5L8oE8r-5q5sQc9YYWEjnvHQ2OoXJuqclBz0JhFfdAAbsoR7mmG4cNFa~c7BR42RQutaIzj52g__"
                alt=""
              />
              <p className="Bessie-love-emoji-cnt">2</p>
            </div>
            <img
              className="Bessie-background"
              src="https://s3-alpha-sig.figma.com/img/64d6/51b2/95ac301044d331d370e402c90412bb4d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eb0Dcaf~CcDVUe6yAopaO0cBUVQ0bhWdhTHP6F59t5lJ9B4Sxl2gM0JtFv-fxE2BhmeTBXlFVp-ODdbKdxX~8LWkh8iwgIqA2Xhi~X03YilRAT30gyfkN~qW2kSKTvO5-91u45Am-vskpsIWdM1XJI9N~CeE1p1tg1wLnkzO78WBGfkaGF0dHLutAxMuXFv2VJm-q2nEw4q9QJ~HwPGzfN1pYgYIkTEoBDNIzi3uYzefsquNY1VD7dAC9MMz9Hg8A7AEdipN4DTeLaQlFkV7c5ws1QfLA4Xx4VvStAoz-W7cT01oNrPZ1NvgFxMC1VtNCOJGRThyJJi2wobH02aR8Q__"
              alt=""
            />
            <p className="Bessie-reply">Reply</p>
            <img
              className="Bessie-background-2"
              src="https://s3-alpha-sig.figma.com/img/c32b/3d92/1b3a0778f85e267506f1ad6afeb22d91?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJedZraAuRjWAsUj-~0V4KSrq0t0qBzFlalGr4vV-KF721DJoSb2qg87rlucqejectQk8gzI8wnFpQGKFYorIDrY2rlN9f2FK5AFAq8ueQ43KYSi3oN3zlDYJO6LRscM8LiUhdORcqo8DaMr3YqFQWqX-C6yLkOKdxX6bjztuTxC1-fv-0lc6TUlm-38-jR0Coj908a8GpRN4-UHrOwiKss6EP3E5wc5uQ3r1ebNFoKg2zzydtlVVxhh2kP2keb4E-JKI0ikxHfMrCTegYfGpSnLXsBMnJDwhFO3ZjU75EaxazFbKfW91O8W058QP~kjzNkqKBuML0e3xNOivVY2VQ__"
              alt=""
            />
            <p className="Bessie-time">18 sec</p>
          </div>
        </div>
      </div>
      <div className="loading">
        <img className="loading-img"
          src="https://s3-alpha-sig.figma.com/img/34e6/426b/28c07f4069bdbf3dd93defe4cd9c23d1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mG31rpzf4dtXkcFyKgT~d5sYHC~b~D~Z0vyMlKJbN8Qe1y8XRg8jmfHqWZ6kEwYWt8-MXNL012pEncAzTVl79DxHnIMZTsjzL4MsBW5fuK1eI2Y2dek-VrYdh5tYH6syKD7ot~sr8Hg1-ntGb0Cmc2-WmlL0Ct4i6j4t08NTgbLGOR5SwxlzQuyP2lIELcuFGY34NsocJWYZNscGhnlCK6LpL3eZ6VvHIL4jPsqq8XHJqP8fgP7Xv~eaFuHUtcxNlnIAWIgpL0KYc7ZERC9FMCbOBwmEgGO1x9URZOfJwA4cVhFzxoqpx3H9KbDRKmMLETpgvkCbldooRNSEQA7WCw__"
          alt=""
        />
        <p className="Loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default CommentSection;
