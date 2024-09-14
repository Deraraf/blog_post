const getEmail = async () => {
  const res = await fetch("http://localhost:3000/api/emails");
  const data = await res.json();
  return data.emails;
};

const page = async () => {
  const emails = await getEmail();
  console.log({ aboutEmail: emails });
  return (
    <div>
      {emails &&
        emails.map((email) => <div key={email.email}>{email.email}</div>)}
    </div>
  );
};

export default page;
