import React, { useRef, useImperativeHandle } from "react";
import profilePic from "../images/profile-pic.jpg";

const Intro = React.forwardRef(
  ({ animateProfilePic, animateP1, animateP2 }, ref) => {
    const profilePicRef = useRef(),
      p1Ref = useRef(),
      p2Ref = useRef();

    useImperativeHandle(ref, () => ({
      get profilePic() {
        return profilePicRef.current;
      },

      get p1() {
        return p1Ref.current;
      },

      get p2() {
        return p2Ref.current;
      },
    }));

    return (
      <div className="section">
        <div className="slide-container" ref={profilePicRef}>
          <img
            src={profilePic}
            alt="Tan Jia Xian"
            className={`profile-pic ${
              animateProfilePic ? "slide-up" : "slide-down"
            }`}
          />
        </div>

        <div className="slide-container" ref={p1Ref}>
          <p className={animateP1 ? "slide-up" : "slide-down"}>
            I am a Jia Xian, a Year 2 Computer Science undergraduate at the
            National University of Singapore. Since young, I have always had an
            appetite and aptitude for problem-solving. I find that once I am
            hooked on to a problem, I cannot let it go until it has been solved.
            After picking up my first programming language, I found the beauty
            of programming as a medium to solve problems.
          </p>
        </div>

        <div className="slide-container" ref={p2Ref}>
          <p className={animateP2 ? "slide-up" : "slide-down"}>
            I delved into projects that involved solving problems that were near
            and dear to me. I found myself approaching these problems with the
            same tenacity as I had when I was first solving maths problems in
            primary school. There are still many problems out there in the
            world, and it is my hope that one day, I am sufficiently capable to
            solve one of them.
          </p>
        </div>
      </div>
    );
  }
);

export default Intro;
