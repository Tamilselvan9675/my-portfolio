import React from "react";

const ProfilePhoto = ({
  href = "#",
  coverImage,
  titleImage,
  profileImage,
  alt = "Profile",
  height = 260,
}) => {
  const cardHeight = `${height}px`;
  const cardWidth = `${Math.round(height / 1.5)}px`;

  return (
    <>
      <style>
        {`
          .profile-card-link {
            text-decoration: none;
          }

          .profile-card {
            width: ${cardWidth};
            height: ${cardHeight};
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding: 0 28px;
            perspective: 2500px;
          }

          .profile-cover-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 16px;
          }

          .profile-wrapper {
            transition: all 0.5s;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            border-radius: 16px;
            overflow: hidden;
          }

          .profile-card:hover .profile-wrapper {
            transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
            box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
          }

          .profile-wrapper::before,
          .profile-wrapper::after {
            content: "";
            opacity: 0;
            width: 100%;
            height: 80px;
            transition: all 0.5s;
            position: absolute;
            left: 0;
            border-radius: 16px;
          }

          .profile-wrapper::before {
            top: 0;
            height: 100%;
            background-image: linear-gradient(
              to top,
              transparent 46%,
              rgba(12, 13, 19, 0.5) 68%,
              rgba(12, 13, 19) 97%
            );
          }

          .profile-wrapper::after {
            bottom: 0;
            opacity: 1;
            background-image: linear-gradient(
              to bottom,
              transparent 46%,
              rgba(12, 13, 19, 0.5) 68%,
              rgba(12, 13, 19) 97%
            );
          }

          .profile-card:hover .profile-wrapper::before,
          .profile-wrapper::after {
            opacity: 1;
          }

          .profile-card:hover .profile-wrapper::after {
            height: 120px;
          }

          .profile-title {
            width: 100%;
            transition: transform 0.5s;
          }

          .profile-card:hover .profile-title {
            transform: translate3d(0%, -45px, 100px);
          }

          .profile-character {
            width: 100%;
            opacity: 0;
            transition: all 0.5s;
            position: absolute;
            z-index: -1;
          }

          .profile-card:hover .profile-character {
            opacity: 1;
            transform: translate3d(0%, -30%, 100px);
          }
        `}
      </style>

      <a
        href={href}
        className="profile-card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="profile-card">
          <div className="profile-wrapper">
            <img src={coverImage} className="profile-cover-image" alt={alt} />
          </div>

          {titleImage && (
            <img src={titleImage} className="profile-title" alt="title" />
          )}

          <img src={profileImage} className="profile-character" alt="profile" />
        </div>
      </a>
    </>
  );
};

export default ProfilePhoto;
