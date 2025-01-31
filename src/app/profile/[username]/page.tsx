async function ProfilePage({ params }: { params: { username: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Username: {params.username}</div>;
}

export default ProfilePage;
