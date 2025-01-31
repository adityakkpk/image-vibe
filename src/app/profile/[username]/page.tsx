import { getProfileByUsername } from "@/actions/profile.action";

export async function generateMetadata({params} : { params: { username: string } }) {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `Profile: ${user.name ?? params.username}`,
    description: user.bio || `The profile of ${params.username}`,
  };

}

async function ProfilePage({ params }: { params: { username: string } }) {
  return <div>Username: {params.username}</div>;
}

export default ProfilePage;
