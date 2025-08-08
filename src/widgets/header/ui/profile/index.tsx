import { getGoogleInfo, getYandexInfo } from "@/features/auth";
import { ProfileView } from "./profile-view";

export const Profile = () => {
  const yandex = getYandexInfo();
  const google = getGoogleInfo();

  return (
    <>
      {google && (
        <ProfileView
          avatar={google.picture}
          display_name={google?.name}
          isYandex={false}
        />
      )}
      {yandex && (
        <ProfileView
          avatar={`https://avatars.yandex.net/get-yapic/${yandex.default_avatar_id}/`}
          display_name={yandex.display_name}
          isYandex
        />
      )}
    </>
  );
};
