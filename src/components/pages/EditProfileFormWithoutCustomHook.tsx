import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { EditProfileForm } from '../organisms/EditProfileForm';

interface EditProfileFormValues {
  name: string;
  email: string;
  username: string;
  websiteUrl: string;
  location: string;
  bio: string;
}

export const EditProfileFormWithoutCustomHook = () => {
  const [values, setValues] = useState<EditProfileFormValues>({
    name: '',
    email: '',
    username: '',
    websiteUrl: '',
    location: '',
    bio: '',
  });

  const handleValueChange =
    (key: keyof EditProfileFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prevValues) => ({
        ...prevValues,
        [key]: e.target.value,
      }));
    };

  return (
    <Page>
      <EditProfileForm
        formTitle="Edit Profile"
        nameLabel="name"
        emailLabel="email"
        usernameLabel="username"
        websiteUrlLabel="websiteUrl"
        locationLabel="location"
        bioLabel="bio"
        onNameChange={handleValueChange('name')}
        onEmailChange={handleValueChange('email')}
        onUsernameChange={handleValueChange('username')}
        onWebsiteUrlChange={handleValueChange('websiteUrl')}
        onLocationChange={handleValueChange('location')}
        onBioChange={handleValueChange('bio')}
        {...values}
      />
    </Page>
  );
};

const Page = styled.div`
  padding: 16px;
`;
