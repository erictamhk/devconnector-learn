import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card card-body bg-info text-white mb-3">
            <div class="row">
              <div class="col-4 col-md-3 m-auto">
                <img class="rounded-circle" src={profile.user.avatar} alt="" />
              </div>
            </div>
            <div class="text-center">
              <h1 class="display-4 text-center">{profile.user.name}</h1>
              <p class="lead text-center">
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (
                  <span>{profile.location}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    class="text-white p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i class="fas fa-globe fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    class="text-white p-2"
                    href={profile.social.twitter}
                    target="_blank"
                  >
                    <i class="fab fa-twitter fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    class="text-white p-2"
                    href={profile.social.facebook}
                    target="_blank"
                  >
                    <i class="fab fa-facebook fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    class="text-white p-2"
                    href={profile.social.linkedin}
                    target="_blank"
                  >
                    <i class="fab fa-linkedin fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    class="text-white p-2"
                    href={profile.social.instagram}
                    target="_blank"
                  >
                    <i class="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
