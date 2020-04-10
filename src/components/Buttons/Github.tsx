import React from 'react';
import GitHubLogin from 'react-github-login';

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

const GithubRegisterButton = () => {
  return (
    <GitHubLogin
      clientId="ac56fad434a3a3c1561e"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GithubRegisterButton;
