import React from 'react';
import '../styles/profile-photo.css';

function ProfilePhoto() {
  return (
    <div className="profile-photo-container">
      <img 
        src="/images/profile.jpg" 
        alt="Luis Jacobo Santos Roy" 
        className="profile-photo"
      />
      <div className="profile-border"></div>
    </div>
  );
}

export default ProfilePhoto;
