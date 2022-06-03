import {
  useState,
  useCallback,
  useMemo,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import styled from '@emotion/styled/macro';

import { TextFieldWithLabel } from '../../molecules/TextFieldWithLabel';

interface EditProfileFormValues {
  name: string;
  email: string;
  username: string;
  websiteUrl: string;
  location: string;
  bio: string;
}

interface EditProfileFormProps {
  formTitle?: string;
  name?: string;
  nameLabel?: string;
  onNameChange?: ChangeEventHandler<HTMLInputElement>;
  email?: string;
  emailLabel?: string;
  onEmailChange?: ChangeEventHandler<HTMLInputElement>;
  username?: string;
  usernameLabel?: string;
  onUsernameChange?: ChangeEventHandler<HTMLInputElement>;
  websiteUrl?: string;
  websiteUrlLabel?: string;
  onWebsiteUrlChange?: ChangeEventHandler<HTMLInputElement>;
  location?: string;
  locationLabel?: string;
  onLocationChange?: ChangeEventHandler<HTMLInputElement>;
  bio?: string;
  bioLabel?: string;
  onBioChange?: ChangeEventHandler<HTMLInputElement>;
}

export const EditProfileForm = ({
  formTitle,
  name,
  nameLabel,
  onNameChange,
  email,
  emailLabel,
  onEmailChange,
  username,
  usernameLabel,
  onUsernameChange,
  websiteUrl,
  websiteUrlLabel,
  onWebsiteUrlChange,
  location,
  locationLabel,
  onLocationChange,
  bio,
  bioLabel,
  onBioChange,
}: EditProfileFormProps) => {
  return (
    <Form>
      <h3>{formTitle}</h3>
      <TextFieldWithLabel
        label={nameLabel}
        value={name}
        onChange={onNameChange}
      />
      <TextFieldWithLabel
        label={emailLabel}
        value={email}
        onChange={onEmailChange}
      />
      <TextFieldWithLabel
        label={usernameLabel}
        value={username}
        onChange={onUsernameChange}
      />
      <TextFieldWithLabel
        label={websiteUrlLabel}
        value={websiteUrl}
        onChange={onWebsiteUrlChange}
      />
      <TextFieldWithLabel
        label={locationLabel}
        value={location}
        onChange={onLocationChange}
      />
      <TextFieldWithLabel label={bioLabel} value={bio} onChange={onBioChange} />
    </Form>
  );
};

const Form = styled.form`
  padding: 24px;
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;

export const useEditProfileForm = () => {
  const [editProfileFormValues, setEditProfileFormValues] =
    useState<EditProfileFormValues>({
      name: '',
      email: '',
      username: '',
      websiteUrl: '',
      location: '',
      bio: '',
    });

  const handleEditProfileFormValueChange =
    (key: keyof EditProfileFormValues) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setEditProfileFormValues((prevValues) => ({
        ...prevValues,
        [key]: e.target.value,
      }));
    };

  const labels = useMemo(
    () => ({
      nameLabel: 'name',
      emailLabel: 'email',
      usernameLabel: 'username',
      websiteUrlLabel: 'websiteUrl',
      locationLabel: 'location',
      bioLabel: 'bio',
    }),
    []
  );

  return {
    formTitle: 'Edit Profile',
    labels,
    handleEditProfileFormValueChange,
    editProfileFormValues,
    setEditProfileFormValues,
  };
};
