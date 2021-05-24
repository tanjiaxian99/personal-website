import React from "react";
import profilePic from "../images/profile-pic.jpg";

const Intro = React.forwardRef(({ animate }, ref) => {
  return (
    <div className="section">
      <img
        src={profilePic}
        alt="Tan Jia Xian"
        className="profile-pic"
        ref={ref}
      />
      <p>
        I am a Jia Xian, a Year 2 Computer Science undergraduate at the National
        University of Singapore. Since young, I have always had an appetite and
        aptitude for problem-solving. I find that once I am hooked on to a
        problem, I cannot let it go until it has been solved. After picking up
        my first programming language, I found the beauty of programming as a
        medium to solve problems.
      </p>
      <p>
        I delved into projects that involved solving problems that were near and
        dear to me. I found myself approaching these problems with the same
        tenacity as I had when I was first solving maths problems in primary
        school. There are still many problems out there in the world, and it is
        my hope that one day, I am sufficiently capable to solve one of them.
      </p>
    </div>
  );
});

export default Intro;
