import styled from '@emotion/styled/macro';
import {
  EditProfileForm,
  useEditProfileForm,
} from '../organisms/EditProfileForm';

export const EditProfileFormWithCustomHook = () => {
  const {
    formTitle,
    labels,
    editProfileFormValues,
    handleEditProfileFormValueChange,
  } = useEditProfileForm();

  return (
    <Page>
      <EditProfileForm
        formTitle={formTitle}
        {...labels}
        {...editProfileFormValues}
        onNameChange={handleEditProfileFormValueChange('name')}
        onEmailChange={handleEditProfileFormValueChange('email')}
        onUsernameChange={handleEditProfileFormValueChange('username')}
        onWebsiteUrlChange={handleEditProfileFormValueChange('websiteUrl')}
        onLocationChange={handleEditProfileFormValueChange('location')}
        onBioChange={handleEditProfileFormValueChange('bio')}
      />
    </Page>
  );
};

const Page = styled.div`
  padding: 16px;
`;
